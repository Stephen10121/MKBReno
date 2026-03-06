<script lang="ts">
    import { isContactModalOpen } from "@/store";
    import { toast } from "svelte-sonner";

    let name = $state("");
    let phone = $state("");
    let email = $state("");
    let message = $state("");

    function handleSubmit(e: Event) {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', {
            name,
            phone,
            email,
            message
        });
        toast.success("Thank you for your message", { description: "We will contact you soon!" });
        name = "";
        phone = "";
        email = "";
        message = "";

        isContactModalOpen.set(false);
    }
</script>

{#if $isContactModalOpen}
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-900">Contact Us</h2>
                    <button
                        onclick={() => isContactModalOpen.set(false)}
                        class="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                        title="Close Form"
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="space-y-4">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            bind:value={name}
                            required
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            bind:value={phone}
                            required
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            bind:value={email}
                            required
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            bind:value={message}
                            required
                            rows={4}
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Tell us about your project..."
                        ></textarea>
                    </div>

                    <div class="flex space-x-3 pt-4">
                        <button
                            type="button"
                            onclick={() => isContactModalOpen.set(false)}
                            class="flex-1 bg-white hover:bg-gray-50 text-text font-medium py-3 px-6 rounded-lg border border-secondary transition-colors duration-200 cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            class="flex-1 bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
                            onclick={handleSubmit}
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}