import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";

import "./Certifications.scss";

const certifications = [
  {
    title: "Fortigate Operator Certification",
    issuer: "Fortinet",
    type: "Professional",
    fileUrl: "/certificates/fortigate-operator-certification.pdf",
    verificationPending: true,
  },
  {
    title: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet",
    type: "Professional",
    fileUrl: "/certificates/fortinet-certified-fundamentals-cybersecurity.pdf",
    verificationPending: true,
  },
  {
    title: "Fortinet Certified Associate in Cybersecurity",
    issuer: "Fortinet",
    type: "Professional",
    fileUrl: "/certificates/fortinet-certified-associate-cybersecurity.pdf",
    verificationPending: true,
  },
  {
    title: "Introduction to Threat Landscape 2.0",
    issuer: "Cybersecurity",
    type: "Professional",
    fileUrl: "/certificates/introduction-to-threat-landscape-2.0.pdf",
    verificationPending: true,
  },
  {
    title: "Ethical Hacker Badge",
    issuer: "Cybersecurity",
    type: "Badge",
    fileUrl: "/certificates/ethical-hacker-badge.pdf",
    verificationPending: true,
  },
  {
    title: "Networking Basics Badge",
    issuer: "Networking",
    type: "Badge",
    fileUrl: "/certificates/networking-basics-badge.pdf",
    verificationPending: true,
  },
  {
    title: "Network Addressing and Basic Troubleshooting",
    issuer: "Networking",
    type: "Professional",
    fileUrl: "/certificates/network-addressing-and-basic-troubleshooting.pdf",
    verificationPending: true,
  },
  {
    title: "Networking Devices and Basic Config",
    issuer: "Networking",
    type: "Professional",
    fileUrl: "/certificates/networking-devices-and-basic-config.pdf",
    verificationPending: true,
  },
  {
    title: "Oracle Certified Architect Associate",
    issuer: "Oracle",
    type: "Professional",
    fileUrl: "/certificates/oracle-certified-architect-associate.pdf",
    verificationPending: true,
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
    issuer: "Oracle",
    type: "Professional",
    fileUrl: "/certificates/oracle-cloud-infrastructure-2025-certified-architect-associate.pdf",
    verificationPending: true,
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    type: "Professional",
    fileUrl: "/certificates/oracle-cloud-infrastructure-2025-certified-foundations-associate.jpeg",
    verificationPending: true,
  },
  {
    title: "Technical Introduction to Cybersecurity 1.0",
    issuer: "Cybersecurity",
    type: "Professional",
    fileUrl: "/certificates/technical-introduction-to-cybersecurity-1.0.pdf",
    verificationPending: true,
  },
  {
    title: "Virtualization",
    issuer: "VMware",
    type: "Professional",
    fileUrl: "/certificates/virtualization.pdf",
    verificationPending: true,
  },
  {
    title: "Degree Certificate",
    issuer: "Moi University",
    type: "Academic",
    fileUrl: "/certificates/degree-certificate.pdf",
    verificationPending: false,
  },
  {
    title: "Azure VMware Solution Workload Migration with VMware HCX",
    issuer: "VMware",
    type: "Professional",
    fileUrl: "/certificates/azure-vmware-solution-workload-migration-with-vmware-hcx.pdf",
    verificationPending: true,
  },
];

const Certifications = () => {
  return (
    <section className="certifications app__section" id="certifications">
      <div className="section-shell">
        <div className="section-heading certifications__heading">
          <p className="section-kicker">Certifications</p>
          <h2 className="section-title">
            Certifications and credentials earned over the years.
          </h2>
          <p className="section-copy">
            This section supports both direct certificate files and LinkedIn-style
            verification links. For now, I&apos;ve attached the local certificate copies
            that are already available, and the verification links can be added anytime.
          </p>
        </div>

        <div className="certifications__grid">
          {certifications.map((item) => (
            <article className="cert-card" key={item.title}>
              <div className="cert-card__head">
                <span className="cert-card__type">{item.type}</span>
                <span className="cert-card__issuer">{item.issuer}</span>
              </div>

              <h3>{item.title}</h3>

              <div className="cert-card__links">
                <a
                  className="cert-card__link"
                  href={item.fileUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FiFileText />
                  View certificate
                </a>

                {item.verificationPending ? (
                  <span className="cert-card__link cert-card__link--muted">
                    <FaLinkedin />
                    LinkedIn link pending
                  </span>
                ) : (
                  <span className="cert-card__link cert-card__link--muted">
                    <FiArrowUpRight />
                    Academic credential
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
