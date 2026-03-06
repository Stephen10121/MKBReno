<script lang="ts">
    import MarkImage from "$lib/assets/mark.webp";
    import { isContactModalOpen } from "@/store";
</script>

<svelte:head>
	<title>MKB Renovations - About MKB Renovations</title>
	<meta name="title" content="MKB Renovations - About MKB Renovations" />
	<meta property="og:url" content="https://www.mkbreno.com/about" />
	<meta property="og:title" content="MKB Renovations - About MKB Renovations" />
    
	<meta property="twitter:url" content="https://www.mkbreno.com/about" />
	<meta property="twitter:title" content="MKB Renovations - About MKB Renovations" />
</svelte:head>

<div>
    <section class="relative bg-linear-to-br from-green-800 via-green-700 to-primary text-white py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6">About MKB Renovations</h1>
                <p class="text-xl md:text-2xl leading-relaxed">
                    Your trusted partner for kitchen and bathroom transformations serving Vancouver, Washington and the Portland, Oregon area
                </p>
            </div>
        </div>
    </section>

    <section class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Meet Mark Pavliuk</h2>
                    <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                        Welcome to MKB Renovations, where we specialize in transforming your home into 
                        the dream space you've always envisioned. My name is Mark Pavliuk, and I've been 
                        passionate about home renovation for over a decade.
                    </p>
                    <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                        With years of experience in the industry, I am dedicated to providing top-notch 
                        service to each and every client. I understand that home renovations can be a 
                        daunting process, which is why I strive to make it as easy and stress-free as possible.
                    </p>
                    <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                        From concept to completion, I work closely with you to ensure that your vision is 
                        brought to life. My attention to detail and commitment to quality ensure that the 
                        end result will exceed your expectations.
                    </p>
                    <a href="tel:+13609917646" class="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                        Call (360) 991-7646
                    </a>
                </div>
                <div class="lg:order-first">
                    <img
                        src={MarkImage}
                        alt="Mark Pavliuk - Owner of MKB Renovations"
                        class="w-full rounded-2xl shadow-2xl"
                    />
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 md:py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Why Choose MKB Renovations
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our commitment to excellence and customer satisfaction sets us apart 
                    in the renovation industry.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Quality Craftsmanship</h3>
                    <p class="text-gray-600 leading-relaxed">
                        We use only the finest materials and latest techniques to ensure that 
                        your renovation will stand the test of time.
                    </p>
                </div>

                <div class="text-center">
                    <div class="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Clear Communication</h3>
                    <p class="text-gray-600 leading-relaxed">
                        We believe that communication is key to a successful project, which is why 
                        we keep you informed every step of the way.
                    </p>
                </div>

                <div class="text-center">
                    <div class="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Reliable Service</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Whether you're looking to update a single room or completely remodel your 
                        entire home, we have the expertise and resources to make it happen.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 md:py-24 bg-linear-to-r from-green-800 via-green-700 to-primary text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p class="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Our goal is to provide you with a seamless and enjoyable renovation experience, 
                and we're confident that you'll love the end result. Contact us today to schedule 
                a consultation and let us help bring your remodeling dreams to life.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13609917646" class="hover:bg-primary-dark font-medium py-3 px-6 rounded-lg transition-colors duration-200 bg-white text-primary hover:bg-gray-100">
                    Call (360) 991-7646
                </a>
                <button 
                    onclick={() => isContactModalOpen.set(true)}
                    class="text-text font-medium py-3 px-6 rounded-lg border transition-colors duration-200 bg-white/10 border-white text-white hover:bg-white hover:text-primary cursor-pointer"
                >
                    Get Free Estimate
                </button>
            </div>
        </div>
    </section>
</div>