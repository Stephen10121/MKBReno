<script lang="ts">
    import Logo from "$lib/assets/MKBLOGO.png";
</script>

<footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-4 gap-8">
            <div class="md:col-span-2">
                <div class="flex items-center space-x-3 mb-4">
                    <img 
                        src={Logo} 
                        alt="MKB Renovations" 
                        class="h-10 w-auto"
                    />
                    <span class="text-xl font-bold">MKB Renovations</span>
                </div>
                <p class="text-gray-300 mb-4 leading-relaxed">
                    Professional kitchen and bathroom renovation services serving Vancouver, Washington and the Portland, Oregon metro area. 
                    Transforming homes with quality craftsmanship and exceptional attention to detail.
                </p>
                <div class="flex items-center space-x-2 text-gray-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    <span>Vancouver, WA & Portland, OR</span>
                </div>
            </div>

            <div>
                <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li>
                        <a href="/" class="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
                    </li>
                    <li>
                        <a href="/about" class="text-gray-300 hover:text-white transition-colors duration-200">About</a>
                    </li>
                    <li>
                        <a href="/projects" class="text-gray-300 hover:text-white transition-colors duration-200">Projects</a>
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-semibold mb-4">Contact</h3>
                <ul class="space-y-3">
                    <li>
                        <a 
                            href="tel:+13609917646" 
                            class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span>(360) 991-7646</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm">
                © {new Date().getFullYear()} MKB Renovations LLC. All rights reserved.
            </p>
            <p class="text-gray-400 text-sm mt-2 md:mt-0">
                Licensed & Insured • Mark Pavliuk
            </p>
        </div>
    </div>
</footer>