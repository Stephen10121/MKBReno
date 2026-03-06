<script lang="ts">
	import { page } from '$app/state';
</script>

<div>
    <section class="relative bg-linear-to-br from-gray-800 via-gray-700 to-primary text-white py-16 md:py-24 min-h-screen flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
                <div class="mb-8">
                    <div class="bg-white/10 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
                        <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    
                    <h1 class="text-8xl md:text-9xl font-bold mb-4 bg-linear-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                        {page.status}
                    </h1>
                    <h2 class="text-4xl md:text-5xl font-bold mb-6">
                        {#if page.error}
                            {page.error.message}
                        {:else}
                            Page Not Found
                        {/if}
                    </h2>
                    <p class="text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto">
                        Oops! The page you're looking for seems to have been renovated out of existence. 
                        Let's get you back to something beautiful.
                    </p>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a href="/" class="hover:bg-primary-dark font-medium rounded-lg transition-colors duration-200 cursor-pointer bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                        Go Home
                    </a>
                    <a href="/about" class="text-text font-medium rounded-lg border transition-colors duration-200 cursor-pointer bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                        Learn About Us
                    </a>
                </div>

                <div class="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <a href="/" class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group">
                        <div class="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Home</h3>
                        <p class="text-sm text-gray-300">Start your renovation journey</p>
                    </a>

                    <a href="/about" class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group">
                        <div class="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">About Us</h3>
                        <p class="text-sm text-gray-300">Meet our expert team</p>
                    </a>

                    <a href="/projects" class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group">
                        <div class="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Projects</h3>
                        <p class="text-sm text-gray-300">View our portfolio</p>
                    </a>
                </div>

                <div class="mt-12 pt-8 border-t border-white/20">
                    <p class="text-gray-300 mb-4">Need help? Contact us directly:</p>
                    <a href="tel:+13609917646" class="text-primary hover:text-green-400 text-xl font-semibold transition-colors duration-200">
                        (360) 991-7646
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>