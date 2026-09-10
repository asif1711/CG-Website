import React, { useEffect, useRef } from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

declare global {
  interface Window {
    cfturnstileRender?: () => void;
    turnstile?: {
      render?: (container?: string | HTMLElement, options?: any) => string;
      remove?: (widgetIdOrContainer?: string | HTMLElement) => void;
      reset?: (widgetIdOrContainer?: string | HTMLElement) => void;
    };
  }
}

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
          '#gform_wrapper_23, #gform_23, form.gform, [id*="gform_wrapper_23"]'
        )
      ) {
        return true;
      }

      const hiddenSource =
        document.getElementById('cg-hidden-gform-source') ||
        document.getElementById('cg-hidden-gform-source-23');

      const formElement =
        hiddenSource?.querySelector('#gform_wrapper_23, #gform_23, form') ||
        document.getElementById('gform_wrapper_23') ||
        document.querySelector('[id*="gform_wrapper_23"]') ||
        hiddenSource?.firstElementChild;

      if (formElement && !mountContainer.contains(formElement)) {
        mountContainer.replaceChildren(formElement);

        if (typeof window !== 'undefined') {
          const turnstileContainer = formElement.querySelector<HTMLElement>('.cf-turnstile');
          if (turnstileContainer && window.turnstile?.remove) {
            try {
              window.turnstile.remove(turnstileContainer);
            } catch {
              // Safe to ignore if widget was not yet registered
            }
          }

          if (window.cfturnstileRender) {
            window.cfturnstileRender();
          }

          // Inform WordPress Gravity Form scripts that mount point is ready
          window.dispatchEvent(
            new CustomEvent('gform_mount_ready', {
              detail: { containerId: 'rpl-consultation-gravity-form-mount', formId: 23 },
            })
          );
          window.dispatchEvent(new Event('resize'));
        }
        return true;
      }
      return false;
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

      // 4. Background fetch fallback for client-side SPA visits where WordPress didn't render #cg-hidden-gform-source on previous route
      const fetchTimer = setTimeout(() => {
        const mountContainer =
          gravityFormMountRef.current ||
          document.getElementById('rpl-consultation-gravity-form-mount');
        if (
          mountContainer &&
          !mountContainer.querySelector('#gform_wrapper_23, #gform_23, form')
        ) {
          const hasHiddenSource =
            !!document.getElementById('cg-hidden-gform-source') ||
            !!document.getElementById('cg-hidden-gform-source-23');
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
                  doc.getElementById('cg-hidden-gform-source') ||
                  doc.getElementById('cg-hidden-gform-source-23') ||
                  doc.getElementById('gform_wrapper_23');
                if (serverSource) {
                  let localSource =
                    document.getElementById('cg-hidden-gform-source') ||
                    document.getElementById('cg-hidden-gform-source-23');
                  if (!localSource) {
                    localSource = document.createElement('div');
                    localSource.id = 'cg-hidden-gform-source';
                    localSource.style.display = 'none';
                    document.body.appendChild(localSource);
                  }
                  localSource.innerHTML = serverSource.innerHTML;
                  mountGravityForm();
                }
              })
              .catch(() => {});
          }
        }
      }, 350);
      retryTimeouts.push(fetchTimer);
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
        document.getElementById('cg-hidden-gform-source') ||
        document.getElementById('cg-hidden-gform-source-23');
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
              Portfolio Management (BSB80220)
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
