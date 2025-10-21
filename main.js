document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 20,
                    behavior: "smooth",
                });
            }
        });
    });
});

fetch("/stats/mochi_daily.json")
    .then((r) => r.json())
    .then((data) => {
        const labels = data.map((d) => d.day);
        const learned = data.map((d) => d.learned);
        const reviewed = data.map((d) => d.reviewed);

        new Chart(document.getElementById("mochiChart"), {
            type: "bar",
            data: {
                labels,
                datasets: [
                    {
                        label: "Cards Learned",
                        data: learned,
                        backgroundColor: "#cecdc4",
                    },
                    {
                        label: "Cards Reviewed",
                        data: reviewed,
                        backgroundColor: "#878580",
                    },
                ],
            },
            options: {
                plugins: { legend: { position: "top" } },
                scales: {
                    x: {
                        stacked: true,
                        ticks: { maxRotation: 90, minRotation: 45 },
                    },
                    y: { stacked: true, beginAtZero: true },
                },
            },
        });
    })
    .catch(console.error);
