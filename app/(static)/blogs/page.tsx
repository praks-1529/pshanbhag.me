import BlogComponent from '@/components/blog';
import CustomButton from '@/components/button';

export const metadata = {
    title: 'Prakash - Blogs',
    description: 'pshanbhag',
}

export default function Blogs() {
    return (
        <>
            <div data-aos="fade-up" className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <BlogComponent date='Sep 24, 2024' header="AI Agents - Future of reimbursement workflow" img_src="/reimbursement.png" href="https://www.linkedin.com/pulse/ai-agents-future-reimbursement-workflow-prakash-shanbhag-0yqtc/" body="AI agents are revolutionizing expense management by automating workflows, categorizing expenses, validating bills, and ensuring vendor authenticity. These intelligent systems simplify and streamline the reimbursement process, making them game changers for businesses looking to improve efficiency and accuracy in handling expenses."></BlogComponent>
                    <BlogComponent date='Jun 28, 2024' header="API gateways for LLM applications" img_src="/llm_gateway.png" href="https://medium.com/@prakashshanbhag/going-great-guns-with-gocd-6d270f2d185d" body="API gateways serve as centralized entry points to internal services, offering features like rate limiting, caching, and fallback mechanisms. They're essential for large language model (LLM) applications, enabling request logging, token tracking, model fallback, and ML routing. This video explores these concepts and their significance in modern applications."></BlogComponent>
                    <BlogComponent date='Jan 31, 2022' header="Cracking Google/Facebook interviews" img_src="/google_fb.png" href="https://medium.com/@prakashshanbhag/getting-past-the-mental-barrier-cracking-google-facebook-interviews-3a35d3100ccd" body="I recently interviewed at Facebook, London, and Google, India, overcoming my previous mental barriers about FAANG interviews. Rather than relying on luck, I focused on a determined preparation strategy. This blog shares my journey from recruiter contact to receiving offers, highlighting the methods that led to my success."></BlogComponent>
                    <BlogComponent date='Jan 08, 2021' header="Multi-player games: A Showcase of Engineering Excellence" img_src="/multiplayer.png" href="https://medium.com/gameskraft-engineering/multi-player-games-plethora-of-engineering-excellence-73ec4edb47b" body="Multi-player games face technical challenges in delivering smooth user experiences, especially as daily active users scale from hundreds to millions. Maintaining performance, low latency, and reliability becomes critical. In the tech-heavy gaming industry, engineering excellence and innovation are essential to ensuring seamless gameplay and sustaining the game's reputation."></BlogComponent>
                    <BlogComponent date='Aug 08, 2020' header="Going Great Guns with GoCD - Part 2" img_src="/gocd.png" href="https://medium.com/@prakashshanbhag/going-great-guns-with-gocd-part-2-2508e103a59c" body="Continuation of previous post where we discussed automating source code changes, Docker image builds, and infrastructure updates using Terraform. This part focuses on deploying the built Docker image of our demo Spring Boot service on a Kubernetes (k8s) cluster, connecting it to an RDS resource, and making it accessible via a load balancer."></BlogComponent>
                    <BlogComponent date='Jul 30, 2020' header="Going Great Guns with GoCD - Part 1" img_src="/gocd.png" href="https://medium.com/@prakashshanbhag/going-great-guns-with-gocd-part-2-2508e103a59c" body="A solid, extensible CI-CD pipeline is crucial for engineering efficiency, minimizing developers' time on deployments. With various CI-CD tools available, from simple to complex, choosing the right one is key. In this editorial, i discussed a tool that helps streamline deployment processes for organizations."></BlogComponent>
                </div>
            </div >
        </>
    )
}
