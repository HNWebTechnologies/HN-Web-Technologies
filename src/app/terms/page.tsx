import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms and Conditions for HN Web Technologies to understand our rules and regulations.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--background)] min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms & Conditions</h1>
        <div className="text-[var(--muted-foreground)] space-y-6 text-lg leading-relaxed">
          <p>
            Welcome to HN Web Technologies. These terms and conditions outline the rules and regulations for the use of HN Web Technologies&apos;s Website and Services.
          </p>
          <p>
            By accessing this website and utilizing our services, we assume you accept these terms and conditions. Do not continue to use HN Web Technologies if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Services</h2>
          <p>
            HN Web Technologies provides web development, mobile app development, e-commerce solutions, and related digital services. The specific scope, timeline, and deliverables of any project will be agreed upon in a separate proposal or contract before work commences.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Payment Terms</h2>
          <p>
            Payment structures will be detailed in the project proposal. Standard projects typically require an upfront deposit before work begins, with subsequent payments tied to project milestones. We reserve the right to suspend services if payments are not made according to the agreed schedule.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, HN Web Technologies and/or its licensors own the intellectual property rights for all material on HN Web Technologies. All intellectual property rights are reserved. You may access this from HN Web Technologies for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p>
            Upon full payment of all invoices related to a project, the client will retain ownership of the final delivered source code and design assets, unless specified otherwise in the contract.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Limitation of Liability</h2>
          <p>
            In no event shall HN Web Technologies, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this website or our services whether such liability is under contract. HN Web Technologies, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Revisions and Errata</h2>
          <p>
            The materials appearing on HN Web Technologies&apos;s website could include technical, typographical, or photographic errors. HN Web Technologies does not warrant that any of the materials on its website are accurate, complete, or current. HN Web Technologies may make changes to the materials contained on its website at any time without notice.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Modifications</h2>
          <p>
            HN Web Technologies may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:hello@hnwebtechnologies.com" className="text-[var(--primary)] hover:underline">hello@hnwebtechnologies.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
