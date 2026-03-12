// Application Form Modal
class ApplicationModal {
    constructor() {
        this.modal = null;
        this.overlay = null;
        this.form = null;
        this.currentPosition = '';
        this.init();
    }

    init() {
        this.createModal();
        this.attachEventListeners();
    }

    createModal() {
        // Create modal overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'modal-overlay';
        this.overlay.innerHTML = `
            <div class="application-modal">
                <div class="modal-header">
                    <h2 class="modal-title">Apply for Position</h2>
                    <button class="modal-close" type="button" aria-label="Close">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="application-form" id="applicationForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">
                                    Full Name <span class="required">*</span>
                                </label>
                                <input type="text" class="form-input" name="fullName" required placeholder="John Doe">
                            </div>
                            <div class="form-group">
                                <label class="form-label">
                                    Email Address <span class="required">*</span>
                                </label>
                                <input type="email" class="form-input" name="email" required placeholder="john.doe@example.com">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">
                                    Phone Number <span class="required">*</span>
                                </label>
                                <input type="tel" class="form-input" name="phone" required placeholder="+255 743 995 011">
                            </div>
                            <div class="form-group">
                                <label class="form-label">
                                    Position Applied For <span class="required">*</span>
                                </label>
                                <input type="text" class="form-input" name="position" required readonly>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">
                                    Years of Experience <span class="required">*</span>
                                </label>
                                <select class="form-select" name="experience" required>
                                    <option value="">Select experience</option>
                                    <option value="0-1">Less than 1 year</option>
                                    <option value="1-3">1-3 years</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="5-10">5-10 years</option>
                                    <option value="10+">More than 10 years</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">
                                    Availability <span class="required">*</span>
                                </label>
                                <select class="form-select" name="availability" required>
                                    <option value="">Select availability</option>
                                    <option value="immediate">Immediately</option>
                                    <option value="2weeks">2 weeks notice</option>
                                    <option value="1month">1 month notice</option>
                                    <option value="2months">2 months notice</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">
                                Security License/Certification
                            </label>
                            <input type="text" class="form-input" name="license" placeholder="e.g., Tanzania Security License #12345">
                        </div>

                        <div class="form-group">
                            <label class="form-label">
                                Previous Security Experience
                            </label>
                            <textarea class="form-textarea" name="previousExperience" placeholder="Briefly describe your previous security experience..."></textarea>
                        </div>

                        <div class="form-group">
                            <label class="form-label">
                                Why do you want to join MFUNGO SECURITY?
                            </label>
                            <textarea class="form-textarea" name="motivation" placeholder="Tell us why you're interested in this position..."></textarea>
                        </div>

                        <div class="form-group">
                            <label class="form-label">
                                Cover Letter
                            </label>
                            <textarea class="form-textarea" name="coverLetter" placeholder="Optional: Add your cover letter..."></textarea>
                        </div>

                        <div class="form-checkbox">
                            <input type="checkbox" id="terms" name="terms" required>
                            <label for="terms">
                                I agree to the terms and conditions and confirm that all provided information is accurate
                            </label>
                        </div>

                        <div class="form-message" id="formMessage"></div>

                        <div class="form-actions">
                            <button type="button" class="btn-cancel" id="cancelBtn">Cancel</button>
                            <button type="submit" class="btn-submit" id="submitBtn">
                                <span id="submitText">Submit Application</span>
                                <span class="loading" id="loadingSpinner" style="display: none;"></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        // Add to document
        document.body.appendChild(this.overlay);
        
        // Get references
        this.form = document.getElementById('applicationForm');
    }

    attachEventListeners() {
        // Close modal events
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.close();
            }
        });

        const closeBtn = this.overlay.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => this.close());

        const cancelBtn = this.overlay.querySelector('#cancelBtn');
        cancelBtn.addEventListener('click', () => this.close());

        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
                this.close();
            }
        });
    }

    open(position) {
        this.currentPosition = position;
        const positionInput = this.form.querySelector('[name="position"]');
        positionInput.value = position;
        
        const modalTitle = this.overlay.querySelector('.modal-title');
        modalTitle.textContent = `Apply for ${position}`;
        
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset form
        this.form.reset();
        this.hideMessage();
    }

    close() {
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
        this.form.reset();
        this.hideMessage();
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const submitBtn = this.form.querySelector('#submitBtn');
        const submitText = this.form.querySelector('#submitText');
        const loadingSpinner = this.form.querySelector('#loadingSpinner');
        
        // Show loading state
        submitBtn.disabled = true;
        submitText.style.display = 'none';
        loadingSpinner.style.display = 'inline-block';
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const response = await fetch('../forms/application.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                this.showMessage(result.message, 'success');
                setTimeout(() => {
                    this.close();
                }, 2000);
            } else {
                this.showMessage(result.errors.join(', '), 'error');
            }
        } catch (error) {
            this.showMessage('An error occurred. Please try again.', 'error');
        } finally {
            // Hide loading state
            submitBtn.disabled = false;
            submitText.style.display = 'inline';
            loadingSpinner.style.display = 'none';
        }
    }

    showMessage(message, type) {
        const messageEl = this.form.querySelector('#formMessage');
        messageEl.textContent = message;
        messageEl.className = `form-message ${type} show`;
    }

    hideMessage() {
        const messageEl = this.form.querySelector('#formMessage');
        messageEl.className = 'form-message';
        messageEl.textContent = '';
    }
}

// Initialize application modal
let applicationModal;

document.addEventListener('DOMContentLoaded', () => {
    applicationModal = new ApplicationModal();
    
    // Attach click handlers to all "Apply Now" buttons
    const applyButtons = document.querySelectorAll('.apply-now-btn');
    applyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get position from data attribute
            const position = button.getAttribute('data-position');
            
            applicationModal.open(position);
        });
    });
});
