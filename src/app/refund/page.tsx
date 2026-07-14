import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Read the Refund Policy for HN Web Technologies to understand our rules and regulations.",
  alternates: {
    canonical: "/refund",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--background)] min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Refund Policy</h1>
        <div className="text-[var(--muted-foreground)] space-y-6 text-lg leading-relaxed">
          <p>
            At HN Web Technologies, we strive to ensure our clients are completely satisfied with our services. We believe in transparency and want to ensure you understand our refund and cancellation policies before engaging our services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Web Development & Design Services</h2>
          <p>
            Due to the nature of web development and digital services, significant time and resources are invested as soon as a project commences. Therefore, our refund policy for these services is as follows:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Initial Deposit:</strong> The initial deposit (usually 50% or as agreed) is non-refundable. This covers the initial consultation, research, UI/UX design wireframing, and project setup.</li>
            <li><strong>During Development:</strong> If a project is cancelled by the client after development has begun but before completion, all completed work will be billed at our hourly rate, and any remaining balance from subsequent payments will be refunded. If the billed amount exceeds the payments made, the client will be invoiced for the difference.</li>
            <li><strong>Completed Projects:</strong> No refunds will be issued once a project has been completed, deployed, or handed over to the client.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Hosting & Domain Services</h2>
          <p>
            Domain name registrations are non-refundable once they have been purchased on your behalf, as they are instantly registered with the relevant domain registrars.
          </p>
          <p>
            Web hosting services can be cancelled at any time. However, payments made for hosting are non-refundable. If you cancel your hosting, your service will remain active until the end of the current billing cycle.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Maintenance & SEO Contracts</h2>
          <p>
            Monthly or yearly maintenance and SEO contracts can be cancelled with a 30-day written notice. Any payments made for the current billing cycle are non-refundable.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Process for Requesting a Cancellation</h2>
          <p>
            To request a cancellation of services, please submit your request in writing via email to <a href="mailto:hello@hnwebtechnologies.com" className="text-[var(--primary)] hover:underline">hello@hnwebtechnologies.com</a>. Please include your project details and the reason for cancellation.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns regarding our refund policy, please contact us at <a href="mailto:hello@hnwebtechnologies.com" className="text-[var(--primary)] hover:underline">hello@hnwebtechnologies.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
