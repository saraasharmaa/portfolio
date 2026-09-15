const filters = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.dataset.filter;

    filters.forEach((item) => {
      item.classList.toggle("active", item === filter);
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = selected === "all" || categories.includes(selected);
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/*
  Add your actual PDF filenames here.

  Expected folder:
  assets/
    resumes/
      sara-sharma-master.pdf
      sara-sharma-ai-ml-engineer.pdf
      sara-sharma-quantitative-analytics.pdf
      sara-sharma-financial-economic-analysis.pdf
      sara-sharma-ai-ml-research.pdf
      sara-sharma-policy-decision-intelligence.pdf
*/
const resumeFiles = {
  "Business Analytics": "assets/resumes/sarasharma_BA/SA.pdf",
  "AI/ML Engineer": "assets/resumes/sarasharma_AIML_.pdf",
  "Financial & Economic Data Analysis": "assets/resumes/Sara_Sharma_BOA_Resume.pdf",
  "AI/ML Research": "assets/resumes/sarasharma_AIResearch_.pdf",
};

const resumeNames = {
  "Business Analytics": "Master resume",
  "AI/ML Engineer": "AI/ML Engineer resume",
  "Financial & Economic Data Analysis": "Financial & Economic Data Analysis resume",
  "AI/ML Research": "AI/ML Research resume",
};

const resumeSelect = document.querySelector("#resume-select");
const resumeDownload = document.querySelector("#resume-download");
const resumeStatus = document.querySelector("#resume-status");

resumeDownload.addEventListener("click", () => {
  const selected = resumeSelect.value;
  const file = resumeFiles[selected];

  if (!file) {
    resumeStatus.textContent = `${resumeNames[selected]} is not connected yet. Add its PDF path to the resumeFiles object in script.js.`;
    return;
  }

  const link = document.createElement("a");
  link.href = file;
  link.download = file.split("/").pop();
  document.body.appendChild(link);
  link.click();
  link.remove();
});
