gsap.from("header", { duration: 1, y: -100, opacity: 0 });
gsap.from(".hero-text h1", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
gsap.from(".hero-text p", { duration: 1, x: -100, opacity: 0, delay: 0.8 });
gsap.from(".collaboration span", { duration: 1, x: -100, opacity: 0, delay: 1, stagger: 0.2 });
gsap.from(".hero-image", { duration: 1, opacity: 0, delay: 1.5 });

gsap.from("#projects h2", { scrollTrigger: "#projects", duration: 1, y: -50, opacity: 0 });
gsap.from(".project-card", { scrollTrigger: "#projects", duration: 1, y: 50, opacity: 0, stagger: 0.3 });

gsap.from("#about h2", { scrollTrigger: "#about", duration: 1, y: -50, opacity: 0 });
gsap.from(".about-content", { scrollTrigger: "#about", duration: 1, y: 50, opacity: 0 });
gsap.from(".about-details p", { scrollTrigger: "#about", duration: 1, y: 50, opacity: 0, stagger: 0.2 });

gsap.from("footer", { scrollTrigger: "footer", duration: 1, y: 50, opacity: 0 });

const recruiter = document.getElementById("recruiter");
const pm = document.getElementById("pm");
const dev = document.getElementById("dev");
const description = document.getElementById("description");

const descriptions = {
    recruiter: "I'm a designer who understands business goals and can translate them into user-friendly designs that drive results. I'm proficient in creating wireframes, prototypes, and high-fidelity mockups.",
    pm: "I'm a designer who can bridge the gap between design and development. I can create detailed design specifications and work closely with engineers to ensure a high-quality final product.",
    dev: "I'm a designer who speaks your language. I can provide you with pixel-perfect assets and clear design documentation to make your job easier. I'm also a firm believer in collaboration and am always open to feedback."
};

const spans = document.querySelectorAll(".collaboration span");

const setActive = (el) => {
    spans.forEach(span => span.classList.remove("active"));
    el.classList.add("active");
}

recruiter.addEventListener("click", () => {
    description.textContent = descriptions.recruiter;
    setActive(recruiter);
});

pm.addEventListener("click", () => {
    description.textContent = descriptions.pm;
    setActive(pm);
});

dev.addEventListener("click", () => {
    description.textContent = descriptions.dev;
    setActive(dev);
});

window.addEventListener("load", () => {
    description.textContent = descriptions.recruiter;
    setActive(recruiter);
});