<script lang="ts">
    import { isContactModalOpen, turnstileWidgetId } from "@/store";
    import { toast } from "svelte-sonner";
    import { contactForm } from "../../routes/contact.remote";

    let { turnstileSiteToken }: { turnstileSiteToken: string } = $props();
</script>

{#if $isContactModalOpen}
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4" style="z-index: 201;">
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

                <form {...contactForm.enhance(async ({ submit, form }) => {
                    let savingChanges = toast.loading("Saving Changes.", { duration: Number.POSITIVE_INFINITY });
                    try {
                        await submit();
                        form.reset();
                        toast.dismiss(savingChanges);

                        //@ts-ignore
                        turnstile.reset($turnstileWidgetId);

                        if (!contactForm.fields.allIssues()) {
                            toast.success("Thank you for your message.", { description: "We will contact you soon!" });
                            isContactModalOpen.set(false);
                        }
                    } catch (err) {
                        console.log(err);
                        toast.dismiss(savingChanges);
                        toast.error("Failed to send message.", { description: "Please try again later." });
                    }
                })} class="space-y-4">
                    <div>
                        {#each contactForm.fields.turnStileToken.issues() as issue}
                            <p class="text-red-500 text-sm">{issue.message}</p>
                        {/each}
                    </div>
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input
                            {...contactForm.fields.name.as("text")}
                            required
                            id="name"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        {#each contactForm.fields.name.issues() as issue}
                            <p class="text-red-500 text-sm">{issue.message}</p>
                        {/each}
                    </div>

                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                            {...contactForm.fields.phone.as("text")}
                            required
                            id="phone"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        {#each contactForm.fields.phone.issues() as issue}
                            <p class="text-red-500 text-sm">{issue.message}</p>
                        {/each}
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                            {...contactForm.fields.email.as("email")}
                            required
                            id="email"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        {#each contactForm.fields.email.issues() as issue}
                            <p class="text-red-500 text-sm">{issue.message}</p>
                        {/each}
                    </div>

                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea
                            {...contactForm.fields.message.as("text")}
                            required
                            id="message"
                            rows={4}
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Tell us about your project..."
                        ></textarea>
                        {#each contactForm.fields.message.issues() as issue}
                            <p class="text-red-500 text-sm">{issue.message}</p>
                        {/each}

                        {#if turnstileSiteToken}
                            <input {...contactForm.fields.turnStileToken.as("hidden", turnstileSiteToken)} />
                        {/if}
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
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
{/if}