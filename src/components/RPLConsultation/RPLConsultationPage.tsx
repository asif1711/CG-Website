import React, { useEffect, useRef } from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

export const RPLConsultationPage: React.FC = () => {
  const gravityFormMountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'RPL Consultation - Chelson Gordon';
    window.scrollTo({ top: 0, behavior: 'instant' });

    let isMounted = true;
    let retryTimeouts: ReturnType<typeof setTimeout>[] = [];
    let mutationObserver: MutationObserver | null = null;

    // Resilient Gravity Form #23 mounting helper (identical architecture to BookPDSessionPage)
    const mountGravityForm = (): boolean => {
      if (!isMounted) return false;
      const mountContainer =
        gravityFormMountRef.current ||
        document.getElementById('rpl-consultation-gravity-form-mount');
      if (!mountContainer) return false;

      // Check if form #23 is already mounted
      if (
        mountContainer.querySelector(
          '#gform_wrapper_23, #gform_23, form.gform[id*="23"], [id*="gform_wrapper_23"]'
        )
      ) {
        return true;
      }

      const hiddenSource =
        document.getElementById('cg-hidden-gform-source-23') ||
        document.getElementById('cg-hidden-gform-source');

      const formElement =
        hiddenSource?.querySelector('#gform_wrapper_23, #gform_23, form[id*="23"]') ||
        document.getElementById('gform_wrapper_23') ||
        document.getElementById('gform_23') ||
        document.querySelector('[id*="gform_wrapper_23"]') ||
        (hiddenSource?.firstElementChild && hiddenSource.firstElementChild.id?.includes('23')
          ? hiddenSource.firstElementChild
          : null);

      if (formElement && !mountContainer.contains(formElement)) {
        mountContainer.replaceChildren(formElement);

        // Normalize course choice labels if they contain prefix so "GRADUATE DIPLOMA" eyebrow and title pair cleanly
        const normalizeChoiceLabels = () => {
          const l0 = mountContainer.querySelector('#label_23_12_0, label[for="choice_23_12_0"]');
          if (l0 && l0.textContent && l0.textContent.includes('Strategic Leadership') && l0.textContent.includes('Graduate Diploma')) {
            l0.textContent = 'Strategic Leadership';
          }
          const l1 = mountContainer.querySelector('#label_23_12_1, label[for="choice_23_12_1"]');
          if (l1 && l1.textContent && l1.textContent.includes('Portfolio Management') && l1.textContent.includes('Graduate Diploma')) {
            l1.textContent = 'Portfolio Management';
          }
        };
        normalizeChoiceLabels();

        // Wire fallback interactive behaviors if Gravity Forms jQuery is not present
        if (!(window as any).jQuery) {
          // 1. Radio Card selection handler
          const handleRadioSelection = () => {
            const radio0 = mountContainer.querySelector('#choice_23_12_0') as HTMLInputElement | null;
            const radio1 = mountContainer.querySelector('#choice_23_12_1') as HTMLInputElement | null;
            const field9 = mountContainer.querySelector('#field_23_9') as HTMLElement | null;
            const field10 = mountContainer.querySelector('#field_23_10') as HTMLElement | null;
            const hiddenCourse = mountContainer.querySelector('#input_23_5') as HTMLInputElement | null;

            const choice0 = radio0?.closest('.gchoice') as HTMLElement | null;
            const choice1 = radio1?.closest('.gchoice') as HTMLElement | null;

            if (radio0?.checked) {
              choice0?.classList.add('gchoice--selected');
              choice1?.classList.remove('gchoice--selected');
              if (field9) field9.style.display = 'block';
              if (field10) field10.style.display = 'none';
              if (hiddenCourse) hiddenCourse.value = 'BSB80320';
            } else if (radio1?.checked) {
              choice1?.classList.add('gchoice--selected');
              choice0?.classList.remove('gchoice--selected');
              if (field9) field9.style.display = 'none';
              if (field10) field10.style.display = 'block';
              if (hiddenCourse) hiddenCourse.value = 'BSP80220';
            }
          };

          // Handle click on .gchoice card container to activate radio
          mountContainer.querySelectorAll('.gchoice').forEach((choiceCard) => {
            choiceCard.addEventListener('click', (e) => {
              const target = e.target as HTMLElement;
              const radio = choiceCard.querySelector('input[type="radio"]') as HTMLInputElement | null;
              if (radio && target !== radio) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change', { bubbles: true }));
              }
            });
          });

          mountContainer.querySelectorAll('input[name="input_12"]').forEach((r) => {
            r.addEventListener('change', handleRadioSelection);
          });
          handleRadioSelection();

          // 2. Multi-step pagination handlers (Page 1 -> Page 2 -> Page 3)
          const page1 = mountContainer.querySelector('#gform_page_23_1') as HTMLElement | null;
          const page2 = mountContainer.querySelector('#gform_page_23_2') as HTMLElement | null;
          const page3 = mountContainer.querySelector('#gform_page_23_3') as HTMLElement | null;
          const progressBar = mountContainer.querySelector('.gf_progressbar_percentage') as HTMLElement | null;
          const progressTitle = mountContainer.querySelector('.gf_progressbar_title') as HTMLElement | null;

          const btnNext1 = mountContainer.querySelector('#gform_next_button_23_1');
          const btnNext2 = mountContainer.querySelector('#gform_next_button_23_2');
          const btnPrev2 = mountContainer.querySelector('#gform_previous_button_23_2');
          const btnPrev3 = mountContainer.querySelector('#gform_previous_button_23_3');
          const submitBtn = mountContainer.querySelector('#gform_submit_button_23');

          btnNext1?.addEventListener('click', () => {
            if (page1) page1.style.display = 'none';
            if (page2) page2.style.display = 'block';
            if (progressBar) progressBar.style.width = '66.66%';
            if (progressTitle) progressTitle.textContent = 'Step 2 of 3: Applicant Details';
            mountContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });

          btnPrev2?.addEventListener('click', () => {
            if (page2) page2.style.display = 'none';
            if (page1) page1.style.display = 'block';
            if (progressBar) progressBar.style.width = '33.33%';
            if (progressTitle) progressTitle.textContent = 'Step 1 of 3: Course Selection';
            mountContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });

          btnNext2?.addEventListener('click', () => {
            const studentIdInput = mountContainer.querySelector('#input_23_1') as HTMLInputElement | null;
            const emailInput = mountContainer.querySelector('#input_23_3') as HTMLInputElement | null;
            let hasError = false;

            if (studentIdInput) {
              const field1 = mountContainer.querySelector('#field_23_1');
              if (!studentIdInput.value.trim()) {
                field1?.classList.add('gfield_error');
                hasError = true;
              } else {
                field1?.classList.remove('gfield_error');
              }
            }

            if (emailInput) {
              const field3 = mountContainer.querySelector('#field_23_3');
              if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
                field3?.classList.add('gfield_error');
                hasError = true;
              } else {
                field3?.classList.remove('gfield_error');
              }
            }

            if (!hasError) {
              if (page2) page2.style.display = 'none';
              if (page3) page3.style.display = 'block';
              if (progressBar) progressBar.style.width = '100%';
              if (progressTitle) progressTitle.textContent = 'Step 3 of 3: Payment & Submission';
              handleRadioSelection();
              mountContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });

          btnPrev3?.addEventListener('click', () => {
            if (page3) page3.style.display = 'none';
            if (page2) page2.style.display = 'block';
            if (progressBar) progressBar.style.width = '66.66%';
            if (progressTitle) progressTitle.textContent = 'Step 2 of 3: Applicant Details';
            mountContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });

          submitBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            const form = mountContainer.querySelector('form');
            if (form) {
              form.innerHTML = `
                <div class="gform_confirmation_wrapper" style="text-align: center; padding: 40px 20px;">
                  <div style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 50%; background: #0072CE; color: #FFFFFF; margin-bottom: 20px;">
                    <svg style="width: 32px; height: 32px;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 style="font-family: 'Montserrat', sans-serif; font-size: 24px; font-weight: 800; color: #042F61; margin-bottom: 12px;">Consultation Request Submitted</h3>
                  <p style="font-family: 'Montserrat', sans-serif; font-size: 15px; color: #64748B; max-width: 500px; margin: 0 auto; line-height: 1.6;">
                    Thank you for submitting your RPL consultation request. Our admissions team has received your details and document. We will review your submission and contact you within 1-2 business days.
                  </p>
                </div>
              `;
            }
          });
        }

        // Inform WordPress Gravity Form scripts that mount point is ready
        if (typeof window !== 'undefined') {
          window.dispatchEvent(
            new CustomEvent('gform_mount_ready', {
              detail: { containerId: 'rpl-consultation-gravity-form-mount', formId: 23 },
            })
          );
          window.dispatchEvent(new Event('resize'));

          // If Gravity Forms jQuery hook is present, trigger post_render so multi-page & conditional logic initialize
          if ((window as any).jQuery) {
            try {
              (window as any).jQuery(document).trigger('gform_post_render', [23, 1]);
            } catch (e) {
              console.warn('gform_post_render trigger notice:', e);
            }
          }
        }
        return true;
      }
      return false;
    };

    // Fallback template builder for dev/preview environments where WordPress is not serving form 23 directly
    const createFallbackFormSource = () => {
      let localSource = document.getElementById('cg-hidden-gform-source-23');
      if (!localSource) {
        localSource = document.createElement('div');
        localSource.id = 'cg-hidden-gform-source-23';
        localSource.style.display = 'none';
        document.body.appendChild(localSource);
      }
      localSource.innerHTML = `
        <div id="gform_wrapper_23" class="gform_wrapper">
          <form method="post" id="gform_23" action="/rpl-consultation/">
            <div id="gf_progressbar_wrapper_23" class="gf_progressbar_wrapper">
              <h3 class="gf_progressbar_title">Step 1 of 3: Course Selection</h3>
              <div class="gf_progressbar" aria-hidden="true">
                <div class="gf_progressbar_percentage percentbar_blue" style="width: 33.33%;"></div>
              </div>
            </div>

            <div class="gform_heading">
              <h2 class="gform_title">Consultation Course</h2>
              <span class="gform_description">Select the qualification you wish to receive Recognition of Prior Learning (RPL) assessment for.</span>
            </div>

            <div class="gform_body gform-body">
              <!-- PAGE 1: COURSE SELECTION -->
              <div id="gform_page_23_1" class="gform_page">
                <div class="gform_page_fields">
                  <fieldset id="field_23_12" class="gfield gfield--type-radio gfield--width-full field_sublabel_below gfield_visibility_visible">
                    <legend class="gfield_label gfield_label_before_complex">
                      Consultation Course<span class="gfield_required"><span class="gfield_required_asterisk">*</span></span>
                    </legend>
                    <div class="ginput_container ginput_container_radio">
                      <div class="gfield_radio" id="input_23_12">
                        <div class="gchoice gchoice_23_12_0 gchoice--selected">
                          <input class="gfield-choice-input" name="input_12" type="radio" value="BSB80320" id="choice_23_12_0" checked="checked" />
                          <label for="choice_23_12_0" id="label_23_12_0">Strategic Leadership</label>
                        </div>
                        <div class="gchoice gchoice_23_12_1">
                          <input class="gfield-choice-input" name="input_12" type="radio" value="BSP80220" id="choice_23_12_1" />
                          <label for="choice_23_12_1" id="label_23_12_1">Portfolio Management</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="gform_page_footer top_label">
                  <input type="button" id="gform_next_button_23_1" class="gform_next_button button" value="Next" />
                </div>
              </div>

              <!-- PAGE 2: APPLICANT DETAILS -->
              <div id="gform_page_23_2" class="gform_page" style="display: none;">
                <div class="gform_page_fields">
                  <div id="field_23_1" class="gfield gfield--type-text field_sublabel_below gfield_visibility_visible">
                    <label class="gfield_label" for="input_23_1">Student ID<span class="gfield_required"><span class="gfield_required_asterisk">*</span></span></label>
                    <div class="ginput_container ginput_container_text">
                      <input name="input_1" id="input_23_1" type="text" class="large" placeholder="Enter your student ID" aria-required="true" />
                    </div>
                  </div>
                  <div id="field_23_3" class="gfield gfield--type-email field_sublabel_below gfield_visibility_visible">
                    <label class="gfield_label" for="input_23_3">Personal Email<span class="gfield_required"><span class="gfield_required_asterisk">*</span></span></label>
                    <div class="ginput_container ginput_container_email">
                      <input name="input_3" id="input_23_3" type="email" class="large" placeholder="Enter your email address" aria-required="true" />
                    </div>
                  </div>
                  <div id="field_23_4" class="gfield gfield--type-fileupload field_sublabel_below gfield_visibility_visible">
                    <label class="gfield_label" for="input_23_4">Diploma Certificate<span class="gfield_required"><span class="gfield_required_asterisk">*</span></span></label>
                    <div class="gfield_description">Please upload your official diploma certificate or statement of attainment (PDF, JPG, PNG up to 10MB).</div>
                    <div class="ginput_container ginput_container_fileupload">
                      <input type="file" name="input_4" id="input_23_4" class="medium" aria-required="true" />
                    </div>
                  </div>
                  <div id="field_23_5" class="gfield gfield_visibility_hidden gform_hidden" style="display: none !important;">
                    <input type="hidden" name="input_5" id="input_23_5" value="BSB80320" />
                  </div>
                  <div id="field_23_6" class="gfield gfield_visibility_hidden gform_hidden" style="display: none !important;">
                    <input type="hidden" name="input_6" id="input_23_6" value="Pending" />
                  </div>
                </div>
                <div class="gform_page_footer top_label">
                  <input type="button" id="gform_previous_button_23_2" class="gform_previous_button button" value="Previous" />
                  <input type="button" id="gform_next_button_23_2" class="gform_next_button button" value="Next" />
                </div>
              </div>

              <!-- PAGE 3: PAYMENT & SUBMIT -->
              <div id="gform_page_23_3" class="gform_page" style="display: none;">
                <div class="gform_page_fields">
                  <div id="field_23_8" class="gfield gfield_html gfield--type-html gfield_visibility_visible">
                    <div class="rpl-payment-notice">
                      <div class="rpl-payment-notice__icon">
                        <svg class="rpl-payment-notice__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                      </div>
                      <div class="rpl-payment-notice__text">
                        Please complete your RPL Consultation assessment payment using the secure payment button below for your selected qualification. Once completed, submit your consultation request.
                      </div>
                    </div>
                  </div>
                  <div id="field_23_9" class="gfield gfield_html gfield--type-html gfield_visibility_visible">
                    <a href="https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e" target="_blank" rel="noopener noreferrer" class="make-payment-button">
                      Pay for Strategic Leadership (BSB80320)
                    </a>
                  </div>
                  <div id="field_23_10" class="gfield gfield_html gfield--type-html" style="display: none;">
                    <a href="https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e" target="_blank" rel="noopener noreferrer" class="make-payment-button">
                      Pay for Portfolio Management (BSP80220)
                    </a>
                  </div>
                </div>
                <div class="gform_page_footer top_label">
                  <input type="button" id="gform_previous_button_23_3" class="gform_previous_button button" value="Previous" />
                  <input type="submit" id="gform_submit_button_23" class="gform_button button" value="Submit Consultation" />
                </div>
              </div>
            </div>
          </form>
        </div>
      `;
      mountGravityForm();
    };

    // 1. Mount immediately
    const mountedImmediately = mountGravityForm();

    // 2. Retry intervals to capture any asynchronous script or WordPress template injection
    if (!mountedImmediately) {
      const delays = [50, 150, 300, 600, 1200, 2500];
      retryTimeouts = delays.map((delay) =>
        setTimeout(() => {
          mountGravityForm();
        }, delay)
      );

      // 3. MutationObserver on document.body to instantly detect form DOM insertion
      if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined') {
        mutationObserver = new MutationObserver(() => {
          if (mountGravityForm()) {
            mutationObserver?.disconnect();
          }
        });
        mutationObserver.observe(document.body, { childList: true, subtree: true });
      }

      // 4. Background fetch fallback for client-side SPA visits where WordPress didn't render form on previous route
      const fetchTimer = setTimeout(() => {
        const mountContainer =
          gravityFormMountRef.current ||
          document.getElementById('rpl-consultation-gravity-form-mount');
        if (
          mountContainer &&
          !mountContainer.querySelector('#gform_wrapper_23, #gform_23, form')
        ) {
          const hasHiddenSource =
            !!document.getElementById('cg-hidden-gform-source-23') ||
            !!document.getElementById('gform_wrapper_23');
          if (
            !hasHiddenSource &&
            typeof window !== 'undefined' &&
            window.location.pathname.startsWith('/rpl-consultation')
          ) {
            fetch('/rpl-consultation/', { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
              .then((res) => (res.ok ? res.text() : ''))
              .then((html) => {
                if (!html || !isMounted) return;
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const serverSource =
                  doc.getElementById('cg-hidden-gform-source-23') ||
                  doc.getElementById('gform_wrapper_23') ||
                  doc.getElementById('cg-hidden-gform-source');
                if (serverSource) {
                  let localSource = document.getElementById('cg-hidden-gform-source-23');
                  if (!localSource) {
                    localSource = document.createElement('div');
                    localSource.id = 'cg-hidden-gform-source-23';
                    localSource.style.display = 'none';
                    document.body.appendChild(localSource);
                  }
                  localSource.innerHTML = serverSource.innerHTML;
                  mountGravityForm();
                } else {
                  createFallbackFormSource();
                }
              })
              .catch(() => {
                createFallbackFormSource();
              });
          }
        }
      }, 350);
      retryTimeouts.push(fetchTimer);

      const previewFallbackTimer = setTimeout(() => {
        const mountContainer =
          gravityFormMountRef.current ||
          document.getElementById('rpl-consultation-gravity-form-mount');
        if (
          mountContainer &&
          !mountContainer.querySelector('#gform_wrapper_23, #gform_23, form')
        ) {
          createFallbackFormSource();
        }
      }, 700);
      retryTimeouts.push(previewFallbackTimer);
    }

    // Dispatch event to inform any WordPress Gravity Form scripts that mount point is initialized
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('gform_mount_ready', {
          detail: { containerId: 'rpl-consultation-gravity-form-mount', formId: 23 },
        })
      );
    }

    return () => {
      isMounted = false;
      document.title = originalTitle;
      retryTimeouts.forEach((t) => clearTimeout(t));
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      const currentMount =
        gravityFormMountRef.current ||
        document.getElementById('rpl-consultation-gravity-form-mount');
      const mountedForm = currentMount?.querySelector('#gform_wrapper_23, #gform_23');
      const hiddenSource =
        document.getElementById('cg-hidden-gform-source-23') ||
        document.getElementById('cg-hidden-gform-source');
      if (mountedForm && hiddenSource && !hiddenSource.contains(mountedForm)) {
        hiddenSource.appendChild(mountedForm);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-sans pt-[180px] sm:pt-[190px] lg:pt-[175px] xl:pt-[200px] 2xl:pt-[220px] pb-24 relative overflow-hidden select-none">
      {/* Subtle Ambient Background Watermark Text */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        <div className="absolute top-[180px] sm:top-[190px] lg:top-[175px] xl:top-[200px] 2xl:top-[220px] right-[120px] lg:right-[60px] xl:right-[120px] w-0 h-0 overflow-visible origin-top-left transform rotate-90 text-[52px] sm:text-[64px] lg:text-[72px] xl:text-[80px] font-black tracking-widest text-[#042F61]/[0.07] uppercase leading-none whitespace-nowrap select-none">
          RPL CONSULTATION
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(253,185,19,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-[#FDB913]" />
            <span>Recognition of Prior Learning</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight">
            RPL Consultation
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Apply for your Recognition of Prior Learning (RPL) consultation for our Graduate Diploma
            qualifications. Complete the form below to initiate your personalized assessment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0072CE]" />
              Strategic Leadership (BSB80320)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0072CE]" />
              Portfolio Management (BSP80220)
            </span>
          </div>
        </div>

        {/* Dedicated Gravity Form Mount Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-100 max-w-4xl mx-auto">
          <div
            id="rpl-consultation-gravity-form-mount"
            ref={gravityFormMountRef}
            className="gform_wrapper gravity-form-mount-container w-full min-h-[180px] flex items-center justify-center scroll-mt-28 sm:scroll-mt-36"
            data-form-type="gravity-forms"
            data-form-id="23"
            data-form-name="rpl-consultation"
          />
        </div>
      </div>
    </div>
  );
};

export default RPLConsultationPage;
