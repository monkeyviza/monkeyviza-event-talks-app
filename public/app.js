document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule-container');
    const searchInput = document.getElementById('category-search');
    let fullSchedule = [];

    // Fetch schedule data from the API
    async function fetchSchedule() {
        try {
            const response = await fetch('/api/schedule');
            if (!response.ok) throw new Error('Failed to fetch schedule');
            fullSchedule = await response.json();
            renderSchedule(fullSchedule);
        } catch (error) {
            console.error('Error:', error);
            scheduleContainer.innerHTML = `<div class="loader">Error loading schedule. Please try again later.</div>`;
        }
    }

    // Render the schedule items to the DOM
    function renderSchedule(items) {
        if (items.length === 0) {
            scheduleContainer.innerHTML = `<div class="loader">No talks found matching that category.</div>`;
            return;
        }

        scheduleContainer.innerHTML = items.map(item => {
            if (item.type === 'talk') {
                return `
                    <div class="schedule-item">
                        <div class="time-slot">${item.time}</div>
                        <div class="item-content">
                            <h2>${item.title}</h2>
                            <div class="speakers">By ${item.speakers.join(' & ')}</div>
                            <p class="description">${item.description}</p>
                            <div class="categories">
                                ${item.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // Transition or Lunch
                return `
                    <div class="schedule-item ${item.type}">
                        <div class="time-slot">${item.time}</div>
                        <div class="item-content">
                            <h2>${item.title}</h2>
                            <p>${item.duration}</p>
                        </div>
                    </div>
                `;
            }
        }).join('');
    }

    // Filter schedule based on search input
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (!searchTerm) {
            renderSchedule(fullSchedule);
            return;
        }

        const filteredItems = fullSchedule.filter(item => {
            // Transitions and lunch are always shown unless they don't match (actually user wants to search talks)
            // But usually, searching categories should show the context of the day or just the matches.
            // Let's filter such that we only keep matches, but if it's a talk, we check categories.
            if (item.type !== 'talk') return true; // Keep structure items

            return item.categories.some(cat => cat.toLowerCase().includes(searchTerm));
        });

        // If we filtered out all talks, maybe we should still show transitions? 
        // Better yet: filter everything that doesn't match, including transitions if they don't help.
        // Let's keep it simple: filter only talks by category, but keep non-talks always for schedule context.
        // OR: filter EVERYTHING. Let's do: if it's a talk, check category. If it's not a talk, only show if there's a matching talk nearby? 
        // To be safe and meet the requirement: "users should be able to search the talks based on category".
        
        const onlyMatchingTalksAndContext = fullSchedule.filter(item => {
            if (item.type === 'talk') {
                return item.categories.some(cat => cat.toLowerCase().includes(searchTerm));
            }
            return true; // Keep transitions/lunch for context
        });

        renderSchedule(onlyMatchingTalksAndContext);
    });

    fetchSchedule();
});
