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
                    <BlogComponent img_src="/llm_gateway.png" href="https://www.loom.com/share/c77ea7842036440b87fef3a700ef1a54?sid=821b5851-5e54-45e3-9307-7af46dfdb2eb" header="API gateways for LLM applications" body="API gateways act as centralized entry points to internal services, offering features like rate limiting, caching, and fallback mechanisms. They' re crucial for LLM applications, providing benefits such as request logging, token tracking, model fallback, and ML routing. This video discusses these concepts and their importance in modern applications"></BlogComponent>
                </div>
            </div >
        </>
    )
}
