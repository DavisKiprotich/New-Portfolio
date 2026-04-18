import React from "react";
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
    verificationUrl:
      "https://www.credly.com/badges/880da384-6b79-467b-af49-55c3cb36d4e0/linked_in_profile",
  },
  {
    title: "Networking Basics Badge",
    issuer: "Networking",
    type: "Badge",
    fileUrl: "/certificates/networking-basics-badge.pdf",
    verificationUrl:
      "https://www.credly.com/badges/0662047b-8eee-4e72-a717-863fe8947aab/linked_in_profile",
  },
  {
    title: "Network Addressing and Basic Troubleshooting",
    issuer: "Networking",
    type: "Professional",
    fileUrl: "/certificates/network-addressing-and-basic-troubleshooting.pdf",
    verificationUrl:
      "https://www.credly.com/badges/459a2f13-c8f3-419f-87d1-b6351b1ceb76/linked_in_profile",
  },
  {
    title: "Networking Devices and Initial Configuration",
    issuer: "Networking",
    type: "Professional",
    fileUrl: "/certificates/networking-devices-and-basic-config.pdf",
    verificationUrl:
      "https://www.credly.com/badges/15ccb809-f3b9-4637-ae61-fc411ca610f2/linked_in_profile",
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
    verificationUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6434225F150619789D9A078FC446DCFD69FA1361E206E49CA89274DC4D9D4102",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    type: "Professional",
    fileUrl: "/certificates/oracle-cloud-infrastructure-2025-certified-foundations-associate.jpeg",
    verificationUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=523808DBBE2518E231DE52A25FBB96ADE3D12E27021E44D400353937EC420322",
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
    academicCredential: true,
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    type: "Certification",
    verificationUrl:
      "https://freecodecamp.org/certification/Humble_Beast/responsive-web-design",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    type: "Certification",
    verificationUrl:
      "https://freecodecamp.org/certification/Humble_Beast/javascript-algorithms-and-data-structures",
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    type: "Certification",
    verificationUrl:
      "https://freecodecamp.org/certification/Humble_Beast/front-end-development-libraries",
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
            This section supports both direct certificate files and public credential
            links. Where a local copy is available, it stays attached here; where the
            credential is best shown online, the verification link is included directly.
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
                {item.fileUrl ? (
                  <a
                    className="cert-card__link"
                    href={item.fileUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FiFileText />
                    View certificate
                  </a>
                ) : null}

                {item.verificationUrl ? (
                  <a
                    className="cert-card__link"
                    href={item.verificationUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FiArrowUpRight />
                    Verify credential
                  </a>
                ) : item.academicCredential ? (
                  <span className="cert-card__link cert-card__link--muted">
                    <FiArrowUpRight />
                    Academic credential
                  </span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
