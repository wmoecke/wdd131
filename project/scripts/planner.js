import { games } from "./games-data.js";

const form = document.querySelector("#collection-form");
const results = document.querySelector("#planner-results");
const message = document.querySelector("#form-message");
const storageKey = "pspVaultPlan";

function loadSavedPlan() {
    return JSON.parse(localStorage.getItem(storageKey));
}

function savePlan(plan) {
    localStorage.setItem(storageKey, JSON.stringify(plan));
}

function getSelectedGenres() {
    return [...form.querySelectorAll('input[name="genre"]:checked')]
        .map((checkbox) => checkbox.value);
}

function chooseGames(capacityMb, selectedGenres) {
    const matchingGames = games
        .filter((game) => selectedGenres.includes(game.genre))
        .sort((firstGame, secondGame) => firstGame.sizeMb - secondGame.sizeMb);

    const selectedGames = [];
    let usedMb = 0;

    matchingGames.forEach((game) => {
        if (usedMb + game.sizeMb <= capacityMb) {
            selectedGames.push(game);
            usedMb += game.sizeMb;
        }
    });

    return {
        selectedGames,
        usedMb,
        remainingMb: capacityMb - usedMb
    };
}

function createResults(plan) {
    if (plan.selectedGames.length === 0) {
        return `
            <div class="notice">
                <h3>No games fit the selected capacity</h3>
                <p>Choose a larger capacity or select additional genres to generate a collection.</p>
            </div>
        `;
    }

    return `
        <div class="plan-summary">
            <h3>Your suggested PSP collection</h3>
            <p>
                ${plan.selectedGames.length} games selected ·
                ${plan.usedMb.toLocaleString()} MB used ·
                ${plan.remainingMb.toLocaleString()} MB remaining
            </p>
        </div>
        <ol class="plan-list">
            ${plan.selectedGames.map((game) => `
                <li>
                    <strong>${game.title}</strong> — ${game.genre}, approximately ${game.sizeMb} MB
                </li>
            `).join("")}
        </ol>
        <p class="notice">
            File sizes are estimates for planning purposes. Actual sizes may vary by edition and format.
            Build your library from games that you legally own.
        </p>
    `;
}

function restoreForm() {
    const savedPlan = loadSavedPlan();

    if (!savedPlan) {
        return;
    }

    form.elements.capacity.value = `${savedPlan.capacityMb}`;
    form.querySelectorAll('input[name="genre"]').forEach((checkbox) => {
        checkbox.checked = savedPlan.selectedGenres.includes(checkbox.value);
    });

    results.innerHTML = createResults(savedPlan);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const capacityMb = Number(form.elements.capacity.value);
    const selectedGenres = getSelectedGenres();

    if (selectedGenres.length === 0) {
        message.textContent = "Select at least one genre before generating a collection.";
        message.className = "form-message error";
        results.innerHTML = "";
        return;
    }

    const calculation = chooseGames(capacityMb, selectedGenres);
    const plan = {
        capacityMb,
        selectedGenres,
        ...calculation
    };

    savePlan(plan);
    results.innerHTML = createResults(plan);
    message.textContent = "Your preferences were saved in this browser.";
    message.className = "form-message success";
});

restoreForm();
