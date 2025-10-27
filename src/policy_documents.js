// policy_documents.js
// NOTE: Since the original Streamlit code used Python libraries (PyMuPDF, glob) 
// to read local PDF files, and these cannot run in a Node.js environment,
// this file mocks the resulting `combined_text` variable.
// In a real application, you would replace this with the actual extracted text.

export const combinedPolicyText = `


--- DOCUMENT START: CHAPTER 6 Issue and Grievance Management Policy | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/governance-and-policies/CHAPTER%2B%5B6%5D%2BIssue%2Band%2BGrievance%2BManagement%2BPolicy.pdf ---

 
1 
 
CHAPTER [6]: ISSUE AND GRIEVANCE MANAGEMENT POLICY (IGMP) 
6.1. Scope 
The scope of IGMP covers issues,  grievances and disputes between: (i) End Users and Network 
Participants; (ii) two or more Network Participants. The scope may be expanded from time to time as 
notified by ONDC. 
For the purposes of this document, the term End Users includes Buyers, and Sellers who offer 
products/services for sale through a Seller App which is a Network Participant Marketplace Seller Node 
(NP-MSN). 
For the purposes of this document, the term Network Participant includes Buyer App, Seller App 
which is a Network Participant Marketplace Seller Node (NP -MSN), Seller App which is a Network 
Participant Inventory Seller Node (NP-ISN) and Seller App which is a Logistics Service Provider. 
While this chapter also covers the process for resolving grievances between a Network Participant and 
ONDC, that process will be entirely off -network - i.e. it will not go through the issue and grievance 
management system that will be built for managing gr ievances between End Users and Network 
Participants, or between two or more Network Participants. 
The IGMP is in addition to all laws and regulations applicable for digital businesses, including all 
current regulations and directions such as those issued under/by the Consumer Protection Act, 2019; 
the Reserve Bank of India, and by no means aims to supe rsede any applicable laws or regulatory 
guidance. In case of any conflict or discrepancy between this IGMP and any law or regulation, that law 
or regulation will supersede. It is further clarified that ONDC shall not be liable to resolve any End 
Users’ complaints and all such obligations must be met by the Network Participants involved in the 
transaction in accordance with the IGMP.  
Note: The Issue and Grievance Management Policy has been divided into sub-sections based on which 
entity is raising an issue/grievance/dispute related to an order generated or services availed on the 
network. 
6.2. Issue and Grievance Management Obligations, and Process on the ONDC Network 
The obligations and process described in this Clause 6.2 only apply to Issues, Grievances and Disputes 
arising out of completed transactions or attempted transactions where payment was completed even if 
the transaction was not. Therefore, the process and obligations in Clause 6.2 shall not apply in the case 
of any Issue/Grievance/Dispute that is not linked to an Order ID or a Payment Reference ID or 
fulfilment ID or Item ID generated on the ONDC Network. 
End User Issues and Grievances: 
6.2.1. Every Buyer App operating in the retail domain must register as a convergence partner with the 
National Consumer Helpline of the Government of India. 
6.2.2. All Network Participants must maintain the functionality to accept, process and resolve Issues 
filed against them by End Users. A respondent Network Participant (Respondent NP) will 
attempt to resolve an Issue raised by a complainant Network Participant (Complainant NP). 
For clarity, a Complainant NP and a Respondent NP can either be a Buyer App or a Seller App 
or a Logistic Service Provider on the ONDC Network. 
End User Complainant NP Respondent NP  
2 
 
Buyer Buyer App Seller App (MSN or ISN, as the case maybe)/LSP or other 
Network Participant involved in the transaction 
Seller Seller App (MSN or ISN, 
as the case maybe) 
Buyer App/LSP or other Network Participant involved in the 
transaction 
 
6.2.3. Complainant NP will collect and process all Issues or Grievance raised by its End User. For 
clarity of doubt, Buyer App will be the Complainant App for issues raised by the Buyer, and 
Seller App will be the Complainant App for issues raised by the seller o r service provider. 
(Issues).   
6.2.4. Complainant NP shall provide its End User with an option to raise Issue or Grievance through  
its app, e -mail, messaging platform, IVR etc. for redressal of End User Issues regarding 
products and services purchased or sold over the ONDC Network. 
6.2.5. The Complainant App must ensure that the End User is able to select the concerned item(s) or 
an Order for which an Issue is sought to be raised or in case the End User is not provided with 
transaction or Order details due to any technical failures such as payment failure, the End User 
must be provided with an option to raise the Issue either through chat support on the application, 
through email or a contact number of a Resolution Officer (RO) or a Grievance Redressal 
Officer (GRO). RO or GRO as the case may be should be responsible for resolving Issues. 
6.2.6. The Complainant App must allow End Users to raise Issues, and resolve them as per the 
timelines provided under Applicable Law. Furthermore, the Complainant App may also 
mutually agree with other Network Participants on the timelines for resolving Issues. However, 
such mutually agreed timelines should be subject to timelines provided under Applicable Law. 
6.2.7. Illustration: If the Applicable Law provides that a consumer complaint should be resolved 
within 30 days, the Buyer App and other Network Participants can mutually agree to resolve 
that complaint within 20 days. 
6.2.8. All Network Participants involved in a transaction for which the Issue has been raised shall 
cooperate with the Complainant App and other Network Participants - including coordinating 
with their respective End Users - to resolve the Issue in a timely manner. The cooperation could 
include providing information such as Order ID, Transaction ID, Payment Reference ID, 
Fulfilment ID, Item ID, photographs, other evidence, contact details of the RO of GRO, as the 
case may be for resolving the Issue. 
6.2.9. While Buyer Apps will be responsible for facilitating the Buyer to raise an Issue; the NP-MSN 
or the NP-ISN, as the case may be, shall be responsible for resolving the Issue, if the Issue arose 
due to its action or inaction, or of its Seller. The NP-MSN or NP-ISN, as the case may be, will 
be responsible for coordinating with the Seller for resolving the Issue if it requires any action(s) 
from the Seller.  
6.2.10. For any Issue related to on -network logistics, the NP that procured the logistics services may 
refer the Issue to the concerned LSP for resolution if it deems the Issue to have arisen due to 
the LSP. For off -network logistics, the entity that procured the logistics services will be 
responsible for resolving any Issues related to delivery. 
To illustrate, if the Seller wants to raise the issue related to weight of a shipment, the Seller App 
can reasonably conclude that the issue requires  resolution by the Logistics Service Provider. 
The Seller App may then relay the issue to the Logistics Service Providers, if the logistics was  
3 
 
procured by the Seller App itself, instead of attempting to resolve it independently. Similarly, 
in case of a complaint by the Buyer, the NP that procured logistics services (on behalf of the 
Buyer) can assess that the issue likely arose during the shipping process and therefore involves 
the LSP. The NP may then refer the complaint to the LSP for resolution, as the LSP would be 
better positioned to investigate the delivery process, inspect whether there was any mishandling 
during transit, and offer a soluti on (such as compensation, replacement, or further 
investigation). 
6.2.11. In cases where Seller App is the Complainant App, the Buyer App will be responsible for 
coordinating with the Buyer if resolving the Issue requires any action(s) from the Buyer. 
6.2.12. The Complainant App shall communicate the status of the Issue to the End User on the relevant 
app itself and/or through email. 
6.2.13. Complainant App is responsible to facilitate ONDC, and regulatory agencies to access the data, 
information, systems of Complainant App and carry out audits, as and when required by ONDC 
and regulatory agencies. To clarify, ONDC will never require a Network  Participant to share 
personal data of its End Users. 
6.2.14. Network Participants must keep a record of the evidence trail and other supporting documents 
for a period as required under Applicable Laws. 
6.2.15. If a Network Participant is found in failing to adhere to its responsibility for the Issue or 
Grievance raised by the End User then the action or inaction of such Network Participant may 
impact its badge/score in the ONDC Network, as specified in the ONDC Network Policy. 
Furthermore, Disciplinary Action may be taken against the non-compliant Network Participant 
in accordance with the ONDC Network Policy. 
Network Participant Issues and Grievances: 
6.2.16. All Network Participants must maintain the functionality to accept, process and resolve Issues 
filed against them by other Network Participants. A respondent Network Participant 
(Respondent NP) will attempt to resolve an Issue raised by a complainant Network Participant 
(Complainant NP). 
6.2.17. For clarity, a Complainant NP and a Respondent NP can either be a Buyer App or a Seller App 
or a Logistics Service Provider on the ONDC Network. 
6.2.18. All parties involved in a transaction must cooperate fully to resolve any Issue or Grievance 
raised by an End User. This cooperation entails promptly sharing necessary information such 
as Order ID, Transaction ID, Payment Reference ID, Fulfillment ID, Item ID, photographs, and 
any other evidence. 
6.2.19. Respondent NP and Complainant NP will mutually agree upon a timeline for resolution of 
complaints. 
6.2.20. The Respondent NP must keep a record of the evidence trail and other supporting documents 
for a period as required under Applicable Laws. 
6.2.21. Respondent NP must only accept Issues raised by a Complainant NP which are associated with 
an Order ID or a Payment Reference ID or fulfilment ID generated on the Network. 
6.2.22. If a Network Participant is found responsible for the Issue or Grievance or Dispute then the 
action or inaction of such Network Participant may impact its badge/score in the ONDC 
Network, as specified in the ONDC Network Policy. 
Escalation of Grievance by Consumer  
4 
 
6.2.23. If the Grievance is not resolved to the satisfaction of the Consumer or not resolved at all, then 
the Consumer may escalate it to ONDC. A Consumer may approach ONDC only after it has 
first raised the Grievance with the relevant Buyer App from where he or she placed the Order.  
6.2.24. In case the Consumer approaches ONDC, ONDC will reach out to the concerned Network 
Participant for necessary action to resolve the Grievance. 
6.2.25. The Consumer must submit escalations to ONDC through a dedicated grievance escalation 
portal provided by ONDC, or any other official communication channel specified by ONDC 
from time to time. The escalation request must include certain details as specified by ONDC. 
6.2.26. If a Network Participant fails to respond to or cooperate with ONDC during the grievance 
resolution process, ONDC may:  
6.2.26.1. Record the non -compliance in the Network Participant’s performance metrics, 
which could impact its badge/score in the ONDC Network as may be specified in 
the ONDC Network Policy, and/or 
6.2.26.2. Consider further disciplinary actions against the non -compliant Network 
Participant in accordance with the ONDC Network Policy. 
6.2.27. The escalation process outlined in clause 6.2.24 to 6.2.27 applies exclusively to grievances 
raised by Consumers. Seller grievances are not eligible for escalation to ONDC and must be 
resolved directly in accordance with the roles and responsibilities provided in this Chapter.  
6.2.28. In case of Issues raised by the Consumer regarding the product (including quality and quantity), 
Seller App will be responsible for resolving the grievances by providing the required 
compensation. If required under Applicable Law, ONDC may consider resolvi ng grievances 
incurred due to the Seller App's failure and reserves the right to recover the amount from the 
Seller App. 
Online Dispute Resolution Framework: 
6.2.29. If a grievance raised by an End User remains unresolved or if the resolution provided is 
unsatisfactory, Online Dispute Resolution (ODR) can serve as an effective option for 
facilitating a fair and efficient resolution process. Network Participants are enc ouraged to 
engage ODR service providers that are empanelled by ONDC to help End Users resolve their 
grievances. A list of ODR service providers empanelled by ONDC is available on the ONDC 
website. 
6.2.30. End Users should opt for ODR services only after resolution options outlined in this Chapter 
have been explored. Network Participants can assist by informing their End Users about the 
availability of ODR, helping them navigate the process to achieve a satisfactory outcome.  
End User Issues and Grievances Process in Financial Services Domain (including credit, 
insurance, and mutual funds)  
6.2.31. Notwithstanding anything contained in this Chapter, Complaints from Buyer in Financial 
Services Domain shall be handled by the Buyer App and Seller App in accordance with the 
applicable regulations and guidelines laid down by the Competent Authority 
Management of disputes between Network Participants and ONDC: 
6.2.32. All disputes between a Network Participant and ONDC will be governed by the laws of the 
Republic of India for the time being in force.  
5 
 
6.2.33. Any dispute arising under, in connection with, or incidental to the Network Participant 
Agreement or the ONDC Network Policy, or about their interpretation, including as to their 
existence, validity, performance, breach or termination, if not resolved with in thirty (30) days 
through discussion between the parties, will be referred to and resolved by arbitration.  
6.2.34. Arbitration will be conducted by a panel consisting of three (3) arbitrators, with one (1) 
nominated by each party and the third chosen by the two (2) arbitrators so nominated. The 
decision and award will be determined by the majority of the panel and shal l be final and 
binding upon the parties.   
6.2.35. The arbitration will be conducted in accordance with the provisions of the Arbitration and 
Conciliation Act, 1996 of India (Arbitration Act), as may be in force from time to time.  
6.2.36. In the event of death, refusal, neglect, inability, or incapability of the person so appointed to act 
as an arbitrator, the party or parties who previously nominated such affected arbitrator may 
appoint the new arbitrator.  
6.2.37. The arbitration proceedings will be conducted in English and the venue and seat of arbitration 
will be New Delhi, India. The courts at New Delhi shall have the exclusive jurisdiction for all 
arbitral applications.  
6.2.38. The cost of the arbitration, including fees and expenses of the arbitrator, shall be borne by the 
party at fault, unless the award otherwise provides.  
6.2.39. The existence of any information relating to any such arbitration proceedings will not be 
disclosed by either ONDC or the concerned Network Participant(s).  
6.2.40. Notwithstanding the foregoing, any party may seek injunctive relief in any court of competent 
jurisdiction for any actual or alleged infringement of such party’s, its Affiliates’ or any third 
party’s intellectual property or other proprietary rights.   
6 
 
DEFINITIONS 
Consumer has the meaning as under the Consumer Protection Act, 2019 (CPA) 
Disputes means any unresolved grievance of an End User or a Network Participant regarding a 
transaction on the ONDC Network. A grievance that is unresolved at the end of the specified period, or 
is not resolved to the satisfaction of the complainant, will be escala ted to a dispute by the entity who 
raised the grievance. 
Grievance refers to an Issue that does not receive a response from the party who is supposed to respond, 
or an Issue that is not satisfactorily resolved. The entity who raised the Issue can escalate it to a 
Grievance. 
Issue refers to a query that an End User has, or a problem that an End User or a Network Participant 
has in relation to a product or service purchased through the ONDC Network. The query or complaint 
may require resolution from a Network Participant or End User in the form of a response or action. 
Issue Information Packet (IIP) refers to an artefact that is generated by a Network Participant in 
relation to an Issue that has been raised by an End User or Network Participant, on the ONDC Network 
using the systems and processes described in this Chapter. An IIP will contain the deta ils of the Issue 
filed, along with other pertinent information.  
For clarity, when a Network Participant refers an Issue to another Network Participant for resolution, 
it will pass on the IIP. 
Resolution Officer or Grievance Redressal Officer is a dedicated officer representing the Network 
Participant responsible for addressing Grievances raised by their End Users, other Network Participants, 
or ONDC, as the case may be. The Grievance Redressal Officer appointed by the e -commerce entity, 
as mandated by E-Commerce Rules 2020, may act as the Resolution Officer, if the e-commerce entity 
so wishes. 
 
   
7 
 
Version History 
Version Date Description 
0.3 28th October 2022 Released to NPs 
1.0 9th December 2022 - Added clauses which require NPs to extend 
coordination for the purposes of relaying 
issues/grievances 
- Amended all clauses requiring acknowledgement by 
NPs from 30 mins to 120 mins 
- Amended all clauses which require complainants to 
respond to the resolution offered within 48 hours 
- Added clause on an ITN to be deemed to be closed if 
a complainant does not respond to the resolution 
offered within 48 hours 
- Increased maximum duration for grievance resolution 
by an NP from 48 hours to 96 hours 
- Added clauses on failure to acknowledgement by NPs 
being grounds for complainants to escalate the 
complainant 
- Added clauses which require NPs to store evidence 
trail and supporting documents in Issue and 
Grievance management for a duration as required by 
Applicable Law 
- Added clauses on closure of the dispute, if parties to 
ODR are unable to mutually deicide a second ODR 
service provider within 24 hours 
- Added clause which mandate to expenses to 
mediation and conciliation to be shared equally 
between ODR parties 
- Amended clause for disputes between ONDC and 
Network Participants to be mutually resolved through 
discussion from 15 days to 30 days, before heading 
for arbitration   
2.0 15th February, 
2024 
Simplified and Rationalised Chapter released to NPs 
2.1 05th December, 
2024 
- Introduction of New Clause (6.2.1) requiring Buyer 
Apps in retail domain to become convergence partner 
of NCH 
-  Added a section on escalation of complaints to 
ONDC by Buyers 
- Clarified applicability of IGM framework on 
financial services domain 
 
 
 
 
 
 

--- DOCUMENT START: CHAPTER 8 Network Technology Governance, Certification and Audit | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/governance-and-policies/CHAPTER+%5B8%5D+Network+Technology+Governance%2C+Certification+and+Audit.pdf ---

 
CHAPTER [8]: NETWORK TECHNOLOGY GOVERNANCE, CERTIFICATION AND AUDIT 
8. Network Technology Governance, Certification and Audit 
All Network Participants and Ecosystem Participants 1 must ensure the security of End User 
data that is processed or transmitted through the ONDC Network in compliance with the 
Applicable Laws and the ONDC Network Policy.  
8.1. Implementing Reasonable Security Practices and Procedures 
8.1.1. Network Participants will be responsible for the implementation of reasonable security 
practices and standards as provided in Clause 8. 1.2 and have a comprehensive, documented 
information security programme (including, but not limited to, standard operating procedures, 
security principles and clearly defined chain of command) and policies that contain managerial, 
technical, operational and physical security control measures that are commensurate with the 
information assets being protected with the nature of business. 
8.1.2. For the security practices and standards, Network Participants must implement the safeguards 
that are no less rigorous than the accepted industry practices, including the international 
standards IS/ISO/IEC 27001 and COBIT, or any other equivalent or higher  standard or any 
other standard as prescribed under Applicable Law. 
8.1.3. If a Network Participant engages any Ecosystem Participant, such as a Technology Service 
Provider, for offering its services or products on the ONDC Network, it shall ensure that such 
Ecosystem Participant also complies with the clauses of this Chapter. 
8.2. Security Breach Procedure 
8.2.1. If a Network Participant becomes aware of a cyber security incident originating in/from their 
system, it must report the incident to the Competent Authorities within the prescribed time 
period as may be required under Applicable Laws. 
8.2.2. If Confidential Information or End User data may have been accessed, disclosed, or acquired 
without proper authorization and contrary to the terms of the Applicable Law, Network 
Participant Agreement or the Network Policy (“Data Breach”), such Network Participant must 
alert ONDC of such Data Breach or cyber security incident within 6 hours of being aware of 
such Data Breach. 
8.2.3. Network Participant must provide ONDC with all information reasonably necessary to fully 
understand the nature and scope of the Data Breach. ONDC shall prescribe the format and 
procedure for such reporting through a circular published on the ONDC website. 
8.2.4. Network Participant should on a best effort basis attempt to immediately prevent any attempt 
of unauthorised access or disclosure of the Confidential Information or End User data and take 
such steps to secure the Data Breach or possible cyber security incident. 
8.2.5. To the extent ONDC is required under Applicable Law, it shall provide notice or information 
relating to the Data Breach to any Competent Authority or all affected parties. 
8.3. Certification 
 
1Ecosystem Participant shall mean any participant in the ONDC ecosystem other than Network Participants, and includes 
the Technology Service Providers, Sellers and other ONDC Network participants who may not have any direct contractual 
relationship with ONDC, but are engaged by the Network Participants in relation to activities carried out over the ONDC 
Network.   
8.3.1. At the time of onboarding with the ONDC Network, the Network Participant must (i) comply 
with the Certification Process as stipulated in Chapter 1 of the Network Policy; and (ii) provide 
an undertaking that it will comply with the Applicable Laws, ONDC Net work Policy and 
operational benchmarks once it has been onboarded in the ONDC Network. 
8.3.2. After one year from the date of onboarding with the ONDC Network, the Network Participant 
shall on a yearly basis: 
(a) provide a certificate in form of a report from an information systems auditor empanelled by 
ONDC or CertIn empanelled auditor  certifying the: (i) reasonable security practices and 
procedures implemented by the Network Participant; 
(b) provide ONDC an undertaking regarding its overall compliance and, if applicable, the 
compliance of the service providers engaged by such Network Participant, with the Network 
Policy as provided in Schedule 8A (Annual Undertaking), before three months from the date 
of completion of one year period or as extended at the sole discretion of ONDC.  
For clarity, the term ‘service providers’ in this clause shall not include Buyer Apps, Seller Apps 
and Gateways. 
(c) Network Participant shall ensure, in the best of their efforts, that there is no/minimum disruption 
to any stakeholder of the ONDC Network due to any App deployment or App maintenance by 
the Network Participant.  
8.4. Audit 
8.4.1. In case of a cybersecurity incident, ONDC may audit the Network Participant's information and 
communication technology systems ( ICT) related to ONDC operations , either by itself or 
through an auditor appointed by ONDC. ONDC will clearly communicate the purpose of such 
audits. The continuation of operations as a Network Participant shall, at all times, be dependent 
upon the said audit confirming the Network Participant's compliance with the requirement in 
question. Any failure in compliance of the same, if confirmed in the audi t, may result in 
disciplinary action such as fines or suspension/termination of access to the ONDC Network.   
8.4.2. It is clarified that ONDC will not audit entities in the financial services domain that are regulated 
by the Reserve Bank of India, the Securities and Exchange Board of India, or the Insurance 
Regulatory and Development Authority of India, such as lending institutions. However, ONDC 
may require these Network Participants to submit a summary report from a CERT -In 
empanelled auditor, only in relation to such Network Participant’s ONDC operations. 
8.4.3. ONDC shall provide a reasonable advance notice to the Network Participant to undertake the 
audit. However, ONDC may order an audit without any advance notice in case of an emergency, 
such as a major data breach, the commission of a major crime, or an incident that threatens the 
integrity of the ONDC Network. ONDC shall, in all cases, provide a reason for ordering the 
audit in the notice ordering/requiring it. 
8.4.4. Network Participant must extend full cooperation and provide such explanation as may be 
required for the purpose of any inspection or audit authorised by the Competent Authority or 
other authorised official of ONDC regarding the Network Participant's non -compliance with 
the Applicable Law or the Network Policy. 
 
   
DEFINITIONS 
Certification Process means the validation report or certificate obtained from a third -party auditor or 
a certifying agency duly recognised by ONDC or by ONDC itself in relation to the Network Participant's 
compliance with the ONDC Protocol Specification.  
Data Breach has the meaning ascribed to it in Clause 8.2.2.   
Schedule 8A 
I, a Network Participant of the ONDC Network, hereby declare that I am in compliance with all 
requirements under Applicable Law and in full compliance with ONDC Network Policy. 
I further undertake that all service providers engaged by me for providing any service or product on the 
ONDC Network are also in compliance with this Network Policy to the extent applicable.  
I understand that if any information is found to be false, ONDC reserves the right to take any other 
action as prescribed under the Network Policy, including the right to suspend my access to the ONDC 
Network, and take necessary recourse as applicable under the Applicable Law. 
   
 
Version History 
Version Date Description 
0.3 3rd October 2022 Released to NPs 
1.0 22nd October 2022 - Added “Applicable Laws” to Clause 8 
- Clarified language on security standards in clause 8.1.2 
- Harmonised the clause on minimum disruption with the 
uptime requirements in Chapter 2: Business Rules 
- Removed ambiguity in clause 8.3.2 regarding undertaking 
related to compliance by Ecosystem Participants 
- Removed obligation on recertification following a Major 
App Update 
- Added a notice requirement for ordering an audit, 
including a requirement to provide a reason for the audit 
- Fixed definitions section 
- Annexure amended to clarify that the undertaking has to 
be on behalf of service providers engaged by the Network 
Participant 
2.0 15th February, 
2024 
Simplified and Rationalised Chapter released to NPs 
2.1 05th December, 
2024 
- Simplified Security Breach Procedure in Clause 8.2.5 
- Expanded Certification Options (Clause 8.3.2(a)): 
Network Participants can now provide a certificate from 
either an ONDC-empaneled auditor or a CERT-In 
empaneled auditor, offering greater flexibility in 
certification requirements 
- Clarified that audits by ONDC are limited to ICT systems 
related to ONDC operations 
- Clarified that audit of entities operating in financial 
services domain 
 

--- FILE: Chapter 1: Onboarding, compliance requirements and certification requirements | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/governance-and-policies/CHAPTER-%5B1-Onboarding-Complianc-Requirements-and-Certification-Requirements.pdf ---
---

 
CHAPTER [1]: ONBOARDING, COMPLIANCE REQUIREMENTS AND CERTIFICATION 
REQUIREMENTS  
PURPOSE OF THIS CHAPTER 
The objective of this chapter is to lay out the eligibility criteria and process for an entity to join the 
ONDC Network as a Network Participant. The provisions of this chapter apply in addition to the 
obligations/ requirements under the Applicable Laws. This chapter is to be read in conjunction with any 
notifications and technical specifications issued by ONDC from time to time. 
1.1. Eligibility Criteria 
Entities interested in being onboarded on the ONDC Network as a Network Participant 
(Applicant) must meet the following criteria, as amended from time to time, for being eligible 
to access the ONDC Network:  
(i) NP-ISN (Inventory-based Seller Side App): To be an NP-ISN, the Applicant shall be 
a business registered and/or incorporated as per the applicable laws of India. The 
Applicant must hold an active TAN and PAN issued by the Income Tax Department.  
(ii) NP – MSN (Marketplace-based Seller Side App) and NP-BN (Buyer Side App): To 
be an NP -MSN or NP -BN, the Applicant shall be a company incorporated and/or 
registered under the applicable laws of India. The NP -MSN and NP -BN must hold an 
active TAN and PAN issued by the Income Tax Department.  
(iii) Gateway: To be a Gateway, the Applicant shall be a company incorporated and/or 
registered under the applicable laws of India. An entity operating as NP -MSN, NP-BN, 
or NP-ISN shall not have the ability to exercise material influence over the management, 
affairs, or strategic commercial decisions of Applicant.  
For the purpose of this clause, material influence means the presence of factors that give an entity the 
ability to influence the affairs and management of the other entity, including factors such as 
shareholding, special rights, status and expertise of an  enterprise or person, board representation, 
structural/financial arrangements, etc. Some parameters that may be used to determine the presence of 
material influence could include: (a) shareholding conferring more than 50 percent of the voting rights; 
(b) ability to veto strategic decisions, (c) operational control by virtue of commercial cooperation 
agreements with or without involving equity, and (d) ability to control majority of the Board 
composition. It is clarified that providing business grants, loans, and other financial solutions by banks 
and other financial institutions in the normal course of business and any rights granted to banks and 
other financial institutions in this regard will not be construed as material influence. 
(iv) Other Network Participants not mentioned in 1.1 (i), (ii) (iii) above: As published by 
ONDC on its official website: www.ondc.org from time to time and such publication 
shall be read as part of this Network Policy. 
1.2. Onboarding conditions of Applicants 
1.2.1. The Applicant must demonstrate compliance with the Technological Requirements as provided 
in Schedule 1C. 
1.2.2. Network Participants shall ensure that settlements with each other are in accordance with the 
Reconciliation and Settlement Framework (RSF), as amended from time to time. 
1.2.3. ONDC reserves the right to grant exemptions to Network Participants from the obligation 
provided under 1.2.2 under this clause, as detailed in Schedule 1D.  
1.2.4. ONDC may from time to time notify additional onboarding conditions for distinct categories of 
products or services.  
1.3. Onboarding Process 
1.3.1. The Applicant meeting the requirements as set out in Clauses 1.1. and 1.2 above, can apply to 
be onboarded with the ONDC Network.  
1.3.2. The Applicant can initiate the onboarding process by accessing the ONDC onboarding portal 
or by such other modes as notified by ONDC from time to time. 
1.3.3. The Applicant hereby agrees to provide accurate, current, and complete information specified 
during the onboarding process, including the process provided in Schedule 1A and 1B hereto . 
If such Applicant is onboarded as a Network Participant, it shall update such information to 
keep it accurate, current, and complete at all times. 
1.3.4. As part of the onboarding process, all Network Participants should complete each of the 
following processes: 
(i) Expression of Interest (EOI) : The Applicant must submit its EOI in the format 
prescribed in Schedule 1A. 
(ii) Role Selection: Upon ONDC’s acceptance of the EOI, Applicant will be required to 
select its intended Network Participant role(s) in the ONDC network. The mere 
acceptance of an EOI or the successful validation or verification of the information in 
the EOI does not guarantee the Applicant’s admission to the ONDC Network.  
(iii) Applicant Information: The Applicant will be required to provide information as 
listed in Schedule 1B for each of the roles selected by the Applicant.  
(iv) Verification of details: All information shared by the Applicant will be verified and/or 
validated by ONDC or a certification agency empanelled by ONDC (“ Certification 
Agency”). If any information shared by the Applicant fails verification or validation, 
the Applicant’s onboarding will be put on hold until the defects are cured. 
(v) Network Integration and Technical Certification:  
(a) Upon verification, Applicant will be required to submit all technical details of 
its application for integration with the ONDC Network in compliance with the 
ONDC Specification as provided in Schedule 1C  (ONDC Technical 
Specification and Certification Process). If an Applicant uses an application 
provided by a TSP certified by ONDC, ONDC may exempt such Applicant 
from having to submit the information specified in this Clause 1.3.4(v)(a). 
(b) Upon submission of the technical details, ONDC or a Certification Agency will 
examine the application and whether such application conforms to the ONDC 
Specifications. Subsequently, ONDC will issue a response and integrate the 
Application with the ONDC Network through the certification endpoint.  
(c) After all requisite assessments are completed, ONDC or the Certification 
Agency, as the case may be, will inform the Applicant whether the certification 
was successful or not.. 
(d) If the certification is unsuccessful, an Applicant may reinitiate the certification 
process afresh. 
(vi) Policy and operational compliance certification:  
(a) The Applicant will be required to produce evidence of successful certification 
of compliance with ONDC Network Policies and operational parameters, 
either from ONDC itself or from a Certification Agency. 
(b) The operational parameters for being successfully certified under Clause 
1.3.4(vi)(a) will be published by ONDC and amended from time to time. 
(vii) Payment of ONDC Registration Fees: Applicant will complete the final step of 
paying the applicable fee (if any), as notified by ONDC from time to time. 
(viii) Acceptance of the ONDC Network Participant Agreement : After the successful 
technical certification and integration of the Applicant’s application, and successful 
certification of the Applicant being compliant with ONDC Network Policies and 
operational parameters referred to in Clause 1.3.4(vi), the Applicant will be required to 
confirm their acceptance of the Network Participant Agreement. The Applicant will be 
required to electronically sign the Network Participant Agreement using an electronic 
signature service approved by a certifying authority. 
1.3.5. By applying to be onboarded with the ONDC Network, the Applicant provides consent to the 
collection, processing, dealing, handling, transfer, use, storage, disclosure and sharing of any 
information in accordance with this Network Policy. Please note that ONDC will never ask the 
Network Participants to share personal data.  
1.3.6. The Participant acknowledges and agrees that ONDC may not have independently verified the 
information provided by the Participant and shall in no way be responsible or liable for the 
accuracy or completeness of any information. If the Participant provides any information that 
is untrue, inaccurate, not current, or incomplete, or ONDC has reasonable grounds to suspect 
that such information is untrue, inaccurate, not current, or incomplete ONDC reserves the right 
to suspend or terminate the Participant’s memb ership. The integrity and accuracy of the 
information transmitted on the ONDC Network by the Participant is the sole responsibility of 
the Participant. 
1.3.7. ONDC reserves the right to request the Network Participant to update the Applicant Information 
as and when required.  
1.3.8. ONDC reserves the right to request for any additional information from the Network 
Participant/Applicants to ensure that all services of ONDC are in accordance with laws, 
regulations, circulars, notifications, instructions etc. including but not limited to  Know Your 
Customer (“ KYC”) Norms /Anti -Money Laundering (“ AML”) Standards/ Combating of 
Financing of Terrorism (“ CFT”)/ Obligations under Prevention of Money Laundering Act 
(“PMLA”), 2002. 
 
  
Schedule 1A 
Details for EOI 
Applicant will be required to provide following information/ documents at the stage of the EOI: 
A. Legal Entity Name/ Business Name* (As per GSTN) - 
B. Email Id* 
C. Mobile No.* 
D. Business Address* (Primary Place of Business) 
E. PAN No.* 
F. TAN No. (Not applicable for Gateways) 
G. GST No.* (Primary Place of Business) 
      
 
 
 
   
Schedule 1B 
Applicant Information 
After completion of Role Selection process, the Applicant will be required to provide the following 
additional information:  
A. Domain (as per codification defined by ONDC);      
 
B. Type (as per codification defined by ONDC, multiple types supported for selection 
simultaneously);  
 
C. Subscriber Id and URL; 
 
D. Key pairs for signing and encryption;  
 
E. Digital signature certificate; and 
 
 
 
   
Schedule 1C  
ONDC Technical Specification/Certification Process 
At the time of onboarding  
1. Implement ONDC’s two-factor authentication (2FA) to verify the Applicant’s contact details;  
 
2. Share X.509 certificate for subscriber domain; 
 
3. Generate separate cryptographic key pairs - private and public - in the name of the authorised 
signatory of the Applicant (Registered Key Pairs) using secure cryptographic libraries for 
digital signature and encryption;  
4. if a Network Participant is desirous of being onboarded on the ONDC Network for multiple 
roles, such as a Seller Side App and Buyer Side App, or any other role notified by ONDC, it 
must generate separate Digital Key Pairs for each of the roles, respectively, provided that an 
entity selecting the role of a Gateway is not eligible to be onboarded as a NP-BN, NP-MSN or 
NP-ISN and vice versa on the ONDC Network; and  
5. share a digital copy of the public key of the Digital Key Pair with ONDC for verification and 
registration.  
6. Implement security measures: 
a. the BLAKE2b hashing algorithm to generate a hash of specified parameters of the 
elements of an order, to enable detection of any alteration to any transaction or 
message on the ONDC Network; and 
b. the Ed25519 signing algorithm - based on the Edwards-curve Digital Signature 
Algorithm (EdDSA) - to sign digital transactions. 
7. The Applicant and the Network Participants will be required to use the Digital Key Pair for 
signing the Network Participant Agreement and for all transactions and messages on the 
ONDC Network, as specified in the Network Policy and must ensure the private key of the 
Digital Key Pair is stored in a secure cryptographic wallet. 
8. All actions undertaken using a Digital Key Pair will be assumed to have been undertaken on 
behalf of the Applicant or Network Participant whose Digital Key Pair was used. If the 
private keys are leaked, the Applicant or the Network Participant (as applicable) will be 
responsible for all usage or actions undertaken with such private keys, until such keys are 
revoked by the Applicant or the Network Participant. 
Registering the App  
1. Applicant registers its API endpoints for call-backs with ONDC sandbox (using the subscriber 
URL to be used for registration to ONDC). 
 
2. Applicant initiates automation test instance in ONDC sandbox and triggers request to the 
ONDC sandbox seller APIs in sequence. 
 
3. ONDC sandbox seller app acknowledges each request by sending an acknowledgement to the 
corresponding Applicant’s App API endpoint.  
 
4. ONDC sandbox seller app verifies the request payload is in compliance with ONDC protocol 
specification. 
 
5. ONDC sandbox seller app sends API response, for each request, by triggering corresponding 
call-back to the registered API endpoint of the Applicant’s App. 
 
6. Applicant’s App sends acknowledgement to ONDC sandbox corresponding app on receiving 
the response. 
 
7. If all registered APIs pass the compliance test, the automation test is successful. 
8. Sufficient protection against unauthorised access to Network Participants as well as external 
actors using state-of-the-art information security framework and apparatus 
9. Must maintain software source -code hygiene employing software development best practices 
under SDLC 
 
 
   
Schedule 1D 
Exemption from the Reconciliation and Settlement Framework 
1. The following entities may be exempt on a case by case basis: 
a. If the Applicant demonstrates that it maintains a system that has all the essential 
functionality as provided in the Reconciliation and Settlement Framework 
b. If Applicant intends to operate in the following domains/ categories: 
i. Credit/lending 
ii. Insurance 
iii. Mutual funds 
To clarify, the automatic exemption under 3.b. only applies to the Applicant’s 
operations in the domains/ categories listed therein. Any operations in any other 
domains/ categories will need to comply with the requirements of this Schedule. 
   
 
Version History 
Version Date Description 
0.3 12th May 2022 Released to NPs 
0.31 10th June 2022 - Added digital signing and non-repudiation 
- Specified timelines for approving applications 
1.0 15th September 
2022 
- Changed chapter number from ‘4’ to ‘1’. Changed 
numbering of clauses and sub-clauses accordingly 
- Added nodal/settlement account requirement for 
Buyer and Seller Nodes 
- Added clauses for deemed Technical Certification 
for Applicants onboarding through Technology 
Service Provider (TSP) 
- Added clauses for Operational and Policy 
Compliance Certification of Applicants 
2.0 15th February, 
2024 
Simplified and Rationalised Chapter released to NPs 
2.1 05th December, 
2024 
- Added a clarification on the scope of material 
influence in clause 1.1 (iii) 
- Simplified Schedule 1B 
 
 
 

--- FILE: Chapter 3 Commercial Model | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/governance-and-policies/CHAPTER-%5B3%5D-Commercial%2BModel.pdf ---
---


 
CHAPTER [3]: COMMERCIAL MODEL  
PURPOSE OF THIS CHAPTER 
The aim of this chapter is to ensure that the various commercial terms of a transaction between Network 
Participants are in line with ONDC’s commitment to transparency, fairness and consumer protection. 
That includes (among other things) commissions/ fees/ charges, pricing of a product/service, minimum 
standards for disclosure of details of various fees & charges to the buyer, and the overarching rules 
governing settlement of payments between Network Participants. 
3.1. Commercial Components 
3.1.1. Participants involved in a transaction through the ONDC Network include the Buyer, Buyer App, 
Seller App, Seller/supplier/service provider, Gateway and Logistics Service Provider, as 
applicable. 
3.1.2. All commercial or contractual or transaction terms are between the Seller, Seller Side App, Buyer 
Side App, Logistics Service Provider, and the Buyer. The commercial or contractual terms may 
include, but are not limited to, price, shipping costs, payment methods and terms, date, period, and 
mode of delivery, and warranties and after-sales services related to products and services. ONDC 
does not determine, advise, have any control over, or in any way involve itself in the offering or 
acceptance of commercial or contractual or transaction terms between the Buyer Side App, End 
Users and other Network Participants. 
3.2. Price Transparency 
3.2.1. The Buyer App must show Buyer the final price for any product or service they want to buy or 
avail (Buyer Price), along with a detailed breakdown of the charges. This breakdown should list 
all mandatory and optional charges, such as delivery, postage, handling, discounts, 
conveyance/convenience fees, and any applicable taxes.  
3.2.2. For clarity, the Buyer Price payable by the Buyer will be the net cumulative of:  
(i) price for individual items or service (Declared Price)1; 
(ii) discounts (if any) provided by the Seller; 
(iii) other charges and fees such as packing fees, applicable taxes and convenience fees (if 
not included in the Declared Price); 
(iv) price for logistics services, as applicable; and/or 
(v) markup/ discounts provided; 
(vi) Buyer App/Seller App charges; 
(vii) Buyer App/Seller App discounts 
3.2.3. Buyer App Fee – The Buyer App may charge a finder fee as a percentage of the Total Order Value 
or a fixed amount per Successful Order from the Seller/service provider App, subject to the 
following terms: 
(a) The Buyer App may propose a finder fee on a dynamic and real time basis through the 
ONDC Protocol, in the form of a percentage of the Total Order Value or a flat amount 
in monetary terms2; and  
 
1 Declared Price should not be more than the MRP of the produce or services, as applicable  
2 As provided in the Definitions chapter, Total Order Value include logistics and other service charges 
that the Seller or Seller App levies, whether such charges are included in the Declared Price or 
indicated separately  
(b) The Buyer App fee will be negotiated with the Seller App on a real time basis before 
the order completion stage. A transaction can only be completed when the Seller App 
agrees to the Buyer App Fee. If the Seller App disagrees with the proposed Buyer App 
Fee, Buyer App may refuse to complete the transaction. 
3.2.4. For clarity, the Network Participant offering a discount will bear the cost of such discount. For 
example, if the Buyer App offers a discount of 5% on the Total Order Value, such cost will be the 
responsibility of the Buyer App alone.  
3.2.5. The Buyer App must ensure that all components of the Buyer Price will be displayed as separate 
line items for every Order.  
3.2.6. Notwithstanding anything mentioned above, in the event of any conflict between the commercial 
components and the Applicable Law in any domain, the Applicable Law will take precedence. For 
the Financial Services domain (i.e. credit, mutual funds, and insurance), the commercial 
components will be in ac cordance with the business model and the Applicable Law and 
consequently commercial components such as declared price, buyer price and total order value and 
references to Logistics Service Provider shall not apply. 
3.3. Other Charges 
3.3.1. ONDC Fee : ONDC may charge a nominal fee to Network Participants for every Successful 
Transaction. A notification shall be issued at least 30 days prior to the date from which such fees 
will be levied. 
Explanation: ONDC - being a non-profit company registered under Section 8 of the Companies 
Act, 2013 - will endeavour to charge the minimal feasible amount required to sustain its operations. 
3.3.2. In addition to the fees defined in Clause 3.3.1, ONDC may levy a one-time or recurring registration 
fee on all Network Participants.  
3.3.3. ONDC will provide all Network Participants with a prior notice of at least 30 days before the levy 
of any charge(s) specified under Clause 3.3.1 and 3.3.2. 
3.3.4. Gateway fees: Gateways may charge a fee from the Buyer App or Seller App or both, as per the 
agreement with the respective Buyer or Seller App, subject to the following:  
(a) ONDC will not be involved or responsible for any arrangement between the Gateway 
and other Network Participants.  
Provided that ONDC reserves the right to prescribe the maximum fees a Gateway may 
charge to Network Participants, if ONDC deems such a prescription to be necessary. 
(b) The Gateway Fees will not be included in the Buyer Price and will be separately paid by 
the Buyer Apps and/or Seller Apps. 
3.4. Payment and Settlement Process Flow for transactions and refunds on the ONDC Network 
3.4.1. For an Order on the ONDC Network, Network Participants shall ensure that settlements with each 
other are in accordance with the Reconciliation and Settlement Framework (RSF), as amended 
from time to time. 
3.4.2. ONDC reserves the right to grant exemptions to Network Participants from the obligation under 
3.4.1. 
   
Definitions 
Buyer App Fee shall mean the finder fee a Buyer App charges as a percentage of the Total Order Value 
or a fixed amount per Successful Order from the Seller App. 
Buyer Price shall mean the cumulative net price payable by the Buyer of the Declared Price and/or the 
price for logistics services and/or any mark up or discount offered by the Buyer App.  
Declared Price shall mean the final price declared by the Seller listed on the Seller App. 
COD shall mean cash-on-delivery payments. 
COD Order shall mean an Order for which the Buyer makes payment through COD 
Gateway Fee shall have the meaning ascribed to it in Clause 3.2.1 (ii) 
Logistic Service Providers are Seller Apps providing any one or more types of carriage services, which 
includes rail/road/sea/air transportation, or any other such services, engaged by the Network Participant 
for the purpose of delivery and fulfilment of orders placed through the ONDC Network.  
ONDC Fee shall mean the per transaction fee charged by ONDC.  
ONDC Registration Fee shall have the meaning ascribed to it in Clause 3.2.1 (i) 
Order shall mean all purchases made by the Buyer on the ONDC Network through the Buyer App, 
Seller App and Seller, Gateway and Logistics Service Provider, as applicable.  
Prepaid Order shall mean an Order for which the Buyer makes payment before the shipment of the 
Order. 
Return Window will be the number of calendar days from delivery or shipment or collection (as 
applicable), after which Withholding Amount will have to be settled, in case of no returns. 
Seller App Fee shall mean the fee charged by the Seller App as a percentage of the Total Order Value 
or a fixed amount per Successful Order from the Sellers for listing their catalogue items.  
Settlement Window shall mean the  specified number of working days from the date of collection, 
shipment or delivery or end of the Return Window, within which the Network Participants will settle 
the amounts owed to each other and other participants such as the Buyer, Seller or ONDC, as applicable. 
Successful Order shall mean all Orders that are completed or delivered to the Buyer. 
Total Order Value : The Total Order Value will be the Buyer Price not including the mark -
ups/discounts offered by the Buyer App.  
For clarity, the Total Order Value shall include logistics and other service charges that the Seller or 
Seller App levies, whether such charges are included in the Declared Price or indicated separately. 
Transaction Fees shall have the meaning ascribed in Clause 3.1.2. 
Transaction Level Contract means the terms and conditions, digitally executed through the ONDC 
Protocol, after obtaining explicit confirmation for the Order from the Buyer and Seller. 
Withholding Amount shall be a fixed percentage of the Total Order Value or a fixed percentage of the 
cumulative sum of the Declared Price of all products shipped or delivered on a particular day or a 
definite period vis-à-vis a particular Seller App withheld by the entity collecting the Buyer Price until 
the closure of the Return Window. 
 
 
 
 
 
   
 
 
Version History 
Version Date Description 
0.3 14th June 2022 Released to NPs 
1.0 15th September 
2022 
- Changed the Chapter Number from ‘9’ to ‘3’. Changed 
numbering of all clauses and sub-clauses accordingly 
- Removed the 3% cap on Buyer Finder Fee 
- Changed the base of calculation of the Buyer Finder Fee 
from Declared Price to Total Order Value 
- Added minimum advance notice period which ONDC will 
provide before levying any fees/charges 
- Added a functional definition of Logistics Service Provider 
- Added enabling clause for allowing ONDC to cap Gateway 
fees, if necessary 
- Removed the clause on calculation of the Seller’s 
Consideration 
- Amended definition of Purchase Order to reflect that the 
terms are executed through the ONDC Protocol  
2.0 15th February, 
2024 
Simplified and Rationalised Chapter released to NPs 
2.1 05th December, 
2024 
- Reorganised Clause 3.2.1 and 3.2.2 for better readability  
- Consolidated clauses for Buyer Price transparency into a 
structured framework under Clause 3.2 
- introduced Clause 3.2.1 for detailed breakdown of Buyer 
Price, enhancing buyer transparency 
- Clarified in Clause 3.2.6 that commercial components may 
differ in financial services domain 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
--- FILE: Chapter 4 Code of Conduct & Ethics | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/governance-and-policies/CHAPTER-%5B4%5D-Code-of-Conduct-Ethics.pdf ---
---

 
Chapter [4]: CODE OF CONDUCT & ETHICS 
PURPOSE OF THIS CHAPTER 
This chapter is intended to capture the overarching rules related to ethical behaviour by Network 
Participants and Ecosystem Participants with respect to their activities in the ONDC Network.  
4.1. General Guidelines  
A Network Participant must: 
4.1.1. report any breaches or compliance evasions by Ecosystem Participants associated with it, 
of any applicable provision of this Network Policy or other applicable policies framed by 
ONDC, in relation to the activities carried out on the ONDC Network, to ONDC. 
4.1.2. provide accurate information to Buyers, Sellers, and every interested party about the 
ONDC Network and its features.  
4.1.3. respect intellectual property rights, including copyrights, patents, trademarks and trade 
secrets of ONDC and all Network Participants and Sellers. 
4.1.4. not deliberately destroy or diminish the value or effectiveness of the ONDC Network 
through acts of commission or omission.  
4.2. Honesty, Fair Network Practices and Network Relationships:  
4.2.1. Network Participants and Ecosystem Participants must endeavour to deal with customers, 
partners, suppliers, competitors and other directors, officers and staff of other Network 
Participants and ONDC in a non-discriminatory manner.   
4.2.2. Network Participants must ensure that all statements, communications, and representations 
made to ONDC are accurate, complete, and truthful and made by authorised officials. 
Network Participants and Ecosystem Participants must refrain from making or attempting 
to make any misrepresentation, unauthorised commitments to or on behalf of ONDC.  
4.2.3. Network Participants must not impersonate any person or organization, or misrepresent or 
conceal their ownership or primary purpose.  
4.2.4. Network Participant shall not disguise the origin of any information transmitted on or 
through the ONDC Network for any transaction on the ONDC Network 
4.2.5. Network Participant must use the information that it may receive during the course of its 
business from other Participants’ in accordance with Applicable Law.  
Provided that nothing contained in this clause shall restrict the entry by Network 
Participants in their agreements with End Users or other Network Participants to determine 
and define their reciprocal rights and obligations in relation to ownership, use, storage, 
transfer and processing of any such information. 
4.3. Anti-Bribery & Anti-Corruption  
4.3.1. ONDC has a  zero-tolerance policy  with respect to  any form of bribery or corruption. 
Network Participants and Ecosystem Participants should not engage in any form of bribery 
or corruption, whether directly or indirectly through a third party. 
4.3.2. Without limitation to the situations described herein below, Network Participants and 
Ecosystem Participants: 
(i) are prohibited from directly or indirectly offering / promising / authorising bribes, 
commissions, or other similar improper payments or anything of value to anyone  
in any form to any person, including government officials, private persons, Buyers,  
Sellers, or their representatives, for the purpose of wrongfully obtaining an 
advantage while transaction on the ONDC Network or otherwise. 
(ii) shall not influence or attempt to influence ONDC onboarding process through any 
kind of gift, payment, remuneration or entertainment to ONDC employee or their 
Relatives or friends.  
(iii) are required to implement monitoring and enforcement procedures to ensure 
compliance with anti-corruption laws. 
(iv) are required to raise invoices and claims in line with the agreed services and 
supplies, along with all supporting documentation. 
4.4. Conflicts of Interest  
All Network Participants should strive to avoid situations where a conflict of interest might 
occur or appear to occur. In the event a Relative of an Key Managerial Personnel of Ecosystem 
Participant or Network Participant is an executive or director of ONDC or its shareholders and 
is in a position to influence the business decisions related to the Ecosystem Participant or 
Network Participant, it must disclose this information to ONDC. Further, conflicts of interest 
may arise when a director or executive of ONDC has, including but not limited to:   
4.4.1. significant ownership or interest in a Seller or Ecosystem Participant or Network 
Participant; or 
4.4.2. consulting relationship with such Ecosystem Participants or Network Participants or 
Seller. 
4.5. Protecting Confidential Information 
4.5.1. Network Participants may receive Confidential Information pertaining to other Network 
Participants or their End Users as a part of their routine business. Network Participants 
must never disclose Confidential Information (except where required by law or regulation, 
or as may be required for dispute resolution or for investigation by ONDC). Network 
Participants should maintain a confidentiality policy with which all its directors, officers, 
consultant advisors and staff are required to confirm compliance on a regular basis. 
4.5.2. Clause 4.7.1. will not prevent disclosure of any Confidential Information that is reasonable 
to disclose to (a) a Network Participant's employees, agents, sub -contractors, advisors or 
consultants with a need to know such information for its regular busines s activities (such 
as information shared by Network Participants as part of a transaction, through the ONDC 
Protocol), or (b) any Competent Authority having jurisdiction over the relevant Network 
Participant. 
4.5.3. Network Participant must ensure that all Ecosystem Participants engaged by it are in 
compliance with the confidentiality and privacy obligations; and that such confidentiality 
should be maintained even after the agreement between the Network Participant an d 
Ecosystem Participant expires or is terminated.  
4.6. Operational Principles 
Every Network Participant must ensure that: 
4.6.1. any personnel who engage with ONDC have the necessary authority to do so; 
4.6.2. employees are adequately trained in operating in the relevant areas they are assigned to 
and are aware of their own, and their organisation’s responsibilities as well as the relevant 
statutory acts governing the Network Participant, the Network Policies, as amended from 
time to time; and  
4.6.3. no Ecosystem Participant or Network Participant or person associated with the ONDC 
Network shall make illegal or fraudulent use of the ONDC Network. 
4.7. Enforcement 
4.7.1. If a Network Participant or Ecosystem Participant is in violation of the requirements of this 
Code of Conduct & Ethics, ONDC expects the Network Participant to inform ONDC 
immediately and remedy any such violation in a timely and sensitive manner. 
4.7.2. Failure by a Network Participant to remedy the violation may lead to a review, suspension 
or termination of the Network Participant’s relationship with ONDC. Specific terms for 
non-compliance with this Code of Conduct & Ethics will generally be covered wit hin the 
Network Policy and/or the respective agreements. 
4.7.3. The failure or omission by ONDC to insist upon strict performance and compliance with 
any of the provisions of this Code of Conduct & Ethics at any time shall not be construed 
as a waiver of ONDC’s rights under this Code of Conduct & Ethics, the Network Po licy, 
the respective agreement, at law, or in equity. 
4.7.4. ONDC has the right to revoke any membership to the ONDC Network in the event that the 
Network Participants violate Applicable Laws and/or prescribed Network Policies or the 
ONDC Agreement or engages in conduct that discredits or disgraces the reputation of  
ONDC and the ONDC Network.  
 
   
Definition 
 
Ecosystem Participant shall mean any participant in the ONDC ecosystem, other than Network 
Participants, and includes the Technology Service Providers (TSPs), Sellers and other ONDC Network 
participants who may not have any direct contractual relationship with ONDC, but are engaged by the 
Network Participants in relation to activities carried over the ONDC Network. 
 
Relative with reference to any person, means anyone who is related to another, if — (i) they are 
members of a Hindu Undivided Family; (ii) they are husband and wife; or (iii) if he or she is related to 
another in the following manner, namely:-  
a. Father: Provided that the term “Father” includes step-father; 
b. Mother: Provided that the term “Mother” includes the step-mother; 
c. Son: Provided that the term “Son” includes the step-son; 
d. Son’s wife; 
e. Daughter; 
f. Daughter’s husband; 
g. Brother: Provided that the term “Brother” includes the step-brother; or 
h. Sister: Provided that the term “Sister” includes the step-sister. 
   
Version History 
Version Date Description 
0.3 14th June 2022 Released to NPs 
1.0 15th September 
2022 
- Changed Chapter Number from ‘11’ to ‘4’. Changed 
numbering for clauses and sub-clauses accordingly 
- Clarified that sharing Confidential Information as 
part of Transactional Documents for the completion 
of a transaction is permissible 
2.0 15th February, 
2024 
Simplified and Rationalised Chapter released to NPs 
2.1 05th December, 
2024 
- Revised clause 4.2.5 to clarify that NPs have 
flexibility to define reciprocal rights 
- Clarified conflict of interest clause is applicable to 
KMPs  
 
 
 
 
 

--- FILE: Chapter 2 Business Rules | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/files/chapter_2__business_rules_v2.1.pdf ---

 
1 
CHAPTER [2]: BUSINESS RULES 
PURPOSE OF THIS CHAPTER 
This chapter aims to provide a framework to prevent anti -competitive, unfair and illegal behaviour by 
Network Participants in the ONDC Network. The provisions of this chapter are intended to ensure 
transparency, fair play, non -discrimination, and consumer protection in all activity carried out by a 
Network Participant in the ONDC Network. 
2.1 Roles and Obligations of Network Participants 
2.1.1 The Participant shall, at all times, ensure compliance with Applicable Law, applicable to its 
activities.  
2.1.2 The Participant must not engage in any activity or conduct any transaction on the ONDC 
Network that is illegal or unlawful or for which it does not have necessary permissions or 
licenses from the requisite Competent Authority. 
2.1.3 The Participant will extend reasonable support and assistance to ONDC and other 
Participants, including access to the documents and / or information as such Participants or 
ONDC may require from time to time for compliance under any Applicable Law. 
2.1.4 It is clarified that all information including but not limited to text, graphics, seller and buyer 
interfaces, visual interfaces, photographs and images, trademarks, logos, sounds, music and 
artwork, notes, messages, drawings (collectively ‘ Content’), is generated by the Network 
Participant or its End Users on the ONDC Network. ONDC has no responsibility or liability 
over such content. It is further clarified that ONDC neither originates nor initiates the 
transmission nor selects the sender and receiver of the transmission nor selects nor modifies 
the information contained in the transmission. 
2.2 Operations  
2.2.1 The Participant will ensure that  
2.2.1.1. its services are operational and available in the network ensuring uptime and 
meeting of other performance parameters as per Schedule 2A;  
2.2.1.2. It has put in place relevant policies and measures which ensure compliance 
with the Network Participant Agreement and the Network Policy, and shall update the 
same as and when they get amended.  
2.2.2 The Buyer Side App and Marketplace Seller Side App shall adopt reasonable safeguards to 
ensure that any End User using its services does not engage in the transmission of the 
information prohibited under the Information Technology (Intermediary Guidelines and 
Digital Media Ethics Code) Rules, 2021 as may be amended from time to time or any other 
applicable law. 
2.2.3 The Participant understands that its Content may be transferred, unencrypted, and involve 
(a) transmissions over various networks; and (b) changes to conform and adapt to technical 
requirements of connecting networks or devices and no claim shall lie again st ONDC for 
such transfer. However, if any Participant alters, modifies, changes any Content of another 
Participant, the Participant altering, modifying or changing such Content will solely be 
responsible for any loss incurred by the other Participant.  
2 
2.2.4 The Participant agrees to furnish all details and information pertaining to the Participant’s 
activities on the ONDC Network or in relation to the ONDC Network  as requested by 
ONDC from time to time. 
Relationship with other Network Participants 
2.2.5 If a Network Participant that operates a Gateway (P1) gains material influence over an entity 
operating a Buyer / Seller Side App ( P2), or vice versa, or if a third party gains material 
influence over both P1 and P2, the involved parties must: 
a. Modify their arrangement or relationship to eliminate the material influence, or 
b. Cease the operations of either the Gateway or the Buyer/ Seller Side App 
2.2.6 In case an entity operating a Buyer Side App or a Seller Side App ( E1) and an entity that 
operates a Gateway (E2) are Affiliates: 
a. such entities shall disclose their relationship to ONDC and to other Network 
Participants; 
b. E2 shall not share with E1 any information it receives from other Network Participants 
or ONDC during its operation of the Gateway without explicit consent from such 
Network Participant and/or ONDC, except such information as it would normally 
share with a ny unrelated Network Participant playing a similar role in the normal 
course of operations on ONDC; 
c. ONDC reserves the right to order E2 to submit regular reports on searches and 
responses, as may be specified, over and above the reporting requirements for 
Gateways which do not have material influence over Buyer/Seller Side Apps. 
2.3 Role and Obligations of Gateways  
2.3.1 Gateways shall multicast the search request received from Buyer Side App to all relevant 
and available Seller Side Apps and vice -versa, based on criteria, including but not limited 
to, location, availability, and other criteria enabled by ONDC. 
2.3.2 ONDC will neither be a party nor shall it have any liability or responsibility under any 
contractual arrangements between Gateways and Buyer/Seller Apps. However, Gateways 
must ensure that any commercial terms of such agreements do not violate the ONDC 
Network Policy.  
2.3.3 Gateway will not discriminate against or provide any preferential treatment to any Buyer 
Side App or Seller Sider App or their request or responses, and shall not provide any priority 
in terms of transmission of search results to a Network Participant over  the other Network 
Participants or independently filter, edit, modify, or select any search request or responses, 
except in terms of providing value-added services or other services. 
2.3.4 Gateway may provide value added services to Network Participants. In no instance will 
Gateway attempt to monetise, directly or indirectly, underlying search data and other 
transaction data received by Gateway as part of transactions on the ONDC Network. 
2.3.5 Gateway will ensure that it transmits all relevant and mandatory information received from 
a Buyer Side App or a Seller Side App to the Network Participants as per ONDC Protocol 
and in compliance with the Applicable Law.   
2.3.6 Gateway will periodically publish search requests and responses in compliance with the 
ONDC Network Data Governance Chapter.  
3 
2.4 Role and Obligations of Buyer Side Apps 
2.4.1 The responsibility for onboarding Buyers and the management of the end -to-end order 
lifecycle including but not limited to onboarding, displaying catalogue in response to search 
requests, order creation, enabling returns, cancellation, customer support, wi ll be the 
responsibility of the Buyer Side App as per the arrangement with other Network Participants. 
2.4.2 All Buyer Side Apps shall be required to: 
(a) route all search requests of End Users through Gateway and display only results 
received from the Seller Side Apps in the Network, unless permitted by ONDC. 
(b) all entities operating Buyer Side Apps in ONDC Network, who also ope rate a 
marketplace e-commerce entity in India outside the ONDC Network must: 
i. participate in the ONDC Network as a Seller Side App and shall make their 
existing catalogue available on a non-discriminatory basis;  
‘Non-discriminatory basis’ in this clause shall mean:  
a) that an End User accessing the Buyer Side App from a particular location 
should be able to get access to the complete catalogue of the Seller Side 
App. 
b) that the Buyer Side App may  provide filter functionality however they 
shall apply the same consistently without providing any unfair advantage to 
any seller outside or in the ONDC Network. 
c) that the Buyer Side App shall provide equitable opportunity to all Seller 
listings received through all Seller Side Apps. 
ii. use the same algorithm and logic that is used to show results of sellers or 
merchants onboarded on Buyer App’s marketplace for showing the Sellers of 
ONDC Network Participants;  
iii. ensure that the Buyer Side App offers its services on the ONDC Netw ork in a 
non-discriminatory manner with respect to all Seller Side Apps. 
(c) ensure all search results are displayed to the Buyer in a non -discriminatory manner, 
unless the product or service search result fails to display all information mandated 
under Applicable Law or the ONDC Network Policy. 
(d) it may prescribe uniform standards for search results to be displayed to the Buyer, so 
long as it publishes such standards on its website and application, and applies such 
standards consistently and fairly to all Sellers and Seller Apps 
(e) It must disclose to other Network Participants and ONDC, the key parameters of the 
logic used for sorting/listing search results, to ensure that Sellers are able to improve 
their ranking on listings or results 
(f) It must provide the Buyer the option to sort search results as per reasonable parameters 
relevant to the product/service in question, to enable the Buyer to make an informed 
purchase decision. 
(g) to prominently display the name of the Seller Side App offering the product/service, 
and must clearly convey the same to Buyer on their application at any time before the 
completion of the order, which may include the listing page with the search results or 
the product/service display page.  
4 
2.4.3 All Buyer Side Apps, must also comply with the following display obligations: 
(a) ensure that they faithfully display the descriptions of goods and services (including 
the features, price, photographs, terms of sale etc.) as relayed by the Seller and/or 
Seller Side App.  
(b) Buyer Apps may not modify the descriptions relayed by the Seller Side App and/or 
Seller in any way without obtaining explicit consent to do so from the Seller. 
However, the Buyer App may provide additional information over and above that 
relayed by the Sel ler App and/or Seller, so long as it clearly indicates that the 
information is provided by the Buyer App and not the Seller;  
(c) describe any differential treatment (such as sponsored results) that is given to goods, 
services or Sellers or Service Providers of the same category; and  
(d) take reasonable efforts to maintain a record of Sellers or Service Providers who 
repeatedly offered goods or services that have been removed by the platform under 
Applicable Law. 
2.4.4 The Buyer Side App will ensure that it displays all relevant and mandatory information 
received from Network Participants as per Applicable Laws to Customers / End Users. In 
the event any information or product listing does not have all relevant and mandat ory 
information as per Applicable Laws, the Buyer Side App shall have the right to not display 
the same to the End Users or Customers. 
2.4.5 The Buyer Side App should clearly display the return and refund policy for products and 
services to the Buyer (where applicable) . This policy should explain who can return, 
exchange, or get a refund, any additional requirements, and the time limits for doing so. This 
information should be based on what other network participants have provided and what the 
law requires. If the Seller Side App's policy doesn't allow returns, exchanges, or refunds for 
certain products, the Buyer Side App must let Buyers know about this both on the product 
listing page and before they finalize their order. 
2.4.6 The Buyer Side App involved in sale of goods in the retail domain must provide the Buyer 
with a live tracking link of the delivery personnel fulfilling the request, if such delivery is 
happening on the same day, as received from the Seller Side App. For deliveries on any 
other day, Buyer Side App shall provide the status of the delivery as received from the Seller 
Side App. 
2.4.7 The Buyer Side App will also ensure that it provides all information as required by ONDC 
Network Policy for building of the Scoring/Badging System as laid out in Clause 2.6.  
2.4.8 If the Buyer App mandates any specific product attribute, such requirements will be made 
accessible to other Network Participants. 
2.4.9 If a Buyer Side App caches the search results relayed by the Gateway containing details of 
the catalogue offered by Seller Side Apps, at the time of performing a search on the cache 
data, a parallel search request must be sent to the Gateway, to ensure inc lusion of Sellers 
that may have been added to the Network in the time between the previous update of the 
cache and the time of the search. Any Buyer App caching information must, at all times, 
comply with the time -to-live specified by the Seller Apps for e very field of the catalogue, 
and that they refresh their cached catalogues to ensure most recent listings are made 
available to the End User.  
5 
2.4.10 A Buyer Side App is free to avail the services of any one or more of the Gateways registered 
with the ONDC Network. 
2.5 Role and Obligations of Seller Side Apps  
2.5.1 In the retail domain, in sale of goods the responsibility for onboarding of Sellers and Service 
Providers made available in the Seller Side App and ensuring the management of the end -
to-end order lifecycle will be the sole responsibility of the Seller Side App. This would 
include, but not be li mited to, onboarding of Sellers and Service Providers, catalogue 
management, order management, invoicing and reconciliation, customer support, returns 
management, payments, refunds and exchanges, which the Seller App will manage on its 
own or in agreement with the Sellers and Service Providers onboarded by the Seller Side 
App and as provided in the Applicable Law. Seller Apps will clearly specify which services 
are offered by them, by Sellers and Service Providers.  
2.5.2 Seller Side App shall ensure that it provides the mandatory declaration in compliance with 
any Applicable Law mandating displaying of information for any category of products 
offered on the ONDC Network. 
2.5.3 Seller Side App should put in place a mechanism to ensure the accuracy and integrity of the 
information transmitted on the ONDC Network in respect of the goods or services offered 
by it as NP-ISN or by the seller as the NP-MSN to the Network Participants. To ensure this, 
will be the sole responsibility of the Seller Side App. 
2.5.4 Seller Side App must ensure they comply with the following obligations 
(a) ensure that all goods or services that are listed on their platform are discoverable on 
all Buyer Side Apps on the ONDC Network and will ensure that End Users always 
have access to the entire catalogue of goods or services offered by the Seller Side 
Apps. 
(b) Clearly communicate on their website or mobile application the criteria for refusing 
search requests or providing different treatment to Buyer Side Apps. This includes 
variations in prices, transaction terms, features, or add -ons. These criteria must be 
consistently and fairly applied to all Buyer Side Apps. 
2.5.5 If the Seller Side App provides logistics service, upon availing such a service, the Buyer 
should be provided, through the Buyer Side App, a live tracking link of the delivery 
personnel fulfilling the request, if such delivery is happening on the same day. For deliveries 
on any other day, the status of the delivery will always be made available. 
2.5.6 A Seller Side App is free to avail the services of any one or more of the Gateways registered 
with the ONDC Network. 
2.5.7 All Marketplace Seller Nodes (MSNs) that are operational in the retail domain shall conduct 
due diligence on all sellers and merchants they onboard. This due diligence must include 
collecting and maintaining the following information: 
● The name, address, telephone number, and email address of the merchant or its grievance 
redressal officer. 
● Identity proof that validates the identity of the merchant.  
● Where a merchant is a registered or incorporated business, its registration number or an 
equivalent means of identification.   
6 
● A self-certification by the merchant committing to only offer products or services that comply 
with the applicable laws. 
2.6 Scoring/Badging System 
2.6.1 ONDC will, in due course, by itself or through an authorised entity, create and maintain a 
Scoring/Badging system or registry for Sellers and Buyers on the basis of data that the 
Participants may provide with consent as required under the Applicable Laws. The 
Participant shall be responsible for the data provided to ONDC. For purposes of establishing 
the Scoring/Badging System, ONDC shall develop and publish the mechanisms of 
Scoring/Badging. 
For clarity , any data -shared with ONDC pursuant to this Clause 2.6 will not be 
construed as a violation of any other provisions in the ONDC Network Policy related 
to the protection of Confidential Information.  
2.6.2 ONDC shall create and maintain the Scoring/Badging System by itself or through a third 
party authorised by it and shall disclose the data or information provided by the Participants 
to such third party for the purpose of creating or maintaining the Scoring/Badging System. 
2.6.3 The Participant shall permit ONDC to use and exploit all information stored in the 
Scoring/Badging system relating to such Sellers or Seller Side App or the Buyer Side App, 
as ONDC deems fit. To this extent, the Participant shall obtain necessary consents under 
Applicable Law permitting ONDC for such continued use. 
2.6.4 Buyer Side Apps and Seller Side Apps must comply with ONDC's Policies and guidelines 
on the Scoring/Badging System which may include but are not limited to guidelines 
regarding uniquely identifying a Seller and a Buyer across the network.  
2.6.5 The Scoring/Badging System shall provide a consolidated rating for Buyers and Sellers and 
the Buyer Side Apps and the Seller Side Apps must provide for display of the reputation of 
relevant parties to the users to help them make their business decisions. 
   
7 
Definitions: 
Affiliates shall include related parties and associated enterprises, wherein: 
(i) Related parties shall have the same meaning as assigned to it in section 2(76) of the 
Companies Act 2013; 
(ii) Two enterprises shall be deemed to be associated enterprises -  
a. if the enterprises are related to each other through a common chain of directors or 
managing partners;  
b. if the enterprises are related to each other through a common chain of shareholders, 
where such shareholders hold not less than 5 percent per cent of the shareholding in the 
related enterprises;  
c. if the enterprises having 10 per cent or more common ultimate beneficial ownership;  
d. where one enterprise can exercise a right to veto any decision, appoint one or more 
director(s) or in any other manner influence other entity’s decision making on any 
matter either through its shareholding or through an agreement including a 
shareholders’ agreement;  
e. where one enterprise holds, directly or indirectly, shares carrying the voting power in 
the related entities; 
f. where any person or enterprise holds, directly or indirectly, shares carrying the voting 
power in the related entities;  
g. if there exists between the enterprises, any relationship of mutual interest, as may be 
prescribed by ONDC. 
 
 
 
 
 
 
 
 
 
   
8 
Schedule 2A 
Technical Performance Parameters for Network Participants 
1. All Network Participants, other than Gateways, are required to ensure uptime on best effort 
basis and must upfront publish online their availability  window as well as any scheduled 
downtimes. 
 
2. All Gateways will ensure that its services are operational and available in the network round -
the-clock ensuring 99.95 percent uptime except for scheduled and pre -published downtime. 
Gateways must ensure, on best effort basis, that their scheduled downtime  is as limited as 
possible, and shall in no case exceed 30 minutes in a month. 
 
3. Technical Performance parameters are subject to any force majeure events and ONDC may 
waive the failure of meeting the required technical parameters in such cases. All Network 
Participants must inform ONDC as soon as practicable if they face any technical issues due to 
force majeure events.  
 
 
 
   
9 
Version History 
Version Date Description 
0.2 10th June 2022 Second revision 
0.3 14th June 2022 Released to NPs 
1.0 15th September 
2022 
- Changed Chapter number from ‘8’ to ‘2’. Changed numbering 
of all clauses and sub-clauses accordingly 
- Renamed Chapter from “Network Participant Policies” to 
“Business Rules” to avoid confusion 
- Amended reporting requirements of cybersecurity incidents 
and breaches. Increased number of hours to report any 
incident from 2 to 6 
- Added clause to indemnify network participants in case if 
their content is modified by other Participants 
- Removed clause which restricts NPs from conducting security 
tests of the Network or other Network or Ecosystem 
Participants 
- Clarified clause mandating provision for entering GST details 
for B2B transactions 
- Added obligations on Buyer App to comply with Time To 
Live (TTL) declared by Seller App for their catalogue 
- Added obligation on Buyer Side Apps to be transparent about 
logic/algorithm used for listing search results 
- Added obligation on Buyer Side App to publish any 
prescriptions for minimum standards for displaying search 
results to Buyers 
- Buyer Side Apps allowed to not display search results of a 
product, if relevant and mandatory information required under 
Applicable Laws is missing 
- Number of days to report changes in information reported 
during registration increased from 2 to 7 
- Affiliates of Buyer or Seller Apps allowed to operate as 
Gateways subject to certain conditions 
- Added clarification that data shared by NPs for purposes of 
Scoring/Badging shall not be considered a violation of other 
provisions of the ONDC Network Policy (e.g.: 
confidentiality) 
- Changed the term ‘Reputation Ledger’ to ‘Scoring/Badging 
System’ 
- Harmonised grievance redress provisions with upcoming 
Issue and Grievance Management Policy 
1.1 6th June 2023 - Amended Clause 2.3.3 (k) for Buyer Apps to publish 
information on parameters for ranking  
10 
products/services/sellers on their website and mobile 
application 
1.2 8th July 2023 - Amended Clause 2.3.3 (k) to add proviso mandating Buyer 
Apps to offer alternative sorting options to buyers 
- Added Clause 2.3.3 (l) mandating Buyer Apps to display 
Seller App’s name to the Buyer before order completion  
- Amended Clause 2.3.4 (a) requiring Buyer Apps to collect the 
explicit consent of Seller to modify the Seller’s catalogue 
- Erstwhile Clause 2.4.6 is renumbered to Clause 2.4.6 (a) 
- Added Clause 2.4.6 (b) mandating Seller Apps to publish 
criteria to give any differential treatment to Buyer Apps 
2.0 15th February, 
2024 
Simplified and Rationalised Chapter released to NPs 
2.1 24th August, 
2024 
Added clause 2.5.7 requiring Marketplace Seller Nodes (MSNs) 
to conduct due diligence on sellers/merchants they onboard 
2.2 October, 2024 Amended clause 2.4.6, 2.5.1 to clarify that the obligation  is 
applicable to participants operating in retail domain 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

--- FILE: Chapter 5 Branding Guidelines | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/marketing-materials/chapter_5_%20branding_guidelines%20_%2001may2024.pdf ---

 
1 
 
CHAPTER [5]: BRANDING GUIDELINES 
PURPOSE OF THIS CHAPTER 
ONDC Mark shall be used by the Network Participants pursuant to execution of the Network Participant 
Agreement with ONDC. ONDC Mark may be used by other ecosystem participants including the 
Technology Service Provider ( TSPs), Sellers and other entities involved in the ONDC Network who 
may not have any direct contractual relationship with ONDC (Ecosystem Participant). The Ecosystem 
Participants may use ONDC Mark, for any commercial purposes in relation to its business, pursuant to 
a written permission or authorisation from ONDC. Any other person is not authorised to use the ONDC 
Mark, for any commercial purposes, without written permission or licence from ONDC. The terms of 
these Branding Guidelines shall apply to all usage of the ONDC Marks. In addition, the  Branding 
Guidelines also include provisions related to the use of Participants Mark by ONDC. This helps in 
promoting collaboration within the ONDC ecosystem and ensuring that everyone's contributions are 
properly acknowledged. 
Except as set forth below, nothing herein grants or should be deemed to grant anyone any right, title or 
interest in or to the ONDC Mark. All users of the ONDC Mark acknowledge that all rights to the ONDC 
Mark are the exclusive property of ONDC, and all go odwill generated through the use of the ONDC 
Mark will inure solely to the benefit of ONDC. Users of the ONDC Mark will not take any action that 
conflicts with ONDC’s rights in, or ownership of, the ONDC Mark. 
Any usage of the ONDC Mark shall be in accordance with the ONDC Mark Specifications laid out in 
Annexure I. 
Strict compliance with the Branding Guidelines is required at all times, and any use of the ONDC Mark 
in violation of these Branding Guidelines will automatically terminate the right, licence, any permission, 
approval, or authorisation to use the ONDC Mark. Notwithstanding anything, ONDC reserves the right 
in its sole discretion to modify the permission to use the ONDC Mark and to take any other action 
against any use that does not conform to these terms and conditions, infringes any ONDC intellectual 
property or other right, or violates Applicable Law. 
5.1. Guidelines for usage of the ONDC Mark by Network Participants 
5.1.1. The ONDC Mark does not indicate any guarantee of the services or products offered through 
the ONDC Network or services of the Network Participant. At no point shall the usage of the 
ONDC Mark imply endorsement, guarantee, or assurance of any product or service, the Buyer 
or Seller, or the Network Participant. The Network Participant shall make this clear to the 
Buyer by way of their terms and conditions. 
5.1.2. For all Network Participants, ONDC will enter into the ONDC Network Participant 
Agreement whereby ONDC will grant to the Network Participant a non -exclusive, royalty-
free, non-transferable, non-sub-licensable and limited right to use, reproduce, and display the 
ONDC Mark as per the terms and conditions set out herein. Upon the suspension / termination 
of the membership to the ONDC Network, all rights to use or access the ONDC Mark will 
cease immediately. 
5.1.3. Use of the ONDC Mark by a Network Participant signifies that a Network Participant is a 
member of the ONDC Network and adheres to the Network Policy.   
2 
 
5.1.4. Any advertisement with the ONDC Mark must be clear, accurate and not false or misleading 
so that Buyers or Sellers receive correct information before engaging with an advertisement 
or deciding to purchase a product or avail a service through the ONDC Netwo rk. 
Notwithstanding anything above, there must not be any association direct or indirect that links 
ONDC with any false or misleading advertising of any kind.  
5.1.5. ONDC Mark may be used as part of social media promotion campaign with hashtags such as 
#ONDC or any other variant representing the ONDC Network, provided such usage does not 
violate Clause 5.3 of these Branding Guidelines. 
5.1.6. A Network Participant may use the ONDC Mark on: (i) its website or application; (ii) online 
advertisements; and / or (iii) offline advertisements, without obtaining written permission of 
ONDC, at each instance. 
5.1.7. Network Participants must display the ONDC Mark in a clearly visible manner on their 
respective application and landing page for all transactions on the ONDC Network and in 
accordance with Clause 5.2, to ensure that Buyers or Sellers can readily identify the Network 
Participant as a part of the ONDC Network and thereby trust that the transaction will be in 
accordance with the Network Policy. 
5.1.8. ONDC Mark can be used only on the landing page of the Network Participant’s app or website 
and not with any goods or services listed or associated with such Network Participant. At no 
point shall ONDC usage imply endorsement, guarantee, or assurance of any product or service 
listed on any application of the Network Participant, the Buyer or Seller, or the Network 
Participant itself.  
5.1.9. Network Participant may use referential phrases such as "Powered by ONDC Protocol" or 
“member of ONDC Network” when referring to ONDC’s role, provided that the application 
is in fact compatible with, or otherwise works with, the ONDC Protocol Specification.  
5.1.10. Network Participant shall not use language such as “partner,” “partnership,” or “endorsed by” 
when referring to its relationship with ONDC. 
5.1.11. Network Participant shall not use the ONDC Mark as part of a sentence to mislead the Buyers 
or Sellers or as referring to ONDC endorsing or promoting a particular product or service. For 
example, Network Participants should not state, " Products listed or displayed through our 
application are (ONDC Mark) approved, so please use our application."  
5.1.12. Network Participant shall not use the ONDC Mark as a part of sentence that misrepresents 
ONDC’s role. For example, “Paid using ONDC”, “Delivered by ONDC” etc. 
5.1.13. Product images displayed by the Network Participant should not include any ONDC Marks, 
or variations, modifications, or anything confusingly similar to ONDC’s Marks. This 
includes, but is not limited to, any words or logos with the terms ONDC or Open Network for 
Digital Commerce. 
5.1.14. Network Participants shall ensure that the usage of the ONDC Mark is in accordance with the 
Do’s and Don’ts of the ONDC Branding, available at https://resources.ondc.org/marketing-
and-communication-resources. 
5.2. Guidelines for usage of the ONDC Mark by Ecosystem Participants  
3 
 
5.2.1. For all Ecosystem Participants, the use of ONDC Mark for commercial purposes is subject to 
a written permission, approval, or authorisation from ONDC, determined at ONDC’s sole 
discretion, granting the specific Ecosystem Participant a non-exclusive, non-transferable right 
to use, reproduce, and display the ONDC Mark as per the terms and conditions set out herein. 
The right to use the ONDC Mark may be terminated at ONDC’s sole discretion. 
5.2.2. Ecosystem Participant should include the following statement in and on any materials that 
display the ONDC Mark (written or electronic): " ONDC’s trademark is used under written 
permission from ONDC." 
5.2.3. Ecosystem Participant may use referential phrases such as “compatible with ONDC Protocol” 
when referring to ONDC’s role in a transaction, provided that the service provided by the 
Ecosystem Participant are in fact compatible with, or otherwise works with, the ONDC open 
protocol. 
5.2.4. Use of the ONDC Mark by the Ecosystem Participant signifies that the Ecosystem Participant 
adheres to the Network Policy and is associated with the ONDC Network.  
5.2.5. Clause 5.1.1, 5.1.2, 5.1.5, 5.1.6, 5.1.11, 5.1.12, 5.1.15 and 5.3 will be applicable to all usage 
of the ONDC Mark by any Ecosystem Participant.  
5.3. Restrictions on usage of the ONDC Mark 
The ONDC Mark should not be used in any of the following ways ( General ONDC Mark 
Restrictions), unless stated otherwise in these Branding Guidelines. These restrictions are applicable 
to use by third parties for non -commercial purposes as well.  
5.3.1. Disparaging use: In a way that is, in ONDC’s sole opinion, misleading, unfair, defamatory, 
infringing, libellous, disparaging, obscene or otherwise objectionable to ONDC, the ONDC 
Network or Network Participants or products or services displayed by or through any Network 
Participants, or in a manner which, in ONDC’s opinion, lessens or otherwise damages 
ONDC’s reputation or the goodwill in the ONDC Mark.  
5.3.2. Endorsement: In any manner that might imply a relationship or affiliation with, sponsorship, 
or endorsement by ONDC, or that can be reasonably interpreted to suggest that any product 
or services or content has been authorised by or represents the views or opinions of  ONDC, 
including but not limited by the usage, in the name of a person’s business, group, event, 
product, service, application, domain name, social media account, or other offering.  
5.3.3. Prominent use : Used more prominently than the marks associated with a person’s own 
product or services or on promotional materials for products or services being distributed or 
sold. 
5.3.4. Media and Publication: The ONDC Mark should not be used in the title or otherwise on the 
cover of books or other publications, television or film or video production, title of blogs or 
otherwise in the blog except as a descriptive reference to ONDC or the ONDC Network, 
without prior written approval, permission, or authorisation of ONDC.  
5.3.5. Merchandised items: The ONDC Mark is not permitted for use on apparel or merchandise 
items such as T-shirts, mugs, packaging, other memorabilia, without prior written approval, 
permission, or authorisation of ONDC.  
5.3.6. ONDC trade dress: Imitate the distinctive ONDC Marks, website design, logo, or typefaces.  
4 
 
5.3.7. Slogans and taglines : Use or imitate an ONDC slogan or tagline, without prior written 
approval, permission, or authorisation of ONDC. 
5.3.8. Domain names: Use an identical or virtually identical ONDC Mark as a second level domain 
name or register or attempt to register any domain names identical or similar to ONDC Marks. 
5.3.9. Business, product, or service name : Use or register or attempt to register, in whole or in 
part, ONDC, Open Network for Digital Commerce, or any other ONDC Mark or alterations 
thereof which is identical or similar to the ONDC Mark, as part of its business name, trade 
name, trademarks, product name, or service name. 
5.3.10. Advertisement: The ONDC Mark should not be used in connection with any misleading 
advertisement or unfair trade practices as defined under Applicable Laws 
5.3.11. Variations: Use a variation, phonetic equivalent, foreign language equivalent, take -off, or 
abbreviation of the ONDC Mark for any purpose.  
5.3.12. Misleading Use: By usage of the ONDC Mark, no person shall mislead Buyers or Sellers 
indicating any sponsorship, affiliation, or endorsement with the ONDC Mark.  
5.3.13. Contrary to Applicable Law : Use the ONDC Mark on any website, platform, application 
that contains or displays adult content, promotes gambling, involves the sale of tobacco or 
alcohol to persons under the prescribed age as per Applicable Law, or otherwise violates any 
law or regulation. 
5.3.14. Challenge ONDC's rights in the ONDC Mark : All Ecosystem Participants hereby agree 
not to challenge or assist others to challenge ONDC rights in the ONDC Mark.  
5.4. Guidelines for usage of Network Participants Mark by ONDC 
5.4.1. ONDC may use the Participant’s Mark only on its Network and website or any other related 
material as provided by the Participant and in line with the Network Participant Agreement. 
The Participant’s Mark will be used by ONDC to confirm that the Participant  is part of the 
ONDC Network. ONDC will use the Participant’s Mark 'as is,' without any modification. 
ONDC shall follow the Participant’s branding guidelines (if any), provided that the Participant 
has explicitly shared these guidelines with ONDC by writing to Comms_team@ondc.org. 
5.4.2. Related materials under Clause 5.4.1 may encompass announcements on social media, 
introducing and confirming that the NP is now part of the ONDC Network.  
5.4.3. Any updates or changes to the Mark or branding guidelines of the Participant must be 
communicated in writing by the Participant. 
5.4.4. ONDC may use the Participant’s Mark for which Network Participant has given the 
representation establishing the ownership and title, licence, or right to use, as applicable of 
the Mark provided by the Network Participant to ONDC for display on its Network or website 
or related material.  
5.4.5. In instances where a Network Participant possesses merely a license to distribute or retail 
products under a third-party brand owner’s mark without the requisite authority to sublicense 
or otherwise grant rights in such mark to ONDC, the Network Participan t shall not be 
obligated to confer upon ONDC any rights or licenses pertaining to the third -party brand 
owner's intellectual property.  
5 
 
ANNEXURE I  
ONDC MARK SPECIFICATIONS 
Usage of the ONDC Mark, including its visual, graphic, or textual elements, must always be in 
accordance with the specification set forth below (ONDC Mark Specifications):  
(a) Minimum size: The ONDC Mark must be no smaller than 1” wide for print or 72 pixels on 
screen. The letter size of ONDC must not be more less than 50% of the largest letter in the 
Network Participant Brand. Always reproduce the ONDC Mark at a size that is clear and 
legible. 
(b) White background: The ONDC Mark is designed for white background and must always 
appear on a white background. If the usage context is a colour other than white, then a white 
rectangular area with 20% extra space on all 4 sides of the logo needs to be used as a 
background. Under no circumstance should the ONDC Mark be placed on any background 
which interferes with the readability or display of the ONDC Mark. 
(c) Minimum clear space: ONDC Mark must appear in an uncluttered space, free from text and 
other graphics. The amount of clear space around the ONDC Mark should be equal to or greater 
than the height of the 'O' in the ONDC Mark, as used in the particular instance. 
(d) Usage of ONDC name in text : When referencing ONDC in text, ensure all letters are in 
uppercase with no space in between i.e., “ONDC”. The name ONDC must appear in the same 
font as its surrounding text. The name must not be modified in any way.  
(e) Suffix/prefix: The standalone ONDC Mark without any suffix such as Network or Protocol 
can only be used after a prior written permission or authorisation from ONDC.  
(f) Parity: In communications that promote more than one mark, the ONDC Mark must be 
presented with size, frequency (where possible), colour treatment, location, and prominence 
equal to that of all other marks and / or logos presented. 
(g) Latest version: Users of the ONDC Mark must ensure that they use the updated version of the 
ONDC Mark, as available at www.ondc.org/brand. A user should not use the ONDC Mark 
downloaded from Google or any other search engine. 
(h) Avoid alterations: All use of the ONDC Mark must ensure that the ONDC Mark is not altered 
or modified in any manner, including but not limited to, stretching, squeezing, rotating, or 
changing the colour, proportion, or font of the ONDC Mark, or adding or removing any 
element(s) to or from the ONDC Mark. 
(i) Translations: ONDC Mark must appear in English only. The ONDC name must not be 
translated into other languages nor appear in another alphabet, except for specific authorised 
versions as notified by ONDC from time to time. 
   
6 
 
DEFINITIONS 
Branding Guidelines shall mean the terms and conditions set out in Chapter 5.  
General ONDC Mark Restrictions shall mean the restrictions set out in Clause 5.3.  
ONDC Brand shall mean the words ONDC or its full form when used online or offline. 
ONDC Mark shall mean the relevant trademarks and /or service marks, trade names, whether registered 
or unregistered, owned, or licensed, and any other marks as provided in writing by ONDC and includes 
ONDC Brand. 
ONDC Mark Specification shall mean the specifications set out in Annexure I to Chapter 5. 
Participant’s Marks  shall mean the relevant trademarks and /or service marks in relation to the 
Agreement or Network Policy as provided to ONDC by the Participant in writing from time to time. 
Do’s and Don’ts of ONDC Branding: Guidelines issued by ONDC for using the ONDC Mark 
   
7 
 
Version History 
Version Date Description 
0.3 6th June 2022 Released to NPs 
1.0 15th September 
2022 
- Eased restrictions on display frequency of 
ONDC Marks in promotions containing 
multiple marks 
- Definition of adequate clear space made clearer 
- Added clarification on definition of unfair trade 
practices 
- Added clause to forbid misrepresentation of 
ONDC’s role in a transaction 
1.1 24th July 2023 - Removed a clause to clarify the use of ONDC 
Mark in relation to the transactions.  
- Harmonise some clauses to remove ambiguity 
and added some examples of permissible and 
non-permissible language  
- Added explicit reference to Do’s and Don’ts of 
ONDC Branding Guidelines 
- Clarified that the use of standalone ONDC 
Mark without suffixes such as Network or 
Protocol is prohibited  
2.0 15th February 
2024 
Simplified and Rationalised Chapter released to NPs 
2.1 1st May 2024 Added clause clarifying usage of NP Marks by 
ONDC 
2.2 05th December, 
2024 
Clarified that ONDC will use the Participant’s Mark 
'as is,' without any modification. ONDC shall follow 
the Participant’s branding guidelines (if any), 
provided that the Participant has explicitly shared 
these guidelines with ONDC. 
 

--- FILE: Chapter 9: Governance and Disciplinary Policy | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/files/chapter_9_final_governance_and_disciplinary_policy.pdf ---

 
CHAPTER [9]: Governance and Disciplinary Policy 
 
Version History 
Version Date Description 
0.3 16th May 2024 Released to NPs for feedback 
1.0 21st August 2024 Final Policy incorporate feedback 
 
     
Scope: 
ONDC's effective and proportionate enforcement of its Network Policy plays an important role in the 
pursuit of its overall objective of maintaining fairness and openness in the ONDC Network to promote 
effective competition and enhance the integrity of the ONDC Network.  
This chapter details the procedures for addressing non -compliance of the Network Participant 
Agreement or the ONDC Network Policy by Network Participants. The Disciplinary Process is initiated 
in response to violations, and the subsequent actions are detailed herein. The Applicability of this Policy 
is limited to ONDC Network Participants.  
9.1. Guiding Principles of Governance and Disciplinary Policy 
9.1.1. The strength of ONDC's Disciplinary Policy relies heavily on maintaining an open and 
cooperative relationship with Network Participants. 
9.1.2. ONDC is committed to undertaking Disciplinary Action transparently, proportionately, and 
responsively that is based on the actual or expected impact on the complainant, ONDC 
Network and End Users. 
9.1.3. ONDC prioritizes fair treatment in the exercise of its disciplinary powers, ensuring equity and 
impartiality. 
9.1.4. ONDC's enforcement aims to influence the behavior of the parties involved, deterring future 
non-compliance, and, where appropriate, addressing any harm caused by the non-compliance. 
9.1.5. Disputes arising out of the following are not within the scope of this Policy: 
9.1.5.1. Disputes arising from contractual relationships/transaction level contract between 
Parties and/or their End Users; or 
9.1.5.2. Any request received from law enforcement agencies by ONDC will be handled in 
accordance with ONDC’s obligations under the applicable law. 
9.2. Complaints and first-level resolutions  
9.2.1. ONDC may use a combination of human and automated evaluation to review a Network 
Participant’s behaviour on the ONDC Network to detect and assess practices that may 
potentially be in violation of the ONDC Network Policy or the Network Participant 
Agreement. Such detection may be also made through additional methods, including, but not 
limited to, complaints by (a) Network Participants or Ecosystem Participants, (b) End Users, 
and (c) any other person. 
9.2.2. Once detected, the alleged policy-violating practices will be flagged to the concerned Network 
Participant. Wherever possible, the Network Participant is encouraged to collaborate with 
ONDC or the complainant, as the case may be, to resolve the issue provided in the allegations, 
within the prescribed timelines.  
9.2.3. If the concerned Network Participant fails to undertake remedial action within the prescribed 
timelines, the issue will be flagged to the ONDC’s Committee for Disciplinary Action 
(ONDC Disciplinary Committee / Committee ) for investigating and determining 
Disciplinary Action. The Committee may direct the Network Participant to make available to 
it requisite documents, logs, data, or other such records/information as may be required to 
perform its functions.   
9.2.4. If the ONDC Disciplinary Committee determines that a Network Participant’s conduct has 
violated any of ONDC Network Policies or the Network Participant Agreement, ONDC will 
take appropriate action as outlined in this Chapter ( Disciplinary Action ). ONDC will 
communicate the relevant information about the action ONDC has taken through e -mail and 
or any other relevant medium along with instructions on how to appeal or submit for review 
if the participant disagrees with the Disciplinary Action taken (“ Disciplinary 
Communication”). 
9.3. ONDC Disciplinary Committee 
9.3.1. The ONDC Disciplinary Committee (“Committee”) will be appointed by the CEO of ONDC, 
and will be presided over by the President, Network Governance, or any other member 
appointed by the CEO from time to time.  
9.3.2. The presiding officer may request additional ONDC officials, for support, as and when 
required. 
9.3.3. The Committee retains the authority to set criteria to evaluate complaints, and can reject 
complaints if it fails to meet the criteria. These criteria, subject to potential evolution over 
time, may encompass essential details such as the requisite informat ion/documentation for a 
complaint's consideration and the pertinence of the raised concerns. The Committee will 
exercise its discretionary power to establish these criteria judiciously, aligning with the 
principles of fairness, transparency, and procedural  regularity. Network Participants will be 
informed of the criteria and any updates to ensure clarity and understanding.  
9.3.4. The decision taken by the Committee will be communicated to the defaulting Network 
Participant via e-mail or any other suitable medium. 
9.3.5. The Disciplinary Communication, among other things, will detail action taken by the 
Committee, rationale or reasons for the action, a mechanism to submit a review of the 
Committee’s decision, and the effect of non-compliance. 
9.3.6. Unless otherwise provided, the Committee’s decisions other than those related to suspension 
or termination or monetary penalty below INR 2 lakhs will not be appealable.   
9.4. Appellate Committee 
9.4.1. ONDC shall establish an independent Appellate Committee, with approval from the ONDC 
Board of Directors, to hear appeals related to suspensions and/or termination and/or monetary 
penalty above INR 2 Lakhs. The decision of the Appellate Committee shall be b inding on 
ONDC and the concerned Network Participants.  
9.4.2. Any Seller against whom action has been taken under clause 9.5.1.5 can also file an appeal 
before the Appellate Committee.  
9.4.3. The Appellate Committee may direct the Network Participant and/or ONDC and/or seller as 
the case maybe to make available to it certain documents, logs, data, or other such 
records/information as may be required to perform its functions. The Appellate Commi ttee 
may also take statements from witnesses and experts as may be required to perform its 
functions. 
9.4.4. The Appellate Committee may be composed of five (5) members, with expertise in e -
commerce, taxation, finance, law, information technology or any other relevant field, and one 
representative of ONDC. The ONDC Board of Directors may increase or decrease the number 
of members in the Appellate Committee.   
9.4.5. The names of individuals to be appointed to the Appellate Committee will be presented to the 
User Council for feedback. The feedback provided by the User Council will not be binding 
on ONDC 
9.4.6. ONDC shall create governing rules for the Appellate Committee and amend them from time 
to time, as required. The governing rules, among other things, shall provide for the following: 
a. Eligibility criteria to be appointed as a member of the Appellate 
Committee 
b. Term of office for each member 
c. Removal from the office 
d. Decision-making by the Disciplinary Committee 
e. Rules governing the proceedings (such as quorum, timelines etc). 
9.4.7. The Appellate Committee shall meet as often as it deems necessary. 
9.5. Disciplinary Action  
9.5.1. Unless otherwise provided in the Disciplinary Communication, the action taken by ONDC 
may be any or a combination of the following as provided in this clause in accordance with 
the principles laid out in clause 9.6.2. Please note that, unless provided to t he contrary, the 
Disciplinary Actions will remain in effect unless an appeal is granted.  
9.5.1.1. Warning plus cure time 
(a) This warning serves as a notice to the Network Participant, informing them of their 
non-compliance and the specific issues that need to be addressed to come into 
compliance. 
(b) The Network Participant will be given a specified period of time referred to as 
"cure time" during which they are expected to take corrective actions to remedy 
the identified violations. The duration of this cure time will be provided in the 
Disciplinary Communication. 
(c) During this cure time, the Network Participant is expected to rectify the issues, 
implement necessary changes, or take any corrective measures as specified in the 
warning. The Participant may request for additional time to undertake corrective 
actions. 
(d) The specific actions required for compliance will be outlined in the warning, and 
it is the responsibility of the Network Participant to follow these instructions 
within the given timeframe. 
(e) The Disciplinary Communication will specify Disciplinary Action that will be 
triggered in the event of failure to remedy violations within the cure time. 
9.5.1.2. Monetary Penalty 
(a) ONDC may levy a monetary penalty of up to INR 5,00,000 (Five lakh Indian 
Rupees) per violation on participants for violating ONDC Network Policy or the 
Network Participant Agreement. 
(b) The payment method and timelines will be communicated to the participant in 
default. 
(c) Non-payment of penalties may attract further disciplinary actions. 
9.5.1.3. Suspension 
(a) In case of suspension, defaulting Network Participant will be temporarily 
unsubscribed from the ONDC Registry, and thus the Network Participant and its  
End Users will not be discoverable to other Participants in the Network or discover 
other Participants in the Network.  
To clarify, the defaulting Network Participant will be unsubscribed for a specific 
product/service domain or all domains, as may be determined in the Disciplinary 
Communication. 
(b) The production keys of the Suspended Network Participant will be 
deprecated/disabled thereby preventing the said Network Participant from using 
the ONDC Registry for various registry operation,s including performing a lookup, 
key validation. 
Production Keys refers to cryptographic access credentials enabling them to 
authenticate, transact and ascertain their identity on the ONDC Network 
(c) Any use of the production keys by the Suspended Network Participant for any 
other purposes such as conducting peer to peer transactions will not be recognised 
by ONDC  
(d) Suspended Network Participant will not be allowed to access the ONDC Network, 
except to fulfil orders or complete transactions entered into before the 
commencement of the suspension. 
(e) Suspended Network Participant will not be allowed to use ONDC Branding until 
the suspension is lifted.  ONDC reserves the right to remove the Suspended 
Network Participant’s Mark from the list of live NPs maintained or displayed by 
ONDC on its website or any other material. 
(f) The Participant’s discoverability and ability to discover other Network 
Participants through the ONDC Registry will be restored if the defaulting Network 
Participant meets the following criteria: 
(i) the Suspended Network Participant has complied with ONDC’s directions 
regarding the corrective action to be taken by the Network Participant 
(ii) the Suspended Network Participant has satisfactorily submitted a Quality 
Assurance test report as per the requirements defined under 
pramaan.ondc.org, as applicable. 
(g) Suspensions count as strikes against the good standing of the Network 
Participant’s position in the ONDC Network. Multiple strikes, as provided in 
Annexure -1,  can result in the termination of the Network Participant, depending 
on the nature and severity of violations. 
(h) The suspended Network Participant may file an appeal against the suspension 
notice within 30 days of receiving the Disciplinary Communication. The 
suspended Network Participant may file an appeal against the suspension notice 
within 60 working days in case of a unavoidable delay, along with an application 
seeking the condonation of delay, explaining the reasons for such delay 
9.5.1.4. Termination 
(a) Termination means that the Network Participant in question will be permanently 
unsubscribed from the ONDC Registry. Furthermore, termination will mean that 
the Network Participant Agreement between the ONDC and the NP stands 
terminated. 
(b) As provided above, multiple suspensions deemed appropriate by the Committee 
or suspensions for egregious policy violations may result in termination. 
(c) The terminated Network Participant will not be able to use the ONDC Registry.  
(d) End users of the terminated Network Participant will not be visible to users of live 
Network Participants. 
(e) In case a Network Participant - who has been terminated for a breach of the ONDC 
Network Policy or Network Participant Agreement - desires to rejoin the ONDC 
Network, it will have to undergo the onboarding process outlined in Chapter 1 of 
the ONDC Network Policy afresh, after a cooling-off period of one (1) year from 
the date of termination.  
(f) Within 10 days of being served with the termination notice, the Network 
Participant may prefer an appeal to the Appellate Committee. For the duration of 
the appeal proceedings before the Appellate Committee, the Network Participant’s 
termination shall be i n abeyance, but the Network Participant shall remain 
suspended. 
9.5.1.5. Other actions 
(a) In accordance with the Network Participant Agreement, ONDC reserves the right 
to initiate any other Action not specified in this clause in the event the Network 
Participant fails to comply with directions issued by ONDC. 
(b) ONDC can direct Network Participants to not deal with or provide services to or 
delist Sellers that engage in fraudulent or unlawful activity Network or whose 
actions threaten or compromise the integrity of the Network. 
(c) To enhance trust in the Network, ONDC, with the assistance of Network 
Participants, will maintain a record of Sellers who have previously been debarred. 
No Participant in the Network should onboard such debarred Sellers. 
9.6. Principles for determining Disciplinary Action 
9.6.1. As a network operator with limited resources, ONDC prioritises its resources in the areas 
which pose the greatest threat to ONDC Network and its Network Participants.  
9.6.2. In cases of non -compliance with the ONDC Network Policy or Network Participant 
Agreement, ONDC will consider various factors to determine the appropriate Disciplinary 
Action. These factors include but are not limited to: 
a. Willful or Reckless Violation: Examining whether the violation was intentional 
or carried out with disregard for ONDC Network Policy and Network Participant 
Agreement. 
b. Concealment: Investigating any attempts to hide or obscure conduct to mislead 
ONDC, End Users, or other Network Participant(s) regarding a violation. 
c. Pattern of Misconduct : Evaluating whether the violation is part of a repeated 
pattern or an isolated incident. 
d. Prior Notice : Considering whether the Network Participant was aware or 
reasonably should have been aware that the conduct constituted a violation or 
non-compliance with the ONDC Network Policy or Network Participant 
Agreement. 
e. Management Involvement: Assessing the organisational level at which willful 
or reckless conduct occurred and whether supervisory or managerial (Key 
Managerial Personnel) staff were aware or should have been aware of it. 
f. Non-financial Impact: Analysing whether the impact of the violation is limited 
to the defaulting participant or if it extends to adversely affect other Network  
Participants in the Network, including End Users of other Network Participants, 
or on ONDC. 
g. Financial Impact : Assessing whether non -compliance resulted in a financial 
impact on other Network Participants or on End Users of any Network 
Participant, or on ONDC. 
h. Time Sensitivity: Evaluating whether a delay in undertaking remedial action may 
significantly affect Network Participants in the ONDC Network, End Users, or 
ONDC. 
9.6.3. It's important to note that these factors are non -exhaustive, and ONDC may consider 
additional relevant aspects when determining the appropriate disciplinary measures. Any 
factors that aggravate the risk to the ONDC Network will attract greater penalties a nd/or 
shorter cure times, and any mitigating factors will lead to leniency in the disciplinary action.  
  
Process under Governance and Disciplinary Policy 
 
Annexure 1: Guidance on Risk Assessment Matrix for determining Disciplinary Action 
 
Parameter Scenario-wise severity 
Low Severity Moderate Severity High Severity Critical Severity 
Pattern of Conduct (in the past 3 months) First non-compliance 2-5 non-compliance 5-10 instances of non-
compliance 
More than 10 instances of non-
compliances 
Types of parties potentially or actually 
affected by the Violation 
Only the responsible 
NP affected 
Affected parties 
includes the 
responsible NP’s End 
User(s) 
Affected parties include 
other NPs and their End 
Users 
Affected parties includes a 
Gateway and/or ONDC and 
future operations of network 
are risk 
Number of parties potentially or actually 
affected by the Violation 
Small number of 
parties affected 
Moderate number of 
parties affected 
Large number of parties 
affected 
Very large number of parties 
affected 
Financial impact Small  Moderate High Very High 
Involvement of Key Managerial Personnel No Yes Yes Yes.  
Time-sensitivity (whether and how rapidly 
the impact of the Violation will worsen if not 
resolved) 
Delay in resolution 
will not significantly 
worsen the impact 
Delay in resolution 
will significantly 
worsen the impact, 
but the scale will be 
moderate 
Delay in resolution will 
worsen the impact rapidly, 
but is unlikely to disrupt the 
entire Network 
Delay in resolution could 
potentially disrupt the entire 
ONDC Network 
Scale of the cost and effort involved in 
recovery from the impact 
Can be resolved 
unilaterally by the 
responsible NP, 
without a large-scale 
effort 
Can be resolved 
unilaterally by the 
responsible NP, but 
will require a large-
scale effort 
Resolution will require 
coordination between 
multiple NPs and/or End 
Users and/or Ecosystem 
Participants 
Resolution will require 
coordination between multiple 
NPs and/or End Users and/or 
Ecosystem Participants, and 
large-scale efforts from each  
party 
Annexure 2: Non-exhaustive list of violations under ONDC Network Policy 
   
No Category of Violation NP Type Violation Clause 
1.  Discriminatory behavior Seller App Seller Apps not responding to search requests, despite the Buyer App meeting 
the criteria disclosed by the Seller App 
2.5.4 read with Notification No. 
2023/07/08/04 
2.  Discriminatory behavior Seller App Seller Apps sending differential terms/features of transaction to other Buyer 
Apps, and not adhering to the criteria disclosed by the Seller App 
2.5.4 read with Notification No. 
2023/07/08/04 
3.  Discriminatory behavior Buyer App Store/catalogue excluded by the Buyer App, despite the seller/catalogue/seller 
app is meeting the minimum requirements as published by the Buyer App  
2.4.2 
4.  Discriminatory behavior Buyer App Unfairly promoting its own sellers, and not showing the Seller App’s sellers  2.4.2 
5.  Discriminatory behavior Buyer App Ranking sellers low despite performing well based on sorting parameters 2.4.2 
6.  Discriminatory behavior All NPs  Failure to ensure that the content and catalogue on its App are always available 
to any End User in a non-discriminatory manner 
2.5.4 
7.  Discriminatory behavior Gateways Failure to multicast the search request received from Buyer Side App to all 
relevant and available Seller Side Apps and vice-versa 
2.3.1 
8.  Discriminatory behavior Gateways Discriminating against or provide any preferential treatment to any Buyer Side 
App or Seller Side App or their request or responses 
2.3.3 
9.  Discriminatory behavior Gateways Independently filtering, editing, modifying, or selecting any search request or 
responses 
2.3.3 
10.  Discriminatory behavior Gateways Monetising search level data 2.2.4 
11.  Discriminatory behavior Buyer App Failure to disclose information on parameters and logic for sorting, and/or 
minimum criteria for qualifying to be listed 
2.4.2  
No Category of Violation NP Type Violation Clause 
12.  Discriminatory behavior Buyer App Failure to disclose information about differential treatment given to any seller 
apps, sellers or products (e.g.: sponsored / featured / boosted results) 
2.4.3 
13.  Discriminatory behavior Buyer App Not sending search requests to Gateway, when running a search on own sellers  2.4.2 
14.  Discriminatory behavior Buyer App Unfair sorting/listing/display algorithm 2.4.2 
15.  Data Practice Seller App Using, sharing, or disclosing the personal data of a Buyer, without taking the 
Buyer's consent, for purposes other than - (a) payment collection, (b) order 
delivery, and (c) providing post-order confirmation services such as customer 
support etc 
7.1.5 
16.  Data Practice All NPs Not publishing a Privacy Policy 7.1.6 
17.  Data Practice All NPs Failure to notify any unauthorised access of any personal data after becoming 
aware 
7.1.8 
18.  Data Practice All NPs Breaching end user confidentiality or not protecting end user information (such 
as passwords, PII etc) 
8.1.1 
19.  Data Practice All NPs NP or its service provider not complying with Applicable Laws related to 
privacy and personal data protection 
Chapter 7 
20.  Info Security All NPs Failure to implement reasonable security practice 8.2 
21.  Info Security All NPs Introducing malware, trojans or viruses into the network 8.1.1 
22.  Info Security All NPs Withholding crucial information related to a security incident from ONDC 8.3.3 
23.  Info Security All NPs Overriding security of another network participant or ONDC, or gaining 
unauthorised access to another NP or ONDC's systems, or hacking 
8.1.2 and 8.1.3 
24.  Issue and Grievance 
Management 
Buyer 
App/Seller App 
Failure to establish adequate grievance redress mechanism Chapter 6 
25.  Issue and Grievance Buyer Failure to coordinate with other NPs to resolve grievance 6.2.7  
No Category of Violation NP Type Violation Clause 
Management App/Seller App 
26.  Unethical and Corrupt Practices All NPs Revealing confidential information  4.5 
27.  Unethical and Corrupt Practices All NPs Engaging in bribery or corrupt practices 4.3 
28.  Unethical and Corrupt Practices All NPs Failure to maintain transaction data and consent logs 7.1.9 
29.  Unethical and Corrupt Practices All NPs Misrepresenting its relationship with ONDC 4.2.2 
30.  Branding  All NPs Failure to adhere to ONDC’s Branding Guidelines Chapter 5 
31.  Violation of Applicable Laws All NPs Failure to comply with Applicable law (such as rules with respect to consumer 
protection, data protection, information disclosure, illegal content or product 
etc.) 
Across chapters/Action as 
directed by the Competent 
Authority 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

--- FILE: Chapter 7: Network Data Governance Policy | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/files/chapter_network-data-governance_v1-1.pdf ---

 
CHAPTER [7]: NETWORK DATA GOVERNANCE 
PURPOSE OF THIS CHAPTER 
This Chapter lays down the obligations of Network Participants with respect to protection of private 
and personal information. 
7.1. Personal data with Network Participants 
7.1.1. The Network Participants shall adhere and comply with all Applicable Laws governing privacy 
and handling of data, and hereby agree to utilise any Personal Data about a natural person, living 
or deceased, which is received, provided or in the possession of the Network Participant only 
per Applicable Laws. 
7.1.2. If the Network Participant engages any service provider, including but not limited to 
Technology Service Providers, for offering its services or products on the ONDC Network, it 
shall ensure that such service provider also complies with this clause 7.1.  
For clarity , the term “service provider” in this clause shall not include any other Network 
Participant that is a counterparty in a transaction on the ONDC Network. 
7.1.3. The Buyer App and Seller App, as the case maybe , shall ensure that it obtains the necessary 
consent from its respective End Users for collecting , processing, transmitting, storing, using, 
disclosing, sharing, dealing, handling or transferring Personal Data relating to natural persons 
on the ONDC Network. The consent must be explicit, and the purpose for which the consent is 
being obtained must be clearly communicated to the natural person before taking the consent.1 
7.1.4. The Network Participant collecting consent from their End User shall be responsible for 
conveying it to the other Network Participants, as required.2 
7.1.5. Unless otherwise agreed between by the Buyer and Buyer App, Buyer’s Personal Data received 
by the Seller App shall only be used for fulfilling the transaction. Seller Apps shall not use, 
share, or disclose the personal data of a Buyer, received in the cour se of a transaction, for any 
purposes other than:3  
i. Order confirmation, including payment collection (if applicable); 
ii. Order delivery (if applicable), and 
iii. providing post -order confirmation services such as customer support, grievance 
redress, return, refund, cancellation, updation in relation to the transaction 
without taking the Buyer’s explicit consent, as required under Applicable Law. 
To illustrate, Seller Apps cannot send unsolicited commercial or marketing communication to 
the Buyer, either directly or disguised under a transaction -related message or call or seeking 
customer feedback, without the Buyer’s explicit consent. 
Provided that, to the extent permitted under Applicable Law, nothing contained in this clause 
shall restrict the entry by Network Participants in their agreements with Buyers or other 
Network Participants to determine and define their reciprocal rights and obligations in relation 
to ownership, use, storage, transfer and processing of any such information 
 
1 Clause amended after consultation with the User Council 
2 Clause inserted by moving it to a substantive clause from a clarification in erstwhile Clause 7.1.4 of Version 
1.0 of this document 
3 Clause inserted after consultation with the User Council; subsequent clauses renumbered   
7.1.6.  The Network Participant shall publish a privacy policy providing notice with respect to its 
handling or dealing with Personal Data in accordance with the Applicable Laws. 
7.1.7. The Network Participant will put in place adequate security measures and frameworks, such as 
encryption, authentication and authorisation, anonymisation, masking, network -level security 
apparatus etc, to protect Personal Data, whether the data is at rest or in transit. 
7.1.8. Should a Network Participant become aware of any unauthorised access of any Personal Data 
held by it, it will notify the person, to whom the Personal Data pertains, without undue delay as 
prescribed by the Applicable Laws. 
7.1.9. The Participant will retain all transaction data including, consent logs and data flow logs for a 
period of two (2) years or such period(s), as may be required by Applicable Law, whichever is 
longer, in a readily accessible and searchable format. 
7.1.10. In the event of a breach of Personal Data, Network Participants that obtained consent should 
notify the affected natural person as per applicable law.  
Illustration: Buyer App obtains consent from the Buyer for processing personal data for 
completing the transaction. In case of a data breach, Buyer App will be responsible for notifying 
the Buyer. In this scenario, if the data breach happened at the Seller App’s systems, he will be 
responsible for conveying the breach to the Buyer App, who in turn will notify the Buyer. 
7.2. Personal Data collected or received by ONDC 
7.2.1. ONDC may, over the course of its operations, including operating the ONDC Network or for 
ensuring compliance with the ONDC Network Policy, may receive or collect Personal Data about 
a natural person, living or deceased . In case the Personal Data is received from the Network 
Participants , the Network Participants would be required to obtain consent from the natural 
person on behalf of ONDC under the Applicable Laws, where ONDC, to the extent permitted 
under the Law, has informed such Network Participant in advance (viz. at the time of collection 
of such information) of the requirement of ONDC to have access to such data, the purpose for 
which such data will be used by ONDC and all such information in relation to use and processing 
of such information as may be required under Applicable Law. All data received by ONDC from 
the Network Participant will be securely stored by ONDC as per Applicable Laws. 
7.2.2. In case, ONDC directly collects Personal Data, it shall be responsible for obtaining consent under 
the Applicable Laws. The consent must be explicit, and the purpose for which the consent is 
being obtained must be clearly communicated to the natural person before taking the consent. 
7.2.3. ONDC shall publish a privacy policy providing notice with respect to its handling, transferring 
or dealing with Personal Data.  
7.2.4. ONDC shall not be responsible for ensuring the accuracy of Personal Data received from 
Network Participants. The Network Participant shall be responsible for ensuring the accuracy of 
data and taking necessary consents under the Applicable Laws for sharing such Personal Data.  
7.2.5. ONDC may use anonymised and aggregated data as per the ONDC Network Policy. 
7.2.6. ONDC will put in place adequate security measures and framework, such as encryption, 
authentication and authorisation, anonymisation, masking, network-level security apparatus etc, 
to protect Personal Data, whether at rest or in transit.   
DEFINITIONS 
Personal Data means both personal data and sensitive personal data as defined under the Applicable 
Laws. 
   
 
Version History 
Version Date Description 
0.3 3rd October 2022 Released to NPs 
1.0 22nd October 2022 - Added a definition of Personal Data 
- Removed consent requirement for utilising anonymised, 
aggregated data 
- Aligned requirements for notifying data subjects of breaches 
of data pertaining to them with existing standards 
- Added obligation on ONDC to store any Personal Data 
collected from NPs in a secure manner as per the law 
1.1 15th May 2023 - Added a clauses restricting misuse of Buyer Data by Seller 
Apps 
- Moved clarification from erstwhile Clause 7.1.4 to a 
substantive clause 7.1.5 
- Removed reference of Applicable Laws for collection of 
explicit consents from Clause 7.1.3 
2.0 15th February, 
2024 
Simplified and Rationalised Chapter released to NPs 
2.1 05th December, 
2024 
- Reiterating NPs obligations to comply with applicable data 
protection laws;  
- Clarifications regarding use of personal data by ONDC 
 
 
 
 

--- FILE: Compliance Handbook for ONDC Network Participants  | URL: https://ondc-static-website-media.s3.dualstack.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/files/final_ondc_drafthanbook_all_chapters_2june_2025.pdf ---

 
  
 
Compliance Handbook for ONDC Network Participants 
 
June 2025 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 2 
 
Table of Contents 
ABOUT THE HANDBOOK ........................................................................................................................................................................................................................................... 4 
1. PURPOSE OF THE HANDBOOK .............................................................................................................................................................................................................................. 4 
2. HOW TO USE THE HANDBOOK ............................................................................................................................................................................................................................. 5 
SECTOR-WISE SNAPSHOT OF APPLICABILITY OF LEGAL PROVISIONS  ....................................................................................................................................................................... 6 
BRIEF OVERVIEW ...................................................................................................................................................................................................................................................... 9 
DETAILED COMPLIANCES ........................................................................................................................................................................................................................................ 35 
I FOOD & BEVERAGE ........................................................................................................................................................................................................................................... 39 
II GROCERIES AND PET SUPPLIES ........................................................................................................................................................................................................................ 50 
III FASHION AND FOOTWEAR ............................................................................................................................................................................................................................. 60 
IV ELECTRONICS ................................................................................................................................................................................................................................................. 67 
V BEAUTY AND PERSONAL CARE ........................................................................................................................................................................................................................ 74 
VI MOBILITY AND TRANSPORTATION ................................................................................................................................................................................................................ 80 
VII FINANCIAL SERVICES (CREDIT, INSURANCE AND MUTUAL FUNDS) .............................................................................................................................................................. 89 
VIII GIFT CARDS AND OTHER SERVICES INDUSTRY (MOVIE AND EVENT TICKETING SERVICES, PERIODICAL SUBSCRIPTION SERVICES) ................................................................ 
  .................................................................................................................................................................................................................................................................... 95 
IX GAMING INDUSTRY ...................................................................................................................................................................................................................................... 100 
X OTT MEDIA SERVICES .................................................................................................................................................................................................................................... 104 
XI AGRICULTURAL INPUTS (FERTILIZERS AND PESTICIDES) .............................................................................................................................................................................. 109 
XII FRESH PRODUCE PRODUCTS ...................................................................................................................................................................................................................... 119 
XIII PHARMACY AND HEALTHCARE DEVICES ................................................................................................................................................................................................... 129 
XIV EDUCATION SERVICE INDUSTRY ............................................................................................................................................................................................................... 134 
XV HOME DÉCOR ............................................................................................................................................................................................................................................. 139 
ANNEXURE – A FOOD SAFETY LAWS..................................................................................................................................................................................................................... 142 
ANNEXURE – B LEGAL METROLOGY ACT, 2009 (“LM ACT”) ................................................................................................................................................................................. 154  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 3 
 
ANNEXURE – C  THE BUREAU OF INDIAN STANDARDS ACT, 1986 (“BIS ACT”)..................................................................................................................................................... 157 
ANNEXURE – D IMPORT AND EXPORT LAWS........................................................................................................................................................................................................ 159 
ANNEXURE – E E-COMMERCE RULES ................................................................................................................................................................................................................... 160 
ANNEXURE – F GUIDELINES ON MISLEADING ADVERTISEMENTS ........................................................................................................................................................................ 163 
ANNEXURE – G GREENWASHING GUIDELINES ..................................................................................................................................................................................................... 165 
ANNEXURE – H DATA PROTECTION LAWS ............................................................................................................................................................................................................ 166 
ANNEXURE – I IT RULES ........................................................................................................................................................................................................................................ 168 
ANNEXURE – J COMPLIANCES UNDER DRUGS, COSMETICS AND MEDICAL DEVICES LAWS  ................................................................................................................................ 171 
ANNEXURE – K COMPLIANCES APPLICABLE IN RELATION TO LENDING ............................................................................................................................................................... 175 
ANNEXURE – L COMPLIANCES APPLICABLE IN RELATION TO OFFERING OF INSURANCE PRODUCTS  .................................................................................................................. 182 
ANNEXURE – M COMPLIANCES APPLICABLE IN RELATION TO OFFERING OF MUTUAL FUNDS  ........................................................................................................................... 190 
ANNEXURE – N COMPLIANCES APPLICABLE TO PESTICIDES................................................................................................................................................................................. 194 
ANNEXURE – O COMPLIANCE APPLICABLE ON FERTILISERS ................................................................................................................................................................................ 202 
ANNEXURE – P COMPLIANCES APPLICABLE IN RELATION TO SELLING NOTIFIED SEEDS  ..................................................................................................................................... 210 
ANNEXURE – Q COMPLIANCES APPLICABLE IN RELATION TO ISSUANCE OF GIFT PPI  ......................................................................................................................................... 212 
ANNEXURE – R SCHEDULE (LIST OF PROHIBITED PESTICIDES) TO THE PESTICIDES (PROHIBITION) ORDER, 2018 ............................................................................................... 215  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 4 
 
ABOUT THE HANDBOOK 
1. Purpose of the handbook 
This compliance handbook highlights the key obligations under certain legislations (relating to e-commerce) that 
Network Participants (“ NP”) of the ONDC network may be required to ensure compliance with. This is an 
indicative list that focuses on obligations relating to e -commerce transactions, and the actual obligations may 
vary on a case -to-case basis depending on other factors such as the  participant’s business model, structure, 
roles, etc.  
Please note that this handbook only seeks to cover laws and regulations specified in this document. NPs must 
evaluate other laws and regulations that may apply to the operating domain/category. This document is merely 
a general overview of the legal obligations that participants may be required to comply with. We advise each 
participant to conduct their assessment of the requisite compliances, based on their specific business model .  
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 5 
 
2. How to use the handbook 
SECTION A – TABLE  SECTION B – BRIEF OVERVIEW SECTION C – DETAILED COMPLIANCE 
  
 
 
 
 
 
 
 
 
 
 
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
APPLICABILITY
KEY CONCEPTS
KEY COMPLIANCES
Compliance snapshot of the relevant NPStep 3.1
•Note: This provides the NP(s) falling under different
industry(ies) with the brief snapshot of the compliance
alongwith specific requirement stipulated under the
relevant laws (as provided in Detailed Compliances).
Detailed ComplianceStep 3.2
•Note: This portion captures specific requirements that are
required to be complied with by the applicable NP(s). It
makes reference to Annexures whereunder the said
requirements have been discussed in detail.
AnnexuresStep 3.3
•Note: The NP(s) shall refer to the relevant Annexure(s) to
understand the requirements in detail (using the cross
references made in the Detailed Compliances).
STEP 1: 
NP(s) to determine the 
applicability of different laws on 
their respective industries using 
the Sector-wise Snapshot of 
applicability of legal provisions 
STEP 2: 
NP(s) to refer to the brief 
overview of the relevant laws to 
understand the following: 
 
STEP 3: 
Assess the Detailed Compliance 
stipulated under the relevant laws 
for each industry. This section is to 
be read with the Annexures in the 
following manner: 
 
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 6 
 
Sector-Wise Snapshot of Applicability of Legal Provisions 
 - Applicable 
 - Not applicable 
Industry / 
laws 
applicable 
Food Safety 
Act 
Legal 
Metrology 
Act 2009 
Bureau of 
Indian 
Standards Act 
Import and 
Export Laws 
Consumer 
Protection 
Laws 
including 
Guidelines1 
 
Coaching 
Sector 
Guidelines 
Data 
Protection 
Laws 
 
Information 
Technology 
Act 
Drugs, 
cosmetics 
and medical 
devices Laws 
Pharmacy Act 
Lending 
Regulations 
Insurance 
Regulations 
Mutual fund 
Regulations 
 
Seeds Act 
and Animal 
feed Laws 
 
Pesticides 
and 
Fertilisers 
related laws 
Mobility 
Related Laws 
Master 
Directions on 
Pre-paid 
Instruments 
Food & 
Beverage                  
Grocery and 
pet supplies                  
Fashion and 
Footwear                  
Electronics                  
Beauty and 
personal care 
industry 
                 
Mobility and 
Transportatio
n Industry 
                 
 
1 Note: Excluding Guidelines applicable to coaching sector.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 7 
 
Industry / 
laws 
applicable 
Food Safety 
Act 
Legal 
Metrology 
Act 2009 
Bureau of 
Indian 
Standards Act 
Import and 
Export Laws 
Consumer 
Protection 
Laws 
including 
Guidelines1 
 
Coaching 
Sector 
Guidelines 
Data 
Protection 
Laws 
 
Information 
Technology 
Act 
Drugs, 
cosmetics 
and medical 
devices Laws 
Pharmacy Act Lending 
Regulations 
Insurance 
Regulations 
Mutual fund 
Regulations 
 
Seeds Act 
and Animal 
feed Laws 
 
Pesticides 
and 
Fertilisers 
related laws 
Mobility 
Related Laws 
Master 
Directions on 
Pre-paid 
Instruments 
Financial 
services                  
Gift Cards 
and other 
Services 
                 
Gaming                  
OTT media 
services                  
Agricultural 
inputs                  
Fresh 
produce 
products 
                 
Pharmacy 
and 
healthcare 
devices  
                 
Education 
services                  
Home décor                   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 8 
 
 
[Note: For ease of accessing the information, following cross-linkages have been made in the table above: 
(a) The industries mentioned in the left-most column titled “Industry” have been cross-linked to the relevant chapter which contains a summary of the compliances to be 
followed by an NP undertaking business in such industry (e.g. food & beverages, grocery etc.); 
(b) The laws mentioned in the top-most row titled “laws applicable” have been cross-linked to the relevant portion in the brief overview which gives an outline of the relevant 
law; and 
(c) Each of the “” in the above table have been cross linked to the relevant portion of the summary of the compliances under such law applicable to the relevant industry.]  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 9 
 
BRIEF OVERVIEW  
1. Food Safety and Standards Act, 2006 (“Food Safety Act”) and Rules made thereunder (“Food Safety 
Laws”) 
1.1 The Food Safety  Act is the principal legislation governing and regulating the manufacture, storage, 
distribution, sale, and import of food across India, to ensure the availability of safe and wholesome food 
for human consumption and matters related thereto.  
1.2 The key concepts under the Food Safety  Laws that are relevant to understand the scope and 
applicability thereof are discussed below: 
(a) Digital and Electronic Network : It means a network of computers, television channels, and 
any other internet application used in an automated manner such as web pages, extranets, 
mobiles, etc. 
(b) Food: Any processed/ partially processed or unprocessed substance that is intended for 
human consumption including agricultural products, genetically modified or engineered food, 
infant food, packaging drinking water, alcoholic drinks, chewing gum, etc.  
(c) Food Business: It means any entity carrying out any of the activities related to any stage of 
manufacture, processing, packaging, storage, transportation, distribution of food, import and 
includes food services, catering services, and sale of food or food ingredients.  
(d) Food Business Operator (“FBO”): Any person or entity undertaking Food Business. 
(e) E-Commerce: It means buying and selling goods and services over digital and electronic 
networks. 
(f) E-Commerce FBO : It means any FBO carrying out Food Business through the medium of e -
commerce. 
(g) Marketplace-based model of E-Commerce FBO: It means providing an information technology 
platform by an E-Commerce FBO on a digital and electronic network to act as a facilitator 
between the buyer and seller/  brand owner/ manufacturer and provides support services to 
sellers/ brand owners/ product manufacturers. 
(h) Micronutrients: They are essential dietary nutrients including vitamins, minerals or trace 
elements which are required in very small quantities. They are crucial for development, 
disease prevention and wellbeing of human beings.  
1.3 The Food Safety Laws provide for the following key compliances in respect of food and food articles: 
(a) Registration / license for different kinds of food business activities i.e., manufacture, import, 
sale (wholesale, retail), storage, packaging, re-labelling, etc.; 
(b) Labelling requirements for pre-packaged food articles;  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 10 
 
(c) Packaging requirements for the pre-packaged food articles; and 
(d) Compliance with food safety standards prescribed for various food articles. 
1.4 Contravention of the Food Safety Laws may lead to monetary penalty which ranges from INR 1,00,000 
to INR 10,00,000 and imprisonment which ranges from 3 months to life imprisonment.  
2. Legal Metrology Act, 2009 (“LM Act”) and rules made thereunder (“LM Laws”) 
2.1 The LM Act is the principal legislation enacted for establishing and enforcing standards of weight and 
measures for goods that are sold or distributed by volume, weight, or measure.  
2.2 The key concepts under the LM Laws that are relevant to understand the scope and applicability thereof 
are discussed below: 
(a) Pre-packaged Commodity : It means a commodity that is placed in a sealed or unsealed 
package in a pre-determined quantity, without the purchaser being present there.  
(b) E-commerce: It means buying and selling goods and services over digital and electronic 
networks. 
(c) E-commerce entity: It means any entity conducting e-commerce business. 
(d) Marketplace-based model of e -commerce: It means providing an information technology 
platform by an e -commerce entity on a digital and electronic network to act as a facilitator 
between buyer and seller. 
(e) Dealer: It means a person who, or a firm that carries out the business of buying, selling, 
supplying, or distributing any commodity in a packaged form but does not include a 
manufacturer who manufactures any commodity that is sold or distributed in a packaged form 
except where such commodity is sold by such manufacturer to any other person other than a 
dealer. 
(f) Packer: It means a person who, or a firm that pre-packs any commodity in units suitable for 
sale. 
(g) Manufacturer: It means a person who or a firm which produces, makes, or manufactures such 
commodity and includes a person or firm which puts, or causes to be put, any mark on any 
packaged commodity, not produced, made, or manufactured by him or it, and the mark claims 
the commodity in the package to be a commodity produced, made or manufactured by such 
person or firm as the case may be. 
(h) Retail sale: It means the sale, distribution, or delivery of a pre -packaged commodity through 
retail sales shops, agencies, or other instrumentalities for consumption by an individual or a 
group of individuals, or any other consumer.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 11 
 
2.3 The LM Laws provide for the following key compliances with respect to the pre-packaged commodities: 
(a) Registration for manufacturer, packer, and/ or importers of pre-packaged commodities; and 
(b) Labelling and packaging requirements for the pre-packaged commodity.2  
2.4 Contravention of the LM Laws may lead to monetary penalty which ranges from INR 5,000 to INR 
4,00,000 and imprisonment between 1 year and 5 years.  
3. Bureau of Indian Standards Act, 1986 (“BIS Act”) 
3.1 The BIS Act is a regulatory legislation enacted to regulate, through the Bureau of Indian Standards 
(“Bureau”), the standards of production and quality of various products being distributed in the 
national market.  
3.2 The key concepts under the BIS  Act and rules, regulations, notifications, orders, etc (“ BIS Laws”) that 
are relevant to understand the scope and applicability thereof are discussed below:  
(a) Conformity Assessment Scheme : It means a scheme relating to such goods, articles, 
processes, systems, or services as may be notified by the Bureau under Section 12 of the BIS 
Act. 
(b) Manufacturer: It means a person responsible for designing and manufacturing any goods or 
articles. 
(c) Person: It means a manufacturer, an importer, a distributor, retailer, seller or lessor of goods 
or articles, or provider of service , or any other person who uses or applies his name or 
trademark or any other distinctive mark on to goods or article or while providing a service, for 
any consideration or gives goods or article or provides service as prize or gift for commercial 
purposes including their representative and any person who is engaged  in such activities, 
where the manufacturer, importer, distribut or, retailer, seller, lessor or provider of service 
cannot be identified. 
(d) Standard Mark : It means the mark specified by the Bureau, and includes a hallmark, to 
represent conformity of goods, articles, processes, systems, or services to a particular Indian 
standard or conformity to a standard, the mark of which has been established, adopted o r 
recognized by the Bureau and is marked on the article or goods as a standard mark.  
(e) License: It means a license granted under the BIS Act, to use a specified standard mark about 
any goods, article, process, system, or service, which conforms to a standard.  
3.3 The BIS Laws provide for the following key compliances with respect to goods and services which are 
 
2 Note: The labelling requirements prescribed under the LM Laws and other subject matter specific laws like Food Safety Laws, Drugs, and 
Cosmetics laws are co-existent and in case any labelling requirement is provided both under LM Laws and such subject matter specific laws, 
the compliance with the labelling requirement under subject matter specific laws is deemed as compliance with LM Laws.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 12 
 
required to conform to a standard: 
(a) Obtaining license or certificate of conformity for the goods and / or services which have been 
notified to mandatorily conform to a standard; and 
(b) Labelling requirements for the above stated goods.  
3.4 Contravention of the BIS Laws may lead to monetary penalty which ranges from INR 1,00,000 to INR 
5,00,000 and imprisonment between 1 year and 2 years. 
4. Import and Export laws 
4.1 The import and export of goods is governed by the Customs Act, 1962 (“ Customs Act”) and Foreign 
Trade (Development and Regulation) Act, 1992 (“ FTDR”) read with Foreign Trade Policy 2023 (“ FTP 
2023”) and Handbook of Procedures 2023 (“HBP 2023”).  
FTDR Act 
4.2 The FTDR Act is the principal legislation governing international trade in India. The FTDR Act and 
policies, notifications, trade notices, and circulars issued thereunder prescribe the prohibition, 
restrictions, or conditions with respect to the import and export of goods into/ out of India.  
Customs Act 
4.3 The Customs Act is the primary legislation, that provides for the imposition of various duty(ies) or 
tax(es) on the import of goods into and export out of India, at the rate specified under the First Schedule 
and Second Schedule to the Customs Tariff Act 1975 (“Tariff Act”) respectively, or any other law for the 
time being in force.   
4.4 The key concepts under the FTDR  Act and Customs Act read with the rules, regulations, notifications, 
orders, etc. made thereunder that are relevant to understanding the scope and applicability thereof 
are discussed below: 
(a) Import / Importer : It means bringing goods into India from a place outside India. The term 
“importer” includes any owner or beneficial owner of the goods or any person holding himself 
out to be the importer. 
(b) Export: It means taking goods out of India to a place outside India. The term “exporter”, in 
relation to any goods at any time between their entry for export and the time when they are 
exported, includes any owner, beneficial owner, or any person holding himself  out to be the 
exporter. 
(c) Goods: It includes vessels, aircraft and vehicles, stores, baggage, currency and negotiable 
instruments, and any other kind of movable property. 
4.5 The Import and Export Laws provide for the following key compliances with respect to import and  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 13 
 
export of goods: 
(a) Obtaining Import Export Code for importing and exporting goods in and out of India 
respectively; 
(b) Filing of relevant documents for the purpose of importing and exporting goods ; and 
(c) Requirements prescribed under the Import and Export policy pertaining to goods to be 
imported in or exported out of India 
4.6 Contravention of the FTDR Act and Customs Act may lead to monetary penalty of up to 5 times the 
value of goods and imprisonment which depends on the type of contravention.  
5. Consumer Protection Act, 2019 (“CPA”) 
5.1 The CPA aims to strengthen the rights of consumers and provide a more effective and transparent 
grievance redressal mechanism. It provides for establishment of various Consumer Commissions and 
Central Consumer Protection Authority (“CCPA”) to address, among other things, unfair trade practices, 
deficiency in services, misleading advertisements, unfair contracts and to protect consumers' rights . 
5.2 The key concepts under the CPA that are relevant to understand the scope and applicability thereof are 
discussed below: 
(a) Consumer: It means any person who buys any goods or services for a consideration which has 
been paid or promised or partly paid and partly promised, or under any system of deferred 
payment but does not include a person who obtains such goods or services for resale or for 
any commercial purpose. 
(b) Defect: It means any fault, imperfection or shortcoming in the quality, quantity, potency, 
purity or standard which is required to be maintained by or under any law for the time being 
in force or under any contract, express or implied or as is claimed by the trader in any manner 
whatsoever in relation to any goods or product. 
(c) Deficiency: It means any fault, imperfection, shortcoming or inadequacy in the quality, nature 
and manner of performance which is required to be maintained by or under any law for the 
time being in force or has been undertaken to be performed by a person in pursuance of a 
contract or otherwise in relation to any service and includes : (i) any act of negligence or 
omission or commission by such person which causes loss or injury to the consumer; and (ii) 
deliberate withholding of relevant information by such person to the consumer. 
(d) E-commerce: It means buying or selling of goods or services including digital products over 
digital or electronic network. 
(e) Electronic Service Provider (“ESP”): It means a person who provides technologies or processes 
to enable a product seller to engage in advertising or selling goods or services to a consumer 
and includes any online marketplace or online auction sites.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 14 
 
(f) Misleading Advertisement: It means an advertisement, which : (i) falsely describes such 
product or service; (ii) gives a false guarantee to, or is likely to mislead the consumers as to 
the nature, substance, quantity or quality of such product or service; (iii) conveys an express 
or implied representation which, if  made by the manufacturer or seller or service provider 
thereof, would constitute an unfair trade practice; or (iv) deliberately conceals important 
information. 
(g) Product Liability: It means the responsibility of a product manufacturer or product seller, of 
any product or service, to compensate for any harm caused to a consumer by such defective 
product manufactured or sold or by deficiency in services relating thereto.  
(h) Restrictive Trade Practice: It means a trade practice which tends to bring about manipulation 
of price or its conditions of delivery or to affect flow of supplies in the market relating to goods 
or services in such a manner as to impose on the consumers unjustified costs or restrictions 
and shall include: (i) delay beyond the period agreed to by a trader in supply of such goods or 
in providing the services which has led or is likely to lead to rise in the price; ( ii) any trade 
practice which requires a cons umer to buy, hire or avail of any goods or, as the case may be, 
services as condition precedent for buying, hiring or availing of other goods or services.  
(i) Spurious Goods: It means such goods which are falsely claimed to be genuine. 
(j) Unfair Contract: It means a contract between a manufacturer or trader or service provider on 
one hand, and a consumer on the other, having such terms which cause significant change in 
the rights of such consumer, including the following, namely: (i) requiring manifestly excessive 
security deposits to be given by a consumer for the performance of contractual obligations; or 
(ii) imposing any penalty on the consumer, for the breach of contract thereof which is wholly 
disproportionate to the loss occurred due to such breach to the other party to the contract; or 
(iii) refusing to accept early repayment of debts on payment of applicable penalty; or (iv) 
entitling a party to the contract to terminate such contract unilaterally, without reasonable 
cause; or (v) permitting or has the effect of permitting one party to assign the contract to the 
detriment of the other party who is a consumer, without his consent; or (vi) imposing on the 
consumer any unreasonable charge, obligation or condition which puts such consumer  to 
disadvantage. 
(k) Unfair Trade Practice: It means a trade practice which, for the purpose of promoting the sale, 
use or supply of any goods or for the provision of any service, adopts any unfair method or 
unfair or deceptive practice 
5.3 The CPA deals with the obligations of ESP, sellers, product service provider, manufacturers towards 
consumers.  
5.4 Under the CPA, the Consumer Commissions have powers to pass various orders in the event of 
deficiency in service or unfair trade practice. Such powers are prescribed under Sections 39, 49 and 59 
of CPA.  
5.5 Under Section 72(1), any non-compliance with the orders of the Consumer Commissions may lead to a  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 15 
 
monetary penalty ranging from INR 25,000 to INR 1,00,000 and imprisonment which ranges from 1 
month to 3 years. 
5.6 Additionally, if the CCPA is satisfied on the basis of their investigation that there is sufficient evidence 
of violation of consumer rights or unfair trade practice, it may pass an order as may be necessary for , 
inter alia: (i) recalling of goods or withdrawal of services which are dangerous, hazardous or unsafe, (ii) 
reimbursement of the prices of goods or services so recalled to purchasers of such goods or services, 
and (iii) discontinuation of practices which are unfair and prejudicial to consumers’ interest.  
5.7 Under Section 88, any non-compliance with CCPA directions may lead to a monetary penalty which may 
extend to INR 20,00,000 and imprisonment upto 6 months. 
6. Consumer Protection (E-Commerce) Rules, 2020 (“E-Commerce Rules”) 
6.1 The E-Commerce Rules, aim to ensure transparency, fairness, and accountability in the e -commerce 
industry. The E-Commerce Rules mandate that e-commerce platforms disclose clear information about 
the seller, product, pricing, and policies, and prevent false advertising and misleading claims. 
6.2 The key concepts under the E-Commerce Rules that are relevant to understand the scope and 
applicability thereof are discussed below: 
(a) E-commerce entity: It means any person who owns, operates or manages digital or electronic 
facility or platform for electronic commerce, but does not include a seller offering his goods or 
services for sale on a marketplace e-commerce entity. 
(b) Platform: It means an online interface in the form of any software including a website or a part 
thereof and applications including mobile applications. 
(c) Marketplace e -commerce entity : It means an e -commerce entity which provides an 
information technology platform on a digital or electronic network to facilitate transactions 
between buyers and sellers. 
(d) Inventory e-commerce entity: It means an e -commerce entity which owns the inventory of 
goods or services and sells such goods or services directly to the consumers and shall include 
single brand retailers and multi-channel single brand retailers. 
(e) Seller: It means the product seller as defined under the CPA and shall include any service 
provider. These are sellers listing their products on a Marketplace e-commerce entity. 
6.3 The E-Commerce Rules provide for the compliances of each kind of E -commerce entity. 
6.4 Contravention of the E -Commerce Rules will amount to deficiency in service and / or unfair trade 
practice under CPA. 
7. Guidelines for Prevention of Misleading Advertisements and Endorsements for Misleading  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 16 
 
Advertisements, 2022 (“Guidelines on Misleading Advertisements ”) 
7.1 The Guidelines on Misleading Advertisements have been issued by CCPA for prevention of any 
misleading advertisements and/ or endorsements for any misleading advertisements.  
7.2 The key concepts under the Guidelines on Misleading Advertisements  that are relevant to understand 
the scope and applicability thereof are discussed below: 
(a) Advertiser: It means a person who designs, produces and publishes advertisements either by 
his own effort or by entrusting it to others in order to promote the sale of his goods, products 
or services and includes a manufacturer and service provider of such goods, product s or 
services. 
(b) Advertising agency: It means a person or an establishment providing services in designing and 
production of advertisements or other related services for a commission or fee.  
(c) Bait advertisement: It means an advertisement in which goods, product or service is offered 
for sale at a low price to attract consumers. 
(d) Surrogate advertisement : It means an advertisement for goods, product or service, whose 
advertising is otherwise prohibited or restricted by law, by circumventing such prohibition or 
restriction and portraying it to be an advertisement for other goods, product or service, the 
advertising of which is not prohibited or restricted by law.  
7.3 The Guidelines on Misleading Advertisements provide for the conditions of advertising and the duties 
of manufacturer, service provider, advertiser and advertising agencies.  
7.4 If the CCPA is satisfied that any advertisement is in violation of the  Guidelines on Misleading 
Advertisements, then it can issue directions to discontinue such advertisement or to modify the same  
in exercise of its powers under Section 21(1) of CPA.  
7.5 Further, under Section 21(2) and Section 89 of CPA, an entity engaged in false or misleading advertising 
may attract a monetary penalty of up to INR 10,00,000 and imprisonment extending to 2 years. Further, 
the monetary penalty and the imprisonment may extend to INR 50,00,000 and 5 years respectively for 
every subsequent contravention.  
8. Guidelines for Prevention and Regulation of Dark Patterns, 2023 (“Guidelines on Dark Patterns ”) 
8.1 The Guidelines on Dark Patterns have been issued by CCPA to prevent and regulate dark patterns 
indulged into by various entities and platforms to ensure fairness and consumer protection.  
8.2 The key concepts under the Guidelines on Dark Patterns that are relevant to understand the scope and 
applicability thereof are discussed below: 
(a) Dark patterns: It mean any practices or deceptive design pattern using user interface or user 
experience interactions on any platform that is designed to mislead or trick users to do 
something they originally did not intend or want to do, by subverting or impairing the  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 17 
 
consumer autonomy, decision making or choice, amounting to misleading advertisement or 
unfair trade practice or violation of consumer rights. 
8.3 The Guidelines on Dark Patterns identify 13 types of dark patterns 3 engaging in which amounts to 
deficiency in service and/ or unfair trade practice under CPA.  The Guidelines on Dark Patterns  also 
provide for the conditions of advertising goods or services offered by it to consumers . 
8.4 The Guidelines on Dark Patterns have been made in furtherance of Guidelines for Misleading 
Advertisements and will attract the penalties/ punishment ascribed under the same.  
9. Guidelines for Prevention and Regulation of Greenwashing or Misleading Environmental Claims, 2024 
(“Greenwashing Guidelines”) 
9.1 The Greenwashing Guidelines have been issued by CCPA to ensure that entities do not resort to 
misleading environmental claims so as to enable the consumer to make more informed decisions.  
9.2 The key concepts under the  Greenwashing Guidelines that are relevant to understand the scope and 
applicability thereof are discussed below: 
(a) Environmental Claim: It means any representation in any form regarding: (i) any goods (either 
in its entirety or as a component), the manufacturing process, packaging, the manner of use 
of the goods, or its disposal; or (ii) any service (or any portion thereof) or the process involved 
in providing the service. 
(b) Greenwashing: It means: (i) any deceptive or misleading practice, which includes concealing, 
omitting, or hiding relevant information, by exaggerating, making vague, false, or 
unsubstantiated environmental claims; (ii) use of misleading words, symbols, or imagery, 
placing emphasis on positive environmental aspects while downplaying or concealing harmful 
attributes. However, the same shall not include: (A) use of obvious hyperboles, puffery, or (B) 
the use of generic colour schemes or pictures; either not am ounting to any deceptive or 
misleading practice, or (C) a company mission statement that is not specific to any product or 
service. 
9.3 The Greenwashing Guidelines seeks transparency, verifiability, accuracy and accountability of 
representations made with respect to environmental claims and in this regard, requires, disclosure of 
information with respect to the environmental claims and als o provides as to how and to what extent 
the disclosures have to be made. 
9.4 These guidelines have been made in furtherance of Guidelines for Misleading Advertisements and thus 
will attract the penalties/ punishment ascribed under the same. 
10. Guidelines for Prevention of Misleading Advertisement in Coaching Sector, 2024 (“Coaching Sector 
 
3 Note: the 13 types of dark patterns as per the Guidelines on Dark Patterns are as follows: (i) false urgency; (ii) basket sneaking, (iii) confirm 
shaming, (iv) forced action , (v) subscription trap , (vi) interface interference , (vii) bait and switch , (viii) drip pricing , (ix) disguised 
advertisement, (x) nagging, (xi) trick question, (xii) SaaS billing, and (xiii) rogue malwares.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 18 
 
Guidelines”) 
10.1 The Coaching Sector Guidelines have been issued by CCPA to ensure that there are no practices of 
misleading advertisements in coaching sector. 
10.2 The key concepts under the se guidelines that are relevant to understand the scope and applicability 
thereof are discussed below: 
(a) Coaching: It includes academic support, imparting education, guidance, instructions, study 
programme or tuition or any other activity of similar nature but does not include counselling, 
sports, dance, theatre and other creative activities. 
(b) Coaching centre: It includes a centr e, established, run, or administered by any person(s) for 
providing coaching to more than fifty students. 
10.3 The Coaching Sector Guidelines provide for the conditions of advertising services offered by Coaching 
centres to consumers. 
10.4 An entity engaged in the business of running a coaching centre, whether it is running from an e -
commerce platform or is providing services via its own online platform, will have to adhere to the 
Coaching Sector Guidelines. 
10.5 These guidelines have been made in furtherance of Guidelines for Misleading Advertisements and thus 
will attract the penalties/ punishment ascribed under the same. 
11. Data protection laws 
11.1 The Information Technology Act 2000 (“IT Act”) read with Information Technology (Reasonable security 
practices and procedures and sensitive personal data or information) Rules 2011 (“SPDI Rules”) are the 
primary legislations in India governing data privacy and protection on a sector -neutral basis.  
11.2 The key concepts under the IT Act and the SPDI Rules that are relevant to understanding the scope and 
applicability thereof are discussed below: 
(a) Sensitive personal data or information 4 (“SPDI”): Under Section 43 -A of the IT Act and the 
SPDI Rules, personal information relating to the following have been designated as sensitive 
personal data or information: (i) password; (ii) financial information such as bank account or 
credit card or debit card o r other payment instrument details; (iii) physical, physiological and 
mental health condition; (iv) sexual orientation; medical records and history; (v) biometric 
information; (vi) any detail relating to the above clauses as provided to the entity for providing 
service; and (vii) any of the information received under above clauses by the entity for 
processing, stored or processed under lawful contract or otherwise. 
11.3 The SPDI Rules provide for certain obligations in relation to collection and processing of SPDI. To the 
 
4 Note: Any information that is freely available or accessible in public domain or furnished under the Right to Information Act 2005 o r any 
other law for the time being in force shall not be regarded as SPDI for the purposes of SPDI Rules.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 19 
 
extent the NPs will collect/handle personal data falling under the category of SPDI, it is required to be 
compliant with the obligations specified under the SPDI Rules.  
11.4 Under Section 43A of the IT Act, an entity that is negligent in implementing and maintaining reasonable 
security practices and procedures for the protection of SPDI, and thereby causes wrongful loss or 
wrongful gain to any person, such entity may be requir ed to pay damages by way of compensation to 
the person so affected. Such damages are legislatively uncapped and will be determined by competent 
courts on a case -to-case basis. Section 43A can only be triggered by the affected individual and 
instances of affected individuals invoking Section 43A appear to be scarce. 
11.5 Additionally, please note that o n 11 August 2023, India enacted the Digital Personal Data Protection 
Act 2023 (“ DPDP Act”) as its first ever dedicated and comprehensive legislation on privacy and data 
protection. Although enacted, the DPDP Act is yet to be brought into force by the Government of India. 
Presently, the final rules under the DPDP Act are awaited.  The DPDP Act will apply to processing of 
personal data collected from individuals within India if collected: (i) in digital form; and (ii) in non-digital 
form and digitized subseque ntly. Once the DPDP Act  is enforced, all entities collecting, handling, or 
processing personal data will be required to comply with the obligations prescribed under the DPDP 
Act. 
12. Compliances under IT Act and the Information Technology (Intermediary Guidelines and Digital 
Media Ethics Code) Rules 2021 (“IT Rules 2021”) 
12.1 An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that 
record and includes telecom service providers, network service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites , online -auction sites, online -
market places and cyber cafes”. 
12.2 The key concepts under the IT Rules that are relevant to understanding the scope and applicability 
thereof are discussed below: 
(a) Online gaming intermediary: It means any intermediary that enables the users of its computer 
resource to access one or more online games. 
(b) Online real money game : It means an online game where a  user makes a deposit in cash or 
kind with the expectation of earning winnings on that deposit. 
(c) Permissible online game: It means a permissible online real money game or any other online 
game that is not an online real money game. 
(d) Permissible online real money game : It  means an online real  money game verified by an 
online gaming self-regulatory body under Rule 4-A of the IT Rules 2021. 
(e) Social media intermediary: It means an intermediary which primarily or solely enables online 
interaction between two or more users and allows them to create, upload, share, disseminate, 
modify or access information using its services.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 20 
 
(f) Significant social media intermediary: It means social media intermediaries having more than 
50,00,000 (Fifty lakh) registered users in India 
12.3 The IT Rules 2021 prescribe the due diligence obligations for intermediaries.  
12.4 Non-compliance with the provisions of IT Rules 2021 may disqualify the intermediary from seeking 
exemption from liability as set out under Section 79 of the IT Act. The intermediary may also be liable 
for punishment under any law including the IT Act and Bharatiya Nyaya Sanhita 2023.  
13. Drugs, cosmetics and medical devices laws 
13.1 The Drugs and Cosmetics Act 1940 (“ Drugs Act”), Drugs Rules  1945 (“Drugs Rules”), Cosmetics Rules 
2020 (“Cosmetics Rules”) and Medical Devices Rules 2017 (“ Medical Devices Rules”) were notified to 
regulate the manufacture, import, sale and distribution of drugs, cosmetics and  medical devices in 
India, ensuring the safety, efficacy, and quality of drugs, cosmetics and medical devices.  
13.2 The key concepts under the Drugs Act, Drugs Rules, Cosmetics Rules and the Medical Devices Rules that 
are relevant to understanding the scope and applicability thereof are discussed below:  
(a) Board: It means the drugs technical advisory board constituted under the Drugs Act. 
(b) Drug: It means and includes:  (i) all medicines for internal or external use of human beings or 
animals and all substances intended to be used for or in the diagnosis, treatment, mitigation 
or prevention of any disease or disorder in human beings or animals, including preparations 
applied on human body for the purpose of repelling insects like mosquitoes; (ii) such 
substances (other than food) intended to affect the structure or any function of the human 
body or intended to be used for the destruction of ver min or insects which cause disease in 
human beings or animals, as may be specified from time to time by the Central Government 
by notification in the Official Gazette; (iii) all substances intended for use as components of a 
drug including empty gelatin ca psules; and (iv) such devices intended for internal or external 
use in the diagnosis, treatment, mitigation or prevention of disease or disorder in human 
beings or animals, as may be specified from time to time by the Central Government by 
notification in the Official Gazette, after consultation with the Board. 
(c) Cosmetics: It means and includes any article intended to be rubbed, poured, sprinkled or 
sprayed on, or introduced into, or otherwise applied to, the human body or any part thereof 
for cleansing, beautifying, promoting attractiveness, or altering the appearance, and includes 
any article intended for use as a component of cosmetic.  
(d) Medical device : It means : (i ) substances used for in vitro diagnosis and surgical dressings, 
surgical bandages, surgical staples, surgical sutures, ligatures, blood  and blood component 
collection bag with or without anticoagulant ; (ii) substances including mechanical 
contraceptives (condoms, intrauterine devices, tubal rings), disinfectants and insecticides 
notified in the Official Gazette; and (iii) devices notified from time to time under the Drugs Act. 
13.3 The Drugs Act, Drugs Rules, Co smetics Rules and the Medical Devices Rules provide for certain  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 21 
 
obligations in relation to manufacture, import, sale and distribution of drugs, cosmetics and medical 
devices in India.  
13.4 Non-compliance with the provisions of the Drugs Act, shall be punishable with fine ranging between 
INR 500 to INR 10,00,000  and with imprisonment for a term which shall not be less than 3 years but 
which may extend to life imprisonment. 
14. Pharmacy Act 1948 (“Pharmacy Act”) 
14.1 The Pharmacy Act lays down comprehensive provisions for the education, practice, and registration of 
pharmacists, ensuring that only qualified individuals practice pharmacy .  
14.2 The key concepts under the Pharmacy Act that are relevant to understanding the scope and applicability 
thereof are discussed below: 
(a) Medical Practitioner : It means a person : (i) holding a qualification granted by an authority 
specified or notified under the Indian Medical Degrees Act 1916, or specified in the Schedules 
to the Indian Medical Council Act 1956; or (ii) registered or eligible for registration in a medical 
register of a State meant for the registration of persons practising the modern scientific system 
of medicine; or (iii) registered in a medical register of a State, who, although not falling within 
sub-clause (i) or sub -clause (ii) is declared by a general or special order made by the State 
Government in this behalf as a person practising the modern scientific system of medicine for 
the purposes of the Pharmacy Act; or (iv) registered or eligible for registration in the regi ster 
of dentists for a State under the Dentists Act 1948; or (v) who is engaged in the practice of 
veterinary medicine and who possesses qualifications approved by the State Government . 
(b) Registered Pharmacist: It means a person whose name is for the time being entered in the 
register of the State in which he is for the time being residing or carrying on his profession or 
business of pharmacy. 
14.3 The Pharmacy Act provides for the licensing and other obligations applicable to the NPs operating a 
pharmacy.  
14.4 Falsely claiming to be registered as a pharmacist, shall be punishable on first conviction with fine which 
may extend to INR 500 and on any subsequent conviction with imprisonment extending to 6 months or 
with fine not exceeding INR 1,000 or with both.  
15. Lending Regulations 
15.1 Lending through digital channels is governed by the regulations, circulars and notifications issued by 
the Reserve Bank of India (“ RBI”) from time to time, including the Digital Lending Guidelines dated 2 
September 2022 (“Digital Lending Guidelines ”), the Master Direction - Reserve Bank of India (Non -
Banking Financial Company – Scale Based Regulation) Directions, 2023 dated 19 October 2023  (“Scale 
Based Regulations”), Guidelines on Managing Risks and Code of Conduct in Outsourcing of Financial 
Services by banks dated 3 November 2006 and Guidelines for Managing Risk in Outsourcing of Financial 
Services by Co -operative Banks dated 28 June 2021  (collectively the “ Bank Outsourcing Guidelines ”),  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 22 
 
Reserve Bank of India (Outsourcing of Information Technology Services) Directions, 2023 dated 10 April 
2023 (“IT Outsourcing Master Directions”). The Reserve Bank of India Act, 1934 and Banking Regulation 
Act, 1949 prescribe the registration and licensing requirements for non -banking financial companies 
(“NBFCs”) and banks respectively. 
Digital Lending Guidelines 
15.2 The Digital Lending Guidelines apply to all banks and NBFCs offering loans through digital channels. The 
key concepts under the Digital Lending Guidelines  that are relevant to understanding the scope and 
applicability thereof are discussed below: 
(a) Digital Lending: It means a remote and automated lending process, largely by use of seamless 
digital technologies for customer acquisition, credit assessment, loan approval, disbursement, 
recovery, and associated customer service. 
(b) Digital Lending Apps/Platforms (“DLAs”): It means a mobile and web-based applications with 
user interface that facilitate digital lending services. DLAs will include apps of the regulated 
entities ( “REs”) as well as those operated by Lending Service Providers engaged by REs for 
extending any credit facilitation services in conformity with extant outsourcing guidelines 
issued by the Reserve Bank of India. 
(c) Lending Service Provider (“LSP”): It means an agent of an RE who carries out one or more of 
lender’s functions or part thereof in customer acquisition, underwriting support, pricing 
support, servicing, monitoring, recovery of specific loan or loan portfolio on behalf of REs in 
conformity with extant outsourcing guidelines issued by the Reserve Bank  of India. 
Compliance with Fair Practices Code 
15.3 The RBI with a view to protect customers and improve transparency in the lending journey has 
introduced the ‘fair practices code’ to curtail activities on  lending platforms that are viewed as non -
standard and unfair such as charging exorbitant interest rates and penalties, non-transparent methods 
to calculate interest, harsh recovery measures, unauthorised use of personal data and harassment of 
customers by collection agents. The Scale Based Regulations as well as various notifications and 
circulars issued by the RBI from time to time such as the RBI circular titled ‘Fair Practices Code for 
Lenders – Charging of Interest’ dated 29 April 2024 prescribe practices and processes to be adopted by 
REs in relation to the lending business.    
Guidelines on Outsourcing 
15.4 The guidelines on outsourcing prescribe the guardrails to be followed by REs in the use of a third party 
to perform activities on a continuing basis that would normally be undertaken by the RE itself. REs are 
required to ensure certain compliances and contractual rights by the service providers to whom any 
function has been outsourced by the RE to ensure that there are no deficiencies in service for customers 
and the performance of such services by th ird parties do not materially affect the quality and secu rity  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 23 
 
of the RE’s services. 
KYC Master Directions 
15.5 All REs must comply with the  ‘Master Direction - Know Your Customer (KYC) Direction’, dated 25 
February 2016 (“KYC Master Directions”) in relation to conducting KYC of customers for credit products 
and undertaking customer due diligence.  
Penalties 
15.6 Non-adherence to the lending regulations set out above can incur penalties on the REs as prescribed 
under the Reserve Bank of India Act, 1934. Such penalties may range from INR 25,000 to INR 10,00,000 
or twice the amount involved in such contravention, where such contravention is quantifiable.  
16. Insurance Regulations 
16.1 Insurance business in India is governed under the Insurance Act, 1938 (“Insurance Act”) and the various 
regulations, circulars and guidelines issued by the Insurance Regulatory and Development Authority of 
India (“IRDAI”) from time to time. Only registered insurers (“Insurers”) are permitted to issue insurance 
policies to customers in India, in various categories, viz. life, health, general, and composite. Further, 
insurance intermediaries involved in the sale, distribution and solicitation of insurance, su ch as 
insurance brokers (“ Insurance Brokers”), corporate agents (“ Corporate Agents”), and insurance web 
aggregators (“Insurance Web Aggregators”) are also required to be registered with the IRDAI. 
(a) Insurance Broker: An insurance intermediary, who solicits and arranges insurance business for 
its clients with Insurers located in India and / or provides claims consultancy, risk management 
services or other similar services. 
(b) Corporate Agent: A person authorised to undertake  solicitation and servicing of insurance 
business for any of the specified category of life, general and health.  
(c) Insurance Web Aggregator: is an insurance intermediary who maintains a website for 
providing interface to the insurance prospects for price comparison and information of 
products of different Insurers and other related matters. 
16.2 The IRDAI (Insurance Brokers) Regulations, 2018 (“Insurance Broker Regulations”) governs registration 
and compliances applicable to Insurance Brokers. The IRDAI (Registration of Corporate Agent) 
Regulations, 2015 (“Corporate Agent Regulations”) prescribe the registration requirements and other 
compliances applicable to Corporate Agents. The IRDAI (Insurance Web Aggregators) Regulations, 2017 
(“Web Aggregator Regulations”) governs the registration requirements and compliances applicable to 
Insurance Web Aggregators. 
16.3 Apart from the above, the IRDAI issues guidelines, regulations and circulars applicable to Insurers and 
insurance intermediaries in general in respect of their insurance business. Such regulations, as relevant 
for insurance business through ONDC,  govern aspects relating to sale and advertisement of insurance 
products, issuance of e-insurance policies, provision of customer information sheet,  KYC of customers  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 24 
 
etc.  
Penalties 
16.4 Carrying on insurance business without appropriate registration under the Insurance Act  can attract 
penalty of up to INR 25,00,00,000  and imprisonment of up to 10 years.  Non-adherence to  certain 
stipulations regarding insurance business by Insurers can attract penalties of up to INR 25,00,00,000 . 
Violation of regulations by the intermediaries of their respective regulations may attract penalties 
ranging from INR 1,00,000 to INR 1,00,00,000, depending on the nature of contravention.  
17. Mutual Fund Regulations 
17.1 Offering of investments in mutual funds is primarily governed by the regulations, circulars and code of 
conduct issued by the Securities and Exchange Board of India (“SEBI”) and the Association of Mutual 
Funds in India (“AMFI”), including the SEBI (Mutual Funds) Regulations, 1996 (“MF Regulations”), SEBI 
(Investment Advisers) Regulations, 2013 (“ IA Regulations ”), Securities and Exchange Board of India 
{KYC (Know Your Client) Registration Agency} Regulations, 2011 (“KYC Regulations”) Master Circular for 
Mutual Funds dated 27 June 2024 (“ MF Master Circular ”), Master Circular for Investment Advisers 
dated 21 May 2024 (“ IA Master Circular ”), Master Circular on Know Your Client (KYC) norms for the 
securities market  (“KYC Master Circular ”), Code of Conduct for Mutual Fund Distributors (“ Code of 
Conduct for MFDs”), AMFI Guidelines for Category-1 EOPs (“EOP Guidelines”), Unified AMFI Guidelines 
for AMFI Registered Mutual Fund Advisor dated 18 July 2008 (“ MFD Guidelines”) and other applicable 
circulars and guidelines. The MF Regulations, IA Regulations, MF Master Circular EOP Circular and MFD 
Guidelines prescribe the registration process and requirements for Mutual Funds, Investment Advisers 
(“IAs”), Execution Only Platforms (“EOPs”) and Mutual Fund Distributors (“MFDs”). 
(a) MFD: An entity registered with AMFI that facilitates the buying, selling, and management of 
mutual funds on behalf of investors. 
(b) IA: An entity registered with SEBI who is engaged in providing investment advice or execution 
/ implementation services to its clients. 
(c) EOPs: A digital platform which facilitates transactions such as subscription, redemption and 
switch transactions in direct plans of schemes of mutual funds . 
MF Regulations and MF Master Circular 
17.2 The MF Regulations and MF Master Circular applies to all Asset Management Companies (“ AMCs”) 
offering mutual funds to investors either through digital means or through offline channels. These 
specify the requirements applicable to AMCs which inter alia include the disclosures and reporting 
norms, advertisements and the regulatory framework for EOPs.  
IA Regulations and IA Master Circular 
17.3 The IA Regulations and IA Master Circular are applicable to all registered IAs who engage in providing 
investment advice or implementation services to their clients. These inter alia provide the regulatory  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 25 
 
framework under which IAs may offer implementation / execution services (including in relation to 
mutual funds) for the purpose of implementing their investment advice.  
EOP Guidelines 
17.4 The MF Master Circular and AMFI Guidelines are applicable to all EOPs who are engaged in providing 
execution services to investors in relation to mutual funds. EOPs are categorised into two categories: 
(i) Category-1 EOPs which are registered with AMFI and  act as an agent of AMCs’ (ii) Category -2 EOPs 
which obtain registration as a stock broker and act as an agent of the investors.  
Code of Conduct for MFDs 
17.5 The Code of Conduct for MFDs prescribed by AMFI applies to all MFDs registered with AMFI and details 
the operational guidelines and requirements which inter alia include obligations of the MFDs, disclosure 
requirements, infrastructure and client related obligations and record keeping requirements.  
KYC Regulations and KYC Master Circulars  
17.6 Before investors are allowed the option to invest in mutual funds, it must be ensure d that their KYC 
process is completed in accordance with the KYC Regulations and KYC Master Circular and relevant 
details are uploaded by SEBI REs to the KYC Registration Agency (“KRA”).  
Penalties 
17.7 Contravention of regulations set out above in relation to investment activities may attract penalties, 
which may range from INR 1,00,000 to INR 1,00,00,000. 
18. Seeds Act 1968 (“Seeds Act”) read with Seeds Rules 1968 and the Seeds (Control) Order 1983  
18.1 The Seeds Act read with its rules and the Seeds (Control) Order 1983 is the principal legislation 
governing and regulating  the quality of seeds sold for agriculture. The Seeds Act aims to ensure that 
farmers get access to high -quality seeds, promote agricultural productivity, and prevent the sale of 
substandard seeds. The Seeds Act provides for the establishment of a Central Seed Committee (“CSC”), 
which is responsible for advising the Central and State Governments on matters arising from the 
administration of the Seeds Act. 
18.2 The key concepts under the Seeds Act read with its rules that are relevant to understand the scope and 
applicability thereof are discussed below: 
(a) Container: It means a box, bottle, casket, tin, barrel, case, receptacle, sack, bag, wrapper or 
other thing in which any article or thing is placed or packed. 
(b) Seeds: It means any of the following classes of seeds used for sowing or planting: (i) seeds of 
food crops including edible oil seeds and seeds of fruits and vegetables ; (ii) cotton seeds; (iii) 
seeds of cattle fodder; (iv) jute seeds; and (v) includes seedlings, and tubers, bulbs, rhizomes, 
roots, cuttings, all types of grafts and other vegetatively propagated material, of food crops or 
cattle fodder.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 26 
 
18.3 The Seeds Act along with the Seeds (Control) Order 1983 provides for the following key compliances in 
respect of seeds: 
(a) Licensing of any person willing to carry on the business of selling, exporting or importing seeds; 
(b) Certification of any seed of any notified kind or variety; 
(c) Restriction on import of seeds; and 
(d) Marking and labelling of seeds. 
18.4 Contravention of the  Seeds Act, its rules and the Seeds (Control) Order 1983  may lead to monetary 
penalty which ranges from INR 500 to INR 1,000 and imprisonment which ranges up to 6 months. 
19. State-Specific Animal Feeds Laws 
19.1 Every state and union territory has its own set of acts, regulations which govern the quality, production, 
and sale of animal feeds. The compliance under such laws depends on state to state. 
19.2 The common key concepts under the state -specific animal feeds acts that are relevant to understand 
the scope and applicability thereof are discussed below:  
(a) Animal Feed: It includes any substance or product, including premixes, intended to be used for oral 
feeding to livestock.  
(b) Manufacturer: It means a person or entity engaged in the production of animal feed.  
(c) Distributor: It means a person or entity involved in the distribution of animal feed to various sellers 
or retailers.  
(d) Retailer: It means a person or entity selling animal feed directly to the end consumer.  
(e) Feed Additives: It includes any substance added to animal feed to enhance its nutritional value or 
preserve its quality. 
19.3 These acts require licensing, packaging, labelling, quality control, and record -keeping to ensure the 
availability of safe and nutritious feed for livestock. 
19.4 Contravention of the state -specific animal feeds acts may lead to monetary penalties which depends 
on state to state and ranges between INR 1,000 to INR 5,00,000 and imprisonment  ranging from 6 
months to 10 years, depending on the severity of the violation. 
20. Pesticides Laws 
Insecticide Act, 1968 (“Insecticides Act”), Insecticides Rules, 1971 (“Insecticides Rules”), the Pesticides 
(Prohibition) Order, 2018 and the Insecticides (Price, Stock Display and Submission of Reports) Order,  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 27 
 
1986 (“Pesticides Laws”) 
20.1 The Insecticides Act is the principal legislation governing and regulating the import, manufacture, sale, 
transport, distribution and use of pesticides with a view to prevent risk to human beings or animals to 
prevent risks to the health of human beings and animals.   
20.2 The key concepts under the Pesticides Laws that are relevant to understand the scope and applicability 
thereof are discussed below: 
(a) Insecticides: The term “insecticides” has been defined to mean any substance which has been 
specified in the Schedule (List of Insecticides) to the Insecticides Act5, or such other substance 
which has been notified by the Central Government or preparation containing any one or more 
of the said substances. 
(b) Licensing Officer: It means a  licensing officer appointed by governments of respective states 
who inter alia issues the licenses to person desiring to manufacture, or to sell, stock or exhibit 
for sale or distribute any pesticides.6 
(c) Registration Committee: It means the committee constituted by the Central government to 
inter alia register pesticides after their scrutinization and verifying claims made by the 
manufacturer or importer.7 
(d) Manufacture: Any process involving the making, altering, finishing, packing, labelling, breaking 
up or treating or adopting  any pesticides with the purpose of selling, distributing or using of 
pesticide (breaking and packing for retail sale is not covered hereunder).  
20.3 The Pesticides Laws provide for the following key compliances in respect of pesticides: 
(a) Registration of pesticides for carrying out business activities, namely manufacture, import, sale 
(wholesale, retail), storage, packaging, etc.; 
(b) Licensing of persons to manufacture or sell, stock or exhibit for sale or distribute any pesticide;  
(c) Labelling requirements for pesticide; 
(d) Packaging requirements for pesticides; and 
(e) Compliance with respect to import, manufacture, sale, etc., prescribed for pesticides. 
20.4 Contravention of the Pesticides Laws may lead to monetary penalties ranging from INR 500 to INR 
 
5  The list of insecticides is available at ppqs.gov.in/sites/default/files/insecticides_act_1968_0.pdf. 
6  Section 12 of the Insecticides Act. 
7  Section 5 of the Insecticides Act.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 28 
 
75,000 and imprisonment up to 3 years, depending on the severity of the violation. 
21. Fertilizers laws 
Essential Commodities Act, 1955  (“Essential Commodities Act”)  read with Fertiliser (Inorganic, 
Organic or Mixed) Control Order 1985 (“Fertilizers Control Order”) and Fertilisers (Movement) 
Control Order (“FMC Order”) (collectively, the “Fertilisers Laws”). 
21.1 The Fertiliser Control Order and FMC Order issued by the Central Government under Essential 
Commodities Act, primarily govern and regulate the manufacturing, storage, distribution, sale, import, 
packaging and movement of fertilisers across India.  
21.2 The key concepts under the Fertilisers Laws that are relevant to understand the scope and applicability 
thereof are discussed below: 
(a) Fertiliser: It means an essential substance used to provide essential plant nutrients or 
beneficial elements or both for soil and crops. They are specified by the Central Government 
and are covered under Schedules to the Fertilisers Control Order. They include bio s timulant, 
nano fertilisers and organic carbon enhancers from Compressed Biogas plants.  
(b) Mixture of Fertilisers: It means mixture of fertilisers made by physically mixing two or more 
fertilisers with or without inert material in physical or granular form. 
(c) Special Mixture of Fertilisers : It means any mixture of fertilisers which is prepared for 
experimental purposes in pursuance of a requisition made by a third party.  
(d) Bio-fertiliser: It means the products which consist of carrier based (solid or liquid) living micro-
organisms which help with increasing the productivity of soil and/ or crops. 
(e) Bio-stimulant: It means a  substance or microorganism or a combination of both whose 
primary function is to stimulate the physiological processes in plants and to enhance the 
nutrition efficacy and crop quality.  
(f) Dealer: It means a person who is carrying on the business of selling fertilisers, wholesale or 
retail or industrial use and includes a manufacturer, importer, pool handling agency and 
marketer. 
(g) Industrial Dealer : It means a dealer who sells fertilisers for industrial purpose, i.e., for 
purposes other than fertilisation of soil and increasing productivity of crops.  
(h) Pool Handling Agency: It is an agency entrusted by Central Government with the functions of 
handling and distribution of imported fertilisers.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 29 
 
(i) Controller: It means the person appointed by Central government who inter alia undertakes 
the registration of industrial dealers.8 
(j) Notified Authority: It is an authority appointed by government of respective states which inter 
alia issues the authorisation letter to sell the fertiliser.9 
(k) Registering Authority: It means the authority appointed government of respective states who 
inter alia issues the certificate of manufacture with respect to the mixture of fertilisers and 
special mixture of fertilisers.10 
(l) Certificate of Source:  It is the certificate given by state government, commodity board, 
manufacturer, importer, pool handling agency indicating the source of fertiliser for the 
purpose of sale. 
(m) Prescribed Standard: The following table enlists the standard set out for limits of permissible 
variation in concentration of fertilisers: 
Micronutrients Concentration (%) 
Zinc 0.4 – 1.0 
Boron 0.1 – 0.3 
Molybdenum 0.01 – 0.05 
Copper 0.2 – 0.5 
 
21.3 The Fertilisers laws provide for the following key compliances: 
(a) Registration and authorisation for different dealers including industrial dealers ; 
(b) Certificate of manufacture issued for carrying on the business with respect to the mixture of 
fertilisers and special mixture of fertilisers; 
(c) Labelling and packaging requirements for fertilisers; 
(d) Disposal of fertilizers and; 
 
8  Clause 2(e) of the Fertilisers Control Order. 
9  Clause 26-A of the Fertilisers Control Order. 
10  Clause 26 of the Fertilisers Control Order.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 30 
 
(e) Compliance with quality standards prescribed for fertilisers. 
21.4 Contravention of the Fertilisers Laws may lead to imprisonment ranging between 3 months to 7 years 
along with fine, depending on the severity of the violation. 
22. Mobility and Logistics related Laws 
22.1 The mobility and logistics related laws are broadly governed by Motor Vehicles Act, 1988 (“ MVA”), 
Carriage by Road Act, 2007 (“ CBR”), Carriage by Air Act, 1972 (“ CBA”), Carriage of Goods by Sea Act, 
1925 (“CBS”), Multimodal Transportation of Goods Act, 1993 (“ MMTG”), Motor Vehicles Aggregator 
Guidelines, 2020 (“MVAG”) and Online Travel Aggregator Guidelines, 2018 (“OTAG”).  
Motor Vehicles Act, 1988 and Motor Vehicle Aggregator Guidelines, 2020  
The MVA governs the regulation of motor vehicles, road safety, licensing,  registration, and insurance. 
It aims to ensure safe and efficient movement of vehicles while establishing rules for driver behaviour, 
traffic management, penalties for offenses, and compensation for road accident victims. In 2020, the 
MVAG were introduced to regulate app -based ride -hailing services like Ola and Uber etc. These 
guidelines mandate aggregators to comply with vehicle safety standards, ensure fair pricing, protect 
driver and passenger rights, and provide a framework for insurance, licensing, and grievance redressal.  
22.2 The Key Concepts identified under the MVA and MVAG are as follows:  
(a) Aggregator: It means a digital intermediary or marketplace for a passenger to connect with a 
driver for the purpose of transportation. 
 
(b) Fares: It includes sums payable for a season ticket or in respect of the hire of a contract 
carriage. 
 
(c) Goods: It includes livestock, and anything (other than equipment ordinarily used with the 
vehicle) carried by a vehicle except living persons, but does not include luggage or personal 
effects carried in a motor car or in a trailer attached to a motor car or the personal luggage of 
passengers travelling in the vehicle. 
 
(d) Goods Carriage:  It means any motor vehicle constructed or adapted for use solely for the 
carriage of goods, or any motor vehicle not so constructed or adapted when used for the 
carriage of goods. 
 
(e) Public Service Vehicle: It means any motor vehicle used or adapted to be used for the carriage 
of passengers for hire or reward, and includes a maxi-cab, a motor-cab, contract carriage, and 
stage carriage. 
 
(f) App: It means an electronic interface operated by the Aggregator or any third party on behalf 
of the Aggregator, which may be accessed either through a computer resource or a 
communication device.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 31 
 
 
(g) Driver: It means “includes, in relation to a motor vehicle which is drawn by another motor 
vehicle, the person who acts as a steersman of the drawn vehicle. 
 
(h) Rider: It means a person who books a journey through the Aggregator App for availing the 
transportation provided by a Driver who is integrated with the Aggregator.  
22.3 The MVA and the MVAG provide for the key compliances in respect of licensing requirements and other 
compliances that a NP is required to adhere to.  
Carriage by Road Act, 2007 (CBR), Carriage by Air Act, 1972 (CBA), Carriage of Goods by Sea Act, 1925 
(CBS), and Multimodal Transportation of Goods Act, 1993 (MMTG) 
22.4 CBR governs the domestic transportation of goods by road. It establishes the rights and liabilities of 
common carriers and outlines the procedures for the carriage of goods, including the obligations of 
carriers and consignees. Under the CBR, carriers are authorized to sell goods in certain circumstances, 
such as when the consignee fails to take delivery after due notice. 
22.5 CBA is an enactment which gives force of law to the Warsaw Convention for international carriage by 
air 1929 and the Montreal Convention for international carriage by air 1999 (both these conventions 
are incorporated as rules and annexed as Schedule I, II and III to CBA). These conventions govern the 
rights, liabilities and extent of compensation of compensation of air carrier in respect of  international 
carriage of passengers, baggage and cargo by air and damages that may occur in such international 
carriage. 
22.6 CBS is an enactment which gives force of law to a code of rules relating to bill of lading which was drawn 
up in Brussels at the International Conferences on Maritime Law in 1922 and 1923. These rules 
(annexed as Schedule to CBS) provide for responsibilities and liabilities of a carrier of goods by sea.  
22.7 MMTG Act provides for regulation of transportation of goods  by road, air, rail, inland waterways and 
sea, from any place in India to a place outside India, on the basis of a multimodal transport contract. 
This act is applicable when the carriage  of goods is by at least two (2) different modes of transport 
under a multimodal transport contract, from the place of acceptance of the goods in India to a place of 
delivery of the goods outside India 
22.8 The key concepts identified under CBR, CBA, CBS and MMTG are as follows: 
Under CBR 
 
(a) Common carrier: It means a person engaged in the business of collecting, storing, forwarding 
or distributing goods to be carried by goods carriages under a goods receipt or transporting 
for hire of goods from place to place by motorised transport on road, for all persons 
undiscriminatingly and includes a goods booking company, contractor, agent, broker and 
courier agency engaged in the door -to-door transportation of documents, goods or articles 
utilising the services of a person, either directly or indirectly, to carry or acc ompany such 
documents, goods or articles, but does not include the Government.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 32 
 
 
(b) Consignment: It means documents, goods or articles entrusted by the consignor to the 
common carrier for carriage, the description or details of which are given in the goods 
forwarding note. 
 
(c) Goods: It includes: (i) containers, pallets or similar articles of transport used to consolidate 
goods; and (ii) animals or livestock. 
 
Under CBA 
 
(d) International carriage: It means any carriage in which according to the contract made by the 
parties, the place of departure and the place of destination, whether or not there be a break 
in the carriage or a transhipment, are situated either within the territories of two High 
Contracting Parties, or within the territory of a single High Contracting Party, if there is an 
agreed stopping place within a territory subject to the sovereignty, suzerainty, mandate or 
authority of another Power, even though that Power is not a party to the Convention. 
 
Under CBS 
 
(e) Carrier: It includes the owner or the charterer who enters into a contract of carriage with a 
shipper. 
 
(f) Goods: It includes any property including live animals as well as containers, pallets or similar 
articles of transport or packaging supplied by the consignor, irrespective of whether such 
property is to be or is carried on or under deck. 
 
(g) Carriage of goods:  It covers the period from the time when the goods are loaded on to the 
time when they are discharged from the ship. 
 
Under MMTG 
 
(h) Carrier: It means a person who performs or undertakes to perform for hire, the carriage or 
part thereof, of goods by road, rail, inland waterways, sea or air. 
 
(i) Goods: It means any property including live animals, containers, pallets or such other articles 
of transport or packaging supplied by the consignor, irrespective of whether such property is 
to be or is carried on or under the deck. 
 
(j) Multimodal transportation:  It means carriage of goods, by at least two different modes of 
transport under a multimodal transport contract, from the place of acceptance of the goods in 
India to a place of delivery of the goods outside India. 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 33 
 
(k) Multimodal transport contract:  It means a contract under which a multimodal transport 
operator undertakes to perform or procure the performance of multimodal transportation 
against payment of freight. 
 
(l) Multimodal transport operator:  It means any person who: (i) concludes a multimodal 
transport contract on his own behalf or through another person acting on his behalf; (ii) acts 
as principal, and not as an agent either of the consignor or consignee or of the carrier 
participating in the mu ltimodal transportation, and who assumes responsibility for the 
performance of the said contract; and (iii) is registered under sub -section (3) of Section 4. 
Online Travel Aggregator Guidelines, 2018 (“OTAG”) 
22.9 OTAG provides for various guidelines to be followed by various Online Travel Aggregators (“ OTA”) 
providing services as an intermediary or an agent selling travel products and services such as airlines, 
car rental, cruise lines, hotels or accommodation, railways and vacation packages on behalf of suppliers 
using the internet as a medium by establishing an online market- place and earn profits on the discounts 
commonly referred to as commission offered by the suppliers. 
22.10 The following is the key concepts identified under the OTAG 
(a) Online Travel Aggregator: It is an intermediary or an agent selling travel products and services 
such as airlines, car rental, cruise lines, hotels or accommodation, railways and vacation 
packages on behalf of suppliers using the internet as a medium by establishing an online 
market-place and earn profits on the discounts commonly referred to as commission offered 
by the suppliers.  
23. RBI Master Directions on Prepaid Payment Instruments (“PPI Master Directions”)  
23.1 The PPI Master Directions set out the key compliance requirements for issuance and operation of 
Prepaid Payment Instruments (“PPIs”), including gift card PPIs. Under the PPI Master Directions, banks 
need RBI approval and non-bank entities require RBI authorization to issue these instruments. 
23.2 Gift PPIs are subject to specific restrictions, viz. they have a maximum value limit of INR 10,000 per 
instrument, cannot be reloaded, and does not permit cash -out, refunds, or fund transfers. KYC is 
required for purchasers of the gift PPI. Additionally, PPI issuers are required to maintain transaction 
logs for 10 years to adhere to anti-money laundering regulations. 
23.3 These instruments must have a minimum validity of 1 year from its issuance / loading.  
23.4 The PPI issuer’s name must be prominently displayed and all features of the gift PPI must be clearly 
communicated to holders. Two -factor authentication is not mandatory, and interoperability remains 
optional for gift PPIs.  
23.5 Consumer protection measures include clear disclosure of terms and fees, a grievance redressal system 
with 48-hour response targets, and access to the RBI Integrated Ombudsman scheme.  
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 34 
 
 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 35 
 
DETAILED COMPLIANCES 
The obligations highlighted in this document may extend towards the sale of all categories of goods including 
food, grocery, apparel, cosmetics, consumer electronics, and home décor, as applicable. The compliance 
handbook is segregated to indicate applicab le compliances for categories of NPs under each of the following 
industries: 
1. Food & Beverage; 
2. Groceries and pet supplies; 
3. Fashion and footwear; 
4. Electronics; 
5. Beauty and Personal Care; 
6. Mobility and Transportation; 
7. Financial Services (Credit, Insurance and Mutual Funds); 
8. Gift card and other Services Industry; 
9. Gaming Industry; 
10. OTT Media Services; 
11. Agricultural Inputs; 
12. Fresh Produce Products; 
13. Pharmacy and Healthcare Devices; 
14. Education Services; and 
15. Home Décor. 
 
[Note: This section is structured to provide an overview of the relevant legal compliances that is required to be 
adhered to by different categories of NPs, based on the above heads. The Annexure, which has been cross-linked 
in the relevant portions, provides greater detail on such compliances, to the extent relevant for this Handbook. ] 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 36 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE FOOD AND BEVERAGES INDUSTRY 
 Applicable 
 Not Applicable  
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory 
Seller App 
Marketplace 
App 
Seller on the 
Market place 
Seller App 
Food Safety  
laws 
Licensing     
Packaging     
Labelling & 
display 
    
Importation     
Fortification     
Food Standards 
and additive  
    
Prohibition and 
Restriction on 
sale 
    
Recalling the 
food article 
    
Contaminants 
and Toxins 
    
Advertising and 
Claims 
    
Infant Nutrition     
Approval of 
Non-Specified 
Food 
    
Legal 
Metrology 
laws 
Licensing    + 
Packaging and 
Labelling 
    
 
 Contractually ensure with the seller that the commodity is in compliance with the specified requirements. 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
inventory seller is not manufacturing or packing / labelling the commodity). 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
seller on the marketplace seller app is not manufacturing or packing / labelling the commodity). 
 Applicable, where the inventory seller is engaged in import of the commodities. 
 Applicable, where the seller on marketplace seller app is engaged in import of commodities. 
 Applicable, where the inventory seller is engaged in pre-packing or importing the commodity for its sale, distribution or delivery. 
+ Applicable, where the seller on the marketplace seller app is engaged in pre-packing or importing the commodity for its sale, distribution 
or delivery.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 37 
 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory 
Seller App 
Marketplace 
App 
Seller on the 
Market place 
Seller App 
Other 
Compliances 
    
BIS laws Licensing / 
Certificate of 
conformity 
    
Import and 
Export 
Registration     
Consumer 
Protection 
laws 
Compliances of 
manufacturer, 
product service 
provider and 
product seller 
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   11 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
Information 
Technology 
Act 
Compliance 
with IT Rules 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
 
 
 
 
 
 
11 Please note that this is not applicable to endorsers/ influencers  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 38 
 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 39 
 
I FOOD & BEVERAGE 
1. Registrations and compliances required by all NPs 
A. Food Safety Laws 
1.1 Licensing Requirements 
To commence or carry on the food business, both Buyer App and  Seller on Marketplace  Seller App 
(Marketplace seller app as well as Inventory Seller App) are required to obtain a license from the central 
authority. Sellers are also required to obtain a license from the central authority or the concerned state 
or union territory’s licensing authority, as the case maybe. More details on the licensing requirements 
have been provided under Annexure A (under the head “Licensing or Registration Requirements”).  
The Guidelines for the operation of e-commerce FBOs under the FSS Act and Section I of the Food Safety 
and Standards (Licensing and Registration of Food Business) Amendment Regulation 2018 
(“Amendment Regulations 2018”) provide for the following:12  
• E-Commerce FBOs shall obtain central license, comply with the requ irements prescribed under 
the Food Safety Laws and hygiene and manufacturing standards for licensed FBOs engaged in food 
services, including packaging and transportation. 
• The E -Commerce FBO must enter into agreements  with the sellers, brand owners, or 
manufacturers onboarded by them. These agreements shall affirm that the said entities comply  
with the Food Safety Act, Rules, and Regulations.  
• The seller/ brand owner/ manufacturer shall ensure that legible and clear picture of the 'principal 
display panel' for pre-packed food products offered for sale to the consumer, is made available for 
viewing by the customers, excluding specific details such as batch number, expiry date, and MRP.  
• Any food article delivered to a consumer by E-Commerce FBO shall have a shelf life of at least 30 
percent or 45 days remaining at the time of delivery. 
1.2 Packaging Requirements 
Food Safety and Standards (Packaging) Regulations, 2018 (“Packaging Regulations”) which provides for 
the packaging requirements to be adhered to by the relevant food business operator. The packaging 
requirements stipulated thereunder have been provided under Annexure A (under the head “Packaging 
Requirements”). The Packaging Regulations are applicable to  the Buyer App and Marketplace App i.e., 
they shall contractually ensure with the seller that the commodity is in compliance with the specified 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commodity )) and Seller on the marketplace seller app  
 
12  Note: In February 2017, FSSAI issued Guidelines for the operation of e-commerce FBOs under the FSS Act which are to be read as 
explanatory memorandum and do not in any way supplant any of the requirements of the Food Safety Act.  
 Additionally, Amendment Regulations 2018  which inter alia covers the provisions for licensing and registration of E -Commerce 
FBOs. However, the said regulations have not been notified, the FSSAI has operationalized the same under Section 18(2)(d) rea d 
with Section 16(5) of the Food Safety Act with effect from 15 February 2018 and subsequently re-operationalized for a period of six 
months from 16 August 2018, 28 February 2019, 29 August 2019, 16 February 2020, 16 August 2020, 19 March 2021, 12 November 
2021, 24 June 2022, 11 November 2022, 11 May 2023, 11 November 2023, 11 May 2024.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 40 
 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity)). 
1.3 Labelling and Display Requirements 
Every packaged food article shall be marked and labelled in accordance with the Labelling Regulations 
as provided under Annexure A (under the head “Labelling and Display Requirements”). Mandatory food 
information required under the Food Safety Act, Rules, and Regulations shall be provided to consumers 
without charging supplementary costs  and must be available before the purchase is  concluded. The 
above Labelling and Display Requirements are applicable to the Buyer App and Marketplace App i.e., 
they shall contractually ensure with the seller that the commodity is in compliance with the specified 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with the specified requirements (where the inventory s eller is not 
manufacturing or packing / labelling the commodity )) and Seller on the marketplace seller app 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity) ).Food Standards, Fortification & Additives:  Every FBOs shall ensure 
compliance with the  
(i) Standards & Additives: Must follow standards under the  Food Safety and Standards (Food 
Products Standards and Food Additives) Regulations, 201113. 
(ii) Fortification: Where applicable, food may be fortified to improve nutritional quality as per 
FSSAI Fortification Regulations, 201814. 
(iii) Infant Nutrition: Products intended for infants must comply with the relevant Infant Nutrition 
Regulations as discussed under Annexure A (Infant Nutrition Requirements). 
(iv) Contaminants and Residues: Food must not contain contaminants, toxins, or residues beyond 
limits set under the Food Safety and Standards ( Containments, toxins and Residues) 
Regulations, 201115. 
Furthermore, all the non-specified food articles or food ingredients shall be manufactured or imported 
on prior approval of the FSS in the manner prescribed under the Food Safety and Standards (Approval 
for Non-Specified Food and Food Ingredients) Regulations, 2017.16 In this regard, further reference may 
be made to the additional guidance documents available at https://fssai.gov.in/cms/non-specified-
food.php. 
The above Regulations are applicable to the Buyer App and Marketplace App i.e., they shall 
contractually ensure with the seller that the commodity is in compliance with the specified 
 
13  https://fssai.gov.in/upload/uploadfiles/files/Food_Additives_Regulations.pdf. 
14 https://fssai.gov.in/upload/uploadfiles/files/Gazette_Notification_Food_Fortification_10_08_2018.pdf.  
15  https://fssai.gov.in/upload/uploadfiles/files/Contaminants_Regulations.pdf. 
16  https://fssai.gov.in/upload/uploadfiles/files/Gazette_Notification_NonSpecified_Food_Ingredients_15_09_2017.pdf.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 41 
 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commodity )) and Seller on the marketplace seller app 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity)). 
1.4 Importing Requirements 
To import the food articles, the food business operators /importer are required to obtain the import 
license under the Import Regulations. Compliances to import food articles have been provided under 
Annexure A (under the head “Importing Requirements”). 
1.5 Prohibition and restrictions on sales 
Some of the food articles are prohibited for sale or subjected to certain conditions for the purpose of 
sale. The Food Safety and Standards (Prohibitions and Restrictions on sales) Regulations, 2011 17 
prescribe the specifications of such food articles  which are prohibited and / or restricted. Such 
compliances with respect to the  prohibited or restricted food articles sale shall be observed by the 
FBOs. These Regulations are applicable to the Buyer App and Marketplace App i.e., they shall 
contractually ensure with the seller that the commodity is in compliance with the specified 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commodity )) and Selle r on the marketplace seller app 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity)). 
1.6 Food Recall Requirements 
In case the food article is determined to be unsafe (as defined in Annexure A ), the food business 
operators are required to  recall such food article in the manner prescribed under the Food Recall 
Regulations. Compliances to recall food articles have been provided under Annexure A (under the head 
“Food Recall Requirements”). These Regulations are applicable to the Buyer App, Inventory Seller App, 
Marketplace App and Seller on Marketplace Seller App. 
1.7 Advertising and Claims 
All the FBOs and marketers are required to comply with the standards prescribed for advertising and 
claims (including the claims made on labels) under the Advertising Regulations. Compliances related to 
advertising and claims  have been provided under Annexure A  (under the head “ Advertising and 
Claims”). These Regulations are applicable to the Buyer App, Inventory Seller App, Marketplace App 
and Seller on Marketplace Seller App. 
 
17  https://fssai.gov.in/upload/uploadfiles/files/Prohibition_Regulations.pdf.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 42 
 
B. LM Act 
2.1 Licensing or Registration Requirement 
Any individual, firm, society, company, corporation, or Hindu Undivided Family that pre -packs or 
imports any pre -packaged commodity for sale, distribution, or delivery is required to register itself 
under the LM Act with the Director or Controller of Legal Met rology. This registration must be 
completed within 90 days of starting such activities.  Depending on the nature of the activity undertaken 
by the Network Participant or seller, registration under the LM Act may be required.  
2.2 Packaging and Labelling Requirements 
Entities must ensure that all pre -packaged products display the following mandatory declarations in 
accordance with PC Rules: 
• Name and address of the manufacturer, packer, or importer 
• Common or generic name of the product 
• Net quantity (weight, measure, or number) 
• Maximum retail price (inclusive of all taxes) 
• Month and year of manufacture or packing 
• Best before’ or ‘Use by’ date must be mentioned where applicable 
• Consumer care contact details 
• Unit sale price (where applicable) 
• Country of origin  
• Mandatory indicators for vegetarian/non-vegetarian origin (where applicable) 
• Special labelling for GM foods (where applicable) 
• Where the sizes of the commodity contained in the package are relevant, the dimensions of 
the commodity contained in the package and if the dimensions of the different pieces are 
different, the dimensions of each such different piece 
Notably, e-commerce entities must ensure that all mandatory declarations (except the month and year 
of manufacture or packing) are displayed on the digital or electronic platform used for selling the goods. 
As per the PC Rules, in marketplace models, the responsibility for the correctness of these declarations 
lies with the manufacturer, seller, dealer, or importer, as applicable. 
The packaging and labelling requirements provided under Annexure B (under the head “Packaging and 
Labelling Requirements”) shall be complied with. However, for the purpose of packages containing food 
articles, further reference shall be made to Para 1.1 and 1.2 of Annexure B. 
2.3 Other compliances under Legal Metrology (Packaged Commodities) Rules 2011 (“PC Rules”):  
Other compliance under PC Rules namely, declaration on container type commodities, general 
guidelines, manner of declaration, and maximum permissible errors on net quantities declared by 
weight or volume have been discussed in Annexure B. 
C. BIS Act  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 43 
 
The Bureau of Indian Standards Act, 2016 (“BIS Act”) empowers the Bureau of Indian Standards (“BIS”) 
to regulate the quality and standards of products distributed in the Indian market. While BIS 
certification is generally voluntary, the Central Government has made it mandatory for certain products 
based on considerations such as public interest, health and safety of humans, animals, or plants, 
environmental protection, prevention of unfair trade practices, and national security.  
For such products, the use of the Standard Mark is compulsory and must be obtained under a licence 
or Certificate of Conformity (CoC) from BIS. The list of products under compulsory certification is 
available on the BIS website: https://www.bis.gov.in/product-certification/products-under-
compulsory-certification/#  
Please refer to 1.4 of Annexure C  to check the applicability of BIS laws on the subject product(s). 
Additionally, the labelling requirements have been provided in  Annexure C  (under the heading 
“Labelling requirements”). 
D. Import and Export laws 
4.1 Registration 
Every importer and / or exporter is required to obtain Certificate of Importer -Exporter Code (“IEC”) as 
discussed in Annexure D. 
E. Consumer Protection Act and the rules/ guidelines issued thereunder 
5.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details. 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action . 
• Refunds: Process refunds as prescribed under applicable law. 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally:  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 44 
 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers. 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late. 
• Disclosures: Same disclosure obligations as marketplaces. 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
 
Annexure E details compliances required under the E-Commerce Rules.  
5.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it: 
• Is truthful and honest in its representation.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 45 
 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
5.3 Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here : 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protectionGuidelines on Dark Patterns 
 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern 
using user interface or user experience interactions on any platform that is designed to mislead or trick 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amounting to misleading advertisement or unfair 
trade pra ctice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
5.4 Greenwashing Guidelines  
 
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
F. Data protection laws 
 
The IT Act read with the SPDI Rules are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H.  
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act . 
G. Compliance with IT Rules   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 46 
 
An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that 
record and includes telecom service providers, n etwork service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites, online -auction sites, online -
market places and cyber cafes”.  To the extent, the NP qualifies as an intermediary , it will be required 
to implement the due diligence obligations (depending on the category of intermediary)  as has been 
set out in Annexure I, if it seeks to avail the exemption from liability in accordance with Section 79 of 
the IT Act. 
2. Compliances for vegan products 
In addition to the compliances mentioned in Section 1 above, please see below the broad compliances 
that sellers of vegan products are required to adhere: 
A. Food Safety Laws 
The compliance required under the Food Safety Act and Rules made thereunder for vegan foods have 
been discussed under Annexure A at para-F below. Any person intending to manufacture, pack, sell, 
offer for sale, market or otherwise distribute Vegan products shall comply with the Food Safety and 
Standards (Vegan Foods) Regulations, 2022. Key highlights of the Regulations are as follows:  
• Vegan foods must not undergo animal testing for safety, unless mandated by a regulatory authority. 
• Businesses must prevent contamination with non -vegan substances during all production and 
distribution stages by following good manufacturing practices.  
• Packaging must comply with Labelling Regulations and display a vegan logo approved by the Food 
Authority. 
• Imported vegan foods must be accompanied by a certificate from a recognised authority in the 
exporting country, in the prescribed format. 
3. Compliances for organic foods 
In addition to the compliances mentioned in Section 1 above, please see below the broad compliances 
that sellers of organic foods are required to adhere: 
A. Food Safety Laws 
1.1 The compliance required under the Food Safety Act and Rules made thereunder for organic foods have 
been discussed under Annexure A at para-E below. 
4. Compliances for health supplements, nutraceuticals, food for special dietary use, food for special 
medical purpose, functional food and novel food 
In addition to the compliances mentioned in Section 1 above, please see below the broad compliances 
that sellers of health supplements, nutraceuticals, food for special dietary use, food for special medical 
purpose, functional food and novel food are required to adhere: 
A. Food Safety Laws  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 47 
 
1.1 Licensing Requirements 
(i) The manufacture, sale and distribution of the health supplements, nutraceuticals, food for 
special dietary use, food for special medical purpose, functional food and novel food is 
governed by the Food Safety and Standards (Health Supplements, Nutraceutical s, Food for 
Special Dietary Use, Food for Special Medical Purpose, Functional Food and Novel Food) 
Regulations, 2016 (“Health Supplements and Others’ Regulations ”) as discussed in Para G of 
Annexure A below. 
(ii) The said Regulations stipulate provisions for nutrient claim on the label of the above stated 
products. Additionally, the Health Supplements and Others’ Regulations provide for the 
labelling requirements as discussed in Para G of Annexure A below. 
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 48 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE GROCERIES AND PET SUPPLIES INDUSTRY  
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Food Safety  
laws 
Licensing     
Packaging     
Labelling & 
display 
    
Importation     
Fortification     
Food Standards 
and additive  
    
Prohibition and 
Restriction on 
sale 
    
Recalling the 
food article 
    
Contaminants 
and Toxins 
    
Advertising and 
Claims 
    
Infant Nutrition     
Approval of 
Non-Specified 
Food 
    
Legal 
Metrology 
laws 
Licensing    + 
Packaging and 
Labelling 
    
 
 Contractually ensure with the seller that the commodity is in compliance with the specified requirements. 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
inventory seller is not manufacturing or packing / labelling the commodity). 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
seller on the marketplace seller app is not manufacturing or packing / labelling the commodity). 
 Applicable, where the inventory seller is engaged in import of the commodities. 
 Applicable, where the seller on marketplace seller app is engaged in import of commodities. 
 Applicable, where the inventory seller is engaged in pre-packing or importing the commodity for its sale, distribution or delivery. 
+ Applicable, where the seller on the marketplace seller app is engaged in pre-packing or importing the commodity for its sale, distribution 
or delivery.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 49 
 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Other 
Compliances 
    
BIS laws Licensing / 
Certificate of 
conformity 
    
Import and 
Export 
Registration     
Consumer 
Protection 
laws 
Compliances of 
manufacturer, 
product service 
provider and 
product seller 
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   18 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
Information 
Technology 
Act 
Compliance 
with IT Rules 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
 
 
18 Please note that this is not applicable to endorsers/ influencers  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 50 
 
II GROCERIES AND PET SUPPLIES 
1. Registrations and compliances required by all NPs 
A. Food Safety Laws 
Please note that the Food Safety Laws are not applicable to pet supplies. Accordingly, we have discussed 
the compliance requirements stipulated for groceries in the ensuing paragraphs.  
1.1 Licensing Requirements 
To commence or carry on the food business, both Buyer App and Seller on Marketplace Seller App 
(Marketplace seller app as well as Inventory Seller App) are required to obtain a license from the central 
authority. Sellers are also required to obtain a license from the central authority or the concerned state 
or union territory’s licensing authority, as the case maybe. More details on the licensing requirements 
have been provided under Annexure A (under the head “Licensing or Registration Requirements”).  
The Guidelines for the operation of e-commerce FBOs under the FSS Act and Section I of the Food Safety 
and Standards (Licensing and Registration of Food Business) Amendment Regulation 2018 
(“Amendment Regulations 2018”) provide for the following:19  
• E-Commerce FBOs shall obtain central license, comply with the requirements prescribed under 
the Food Safety Laws and hygiene and manufacturing standards for licensed FBOs engaged in food 
services, including packaging and transportation. 
• The E -Commerce FBO must enter into agreements  with the sellers, brand owners, or 
manufacturers onboarded by them. These agreements shall affirm that the said entities comply  
with the Food Safety Act, Rules, and Regulations.  
• The seller/ brand owner/ manufacturer shall ensure that legible and clear picture of the 'principal 
display panel' for pre-packed food products offered for sale to the consumer, is made available for 
viewing by the customers, excluding specific details such as batch number, expiry date, and MRP.  
• Any food article delivered to a consumer by E-Commerce FBO shall have a shelf life of at least 30 
percent or 45 days remaining at the time of delivery. 
1.2 Packaging Requirements 
Food Safety and Standards (Packaging) Regulations, 2018 (“Packaging Regulations”) which provides for 
the packaging requirements to be adhered to by the relevant food business operator. The packaging 
requirements stipulated thereunder have been provided under Annexure A (under the head “Packaging 
Requirements”). The Packaging Regulations are applicable to the Buyer App and Marketplace App i.e., 
they shall contractually ensure with the seller that the commodity is in compliance with the specified 
 
19  Note: In February 2017, FSSAI issued Guidelines for the operation of e-commerce FBOs under the FSS Act which are to be read as 
explanatory memorandum and do not in any way supplant any of the requirements of the Food Safety Act.  
 Additionally, Amendment Regulations 2018  which inter alia covers the provisions for licensing and registration of E -Commerce 
FBOs. However, the said regulations have not been notified, the FSSAI has operationalized the same under Section 18(2)(d) rea d 
with Section 16(5) of the Food Safety Act with effect from 15 February 2018 and subsequently re-operationalized for a period of six 
months from 16 August 2018, 28 February 2019, 29 August 2019, 16 February 2020, 16 August 2020, 19 March 2021, 12 November 
2021, 24 June 2022, 11 November 2022, 11 May 2023, 11 November 2023, 11 May 2024.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 51 
 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commodity )) and Seller on the marketplace seller app 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity)). 
1.3 Labelling and Display Requirements 
Every packaged food article shall be marked and labelled in accordance with the Labelling Regulations 
as provided under Annexure A (under the head “Labelling and Display Requirements”). Mandatory food 
information required under the Food Safety Act, Rules, and Regulations shall be provided to consumers 
without charging supplementary costs  and must be available before the purchase is  concluded. The 
above Labelling and Display Requirements are applicable to the Buyer App and Marketplace App i.e., 
they shall contractually ensure with the seller that the commodity is in compliance with the specified 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with  the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commodity )) and Seller on the marketplace seller app 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity) ).Food Standards, Fortification & Additives:  Every FBOs shall ensure 
compliance with the  
(i) Standards & Additives: Must follow standards under the  Food Safety and Standards (Food 
Products Standards and Food Additives) Regulations, 201120. 
(ii) Fortification: Where applicable, food may be fortified to improve nutritional quality as per 
FSSAI Fortification Regulations, 201821. 
(iii) Infant Nutrition: Products intended for infants must comply with the relevant Infant Nutrition 
Regulations as discussed under Annexure A (Infant Nutrition Requirements). 
(iv) Contaminants and Residues: Food must not contain contaminants, toxins, or residues beyond 
limits set under the Food Safety and Standards ( Containments, toxins and Residues) 
Regulations, 201122. 
Furthermore, all the non-specified food articles or food ingredients shall be manufactured or imported 
on prior approval of the FSS in the manner prescribed under the Food Safety and Standards (Approval 
for Non-Specified Food and Food Ingredients) Regulations, 2017.23 In this regard, further reference may 
 
20  https://fssai.gov.in/upload/uploadfiles/files/Food_Additives_Regulations.pdf. 
21 https://fssai.gov.in/upload/uploadfiles/files/Gazette_Notification_Food_Fortification_10_08_2018.pdf.  
22  https://fssai.gov.in/upload/uploadfiles/files/Contaminants_Regulations.pdf. 
23  https://fssai.gov.in/upload/uploadfiles/files/Gazette_Notification_NonSpecified_Food_Ingredients_15_09_2017.pdf.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 52 
 
be made to the additional guidance documents available at https://fssai.gov.in/cms/non-specified-
food.php. 
The above Regulations are applicable to the Buyer App and Marketplace App i.e., they shall 
contractually ensure with the seller that the commodity is in compliance with the specified 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commodity )) and Seller on the marketplace seller app 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity)). 
1.4 Importing Requirements 
To import the food articles, the food business operators /importer are required to obtain the import 
license under the Import Regulations. Compliances to import food articles have been provided under 
Annexure A (under the head “Importing Requirements”). 
1.5 Prohibition and restrictions on sales 
Some of the food articles are prohibited for sale or subjected to certain conditions for the purpose of 
sale. The Food Safety and Standards (Prohibitions and Restrictions on sales) Regulations, 2011 24 
prescribe the specifications of such food articles  which are prohibited and / or restricted. Such 
compliances with respect to the  prohibited or restricted food articles sale shall be observed by the 
FBOs. These Regulations are applicable to the Buyer App and Marketplace App i.e., they shall 
contractually ensure with the seller that the commodity is in compliance with the specified 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commodity )) and Seller on the marketplace seller app 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity)). 
1.6 Food Recall Requirements 
In case the food article is determined to be unsafe (as defined in Annexure A ), the food business 
operators are required to  recall such food article in the manner prescribed under the Food Recall 
Regulations. Compliances to recall food articles have been provided under Annexure A (under the head 
“Food Recall Requirements”). These Regulations are applicable to the Buyer App, Inventory Seller App, 
Marketplace App and Seller on Marketplace Seller App. 
 
24  https://fssai.gov.in/upload/uploadfiles/files/Prohibition_Regulations.pdf.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 53 
 
1.7 Advertising and Claims 
All the FBOs and marketers are required to comply with the standards prescribed for advertising and 
claims (including the claims made on labels) under the Advertising Regulations. Compliances related to 
advertising and claims  have been provided under Annexure A  (under the head “ Advertising and 
Claims”). These Regulations are applicable to the Buyer App, Inventory Seller App, Marketplace App 
and Seller on Marketplace Seller App. 
  
B. LM Act 
2.1 Licensing or Registration Requirement 
Any individual, firm, society, company, corporation, or Hindu Undivided Family that pre -packs or 
imports any pre -packaged commodity for sale, distribution, or delivery is required to register itself 
under the LM Act with the Director or Controller of Legal Me trology. This registration must be 
completed within 90 days of starting such activities.  Depending on the nature of the activity undertaken 
by the Network Participant or seller, registration under the LM Act may be required.  
2.2 Packaging and Labelling Requirements 
Entities must ensure that all pre -packaged products display the following mandatory declarations in 
accordance with the PC Rules: 
• Name and address of the manufacturer, packer, or importer 
• Common or generic name of the product 
• Net quantity (weight, measure, or number) 
• Maximum retail price (inclusive of all taxes) 
• Month and year of manufacture or packing 
• Best before’ or ‘Use by’ date must be mentioned where applicable 
• Consumer care contact details 
• Unit sale price (where applicable) 
• Country of origin  
• Mandatory indicators for vegetarian/non-vegetarian origin (where applicable) 
• Special labelling for GM foods (where applicable) 
• Where the sizes of the commodity contained in the package are relevant, the dimensions of the 
commodity contained in the package and if the dimensions of the different pieces are different, 
the dimensions of each such different piece 
Notably, e-commerce entities must ensure that all mandatory declarations (except the month and year 
of manufacture or packing) are displayed on the digital or electronic platform used for selling the goods. 
As per the PC Rules, in marketplace models, the responsibility for the correctness of these declarations 
lies with the manufacturer, seller, dealer, or importer, as applicable. 
The packaging and labelling requirements provided under Annexure B (under the head “Packaging and 
Labelling Requirements”) shall be complied with.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 54 
 
2.3 Other compliances under Legal Metrology (Packaged Commodities) Rules 2011 (“PC Rules”):  
Other compliance under PC Rules namely, declaration on container type commodities, general 
guidelines, manner of declaration, and maximum permissible errors on net quantities declared by 
weight or volume have been discussed in Annexure B. 
C. BIS Act 
The Bureau of Indian Standards Act, 2016 (“BIS Act”) empowers the Bureau of Indian Standards (“BIS”) 
to regulate the quality and standards of products distributed in the Indian market. While BIS 
certification is generally voluntary, the Central Government has made it mandatory for certain products 
based on considerations such as public interest, health and safety of humans, animals, or plants, 
environmental protection, prevention of unfair trade practices, and national security.  
For such products, the use of the Standard Mark is compulsory and must be obtained under a licence 
or Certificate of Conformity (CoC) from BIS. The list of products under compulsory certification is 
available on the BIS website: https://www.bis.gov.in/product-certification/products-under-
compulsory-certification/#  
Please refer to 1.4 of Annexure – C to check the applicability of BIS laws on the subject product(s). 
Additionally, the labelling requirements have been provided in Annexure – C (under the heading 
“Labelling requirements”). 
D. Import and Export Laws 
4.1 Registration 
Every importer and / or exporter is required to obtain Certificate of Importer -Exporter Code (“IEC”) as 
discussed in Annexure D. 
E. Consumer Protection Act and the rules/ guidelines issued thereunder 
5.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 55 
 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action . 
• Refunds: Process refunds as prescribed under applicable law. 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally: 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers. 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late. 
• Disclosures: Same disclosure obligations as marketplaces. 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 56 
 
Annexure E details compliances required under the E-Commerce Rules.  
5.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it: 
• Is truthful and honest in its representation. 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection 
5.3 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern 
using user interface or user experience interactions on any platform that is designed to mislead or trick 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amounting to misleading advertisement or unfair 
trade pra ctice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
5.4 Greenwashing Guidelines  
 
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
F. Data protection laws 
The IT Act read SPDI Rules are the primary legislations in India governing data privacy and protection 
on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling under the 
category of SPDI, it is required to be compliant with the obligations specified under the SPDI Rules. A 
summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, processing 
and transferring of SPDI, has been set out in Annexure H.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 57 
 
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act . 
G. Compliance with IT Rules  
An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that 
record and includes telecom service providers, n etwork service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites, online -auction sites, online -
market places and cyber cafes”. To the extent, the NP qualifies as an intermediary, it will be required 
to implement the due diligence obligations (depending on the category of intermediary) as has been 
set out in Annexure I, if it seeks to avail the exemption from liability in accordance with Section 79 of 
the IT Act. 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 58 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE FASHION AND FOOTWEAR INDUSTRY  
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Legal 
Metrology 
laws 
Licensing    + 
Packaging and 
Labelling 
    
Other 
Compliances 
    
BIS laws Licensing / 
Certificate of 
conformity 
    
Import and 
Export 
Registration     
Consumer 
Protection 
laws 
Compliances of 
manufacturer, 
product service 
provider and 
product seller 
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   25 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
 
 Applicable, where the inventory seller is engaged in pre-packing or importing the commodity for its sale, distribution or delivery. 
+ Applicable, where the seller on the marketplace seller app is engaged in pre-packing or importing the commodity for its sale, distribution 
or delivery. 
 Contractually ensure with the seller that the commodity is in compliance with the specified requirements. 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
inventory seller is not manufacturing or packing / labelling the commodity). 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
seller on the marketplace seller app is not manufacturing or packing / labelling the commodity). 
 Applicable, where the inventory seller is engaged in import of the commodities. 
 Applicable, where the seller on marketplace seller app is engaged in import of commodities. 
25 Please note that this is not applicable to endorsers/ influencers.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 59 
 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Information 
Technology 
Act 
Compliance 
with IT Rules 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 60 
 
III FASHION AND FOOTWEAR 
1. Registrations and compliances required by all NPs 
A. LM Act 
1.1 Licensing or Registration Requirement 
Any individual, firm, society, company, corporation, or Hindu Undivided Family that pre -packs or 
imports any pre -packaged commodity for sale, distribution, or delivery is required to register itself 
under the LM Act with the Director or Controller of Legal Me trology. This registration must be 
completed within 90 days of starting such activities.  Depending on the nature of the activity undertaken 
by the Network Participant or seller, registration under the LM Act may be required.  
1.2 Packaging and Labelling Requirements 
Entities must ensure that all pre -packaged products display the following mandatory declarations in 
accordance with the PC Rules: 
• Name and address of the manufacturer, packer, or importer 
• Common or generic name of the product 
• Net quantity (weight, measure, or number) 
• Maximum retail price (inclusive of all taxes) 
• Month and year of manufacture or packing 
• Best before’ or ‘Use by’ date must be mentioned where applicable 
• Consumer care contact details 
• Unit sale price (where applicable) 
• Country of origin  
• Mandatory indicators for vegetarian/non-vegetarian origin (where applicable) 
• Special labelling for GM foods (where applicable) 
• Where the sizes of the commodity contained in the package are relevant, the dimensions of the 
commodity contained in the package and if the dimensions of the different pieces are different, 
the dimensions of each such different piece 
Notably, e-commerce entities must ensure that all mandatory declarations (except the month and year 
of manufacture or packing) are displayed on the digital or electronic platform used for selling the goods. 
As per the PC Rules, in marketplace models, the responsibility for the correctness of these declarations 
lies with the manufacturer, seller, dealer, or importer, as applicable. 
The packaging and labelling requirements provided under Annexure B (under the head “Packaging and 
Labelling Requirements”) shall be complied with.  
1.3 Other compliances under Legal Metrology (Packaged Commodities) Rules 2011 (“PC Rules”):  
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 61 
 
Other compliance under PC Rules namely, declaration on container type commodities, general 
guidelines, manner of declaration, and maximum permissible errors on net quantities declared by 
weight or volume have been discussed in Annexure B. 
B. BIS Act 
The Bureau of Indian Standards Act, 2016 (“BIS Act”) empowers the Bureau of Indian Standards (“BIS”) 
to regulate the quality and standards of products distributed in the Indian market. While BIS 
certification is generally voluntary, the Central Government has made it mandatory for certain products 
based on considerations such as public interest, health and safety of humans, animals, or plants, 
environmental protection, prevention of unfair trade practices, and national security.  
For such products, the use of the Standard Mark is compulsory and must be obtained under a licence 
or Certificate of Conformity (CoC) from BIS. The list of products under compulsory certification is 
available on the BIS website: https://www.bis.gov.in/product-certification/products-under-
compulsory-certification/#  
Please refer to 1.4 of Annexure – C to check the applicability of BIS laws on the subject product(s). 
Additionally, the labelling requirements have been provided in Annexure – C (under the heading 
“Labelling requirements”). 
C. Import and Export laws 
3.1 Registration 
Every importer and / or exporter is required to obtain Certificate of Importer -Exporter Code (“IEC”) as 
discussed in Annexure D. 
D. Consumer Protection Act and the rules/ guidelines issued thereunder 
4.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details. 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action .  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 62 
 
• Refunds: Process refunds as prescribed under applicable law. 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally: 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers. 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late. 
• Disclosures: Same disclosure obligations as marketplaces. 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
 
Annexure E details compliances required under the E-Commerce Rules.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 63 
 
4.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it: 
• Is truthful and honest in its representation. 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection 
4.3 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern 
using user interface or user experience interactions on any platform that is designed to mislead or trick 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amounting to misleading advertisement or unfair 
trade pra ctice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
4.4 Greenwashing Guidelines  
 
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
E. Data protection laws 
The IT Act read with the SPDI Rules are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 64 
 
Please note that once DPDP Act is enforced, all entities collecting, handling, or processing personal data 
will be required to comply with the obligations prescribed under the DPDP Act . 
F. Compliance with IT Rules  
An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that 
record and includes telecom service providers, n etwork service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites, online -auction sites, online -
market places and cyber cafes”. To the extent, the NP qualifies as an intermediary, it will be required 
to implement the due diligence obligations (depending on the category of intermediary) as has been 
set out in Annexure I, if it seeks to avail the exemption from liability in accordance with Section 79 of 
the IT Act. 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 65 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE ELECTRONICS INDUSTRY  
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Legal 
Metrology 
laws 
Licensing    + 
Packaging and 
Labelling 
    
Other 
Compliances 
    
BIS laws Licensing / 
Certificate of 
conformity 
    
Import and 
Export 
Registration     
Consumer 
Protection 
laws 
Compliances of 
manufacturer, 
product service 
provider and 
product seller 
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   26 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
 
 Applicable, where the inventory seller is engaged in pre-packing or importing the commodity for its sale, distribution or delivery. 
+ Applicable, where the seller on the marketplace seller app is engaged in pre-packing or importing the commodity for its sale, distribution 
or delivery. 
 Contractually ensure with the seller that the commodity is in compliance with the specified requirements. 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
inventory seller is not manufacturing or packing / labelling the commodity). 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
seller on the marketplace seller app is not manufacturing or packing / labelling the commodity). 
 Applicable, where the inventory seller is engaged in import of the commodities. 
 Applicable, where the seller on marketplace seller app is engaged in import of commodities. 
26 Please note that this is not applicable to endorsers/ influencers.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 66 
 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Information 
Technology 
Act 
Compliance 
with IT Rules 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 67 
 
IV ELECTRONICS 
1. Registrations and compliances required by all NPs selling laptops, gaming laptops, and peripherals  
A. LM Act 
1.1 Licensing or Registration Requirement 
Any individual, firm, society, company, corporation, or Hindu Undivided Family that pre -packs or 
imports any pre -packaged commodity for sale, distribution, or delivery is required to register itself 
under the LM Act with the Director or Controller of Legal Me trology. This registration must be 
completed within 90 days of starting such activities.  Depending on the nature of the activity undertaken 
by the Network Participant or seller, registration under the LM Act may be required.  
1.2 Packaging and Labelling Requirements 
Entities must ensure that all pre -packaged products display the following mandatory declarations in 
accordance with the PC Rules: 
• Name and address of the manufacturer, packer, or importer 
• Common or generic name of the product 
• Net quantity (weight, measure, or number) 
• Maximum retail price (inclusive of all taxes) 
• Month and year of manufacture or packing 
• Best before’ or ‘Use by’ date must be mentioned where applicable 
• Consumer care contact details 
• Unit sale price (where applicable) 
• Country of origin  
• Mandatory indicators for vegetarian/non-vegetarian origin (where applicable) 
• Special labelling for GM foods (where applicable) 
• Where the sizes of the commodity contained in the package are relevant, the dimensions of 
the commodity contained in the package and if the dimensions of the different pieces are 
different, the dimensions of each such different piece 
Notably, e-commerce entities must ensure that all mandatory declarations (except the month and year 
of manufacture or packing) are displayed on the digital or electronic platform used for selling the goods. 
As per the PC Rules, in marketplace models, the responsibility for the correctness of these declarations 
lies with the manufacturer, seller, dealer, or importer, as applicable. 
The packaging and labelling requirements provided under Annexure B (under the head “Packaging and 
Labelling Requirements” ) shall be complied with. However, for the purpose of packages containing 
electronic products, further reference shall be made as per Para 1.3 of Annexure – B. 
1.3 Other compliances under Legal Metrology (Packaged Commodities) Rules 2011 (“PC Rules”):  
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 68 
 
Other compliance under PC Rules namely, declaration on container type commodities, general 
guidelines, manner of declaration, and maximum permissible errors on net quantities declared by 
weight or volume have been discussed in Annexure B. 
B. BIS Act 
The Bureau of Indian Standards Act, 2016 (“BIS Act”) empowers the Bureau of Indian Standards (“BIS”) 
to regulate the quality and standards of products distributed in the Indian market. While BIS 
certification is generally voluntary, the Central Government has made it mandatory for certain products 
based on considerations such as public interest, health and safety of humans, animals, or plants, 
environmental protection, prevention of unfair trade practices, and national security.  
For such products, the use of the Standard Mark is compulsory and must be obtained under a licence 
or Certificate of Conformity (CoC) from BIS. The list of products under compulsory certification is 
available on the BIS website: https://www.bis.gov.in/product-certification/products-under-
compulsory-certification/#  
Please refer to 1.4 of Annexure – C to check the applicability of BIS laws on the subject product(s). 
Additionally, the labelling requirements have been provided in Annexure – C (under the heading 
“Labelling requirements”). 
C. Import and Export laws 
3.1 Registration 
Every importer and / or exporter is required to obtain Certificate of Importer -Exporter Code (“IEC”) as 
discussed in Annexure D. 
D. Consumer Protection Act and the rules/ guidelines issued thereunder 
4.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details. 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action .  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 69 
 
• Refunds: Process refunds as prescribed under applicable law. 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally: 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers. 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late. 
• Disclosures: Same disclosure obligations as marketplaces. 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
 
Annexure E details compliances required under the E-Commerce Rules.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 70 
 
4.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it: 
• Is truthful and honest in its representation. 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection 
4.3 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern 
using user interface or user experience interactions on any platform that is designed to mislead or trick 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amounting to misleading advertisement or unfair 
trade pra ctice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
4.4 Greenwashing Guidelines  
 
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
E. Data protection laws 
The IT Act read with the SPDI Rules are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 71 
 
Please note that once the DPDP Act is  enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act . 
F. Compliance with IT Rules  
An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that 
record and includes telecom service providers, n etwork service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites, online -auction sites, online -
market places and cyber cafes”. To the extent, the NP qualifies as an intermediary, it will be required 
to implement the due diligence obligations (depending on the category of intermediary) as has been 
set out in Annexure I, if it seeks to avail the exemption from liability in accordance with Section 79 of 
the IT Act. 
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 72 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE BEAUTY AND PERSONAL CARE INDUSTRY  
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Legal 
Metrology 
laws 
Licensing    + 
Packaging and 
Labelling 
    
Other 
Compliances 
    
BIS laws Licensing / 
Certificate of 
conformity 
    
Import and 
Export 
Registration     
Consumer 
Protection 
laws 
Compliances of 
manufacturer, 
product service 
provider and 
product seller 
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   27 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
 
 Applicable, where the inventory seller is engaged in pre-packing or importing the commodity for its sale, distribution or delivery. 
+ Applicable, where the seller on the marketplace seller app is engaged in pre-packing or importing the commodity for its sale, distribution 
or delivery. 
 Contractually ensure with the seller that the commodity is in compliance with the specified requirements. 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
inventory seller is not manufacturing or packing / labelling the commodity). 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
seller on the marketplace seller app is not manufacturing or packing / labelling the commodity). 
 Applicable, where the inventory seller is engaged in import of the commodities. 
 Applicable, where the seller on marketplace seller app is engaged in import of commodities. 
27 Please note that this is not applicable to endorsers/ influencers.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 73 
 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Information 
Technology 
Act 
Compliance 
with IT Rules 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 74 
 
V BEAUTY AND PERSONAL CARE 
1. Registrations and compliances required for selling skincare, haircare, and personal care products  
A. LM Act 
1.1 Licensing or Registration Requirement 
Any individual, firm, society, company, corporation, or Hindu Undivided Family that pre -packs or 
imports any pre -packaged commodity for sale, distribution, or delivery is required to register itself 
under the LM Act with the Director or Controller of Legal Me trology. This registration must be 
completed within 90 days of starting such activities.  Depending on the nature of the activity undertaken 
by the Network Participant or seller, registration under the LM Act may be required.  
1.2 Packaging and Labelling Requirements 
Entities must ensure that all pre -packaged products display the following mandatory declarations in 
accordance with the PC Rules: 
• Name and address of the manufacturer, packer, or importer 
• Common or generic name of the product 
• Net quantity (weight, measure, or number) 
• Maximum retail price (inclusive of all taxes) 
• Month and year of manufacture or packing 
• Best before’ or ‘Use by’ date must be mentioned where applicable 
• Consumer care contact details 
• Unit sale price (where applicable) 
• Country of origin  
• Mandatory indicators for vegetarian/non-vegetarian origin (where applicable) 
• Special labelling for GM foods (where applicable) 
• Where the sizes of the commodity contained in the package are relevant, the dimensions of 
the commodity contained in the package and if the dimensions of the different pieces are 
different, the dimensions of each such different piece 
Notably, e-commerce entities must ensure that all mandatory declarations (except the month and year 
of manufacture or packing) are displayed on the digital or electronic platform used for selling the goods. 
As per the PC Rules, in marketplace models, the responsibility for the correctness of these declarations 
lies with the manufacturer, seller, dealer, or importer, as applicable. 
The packaging and labelling requirements provided under Annexure B (under the head “Packaging and 
Labelling Requirements” ) shall be complied with. However, for the purpose of packages containing 
electronic products, further reference shall be made as per Para 1.3 of Annexure – B. 
1.3 Other compliances under Legal Metrology (Packaged Commodities) Rules 2011 (“PC Rules”):  
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 75 
 
Other compliance under PC Rules namely, declaration on container type commodities, general 
guidelines, manner of declaration, and maximum permissible errors on net quantities declared by 
weight or volume have been discussed in Annexure B. 
B. BIS Act 
The Bureau of Indian Standards Act, 2016 (“BIS Act”) empowers the Bureau of Indian Standards (“BIS”) 
to regulate the quality and standards of products distributed in the Indian market. While BIS 
certification is generally voluntary, the Central Government has made it mandatory for certain products 
based on considerations such as public interest, health and safety of humans, animals, or plants, 
environmental protection, prevention of unfair trade practices, and national security.  
For such products, the use of the Standard Mark is compulsory and must be obtained under a licence 
or Certificate of Conformity (CoC) from BIS. The list of products under compulsory certification is 
available on the BIS website: https://www.bis.gov.in/product-certification/products-under-
compulsory-certification/#  
Please refer to 1.4 of Annexure – C to check the applicability of BIS laws on the subject product(s). 
Additionally, the labelling requirements have been provided in Annexure – C (under the heading 
“Labelling requirements”). 
C. Import and Export laws 
3.1 Registration 
Every importer and / or exporter is required to obtain Certificate of Importer -Exporter Code (“IEC”) as 
discussed in Annexure D. 
D. Consumer Protection Act and the rules/ guidelines issued thereunder 
4.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details. 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action .  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 76 
 
• Refunds: Process refunds as prescribed under applicable law. 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally: 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers. 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late. 
• Disclosures: Same disclosure obligations as marketplaces. 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
 
Annexure E details compliances required under the E-Commerce Rules.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 77 
 
4.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it: 
• Is truthful and honest in its representation. 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection 
4.3 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern 
using user interface or user experience interactions on any platform that is designed to mislead or trick 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amounting to misleading advertisement or unfair 
trade pra ctice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
4.4 Greenwashing Guidelines  
 
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
E. Data protection laws 
The IT Act read with the SPDI Rules are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 78 
 
Please note that once the DPDP Act  is enforced all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act . 
F. Compliance with IT Rules  
An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that 
record and includes telecom service providers, n etwork service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites, online -auction sites, online -
market places and cyber cafes”. To the extent, the NP qualifies as an intermediary, it will be required 
to implement the due diligence obligations (depending on the category of intermediary) as has been 
set out in Annexure I, if it seeks to avail the exemption from liability in accordance with Section 79 of 
the IT Act. 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 79 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE MOBILITY AND TRANSPORTATION 
INDUSTRY 
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Food Safety 
Laws28 
Licensing     
Packaging     
Consumer 
Protection 
laws 
Compliances of 
manufacturer, 
product service 
provider and 
product seller 
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   29 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
Information 
Technology 
Act 
Compliance 
with IT Rules 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
 
28 The Food Safety Laws are applicable to the extent of conditions of transportation of food articles, on all the NPs. 
29 Please note that this is not applicable to endorsers/ influencers.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 80 
 
VI MOBILITY AND TRANSPORTATION 
1. Registrations and compliances for app-based auto-rickshaw drivers, bus drivers, bike drivers, and car 
drivers 
A. Consumer Protection Act and the rules/ guidelines issued thereunder 
1.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details. 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action . 
• Refunds: Process refunds as prescribed under applicable law. 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally: 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers. 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 81 
 
• Disclosures: Same disclosure obligations as marketplaces. 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
 
Annexure E details compliances required under the E-Commerce Rules.  
1.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it: 
• Is truthful and honest in its representation. 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection 
1.3 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 82 
 
using user interface or user experience interactions on any platform that is designed to mislead or trick 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amoun ting to misleading advertisement or unfair 
trade practice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
1.4 Greenwashing Guidelines  
 
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
B. Data protection laws 
The IT Act read with the SPDI Rules are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H.  
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act . 
C. Compliance with IT Rules  
An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that 
record and includes telecom service providers, n etwork service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites, online -auction sites, online -
market places and cyber cafes”. To the extent, the NP qualifies as an intermediary, it will be required 
to implement the due diligence obligations (depending on the category of intermediary) as has been 
set out in Annexure I, if it seeks to avail the exemption from liability in accordance with Section 79 of 
the IT Act. 
D. Compliance with MVA and MVAG 
4.1 As per Section 93, of the MVA the: (i) agent in the sale of tickets for travel by public service vehicles; (ii) 
agent in the business of collecting, forwarding or distributing goods carried by goods carriages; and (iii) 
aggregators are required to obtain n ecessary license to carry out the above activities. These licenses 
are to be obtained from the authorities and on such conditions as may be prescribed by respective state 
governments. In addition, it provides that the State Government may follow such guidelines as may be 
issued by the State Government. 
4.2 In this context, the Ministry of Road Transport and Highways issued the Motor Vehicle Aggregator 
Guidelines in November, 2020. Notably, t he Guidelines serve as a guiding framework for state  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 83 
 
governments to lay down licensing conditions for aggregators. Pertinently, the Act read with the 
Guidelines provides that no person shall integrate any drive or represent himself as an aggregator 
unless he holds a valid license issued by the State Government.  
4.3 The MVAG also provides for compliances to be undertaken by Aggregators prior to on -boarding of 
drivers, which includes obligation to ensure that every driver:  
(i) Holds a valid proof of identity - EIC card / Aadhaar card / PAN card and driving license & 
applicable badge to drive the relevant vehicle; 
(ii) Holds KYC compliant bank account or Jan -Dhan account under the Pradhan Mantri Jan -Dhan 
Yojana, in accordance with the Reserve Bank of India norms; 
(iii) Undergoes a complete medical examination, including eye check -up, at the Aggregator’s 
expense;  
(iv) Completes his police verification with a written record of such verification prior to fifteen (15) 
days of On-Boarding; and 
(v) Has health insurance for not less than INR 5,00,000 and term insurance for not less than INR 
10,00,000 with base year 2020-21 having increase of 5% each year.  
4.4 The MVAG also provides that Aggregators must ensure that its app has basic features which includes: 
(i) Remains accessible in English and Hindi, for the Rider along with one official language of the 
state where the official language is not Hindi or such other language needed by the Driver ; 
(ii) Gets certified for safety by a recognized cyber security firm; 
(iii) Stores data generated on a server in India for a minimum of 3 and maximum of 24 months 
from the date such data is generated; 
(iv) Includes a feature enabling the Rider to share the live location and status of his/ her ride after 
the ride booked through the App has commenced.  
4.5 The MVAG also provides for guidelines in relation to regulation of fares, Aggregator’s responsibility to 
ensure safety of passengers, suspension and cancellation of license of the Aggregators.  
E. Compliance with Online Travel Aggregator Guidelines, 2018 (“OTAG”) 
 
5.1 The OTAs can: (i) List the travel related service providers/agents or other service providers like hotels, 
homestays on its platform under its brand; (ii) Connect the buyers with potential travel, hospitality and 
related service providers/ sellers on its platform under its brand; (iii) Prescribe amenities and/or quality 
standards and influence the service providers to match the potential customer’s needs; and (iv) Enter 
into agreements with such service providers laying down benchmarks, standards, commission rates and  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 84 
 
other services required from such service provider. 
5.2 For an entity to engage in the business of OTA, an approval/ re -approval after five (5) years under the 
guideline nos. 1 and 2 of the OTAG, as applicable, has to be made by the Ministry of Tourism. 
5.3 The OTAG provides that OTAs are obligated to designate a grievance officer and publish his name and 
contact details on its website. 
2. Compliances for app based aggregators hosting ride -hailing services, courier services, food delivery, 
and freight transport. 
A. Food Safety Laws 
1.1 Licensing Requirements 
To commence or carry on the food business, both Buyer App and Seller on Marketplace Seller App 
(Marketplace seller app as well as Inventory Seller App) are required to obtain a license from the central 
authority. Sellers are also required to obtain a license from the central authority or the concerned state 
or union territory’s licensing authority, as the case maybe. More details on the licensing requirements 
have been provided under Annexure A (under the head “Licensing or Registration Requirements”). Such 
NPs shall comply with the GMP/ GHP requirements as discussed under Paras 1.4 and 1.5 of Annexure 
A. 
The Guidelines for the operation of e-commerce FBOs under the FSS Act and Section I of the Food Safety 
and Standards (Licensing and Registration of Food Business) Amendment Regulation 2018 
(“Amendment Regulations 2018”) provide for the following:30  
• E-Commerce FBOs shall obtain central license, comply with the requirements prescribed under 
the Food Safety Laws and hygiene and manufacturing standards for licensed FBOs engaged in food 
services, including packaging and transportation. 
• The E -Commerce FBO must enter into agreements  with the sellers, brand owners, or 
manufacturers onboarded by them. These agreements shall affirm that the said entities comply  
with the Food Safety Act, Rules, and Regulations.  
• The seller/ brand owner/ manufacturer shall ensure that legible and clear picture of the 'principal 
display panel' for pre-packed food products offered for sale to the consumer, is made available for 
viewing by the customers, excluding specific details such as batch number, expiry date, and MRP.  
• Any food article delivered to a consumer by E-Commerce FBO shall have a shelf life of at least 30 
percent or 45 days remaining at the time of delivery. 
 
30  Note: In February 2017, FSSAI issued Guidelines for the operation of e-commerce FBOs under the FSS Act which are to be read as 
explanatory memorandum and do not in any way supplant any of the requirements of the Food Safety Act.  
 Additionally, Amendment Regulations 2018  which inter alia covers the provisions for licensing and registration of E -Commerce 
FBOs. However, the said regulations have not been notified, the FSSAI has operationalized the same under Section 18(2)(d) rea d 
with Section 16(5) of the Food Safety Act with effect from 15 February 2018 and subsequently re-operationalized for a period of six 
months from 16 August 2018, 28 February 2019, 29 August 2019, 16 February 2020, 16 August 2020, 19 March 2021, 12 November 
2021, 24 June 2022, 11 November 2022, 11 May 2023, 11 November 2023, 11 May 2024.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 85 
 
1.2 Packaging Requirements 
Food Safety and Standards (Packaging) Regulations, 2018 (“Packaging Regulations”) which provides for 
the packaging requirements to be adhered to by the relevant food business operator. The packaging 
requirements stipulated thereunder have been provided under Annexure – A (under the head 
“Packaging Requirements ”) read with relevant guidance note on GMP/GHP requirements.  The 
Packaging Regulations are applicable to the Buyer App and Marketplace App i.e., they shall 
contractually ensure with the seller that the commodity is in compliance with the specified 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commod ity)) and Seller on the marketplace seller app 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity)). 
3. Key compliances for carriage of goods by air, sea, land or multimodal transportation  
A. CBR 
1.1 CBR provides that a common carrier cannot engage in providing services as a common carrier without 
registration. Rules 4 and 5 of Carriage by Road Rules 2011 (“ CBR Rules”) provides for the manner in 
which an application for registration and renewal of registration has to be made.  
1.2 Further, the said CBR Rule 4 also provides for the following conditions that a common carrier has to 
fulfil for registration: (i) the applicant must provide a registration certificate for 2 commercial vehicles 
registered in their name, or in the name of an organization, partner, proprietor, or director ; 
alternatively, they may submit a contract letter or work order from a registered company for carrying 
out functions as a common carrier; (ii) the applicant must have a minimum net worth of five lakh rupees 
(INR 5,00,000), either personally or through a proprietor, partner, or director, which must be certified 
by a Chartered Accountant; provided however, in case the application for the certificate of registration 
for providing services at a higher risk, the net worth of the applicant or any of the proprietor, partner 
or director shall be minimum rupees twenty lakhs rupees (INR 20,00,000); and (iii)  if the Common 
Carrier is a proprietorship or partnership firm, the proprietors or partners must not be blacklisted  or 
deregistered.  
1.3 CBR Rule 8 obligates a registered common carrier to maintain a record of transactions in a register. CBR 
Rule 10 obligates a consignor to execute a goods forwarding note and submit it to the common carrier 
in duplicate; on receipt of the same, the common carrier shall issue a goods receipt. 
B. CBA 
2.1 The CBA provide s for requirement of air carrier to issue and deliver passenger ticket, luggage ticket/ 
baggage check and air consignment note/ airway bill in relation to carriage of passengers, luggage and 
goods. These rules also provide for various particulars that are to be included in these tickets/ note.  
2.2 The CBA also provides for liability of air carrier on account of death or injury to a passenger or on  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 86 
 
account of damages sustained to goods during carriage by air. 
C. CBS 
The CBS provides for the responsibilities of a carrier with respect to: (i) make the ship seaworthy; 
(ii) properly man, equip, and supply the ship; (iii) make the holds, refrigerating and cool chambers, and 
all other parts of the ship in which goods are carried, fit and safe for their reception, carriage and 
preservation.  
D. MMTG 
4.1 MMTG provide that a person cannot engage in providing multimodal transportation services without 
registration from the appropriate authority. 
4.2 MMTG also provides for liability upon a multimodal transport operator for loss resulting from: (a) any 
loss of, or damage to, the consignment; and (b) delay in delivery of the consignment and any 
consequential loss or damage arising from such delay.   
 
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 87 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE FINANCIAL SERVICES INDUSTRY 
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite compliance Buyer App Seller App Technology Service 
Provider  
Consumer 
Protection 
laws 
Compliances of 
manufacturer, 
product service 
provider and product 
seller 
   
E-commerce Rules    
Guidelines on 
Misleading 
Advertisements 
   
Guidelines on Dark 
Patterns 
   
Greenwashing 
guidelines 
   
Data 
protection 
laws 
Compliances under 
the IT Act and SPDI 
Rules 
   
Lending 
Regulations 
Licensing or 
registration 
requirement 
   
Compliances in 
relation to credit 
products 
31  32 
Insurance 
regulations 
Licensing or 
registration 
requirement 
   
Compliances in 
relation to insurance 
products 
33 34  
MF 
Regulations 
Registration 
requirements 
   
 
 Applicable only in case the DLA is owned and operated by an RE.  
31 Contractually ensure with the buyer app is in compliance with the requirements specified by the RE. 
32 Contractually ensure with the technology service provider is in compliance with the requirements specified by the RE. 
33 Specific regulations as applicable to the relevant insurance intermediary will apply.  
34 While certain regulations may be applicable to only the relevant insurance intermediaries, insurers (as the seller apps) woul d need to 
conform to the requirements prescribed therein vis-à-vis their relationship with such insurance intermediary (as the buyer apps).  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 88 
 
Applicable 
Laws 
Requisite compliance Buyer App Seller App Technology Service 
Provider  
and MF 
Master 
Circular 
Compliances in 
relation to offering of 
mutual fund products 
   
EOP 
Guidelines 
Registration 
requirements 
   
Compliances in 
relation to offering of 
mutual fund products 
   
IA 
Regulations 
and IA 
Master 
Circular 
Registration 
requirements 
   
Compliances in 
relation to offering of 
mutual fund products 
   
Code of 
Conduct for 
MFDs 
Registration 
requirements 
   
Compliances in 
relation to offering of 
mutual fund products 
   
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.]  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 89 
 
VII FINANCIAL SERVICES (CREDIT, INSURANCE AND MUTUAL FUNDS) 
1. Registrations and licensing compliances for financial services 
A. Consumer Protection Act and the rules/ guidelines issued thereunder 
1.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details. 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action . 
• Refunds: Process refunds as prescribed under applicable law. 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally: 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers. 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late. 
• Disclosures: Same disclosure obligations as marketplaces.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 90 
 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
 
Annexure E details compliances required under the E-Commerce Rules.  
1.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it: 
• Is truthful and honest in its representation. 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection 
1.3 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern 
using user interface or user experience interactions on any platform that is designed to mislead or trick  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 91 
 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amounting to misleading advertisement or unfair 
trade practice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
1.4 Greenwashing Guidelines  
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
B. Data protection laws 
The IT Act read with the SPDI Rules are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H.  
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act . 
C. Compliance with Lending Regulations  
3.1 Licensing or registration requirement 
(i) Certificate of Registration for NBFCs  - Non-banking financial companies  (“NBFCs”) must 
obtain a registration under Section 45IA of the Reserve Bank of India Act, 1934 for commencing 
its business. For the purposes of obtaining a certificate of registration as an NBFC, the applicant 
must also meet the principal business and net-worth criteria as prescribed by the Reserve Bank 
of India (“RBI”) for different categories of NBFCs. 
(ii) Licensing of Banks - All banks in India shall be required to be licensed as per the terms of the 
Banking Regulation Act, 1949 before commencing business. The license shall be issued by the 
RBI under Section 22 of the Banking Regulation Act, 1949 for carrying on the business of 
banking which is defined to mean the accepting, for the purpose of lending or investment, of 
deposits of money from the public, repayable on demand or otherwise, and withdrawable by 
cheque, draft, order or otherwise is defined. 
3.2 Compliance in relation to credit products  
(i) The Digital Lending Guidelines are applicable to all entities regulated by RBI such as NBFCs and 
banks. LSPs may include Buyer and Seller Apps who are connecting the REs to buyers through 
the applications. Please refer to Para 1.1 and 1.2 of Annexure K for compliances in relation to 
the Digital Lending Guidelines.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 92 
 
(ii) The Scale Based Regulations requires NBFCs having a customer interface to ensure compliance 
with the requirements set out in relation to the ‘fair practice code’ and having a board 
approved policy based on the guidelines set out in the Scale Based Regulations. Similarly, 
obligations are imposed under various notifications, circulars and guidelines issued by the RBI 
from time to time in relation to fair practices code for banks including the Guidelines on Fair 
Practices Code for Lenders  dated 5 May 2003 and subsequent circulars and not ifications. 
Please refer to Para B of Annexure K for compliances applicable to the Buyer and Seller Apps.  
(iii) REs who are engaging the services of third party service providers must comply with the 
outsourcing guidelines as prescribed for NBFCs and Banks under the Scale Based Regulations 
and Bank Outsourcing Guidelines. REs generally impose obligations for complia nce with the 
outsourcing guidelines in the agreements executed with such outsourced service providers. A 
Buyer App engaged in customer acquisition for the credit products offered by REs is an 
example of outsourced service provider. Please refer to Para C of Annexure K for compliances 
applicable in relation to outsourcing of services by REs. 
(iv) All REs must comply with the RBI ‘Master Direction - Know Your Customer (KYC) Direction’, 
dated 25 February 2016 (“KYC Master Directions”) in relation to conducting KYC of customers 
for credit products. As each entity will have their own KYC policy as mandated under the KYC 
Master Directions, the requirements on Buyer Apps will be determined basis the KYC norms 
that are communicated to them by the relevant RE.    
D. Compliance with Insurance Regulations  
4.1 Licensing or registration requirement 
(i) Certificate of Registration for Insurers - Any entity undertaking any class of insurance business 
in India is required to have obtained a certificate of registration for the particular class of 
insurance business from the IRDAI. 
(ii) Registration of intermediaries - insurance intermediaries, including (a) Insurance Brokers, (b) 
Corporate Agents and (c) Insurance Web Aggregators are required to obtain registration as 
such respective intermediary from the IRDAI. 
4.2 Compliances in relation to insurance products 
(i) The Insurance Act governs the insurance business at large. It prescribes various compliance 
obligations on Insurers, who would act as Seller Apps, and prescribes stipulations in respect of 
their engagement with various insurance intermediaries, providing serv ices as Buyer Apps. 
Please refer to Para A of Annexure L  for compliances in relation to the Insurance Act, as 
relevant for Insurers (Seller Apps) and insurance intermediaries (Buyer Apps) engaging through 
ONDC.  
(ii) The Insurance Broker Regulations prescribe the registration requirements and other 
compliances applicable to Insurance Brokers, which include aspects relating to name of the 
Insurance Broker; offering of risk management and claim consultancy services; online sales,  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 93 
 
telemarketing and distance marketing; conduct of Insurance Brokers, etc. Please refer to para 
B of Annexure L  for relevant compliances applicable to Insurance Brokers (as Buyer Apps) 
under the Insurance Broker Regulations. 
(iii) The Corporate Agent Regulations prescribe the registration requirements and other 
compliances applicable to Corporate Agents. Such compliances include aspects such as, 
registration requirements; remuneration; arrangements with Insurers; conflict of interest; 
servicing of policyholders; sale by telemarketing and distance marketing; conduct of corporate 
agents, etc. Please refer to para C of Annexure L  for relevant compliances applicable to 
Corporate Agents (as Buyer Apps) under the Corporate Agent Regulations.  
(iv) The Web Aggregator Regulations  governs the registration requirements and compliances 
applicable to Insurance Web Aggregators. Such compliances relate to aspects such as, 
registration eligibility criteria; comparison and distribution of insurance products; 
arrangement with Insurers; conflict of interest; engagement of an authorised verifier and sale 
of insurance products by tele -marketing and other distance marketing channels; duties and 
functions undertaken by Insurance Web Aggregators; remuneration; conduct of  Insurance 
Web Aggregators, etc. Please refer to para D of Annexure L for relevant compliances applicable 
to Insurance Web Aggregators (as Buyer Apps) under the Web Aggregator Regulations.  
(v) Miscellaneous regulations . Apart from the specific regulations applicable to Insurers and 
insurance intermediaries as set out above, the IRDAI has issued various other circulars and 
regulations governing aspects such as (i) sale and advertisement of insurance products, (ii) 
issuance of e -insurance policies, (iii) provision of customer information sheet, (iv) KYC of 
customers, etc. Please refer to para E of Annexure L for relevant compliances relating to the 
above, as applicable to Insurers and insurance intermediaries (as Seller and Buyer Apps).  
E. Compliance for providing Investment services  
5.1 Licensing or registration requirement 
Certificate of Registration – All intermediaries including Mutual Funds, IAs, EOPs and MFDs must obtain 
a certificate of registration before commencing their business. For the purposes of obtaining a 
certificate of registration as an intermediary, the applicant must inter alia ensure compliance with the 
fit and proper person criteria, net-worth criteria and such other eligibility criteria as prescribed by SEBI 
for the respective intermediary. 
5.2 Compliances in relation to offering of mutual fund products 
The detailed compliances for IAs, EOPs, AMCs and MFDs (as the case may be) offering mutual fund 
products are detailed in Annexure M. 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 94 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE SERVICES INDUSTRY (MOVIE AND EVENT 
TICKETING SERVICES , PERIODICAL SUBSCRIPTION SERVICES , WORK OPPORTUNITY SERVICES , FINANCIAL 
SERVICES) 
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Consumer 
Protection 
laws 
Compliances of 
product service 
provider  
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   35 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
Information 
Technology 
Act 
Compliance 
with IT Rules 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
 
35 Please note that this is not applicable to endorsers/ influencers  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 95 
 
VIII GIFT CARDS AND OTHER SERVICES INDUSTRY (MOVIE AND EVENT TICKETING 
SERVICES, PERIODICAL SUBSCRIPTION SERVICES)  
1. Compliances and registration for all NPs providing services and gift cards 
A. Consumer Protection Act and the rules/ guidelines issued thereunder 
1.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details. 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action . 
• Refunds: Process refunds as prescribed under applicable law. 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally: 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 96 
 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late. 
• Disclosures: Same disclosure obligations as marketplaces. 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
 
Annexure E details compliances required under the E-Commerce Rules.  
1.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it: 
• Is truthful and honest in its representation. 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 97 
 
1.3 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern 
using user interface or user experience interactions on any platform that is designed to mislead or trick 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amounting to misleading advertisement or unfair 
trade pra ctice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
1.4 Greenwashing Guidelines  
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
B. Data protection laws 
The IT Act read with  the SPDI Rules are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H.  
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act . 
C. Compliance with IT Rules  
An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that 
record and includes telecom service providers, n etwork service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites, online -auction sites, online -
market places and cyber cafes”. To the extent, the NP qualifies as an intermediary, it will be required 
to implement the due diligence obligations (depending on the category of intermediary) as has been 
set out in Annexure I, if it seeks to avail the exemption from liability in accordance with Section 79 of 
the IT Act. 
2. Compliances and registration for sellers of gift cards  
A. Compliance with PPI  
 
1.1 Licensing or registration requirement  
Banks and authorised non -bank Prepaid Payment Instrument (“ PPI”) issuers may issue PPIs, including  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 98 
 
in the nature of gift cards. 
(i) Approval for banks – Banks that comply with the eligibility requirements prescribed under the 
Master Directions on PPIs, issued by the RBI dated 27 August 2021 (“ PPI Master Directions”) 
may issue gift card PPIs after obtaining approval from the RBI under the Payment and 
Settlement Systems Act, 2007 (“PSS Act”). 
(ii) Authorisation for non -bank PPI issuers  – Non-bank entities are required to obtain 
authorisation from the RBI to operate as a PPI issuer (and thereby a payment system operator) 
under the PSS Act. 
1.2 Compliance in relation to issuance of gift PPIs  
The PPI Master Directions are applicable to all bank and non -bank PPI issuers. It prescribed various 
compliances, in relation to eligibility requirements; safeguards against money laundering; issuance, 
loading and reloading of the PPI; co -branding of PPIs;  interoperability; validity and redemption; 
customer protection and grievance redressal, etc. Please refer to Annexure Q for compliances in 
relation to the PPI Master Directions.  
Gift PPIs in specific are subject to certain additional compliance requirements, which have been detailed 
in Para 1.5 of Annexure Q. 
 
 
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 99 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE GAMING INDUSTRY  
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Consumer 
Protection 
laws 
Compliances of 
product service 
provider  
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   36 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
Information 
Technology 
Act 
Compliance with 
IT Rules 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
 
36 Please note that this is not applicable to endorsers/ influencers  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 100 
 
IX GAMING INDUSTRY  
1. Compliances and registration for all NPs in the gaming industry  
A. Consumer Protection Act and the rules/ guidelines issued thereunder 
1.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details. 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action . 
• Refunds: Process refunds as prescribed under applicable law. 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally: 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers. 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late. 
• Disclosures: Same disclosure obligations as marketplaces.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 101 
 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
 
Annexure E details compliances required under the E-Commerce Rules.  
1.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it: 
• Is truthful and honest in its representation. 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection 
1.3 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern 
using user interface or user experience interactions on any platform that is designed to mislead or trick  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 102 
 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amounting to misleading advertisement or unfair 
trade practice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
1.4 Greenwashing Guidelines  
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
B. Data protection laws 
The IT Act read with  the SPDI Rules are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H.  
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act . 
C. Compliance with IT Rules  
3.1 An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that 
record and includes telecom service providers, n etwork service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites, online -auction sites, online -
market places and cyber cafes”. To the extent, the NP qualifies as an intermediary, it will be required 
to implement the due diligence obligations (depending on the category of intermediary) as has been 
set out in Annexure I, if it seeks to avail the exemption from liability in accordance with Section 79 of 
the IT Act. 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 103 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE OTT MEDIA SERVICE INDUSTRY  
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Consumer 
Protection 
laws 
Compliances of 
product service 
provider  
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   37 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
Information 
Technology 
Act 
Compliance 
with IT Rules 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
 
 
37 Please note that this is not applicable to endorsers/ influencers  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 104 
 
X OTT MEDIA SERVICES 
1. Registrations and licensing compliances for online video streaming services providing on -demand or 
subscription-based content, including movies, TV shows, and documentaries. 
A. Consumer Protection Act and the rules/ guidelines issued thereunder 
1.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details. 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action . 
• Refunds: Process refunds as prescribed under applicable law. 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally: 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers. 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 105 
 
• Disclosures: Same disclosure obligations as marketplaces. 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
 
Annexure E details compliances required under the E-Commerce Rules.  
1.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it: 
• Is truthful and honest in its representation. 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection 
1.3 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 106 
 
using user interface or user experience interactions on any platform that is designed to mislead or trick 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amoun ting to misleading advertisement or unfair 
trade practice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
1.4 Greenwashing Guidelines  
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
B. Data protection laws 
The IT Act read with the SPDI Rules are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H.  
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act . 
C. Compliance with IT Rules  
An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that 
record and includes telecom service providers, n etwork service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites, online -auction sites, online -
market places and cyber cafes”. To the extent, the NP qualifies as an intermediary, it will be required 
to implement the due diligence obligations (depending on the category of intermediary) as has been 
set out in Annexure I, if it seeks to avail the exemption from liability in accordance with Section 79 of 
the IT Act. 
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 107 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE AGRICULTURAL INPUTS (FERTILIZERS AND 
PESTICIDES) 
 - Applicable 
 - Not applicable 
Applicable Laws Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Legal Metrology 
laws 
Licensing    + 
Packaging and 
Labelling 
    
Other 
Compliances 
    
BIS laws Licensing / 
Certificate of 
conformity 
    
Import and 
Export 
Registration     
Consumer 
Protection laws 
Compliances of 
manufacturer, 
product service 
provider and 
product seller 
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   38 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
 
 Applicable, where the inventory seller is engaged in pre-packing or importing the commodity for its sale, distribution or delivery. 
+ Applicable, where the seller on the marketplace seller app is engaged in pre-packing or importing the commodity for its sale, distribution 
or delivery. 
 Contractually ensure with the seller that the commodity is in compliance with the specified requirements. 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
inventory seller is not manufacturing or packing / labelling the commodity). 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
seller on the marketplace seller app is not manufacturing or packing / labelling the commodity). 
 Applicable, where the inventory seller is engaged in import of the commodities. 
 Applicable, where the seller on marketplace seller app is engaged in import of commodities. 
38 Please note that this is not applicable to endorsers/ influencers  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 108 
 
Applicable Laws Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Data protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
Information 
Technology Act 
Compliance 
with IT Rules 
    
Seeds Act Licensing     
Certification39     
Restriction on 
import of 
seeds40 
    
Marking and 
labelling 
    
Insecticides Act Compliance 
with Pesticides 
laws 
    
Essential 
Commodities 
Act r ead with  
Fertilisers 
Control Order 
Compliance 
with Fertilisers 
laws 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
 
 
39 Applicable only if the seller desires to certify the seed. 
40 Applicable only to NPs importing seeds  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 109 
 
XI AGRICULTURAL INPUTS (FERTILIZERS AND PESTICIDES) 
1. Registrations and licensing compliances for intermediaries providing pesticides, fertilizers, seeds and 
cattle feed. 
A. LM Act 
1.1 Licensing or Registration Requirement 
Any individual, firm, society, company, corporation, or Hindu Undivided Family that pre -packs or 
imports any pre -packaged commodity for sale, distribution, or delivery is required to register itself 
under the LM Act with the Director or Controller of Legal Me trology. This registration must be 
completed within 90 days of starting such activities.  Depending on the nature of the activity undertaken 
by the Network Participant or seller, registration under the LM Act may be required.  
1.2 Packaging and Labelling Requirements 
Entities must ensure that all pre -packaged products display the following mandatory declarations in 
accordance with the PC Rules: 
• Name and address of the manufacturer, packer, or importer 
• Common or generic name of the product 
• Net quantity (weight, measure, or number) 
• Maximum retail price (inclusive of all taxes) 
• Month and year of manufacture or packing 
• Best before’ or ‘Use by’ date must be mentioned where applicable 
• Consumer care contact details 
• Unit sale price (where applicable) 
• Country of origin  
• Mandatory indicators for vegetarian/non-vegetarian origin (where applicable) 
• Special labelling for GM foods (where applicable) 
• Where the sizes of the commodity contained in the package are relevant, the dimensions of 
the commodity contained in the package and if the dimensions of the different pieces are 
different, the dimensions of each such different piece 
Notably, e-commerce entities must ensure that all mandatory declarations (except the month and year 
of manufacture or packing) are displayed on the digital or electronic platform used for selling the goods. 
As per the PC Rules, in marketplace models, the responsibility for the correctness of these declarations 
lies with the manufacturer, seller, dealer, or importer, as applicable. 
The packaging and labelling requirements provided under Annexure B (under the head “Packaging and 
Labelling Requirements” ) shall be complied with. However, for the purpose of packages containing 
electronic products, further reference shall be made as per Para 1.3 of Annexure – B. 
1.3 Other compliances under Legal Metrology (Packaged Commodities) Rules 2011 (“PC Rules”):  
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 110 
 
Other compliance under PC Rules namely, declaration on container type commodities, general 
guidelines, manner of declaration, and maximum permissible errors on net quantities declared by 
weight or volume have been discussed in Annexure B. 
B. BIS Act 
The Bureau of Indian Standards Act, 2016 (“BIS Act”) empowers the Bureau of Indian Standards (“BIS”) 
to regulate the quality and standards of products distributed in the Indian market. While BIS 
certification is generally voluntary, the Central Government has made it mandatory for certain products 
based on considerations such as public interest, health and safety of humans, animals, or plants, 
environmental protection, prevention of unfair trade practices, and national security.  
For such products, the use of the Standard Mark is compulsory and must be obtained under a licence 
or Certificate of Conformity (CoC) from BIS. The list of products under compulsory certification is 
available on the BIS website: https://www.bis.gov.in/product-certification/products-under-
compulsory-certification/#  
Please refer to 1.4 of Annexure – C to check the applicability of BIS laws on the subject product(s). 
Additionally, the labelling requirements have been provided in Annexure – C (under the heading 
“Labelling requirements”). 
C. Import and Export laws 
3.1 Registration 
(i) Every importer and / or exporter is required to obtain IEC as discussed in Annexure - D. 
D. Consumer Protection Act and the rules/ guidelines issued thereunder  
4.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details. 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action . 
• Refunds: Process refunds as prescribed under applicable law.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 111 
 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally: 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers. 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late. 
• Disclosures: Same disclosure obligations as marketplaces. 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
 
Annexure E details compliances required under the E-Commerce Rules.  
4.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it:  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 112 
 
• Is truthful and honest in its representation. 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection 
4.3 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern 
using user interface or user experience interactions on any platform that is designed to mislead or trick 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amounting to misleading advertisement or unfair 
trade pra ctice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
4.4 Greenwashing Guidelines  
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
E. Data protection laws 
The IT Act read with  the SPDI Rules are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H.  
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act . 
F. Compliance with IT Rules   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 113 
 
An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that 
record and includes telecom service providers, n etwork service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites, online -auction sites, online -
market places and cyber cafes”. To the extent, the NP qualifies as an intermediary, it will be required 
to implement the due diligence obligations (depending on the category of intermediary) as has been 
set out in Annexure I, if it seeks to avail the exemption from liability in accordance with Section 79 of 
the IT Act. 
G. Compliance with Pesticides Laws 
7.1 Registration Requirements 
To manufacture or import the pesticides, the manufacturer and importers are required to obtain a 
registration for such pesticide (including the pesticide) from the Registration Committee. The 
registration requirements have been provided under below (under the head “ Registration and 
Licensing”). 
7.2 Licensing Requirements 
To manufacture or to sell, stock or exhibit for sale or distribute any pesticide, the license shall be 
obtained from the licensing officer. The licensing requirements have been provided under below (under 
the head “Registration and Licensing”). 
7.3 Packaging and labelling Requirements 
The Pesticides Laws provides that every package of pesticides shall adhere to the packaging and 
labelling requirements that are discussed under below (under the head “ Packaging and Labelling 
Requirements”). 
7.4 Importing Requirements 
In addition to the general import requirements discussed above, the import of pesticides is allowed via 
specific customs ports that are listed under below (under the head “Import of Pesticides”). 
7.5 Sale through E-commerce 
In order to sell the pesticides through e -commerce, the licensee shall comply with the provisions of 
Pesticides Laws and Consumer Protection (E -commerce) Rules, 2020 . Notably, the e -commerce 
operator before engaging the licensee for sale of pesticides, shall verify the validity of the license issued 
to it. Please refer below for further details (under the head “Sale through e-commerce”). 
7.6 Storage and disposal of pesticides 
The pesticides shall be stored in accordance with the conditions prescribed under Pesticides Laws. 
Further, the disposal of surplus material, expired pesticides and packages shall be in compliance with 
the Pesticides laws. The standards pertaining to stora ge and manner of disposal along with other  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 114 
 
necessary requirements have been discussed under belowError! Reference source not found.  (under 
the head “Other compliance”). 
H. Compliance with Fertiliser laws 
8.1 Registration of Industrial Dealer and authorisation letter for dealers  
Dealer: Any person including manufacturer, importer, pool handling agency, wholesaler and a retail 
dealer, selling fertilisers is required to obtain the authorisation letter from the Notified Authority .  
Industrial Dealer: Every person intending to sell or offer to sell the fertilisers for industrial purposes i.e., 
for uses other than the fertilisation of soil and increasing productivity of crops, is required to obtain 
certificate of registration from the Controller.  
The authorisation and registration requirements have been provided under below (under the head 
“Authorisation or Registration of Dealers”). 
8.2 Certificate of Manufacture   
Every person shall obtain the certificate of manufacture to carry on the business of preparing any 
mixture of fertilisers and special mixture of fertiliser . The said requirement has been provided under 
below (under the head “Certificate of Manufacture”). 
8.3 Restrictions on manufacture, sale, etc. of fertilisers 
The Pesticides Laws prescribe certain restrictions on manufacture, sale, offer for sale, stock or 
exhibition for sale or distribution of fertilisers, including bio stimulants, customised fertilisers, and nano 
fertilisers. The specific restrictions for aforementioned categories of fertilisers are discussed in 
belowbelow (under the head “Restriction on manufacture, sale, etc., of fertilisers”). 
8.4 Packaging and labelling Requirements 
The Fertilisers Laws prescribe packaging and labelling requirements for fertilisers that are required to 
be complied by the manufacturer, retail dealer, importer, etc. The specific packaging and labelling 
requirements are discussed in detail in below (under the head “ Packaging and Labelling 
Requirements”). 
8.5 Compliance with FMC Order 
The FMC Order prescribes the manner in which the fertilisers shall be transported from one state to 
another. The requirements for transportation of fertilisers are discussed in below (under the head 
“Compliance under FMC Order”).  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 115 
 
8.6 Import and export of fertilisers 
In addition to the general import and export requirements discussed above, the import and export of 
fertilisers are subject to specific condition prescribed under import and export policy. The specific policy 
conditions have been discussed in below (under the head “Import and Export”). 
8.7 Disposal of Fertiliser and other compliances 
The fertilisers shall be stored and disposed of in accordance with the conditions prescribed under 
Fertilisers Laws. The standards pertaining to conditions of storage, manner of disposal and other 
necessary requirements are discussed in belowError! Reference source not found.  (under the head 
“Other compliance”). 
I. Compliances for selling, storing and distributing seeds  
9.1 Licensing 
Any person willing to carry on the business of selling, exporting or importing seeds at any place shall do 
so upon obtaining license from the licensing authority in accordance with the Seeds (Control) Order 
1983 and in accordance with the terms and conditions of licence granted.  
9.2 Certification 
Any person selling, keeping for sale, offering to sell, bartering or otherwise supplying any seed of any 
notified kind or variety may  (“Notified Seeds ”)41, if he desires to have such seed certified by the 
certification agency, apply to the certification agency for the grant of a certificate for the purpose .  
9.3 Restriction on import of Notified Seeds 
No person shall, for the purpose of sowing or planting by any person (including himself), export or 
import or cause to be exported or imported any seed of any notified kind or variety, unless — 
(a) it conforms to the minimum limits of germination and purity specified for that seed under Section 6 
of the Seeds Act; and 
(b) its container bears, in the prescribed manner, the mark or label with the correct particulars thereof 
specified for that seed under Section 6 of the Seeds Act.  
9.4 Marking and labelling 
When seed of a Notified Seed is offered for sale, each container shall be marked or labelled in the 
manner hereinafter specified. The person whose name appears on the mark or label shall be 
responsible for the accuracy of the information required to appear on the mark or label so long as seed 
is contained in the unopened original container . The details of marking and labelling of the container 
 
41 List of notified seeds and its variety is notified by the relevant ministry from time to time. We recommend the NPs to refer to the 
notifications issued under Section 5 of the Seeds Act from time to time.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 116 
 
shall be as per the Seeds Rules 1968, an overview of which are discussed in Annexure P below. 
J. Compliances under State-Specific Animal Feeds Acts 
10.1. Various states in India have enacted their own specific regulations and acts to govern the quality, 
production, and sale of animal feeds within their respective jurisdictions. These state -specific animal 
feeds acts aim to ensure the availability of safe and nutritious feed for livestock, thereby promoting the 
health and productivity of animals. The acts typically provide guidelines for the registration and 
licensing of manufacturers, packers, and distributors of animal feeds, as well as standards for the 
composition, packaging, and labelling of these products. 
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 117 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE FRESH PRODUCE INDUSTRY  
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Food Safety  
laws 
Licensing     
Packaging     
Labelling & 
display 
    
Importation     
Fortification     
Food Standards 
and additive  
    
Prohibition and 
Restriction on 
sale 
    
Recalling the 
food article 
    
Contaminants 
and Toxins 
    
Advertising and 
Claims 
    
Infant Nutrition     
Approval of 
Non-Specified 
Food 
    
Legal 
Metrology 
laws 
Licensing    + 
Packaging and 
Labelling 
    
 
 Contractually ensure with the seller that the commodity is in compliance with the specified requirements. 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
inventory seller is not manufacturing or packing / labelling the commodity). 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
seller on the marketplace seller app is not manufacturing or packing / labelling the commodity). 
 Applicable, where the inventory seller is engaged in import of the commodities. 
 Applicable, where the seller on marketplace seller app is engaged in import of commodities. 
 Applicable, where the inventory seller is engaged in pre-packing or importing the commodity for its sale, distribution or delivery. 
+ Applicable, where the seller on the marketplace seller app is engaged in pre-packing or importing the commodity for its sale, distribution 
or delivery.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 118 
 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Other 
Compliances 
    
BIS laws Licensing / 
Certificate of 
conformity 
    
Import and 
Export 
Registration     
Consumer 
Protection 
laws 
Compliances of 
manufacturer, 
product service 
provider and 
product seller 
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   42 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
Information 
Technology 
Act 
Compliance with 
IT Rules 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
 
 
42 Please note that this is not applicable to endorsers/ influencers  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 119 
 
XII FRESH PRODUCE PRODUCTS 
1. Registrations and licensing compliances for all NPs selling fresh produce products  
A. Food Safety Laws 
1.1 Licensing Requirements 
To commence or carry on the food business, both Buyer App and Seller on Marketplace Seller App 
(Marketplace seller app as well as Inventory Seller App) are required to obtain a license from the central 
authority. Sellers are also required to obtain a license from the central authority or the concerned state 
or union territory’s licensing authority, as the case maybe. More details on the licensing requirements 
have been provided under Annexure A (under the head “Licensing or Registration Requirements”).  
The Guidelines for the operation of e-commerce FBOs under the FSS Act and Section I of the Food Safety 
and Standards (Licensing and Registration of Food Business) Amendment Regulation 2018 
(“Amendment Regulations 2018”) provide for the following:43  
• E-Commerce FBOs shall obtain central license, comply with the requirements prescribed under 
the Food Safety Laws and hygiene and manufacturing standards for licensed FBOs engaged in food 
services, including packaging and transportation. 
• The E -Commerce FBO must enter into agreements  with the sellers, brand owners, or 
manufacturers onboarded by them. These agreements shall affirm that the said entities comply  
with the Food Safety Act, Rules, and Regulations.  
• The seller/ brand owner/ manufacturer shall ensure that legible and clear picture of the 'principal 
display panel' for pre-packed food products offered for sale to the consumer, is made available for 
viewing by the customers, excluding specific details such as batch number, expiry date, and MRP.  
• Any food article delivered to a consumer by E-Commerce FBO shall have a shelf life of at least 30 
percent or 45 days remaining at the time of delivery. 
1.2 Packaging Requirements 
Food Safety and Standards (Packaging) Regulations, 2018 (“Packaging Regulations”) which provides for 
the packaging requirements to be adhered to by the relevant food business operator. The packaging 
requirements stipulated thereunder have been provided under Annexure A (under the head “Packaging 
Requirements”). The Packaging Regulations are applicable to the Buyer App and Marketplace App i.e., 
they shall contractually ensure with the seller that the commodity is in compliance with the specified 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commodity )) and Seller on the marketplace seller app 
 
43  Note: In February 2017, FSSAI issued Guidelines for the operation of e-commerce FBOs under the FSS Act which are to be read as 
explanatory memorandum and do not in any way supplant any of the requirements of the Food Safety Act.  
 Additionally, Amendment Regulations 2018  which inter alia covers the provisions for licensing and registration of E -Commerce 
FBOs. However, the said regulations have not been notified, the FSSAI has operationalized the same under Section 18(2)(d) rea d 
with Section 16(5) of the Food Safety Act with effect from 15 February 2018 and subsequently re-operationalized for a period of six 
months from 16 August 2018, 28 February 2019, 29 August 2019, 16 February 2020, 16 August 2020, 19 March 2021, 12 November 
2021, 24 June 2022, 11 November 2022, 11 May 2023, 11 November 2023, 11 May 2024.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 120 
 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity)). 
1.3 Labelling and Display Requirements 
Every packaged food article shall be marked and labelled in accordance with the Labelling Regulations 
as provided under Annexure A (under the head “Labelling and Display Requirements”). Mandatory food 
information required under the Food Safety Act, Rules, and Regulations shall be provided to consumers 
without charging supplementary costs  and must be available before the purchase is  concluded. The 
above Labelling and Display Requirements are applicable to the Buyer App and Marketplace App i.e., 
they shall contractually ensure with the seller that the commodity is in compliance with the specified 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with  the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commodity )) and Seller on the marketplace seller app 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity) ).Food Standards, Fortification & Additives:  Every FBOs shall ensure 
compliance with the  
(i) Standards & Additives: Must follow standards under the  Food Safety and Standards (Food 
Products Standards and Food Additives) Regulations, 201144. 
(ii) Fortification: Where applicable, food may be fortified to improve nutritional quality as per 
FSSAI Fortification Regulations, 201845. 
(iii) Infant Nutrition: Products intended for infants must comply with the relevant Infant Nutrition 
Regulations as discussed under Annexure A (Infant Nutrition Requirements). 
(iv) Contaminants and Residues: Food must not contain contaminants, toxins, or residues beyond 
limits set under the Food Safety and Standards ( Containments, toxins and Residues) 
Regulations, 201146. 
Furthermore, all the non-specified food articles or food ingredients shall be manufactured or imported 
on prior approval of the FSS in the manner prescribed under the Food Safety and Standards (Approval 
for Non-Specified Food and Food Ingredients) Regulations, 2017.47 In this regard, further reference may 
be made to the additional guidance documents available at https://fssai.gov.in/cms/non-specified-
food.php. 
The above Regulations are applicable to the Buyer App and Marketplace App i.e., they shall 
contractually ensure with the seller that the commodity is in compliance with the specified 
 
44  https://fssai.gov.in/upload/uploadfiles/files/Food_Additives_Regulations.pdf. 
45 https://fssai.gov.in/upload/uploadfiles/files/Gazette_Notification_Food_Fortification_10_08_2018.pdf.  
46  https://fssai.gov.in/upload/uploadfiles/files/Contaminants_Regulations.pdf. 
47  https://fssai.gov.in/upload/uploadfiles/files/Gazette_Notification_NonSpecified_Food_Ingredients_15_09_2017.pdf.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 121 
 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commodity )) and Seller on the marketplace seller app 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity)). 
1.4 Importing Requirements 
To import the food articles, the food business operators are required to obtain the import license under 
the Import Regulations. Additional compliances to import food articles have been provided under 
Annexure – A (under the head “Importing Requirements”). 
1.5 Prohibition and restrictions on sales 
Some of the food articles are prohibited for sale or subjected to certain conditions for the purpose of 
sale. The Food Safety and Standards (Prohibitions and Restrictions on sales) Regulations, 2011 48 
prescribe the specifications of such food articles  which are prohibited and / or restricted. Such 
compliances with respect to the  prohibited or restricted food articles sale shall be observed by the 
FBOs. These Regulations are applicable to the Buyer App and Marketplace App i.e., they shall 
contractually ensure with the seller that the commodity is in compliance with the specified 
requirements; the Inventory Seller App (Contractually ensure with the vendor / manufacturer that the 
commodity is in compliance with the specified requirements (where the inventory seller is not 
manufacturing or packing / labelling the commodity )) and Seller on the marketplace seller app 
(Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the 
specified requirements (where the seller on the marketplace seller app is not manufacturing or packing 
/ labelling the commodity)). 
1.6 Food Recall Requirements 
In case the food article is determined to be unsafe (as defined in Annexure A ), the food business 
operators are required to  recall such food article in the manner prescribed under the Food Recall 
Regulations. Compliances to recall food articles have been provided under Annexure A (under the head 
“Food Recall Requirements”). These Regulations are applicable to the Buyer App, Inventory Seller App, 
Marketplace App and Seller on Marketplace Seller App. 
1.7 Advertising and Claims 
All the FBOs and marketers are required to comply with the standards prescribed for advertising and 
claims (including the claims made on labels) under the Advertising Regulations. Compliances related to 
advertising and claims  have been provided under Annexure A  (under the head “ Advertising and 
Claims”). These Regulations are applicable to the Buyer App, Inventory Seller App, Marketplace App 
and Seller on Marketplace Seller App. 
 
48  https://fssai.gov.in/upload/uploadfiles/files/Prohibition_Regulations.pdf.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 122 
 
B. LM Act 
2.1 Licensing or Registration Requirement 
Any individual, firm, society, company, corporation, or Hindu Undivided Family that pre -packs or 
imports any pre -packaged commodity for sale, distribution, or delivery is required to register itself 
under the LM Act with the Director or Controller of Legal Me trology. This registration must be 
completed within 90 days of starting such activities.  Depending on the nature of the activity undertaken 
by the Network Participant or seller, registration under the LM Act may be required.  
2.2 Packaging and Labelling Requirements 
Entities must ensure that all pre -packaged products display the following mandatory declarations in 
accordance with the PC Rules: 
• Name and address of the manufacturer, packer, or importer 
• Common or generic name of the product 
• Net quantity (weight, measure, or number) 
• Maximum retail price (inclusive of all taxes) 
• Month and year of manufacture or packing 
• Best before’ or ‘Use by’ date must be mentioned where applicable 
• Consumer care contact details 
• Unit sale price (where applicable) 
• Country of origin  
• Mandatory indicators for vegetarian/non-vegetarian origin (where applicable) 
• Special labelling for GM foods (where applicable) 
• Where the sizes of the commodity contained in the package are relevant, the dimensions of 
the commodity contained in the package and if the dimensions of the different pieces are 
different, the dimensions of each such different piece 
Notably, e-commerce entities must ensure that all mandatory declarations (except the month and year 
of manufacture or packing) are displayed on the digital or electronic platform used for selling the goods. 
As per the PC Rules, in marketplace models, the responsibility for the correctness of these declarations 
lies with the manufacturer, seller, dealer, or importer, as applicable. 
The packaging and labelling requirements provided under Annexure B (under the head “Packaging and 
Labelling Requirements” ) shall be complied with. However, for the purpose of packages containing 
electronic products, further reference shall be made as per Para 1.3 of Annexure – B. 
2.3 Other compliances under Legal Metrology (Packaged Commodities) Rules 2011 (“PC Rules”):  
 
Other compliance under PC Rules namely, declaration on container type commodities, general 
guidelines, manner of declaration, and maximum permissible errors on net quantities declared by 
weight or volume have been discussed in Annexure B. 
C. BIS Act  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 123 
 
The Bureau of Indian Standards Act, 2016 (“BIS Act”) empowers the Bureau of Indian Standards (“BIS”) 
to regulate the quality and standards of products distributed in the Indian market. While BIS 
certification is generally voluntary, the Central Government has made it mandatory for certain products 
based on considerations such as public interest, health and safety of humans, animals, or plants, 
environmental protection, prevention of unfair trade practices, and national security.  
For such products, the use of the Standard Mark is compulsory and must be obtained under a licence 
or Certificate of Conformity (CoC) from BIS. The list of products under compulsory certification is 
available on the BIS website: https://www.bis.gov.in/product-certification/products-under-
compulsory-certification/#  
Please refer to 1.4 of Annexure – C to check the applicability of BIS laws on the subject product(s). 
Additionally, the labelling requirements have been provided in Annexure – C (under the heading 
“Labelling requirements”). 
D. Import and Export laws 
4.1 Registration 
Every importer and / or exporter is required to obtain IEC as discussed under the heading below of 
Annexure - D. 
E. Consumer Protection Act and the rules/ guidelines issued thereunder 
5.1 Compliances under E-commerce Rules 
All e-commerce entities must comply with the E-Commerce Rules, including: 
• Nodal Officer: Appoint a nodal officer or alternate senior functionary residing in India.  
• Information Disclosure: Clearly and prominently display on its platform: 
o Legal Name  
o Principal and branch addresses 
o Name and details of the website 
o Contract information of customer care and grievance officer. 
• Grievance Redressal:  Set up a grievance mechanism and appoint a grievance officer. Display their 
name, contact, and designation of such officer on its platform. Grievances must be acknowledged in 48 
hours and resolved within 1 month. 
• Imported Goods: If offering imported goods/services, mention importer details. 
• Cancellation Charges: No cancellation charges unless the platform bears similar charges  if they cancel 
the purchase order unilaterally. 
• Consent: Obtain a consumer’s consent for any purchase through explicit and affirmative action . 
• Refunds: Process refunds as prescribed under applicable law. 
Obligations for Marketplace E-Commerce Entities 
Marketplace entities must additionally:  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 124 
 
• Seller Undertaking: Require sellers through an undertaking to ensure that descriptions, images, and 
other content pertaining to goods or services on their platform is accurate  and corresponds directly 
with features of such goods or services. 
• Differentiated Treatment:  Include in terms and conditions , a description of any differentiated 
treatment which it gives or might give between goods or services or sellers of the same category . 
• Disclosures: Display all required information including  that may be required by consumers to make 
informed choices : contractual terms, mandatory notices, expiry, seller/importer details, country of 
origin, return/exchange/refund/delivery terms, warranties, payment modes, grievance mechanism.  
• Seller Details: Show seller name, registration status, address, customer care number, and ratings , if 
any. 
• Complaint Tracking: Provide ticket numbers to track complaints. 
• Ranking Parameters: Explain in plain language the key parameters affecting product/seller rankings.  
 
Obligations for Inventory E-Commerce Entities 
Inventory-based entities must: 
• No False Representation: Not misrepresent themselves as consumers. 
• Return and Refunds:  Must not deny return, refund, or cancellation if goods/services are defective, 
deficient, spurious, or delivered late. 
• Disclosures: Same disclosure obligations as marketplaces. 
• Price Transparency: Show total price as a single figure, with breakup and applicable taxes.  
• Complaint Tracking: Provide ticket numbers for consumer complaints that enables consumers to track 
status of their complaint. 
 
Obligations for Sellers on Marketplaces 
Sellers on marketplaces must: 
• No Fake Reviews: Not falsely pose as consumers or post fake reviews. 
• Return and Refunds: Must not deny return, refund, or cancellation for defective, deficient, spurious, or 
delayed goods/services. 
• Written Contract:  Must have a prior written contract with the platform and share details (name, 
address, GSTIN, PAN, website). 
• Grievance Officer: Appoint and display grievance officer's name and contact. Acknowledge complaints 
in 48 hours, resolve within 1 month. 
• Disclosures: Display all legally required info (e.g., expiry date, seller/importer details, country of origin, 
return/exchange/delivery terms, warranties). 
• Price Transparency: Show total price and breakup with all charges and taxes. 
• Grievance Officer Info: Display name, contact number, and designation. 
 
Annexure E details compliances required under the E-Commerce Rules.  
5.2 Guidelines on Misleading Advertisements 
As per the Guidelines, advertisement is valid and not misleading if it: 
• Is truthful and honest in its representation.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 125 
 
• Does not exaggerate the product’s performance, accuracy, scientific basis, or usefulness.  
• Does not mislead by presenting legal consumer rights as unique benefits offered by the advertiser. 
• Does not claim universal acceptance  of a claim where significant scientific or expert disagreement 
exists. 
• Does not exploit fear, i.e., doesn’t suggest that personal or family safety is at risk if the product is not 
purchased. 
• Does not mislead by citing publications or sources that haven’t been independently verified.  
• Complies with all applicable sector-specific laws and regulations. 
In addition, the Guidelines also details conditions for bait advertisements, surrogate advertisements, free 
claims advertisements, and child targeted advertisements among others.  
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection 
5.3 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. The Guidelines defines Dark Patterns to mean any practices or deceptive design pattern 
using user interface or user experience interactions on any platform that is designed to mislead or trick 
users to do something they originally did not intend or want to do, by subverting or impairing the 
consumer autonomy, decision making or choice, amounting to misleading advertisement or unfair 
trade pra ctice or violation of consumer rights . The Guidelines prohibits any person, including any 
platform, from engaging in any dark pattern practice . The Guidelines are available here: 
https://consumeraffairs.nic.in/acts-and-rules/consumer-protection  
5.4 Greenwashing Guidelines  
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
F. Data protection laws 
The IT Act read with the SPDI Rules are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H.  
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act . 
G. Compliance with IT Rules  
7.1 An intermediary as defined under Section 2(w) of the IT Act, with respect to an electronic record, means 
any person who “receives, stores or transmits that record or provides any service with respect to that  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 126 
 
record and includes telecom service providers, network service providers, internet service providers, 
web-hosting service providers, search engines, online payment sites, online -auction sites, online -
market places and cyber cafes”. To the extent, the NP qu alifies as an intermediary, it will be required 
to implement the due diligence obligations (depending on the category of intermediary) as has been 
set out in Annexure I, if it seeks to avail the exemption from liability in accordance with Section 79 of 
the IT Act. 
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 127 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE PHARMACY AND HEALTHCARE DEVICES 
INDUSTRY 
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Legal 
Metrology 
laws 
Licensing    + 
Packaging and 
Labelling 
    
Other 
Compliances 
    
BIS laws Licensing / 
Certificate of 
conformity 
    
Import and 
Export 
Registration     
Consumer 
Protection 
laws 
Compliances of 
manufacturer, 
product service 
provider and 
product seller 
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   49 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
 
 Applicable, where the inventory seller is engaged in pre-packing or importing the commodity for its sale, distribution or delivery. 
+ Applicable, where the seller on the marketplace seller app is engaged in pre-packing or importing the commodity for its sale, distribution 
or delivery. 
 Contractually ensure with the seller that the commodity is in compliance with the specified requirements. 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
inventory seller is not manufacturing or packing / labelling the commodity). 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
seller on the marketplace seller app is not manufacturing or packing / labelling the commodity). 
 Applicable, where the inventory seller is engaged in import of the commodities. 
 Applicable, where the seller on marketplace seller app is engaged in import of commodities. 
49 Please note that this is not applicable to endorsers/ influencers.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 128 
 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
Information 
Technology 
Act 
Compliance with 
IT Rules 
    
Drugs, 
cosmetics and 
medical 
devices laws 
Licensing 
requirements 
    
Packaging and 
labelling 
requirements 
    
Pharmacy Act Licensing and 
other 
requirements 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 129 
 
XIII PHARMACY AND HEALTHCARE DEVICES 
1. Registrations and licensing compliances for all pharmacies and sellers of healthcare devices  
A. LM Act 
1.1 Licensing or Registration Requirement 
Any individual, firm, society, company, corporation, or Hindu Undivided Family that pre -packs or 
imports any pre -packaged commodity for sale, distribution, or delivery is required to register itself 
under the LM Act with the Director or Controller of Legal Me trology. This registration must be 
completed within 90 days of starting such activities.  Depending on the nature of the activity undertaken 
by the Network Participant or seller, registration under the LM Act may be required.  
1.2 Packaging and Labelling Requirements 
Entities must ensure that all pre -packaged products display the following mandatory declarations in 
accordance with PC Rules: 
• Name and address of the manufacturer, packer, or importer 
• Common or generic name of the product 
• Net quantity (weight, measure, or number) 
• Maximum retail price (inclusive of all taxes) 
• Month and year of manufacture or packing 
• Best before’ or ‘Use by’ date must be mentioned where applicable 
• Consumer care contact details 
• Unit sale price (where applicable) 
• Country of origin  
• Mandatory indicators for vegetarian/non-vegetarian origin (where applicable) 
• Special labelling for GM foods (where applicable) 
• Where the sizes of the commodity contained in the package are relevant, the dimensions of 
the commodity contained in the package and if the dimensions of the different pieces are 
different, the dimensions of each such different piece 
Notably, e-commerce entities must ensure that all mandatory declarations (except the month and year 
of manufacture or packing) are displayed on the digital or electronic platform used for selling the goods. 
As per the PC Rules, in marketplace models, the responsibility for the correctness of these declarations 
lies with the manufacturer, seller, dealer, or importer, as applicable. 
The packaging and labelling requirements provided under Annexure B (under the head “Packaging and 
Labelling Requirements”) shall be complied with. However, for the purpose of packages containing food 
articles, further reference shall be made to Para 1.1 and 1.2 of Annexure B.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 130 
 
1.3 Other compliances under Legal Metrology (Packaged Commodities) Rules 2011 (“PC Rules”):  
Other compliance under PC Rules namely, declaration on container type commodities, general 
guidelines, manner of declaration, and maximum permissible errors on net quantities declared by 
weight or volume have been discussed in Annexure B. 
B. BIS Act 
2.1 Licensing / Certificate of conformity and labelling 
Please refer to 1.4 of Annexure – C to check the applicability of BIS laws on the subject product(s). 
Additionally, the labelling requirements have been provided in Annexure – C (under the heading 
“Labelling requirements”). 
C. Import and Export laws 
3.1 Registration 
Every importer and / or exporter is required to obtain IEC as discussed under the heading below of 
Annexure - D. 
D. Consumer Protection Act and the rules/ guidelines issued thereunder 
4.1 Compliances of manufacturer, product service provider and product seller under the CPA  
 
A manufacturer, product service provider and product seller shall comply with the obligations provided 
under Section 84, 85 and 86 of the CPA. 
4.2 Compliances under E-commerce Rules 
(i) Please refer to Para 1.1 of Annexure E  for compliances to be followed by all E -commerce 
entities. 
(ii) Please refer to Para 1.2 of Annexure E  for additional compliances to be followed by all 
marketplace E-commerce entities.  
(iii) Please refer to Para 1.3 of Annexure E  for additional compliances to be followed by all 
inventory E-commerce entities.  
(iv) Please refer to Para 1.4 of Annexure E for additional compliances to be followed by all sellers 
on the marketplace E-commerce entity.  
4.3 Guidelines on Misleading Advertisements 
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 131 
 
4.4 Guidelines on Dark Patterns 
 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. 
4.5 Greenwashing Guidelines  
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
E. Data protection laws 
The IT Act  read with the SPDI Rules  are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H. 
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act.  
F. Compliance with IT Rules  
To the extent, the NP qualifies as an intermediary , it will be required to implement the due diligence 
obligations (depending on the category of intermediary) as has been set out in Annexure I, if it seeks to 
avail the exemption from liability in accordance with Section 79 of the IT Ac t. 
G. Compliance with drugs, cosmetics and medical devices laws 
7.1 Licensing Requirements 
(i) Please refer to Para 1.1 of Annexure J for the license required for retail sale of Drugs under the 
Drugs Rules.  
(ii) Please refer to Para 1.2 of Annexure J for the license required for wholesale sale of Drugs under 
the Drugs Rules. 
(iii) Please refer to  Para 1.3 of Annexure J  for the license required for import license under the 
Drugs Rules.  
(iv) Please refer to Para 1.4 of Annexure J for the restricted license under the Drugs Rules. 
(v) Please refer to Para 1.5 of Annexure J for the license required for selling homeopathic medicine 
under the Drugs Rules. 
(vi) Please refer to Para 1.6 of Annexure J  for the license required for manufacturer, importer, 
seller of medical devices under the Medical Devices Rules.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 132 
 
(vii) Please refer to Para 1.7 of Annexure J for the license required for importing cosmetics under 
the Cosmetics Rules. 
7.2 Packaging and labelling requirements 
 
(i) Depending on the category of Drug, the relevant NP is required to adhere to the packaging 
and labelling requirements as provided in Para 2.1 of Annexure J. 
(ii) Depending on the nature of the medical device, the relevant NP is required to adhere to the 
packaging and labelling requirements as provided in Para 2.2 of Annexure J. 
(iii) The packaging and labelling requirements of the cosmetic products must be in compliance 
with Chapter VI of the Cosmetics Rules.  
H. Compliance with Pharmacy Act  
8.1 Licensing and other requirements 
Every pha rmacy is required to  be under the supervision of a pharmacist who is register ed with the 
relevant State’s Pharmacy Councils in compliance with the Pharmacy Act. Additionally, a pharmacy and 
the pharmacist is required to comply with the provisions of the Pharmacy Act read with the Pharmacy 
Practice Regulations 2015 which includes the manner of maintaining prescription register, qualification 
of pharmacist, duties and responsibilities of a registered pharmacists etc.  
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 133 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE EDUCATION SERVICE INDUSTRY  
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Consumer 
Protection 
laws 
Compliances of 
product service 
provider  
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   50 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Coaching sector 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
Information 
Technology 
Act 
Compliance 
with IT Rules 
    
UGC Act and 
AICTE Act 
Compliance 
under formal 
education 
framework 
    
State specific 
regulations 
Compliance 
under informal 
education 
framework 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
 
50 Please note that this is not applicable to endorsers/ influencers.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 134 
 
XIV EDUCATION SERVICE INDUSTRY  
1. Compliances and registration for all NPs in the education service industry  
A. Consumer Protection Act and the rules/ guidelines issued thereunder 
1.1 Compliances of product service provider under the CPA 
 
A product service provider shall comply with the obligations provided under Section 85 of the CPA.  
1.2 Compliances under E-commerce Rules 
 
(i) Please refer to Para 1.1 of Annexure E  for compliances to be followed by all E -commerce 
entities. 
(ii) Please refer to Para 1.2 of Annexure E  for additional compliances to be followed by all 
marketplace E-commerce entities.  
(iii) Please refer to Para 1.3 of Annexure E  for additional compliances to be followed by all 
inventory E-commerce entities.  
(iv) Please refer to Para 1.4 of Annexure E for additional compliances to be followed by all sellers 
on the marketplace E-commerce entity.  
1.3 Guidelines on Misleading Advertisements 
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
1.4 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. 
1.5 Greenwashing Guidelines  
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
1.6 Coaching Sector Guidelines  
A Coaching Centre providing coaching to the students must adhere to the compliances under the 
Coaching Sector Guidelines. 
B. Data protection laws  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 135 
 
The IT Act  read with the SPDI Rules  are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H. 
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act.  
C. Compliance with IT Rules  
To the extent, the NP qualifies as an intermediary , it will be required to implement the due diligence 
obligations (depending on the category of intermediary) as has been set out in Annexure I, if it seeks to 
avail the exemption from liability in accordance with Section 79 of the IT Ac t. 
D. Compliance under formal education framework  
The provision of formal education, particularly courses that lead to the award of degrees or diplomas, 
is regulated under the University Grants Commission Act 1956 (“UGC Act”) and the All India Council for 
Technical Education Act 1987 (“AICTE Act”). In particular: 
(i) UGC Act : Under Section 22(1), the right to confer degrees is reserved for universities 
established by law, deemed universities, or those institutions specifically empowered by 
Parliament. Section 22(2) of the UGC Act prohibits any other entity from conferring or granting 
degrees. 
(ii) AICTE Act: Programs leading to degrees or diplomas in technical education (e.g., engineering, 
architecture, pharmacy, management, etc.) can only be offered by institutions registered with 
the AICTE. This is governed under the AICTE Act, AICTE Grant of Approval Regulations 2020, 
and related guidelines. 
Skilling courses offered by ecosystem players on the ONEST platform would generally not fall within the 
formal education framework if the following conditions are adhered to:  
(i) Nomenclature: The course names should not match AICTE or UGC -approved program names 
(e.g., “Post Graduate Diploma” or “Master's in Artificial Intelligence”).  
(ii) Duration: The courses must be of a shorter duration, less than those required for formal 
degree or diploma courses under UGC / AICTE. 
(iii) Curriculum: The curriculum should not align with any UGC or AICTE approved curriculum.  
(iv) Award: Upon completion, the students should only receive a certificate of completion and not 
a degree or diploma. 
E. Compliance under informal education framework   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 136 
 
Informal education programs, such as certificate courses or executive programs, offered by private 
entities or education operators that are not recognized by AICTE or UGC, are not regulated under UGC 
or AICTE laws. However, some key compliance considerations remain: 
(i) State-specific regulations: Certain states regulate coaching centres or tutorial institutions that 
prepare students for state or national exams. These institutions may need to be registered 
with the state government.  
(ii) Sector-specific regulations: Some sectors, such as aviation, may require specific approvals for 
training organizations. For instance, the Directorate General of Civil Aviation mandates 
approvals for aviation training institutions under the Aircraft Act 1934 and Aircraft Rules 1937. 
(iii) Coaching sector guidelines: As noted in the draft compliance handbook shared by you, entities 
providing coaching services must adhere to the Guidelines for Prevention of Misleading 
Advertisement in Coaching Sector 2024. Additionally, according to the Ministry of Education's 
Guidelines for Regulation of Coaching Centres, tuition and instruction provided to more than 
50 students fall under the coaching centre definition. However, the guidelines do not explicitly 
address online centres. Nonetheless, ecosystem players operating in a hybrid mode are likely 
to be subject to regulation. 
 
 
 
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 137 
 
IDENTIFYING THE COMPLIANCES FOR NETWORK PARTNERS OF THE HOME DÉCOR INDUSTRY  
 - Applicable 
 - Not applicable 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Legal 
Metrology 
laws 
Licensing    + 
Packaging and 
Labelling 
    
Other 
Compliances 
    
BIS laws Licensing / 
Certificate of 
conformity 
    
Import and 
Export 
Registration     
Consumer 
Protection 
laws 
Compliances of 
manufacturer, 
product service 
provider and 
product seller 
    
E-commerce 
Rules 
    
Guidelines on 
Misleading 
Advertisements 
   51 
Guidelines on 
Dark Patterns 
    
Greenwashing 
guidelines 
    
Data 
protection 
laws 
Compliances 
under the IT Act 
and SPDI Rules 
    
 
 Applicable, where the inventory seller is engaged in pre-packing or importing the commodity for its sale, distribution or delivery. 
+ Applicable, where the seller on the marketplace seller app is engaged in pre-packing or importing the commodity for its sale, distribution 
or delivery. 
 Contractually ensure with the seller that the commodity is in compliance with the specified requirements. 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
inventory seller is not manufacturing or packing / labelling the commodity). 
 Contractually ensure with the vendor / manufacturer that the commodity is in compliance with the specified requirements (wher e the 
seller on the marketplace seller app is not manufacturing or packing / labelling the commodity). 
 Applicable, where the inventory seller is engaged in import of the commodities. 
 Applicable, where the seller on marketplace seller app is engaged in import of commodities. 
51 Please note that this is not applicable to endorsers/ influencers.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 138 
 
Applicable 
Laws 
Requisite 
compliance 
Buyer App Inventory Seller 
App 
Marketplace 
Seller App 
Seller on the 
Market place 
Seller App 
Information 
Technology 
Act 
Compliance with 
IT Rules 
    
 
[Note: For ease of accessing the information, cross-linkages have been made in the second column of the table 
above which has been linked to the relevant compliance in this industry.] 
 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 139 
 
XV HOME DÉCOR 
1. Registrations and licensing compliances for home décor 
A. LM Act 
1.1 Licensing or Registration Requirement 
Any individual, firm, society, company, corporation, or Hindu Undivided Family that pre -packs or 
imports any pre -packaged commodity for sale, distribution, or delivery is required to register itself 
under the LM Act with the Director or Controller of Legal Me trology. This registration must be 
completed within 90 days of starting such activities.  Depending on the nature of the activity undertaken 
by the Network Participant or seller, registration under the LM Act may be required.  
1.2 Packaging and Labelling Requirements 
Entities must ensure that all pre -packaged products display the following mandatory declarations in 
accordance with PC Rules: 
• Name and address of the manufacturer, packer, or importer 
• Common or generic name of the product 
• Net quantity (weight, measure, or number) 
• Maximum retail price (inclusive of all taxes) 
• Month and year of manufacture or packing 
• Best before’ or ‘Use by’ date must be mentioned where applicable 
• Consumer care contact details 
• Unit sale price (where applicable) 
• Country of origin  
• Mandatory indicators for vegetarian/non-vegetarian origin (where applicable) 
• Special labelling for GM foods (where applicable) 
• Where the sizes of the commodity contained in the package are relevant, the dimensions of 
the commodity contained in the package and if the dimensions of the different pieces are 
different, the dimensions of each such different piece 
Notably, e-commerce entities must ensure that all mandatory declarations (except the month and year 
of manufacture or packing) are displayed on the digital or electronic platform used for selling the goods. 
As per the PC Rules, in marketplace models, the responsibility for the correctness of these declarations 
lies with the manufacturer, seller, dealer, or importer, as applicable. 
The packaging and labelling requirements provided under Annexure B (under the head “Packaging and 
Labelling Requirements”) shall be complied with. However, for the purpose of packages containing food 
articles, further reference shall be made to Para 1.1 and 1.2 of Annexure B.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 140 
 
1.3 Other compliances under Legal Metrology (Packaged Commodities) Rules 2011 (“PC Rules”):  
Other compliance under PC Rules namely, declaration on container type commodities, general 
guidelines, manner of declaration, and maximum permissible errors on net quantities declared by 
weight or volume have been discussed in Annexure B. 
B. BIS Act 
2.1 Licensing / Certificate of conformity and labelling 
Please refer to 1.4 of Annexure – C to check the applicability of BIS laws on the subject product(s). 
Additionally, the labelling requirements have been provided in Annexure – C (under the heading 
“Labelling requirements”). 
C. Import and Export laws 
3.1 Registration 
Every importer and / or exporter is required to obtain IEC as discussed under the heading below of 
Annexure - D. 
D. Consumer Protection Act and the rules/ guidelines issued thereunder 
4.1 Compliances of manufacturer, product service provider and product seller under the CPA  
A manufacturer, product service provider and product seller shall comply with the obligations provided 
under Section 84, 85 and 86 of the CPA. 
4.2 Compliances under E-commerce Rules 
 
(i) Please refer to Para 1.1 of Annexure E  for compliances to be followed by all E -commerce 
entities. 
(ii) Please refer to Para 1.2 of Annexure E  for additional compliances to be followed by all 
marketplace E-commerce entities.  
(iii) Please refer to Para 1.3 of Annexure E  for additional compliances to be followed by all 
inventory E-commerce entities.  
(iv) Please refer to Para 1.4 of Annexure E for additional compliances to be followed by all sellers 
on the marketplace E-commerce entity.  
4.3 Guidelines on Misleading Advertisements 
Please refer to Annexure F  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 141 
 
4.4 Guidelines on Dark Patterns 
An entity advertising goods or services offered by it to consumers must comply with the Guidelines on 
Dark Patterns. 
4.5 Greenwashing Guidelines  
Please refer to Annexure G  for the compliances to be followed under these guidelines by an entity 
advertising goods or services offered by it to consumers. 
E. Data protection laws 
The IT Act  read with the SPDI Rules  are the primary legislations in India governing data privacy and 
protection on a sector -neutral basis. To the extent the NPs will collect/handle personal data falling 
under the category of SPDI, it is required to be compliant with the obligations specified under the SPDI 
Rules. A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, 
processing and transferring of SPDI, has been set out in Annexure H. 
Please note that once the DPDP Act is enforced, all entities collecting, handling, or processing personal 
data will be required to comply with the obligations prescribed under the DPDP Act.  
F. Compliance with IT Rules  
To the extent, the NP qualifies as an intermediary , it will be required to implement the due diligence 
obligations (depending on the category of intermediary) as has been set out in Annexure I, if it seeks to 
avail the exemption from liability in accordance with Section 79 of the IT Ac t. 
 
 
 
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 142 
 
ANNEXURE – A 
FOOD SAFETY LAWS 
A. Licensing or Registration Requirements 
1.1 A registration or license (Central or State) is required to be obtained to operate a food business in India. 
The registration or licensing requirements are determined in the following manner:  
(a) The registration or licensing requirements are prescribed for different kinds of food business 
activities i.e., manufacture, import, sale (wholesale, retail), packaging, etc.  
(b) Further, the requirement for obtaining either Central license or State license or a simpliciter 
registration is determined based on the annual turnover or production/ storage capacity of a 
food business as prescribed under the Food Safety and Standards (Licensing and Registration 
of Food Business) Regulations, 2011 (“ L&R Regulations”). The details pertaining to eligibility 
criteria and fee structure for the said registration or license is readily available on the Food 
Safety Compliance System’s portal52. 
Note: The registration or license under the food safety laws is issued for a premise or place of 
business. Thus, a single integrated registration or license can be issued for multiple activities 
undertaken from one premise or place of business by a food business operator.  
1.2 The licensees shall ensure to keep the licensing authority updated with respect to their food business 
establishment. 
1.3 The licensee under L&R Regulations shall submit a return on or before 31 May each year (separate for 
each license issued to it), to the licensing authority in respect of each class of food articles handled by 
him during the previous financial year. 
1.4 The L&R Regulations also stipulate the requirements inter alia with respect to (i) the hygiene of the 
premises, containers, equipment and material (raw material and packaging material) used in 
manufacturing, packing and storing of food articles and vehicles used to transport the same; (ii) facilities 
including water supply, drainage, waste disposal, ventilation, lighting, food testing, pest control; (iii) 
personnel facilities and their personal hygiene; (iv) audit, documentation and records; (v) training of  
the food handlers; and (vi) storage, transportation and handling of the food articles, for the following 
FBOs under Schedule – 4 of the L&R Regulations [General Hygienic and Sanitary practices to be followed 
by Food Business Operators]: 
(a) Petty FBOs applying for registration (Part I of Schedule – 4). 
(b) All FBOs applying for license under L&R Regulations (Part II of Schedule – 4). 
 
52  https://foscos.fssai.gov.in/assets/docs/KindofBusinessEligibilityLatest.pdf.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 143 
 
(c) FBOs engaged in manufacture, processing, storing and selling of milk and milk products (Part III 
of Schedule – 4). 
(d) FBOS engages in manufacture, processing, storing and selling of meat and meat products (Part 
IV of Schedule – 4). 
(e) FBOs engaged in catering or food service establishment (Part V of Schedule – 4). 
1.5 On the basis of Schedule – 4 of the L&R Regulations, the guidance documents to implement GMP/GHP 
requirements for food articles such as spices 53, health supplements and nutraceuticals 54 and milk and 
milk products55 have been issued by FSSAI as part of food safety management systems.  
B. Packaging Requirements 
2.1 In this regard, the FSSAI has issued the Food Safety and Standards (Packaging) Regulations, 2018 
(“Packaging Regulations”). 
2.2 The requirements stipulated for the manner of packaging are provided in Regulation 3 of the Packaging 
Regulations which includes: 
(a) Packaging materials shall be suitable for the type of product, the conditions provided for 
storage, and the equipment for filling, sealing, and packaging of food as well as transportation 
conditions. 
(b) Packaging materials shall be able to withstand mechanical, chemical, or thermal stresses 
encountered during normal transportation. In the case of flexible or semi -rigid containers, 
overwrap packaging may be necessary. 
(c) Food articles shall be packed in a clean, hygienic, and tamperproof package or container.  
(d) Printing inks for use on food packages shall conform to IS: 15495. 
(e) In the case of multilayer packaging the layer which comes in direct contact with food or layers 
likely to come in contact with food shall meet the requirements of packaging materials 
specified in Schedule I (Paper and board materials intended to come in co ntact with food 
articles), II (Metal and Metal Alloys intended to come in contact with food articles) and III 
(Plastic Materials intended to come in contact with food products) of the Packaging 
Regulations. 
2.3 The Packaging Regulations framework provides a list of suggestive packaging materials corresponding 
 
53  https://fssai.gov.in/upload/uploadfiles/files/Guidance_Document_Spices_23_10_2018.pdf. 
54  https://fssai.gov.in/upload/uploadfiles/files/Guidance_Document_Nutraceutical_18_05_2018.pdf. 
55  https://fssai.gov.in/upload/uploadfiles/files/Guidance_Document_Milk_14_03_2019.pdf.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 144 
 
to the product category in Schedule IV of the Packaging Regulations. 
C. Labelling and Display Requirements 
3.1 To manufacture, distribute, sell, or expose for sale or despatch or deliver to any agent or broker for 
sale, every pre-packaged food article shall be marked and labelled in accordance with Food Safety and 
Standards (Labelling and Display) Regulations, 2020 (“Labelling Regulations”). 
3.2 Every pre-packaged / pre-packed food should carry a label containing the information prescribed under 
Regulation 4 of the Labelling Regulations which include the following details:  
(a) Particulars of labelling declarations should be in Hindi or English language;  
(b) Label should be applied on pre -packaged or pre-packed food in such a manner that it cannot 
be separated from the container; 
(c) Where the container is wrapped in a wrapper, then the wrapper shall carry the necessary 
information or label so that readily legible by consumers under normal conditions of purchase 
and use; and 
(d) License number shall be displayed on the principal display panel in the prescribed format.  
3.3 Further, the information required to be declared on every label of a pre -packaged or pre-packed food 
has been prescribed under Regulation 5 of the Labelling Regulations, w hich includes the following: 
(a) Name of the food – This shall include the trade name or description; 
(b) List of ingredients; 
(c) Nutritional information; 
(d) Calculation of nutrients; 
(e) Declaration regarding the vegetarian or non-vegetarian nature of the food; 
(f) Declaration regarding food additives; 
(g) Name and complete address of the manufacturer – In addition to the above, for imported food 
articles, the name & address of the importer along with the details of the bottling or packing 
unit, if any; 
(h) FSSAI logo and license number; 
(i) Net Quantity – by weight, volume, or number, as the case may be, retail sale price and 
consumer care details; 
(j) Lot/ Code/ Batch identification reference;  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 145 
 
(k) Date of manufacturing or packing and expiry / use; 
(l) Country of Origin details for imported foods;  
(m) Instructions for use – wherever necessary; 
(n) Declaration regarding food allergen; and 
(o) If the food material is not meant for human consumption, the package shall bear a declaration 
to this effect by a symbol consisting of a cross inside a square in black colour.  
3.4 The relevant information / declarations are required to be made on the principal display panel (“PDP”) 
and can be given in the following manner:56 
(a) All information should be grouped and given in one place; or 
(b) The pre -printed information can be grouped together and given in one place and Online 
information or those not pre-printed be grouped together in another place. 
3.5 The PDP area shall adhere to of the Labelling Regulations including Regulation 6 of the Labelling 
Regulations. The Labelling Regulations also allow certain exemption from requirements which are 
provided in Regulation 8 of the Labelling Regulations. 
D. Importing Requirements 
4.1 An import license is required to be obtained from the Central Licensing Authority to import any article 
of food as per the Food Safety and Standards (Import) Regulations, 2017 (“ Import Regulations”). The 
imported food article shall be imported in the manner prescribed under Regulation 5 of the Import 
Regulations. 
4.2 The compliance with standards for packaging and labelling has been prescribed in Regulation 6 of the 
Import Regulations 
4.3 No-objection certificate (Form 3) provided under the Import Regulations) shall be issued to the 
importer if the Authorised Officer is satisfied that the food articles conform to the standards stipulated 
under the Import Regulations. The no objection certif icate is valid for thirty days from receipt of the 
said certificate within which the importer shall remove the food articles from the customs area.  
E. Organic Foods57 Requirements 
5.1 The organic food meant for sale shall comply with the applicable provisions of one of the following 
 
56 Regulation 6(1) of the Labelling Regulations. 
57 Regulation 2(1)(g) of the Food Safety and Standards (Organic Foods) Regulations, 2017 (“ Organic Foods Regulations”) defines the 
term “Organic food” as “food products that have been produced in accordance with specified standards for organic food production”.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 146 
 
systems:58 
(a) National Programme for Organic Production (NPOP); 
(b) Participatory Guarantee System for India (PGS-India); and 
(c) Any other system or standards as may be notified by the Food Authority from time to time.  
5.2 The organic food marketed through direct sales by a small original producer or producer organization 
to the end customer and such intermediaries or aggregators who collect organic food from such 
producers are exempted from the above requirement. 
5.3 Packaging and labelling of organic food: The label shall convey the organic status of the food article by 
carrying a logo therefore with the dimensions (in mm) provided in Regulation 5 of the Organic Foods 
Regulations; Schedule I to the Labelling Regulations Display for sale of organic food: The seller of the 
organic food shall display such food in a manner distinguishable from the display of non-organic food. 
5.4 Import of organic food: The organic food imported under bilateral or multilateral agreements on the 
basis of equivalence of standards between that of NPOP and the exporting country, is not required to 
be re -certified on import. However, the organic food co nsignment shall be accompanied by a 
transaction certificate issued by the accredited certification body.  
F. Vegan Foods59 Requirements 
6.1 The vegan foods shall not involve animal testing for any purpose of safety evaluation unless provided 
by any regulatory authority. 
6.2 The food business operator shall ensure to take appropriate precautions in all stages of production, 
processing, and distribution with good manufacturing practices and avoid the unintended presence of 
non-vegan substances. 
6.3 Labelling and Packaging of Vegan Foods : The vegan foods package shall be in compliance with the 
Labelling Regulations.60 The packaging of the vegan foods shall carry a logo (after approval of the Food 
Authority) to display the status of vegan products. 
6.4 Import of Vegan Foods: Vegan food articles shall be imported with a certificate issued by the recognised 
authorities of the exporting countries in the format as specified by the Authority is accepted.  
G. Health Supplements and Others’ Requirements 
7.1 The Food Safety and Standards (Health Supplements, Nutraceuticals, Food for Special Dietary Use, Food 
 
58 Regulation 4 of the Organic Foods Regulations. 
59 As per Regulation 2(a) of the Food Safety and Standards (Vegan Foods) Regulations, 2022 (“ Vegan Foods Regulations”), the term 
“vegan food” means “ “vegan food” means “ the food or food ingredient, including additives, flavourings, enzymes and carriers, or 
processing aids that are not products of animal origin and in which, at no stage of production and processing, ingredients, including 
additives, flavourings, enzymes and carriers, or processing aids that are of animal origin has been used.” 
60 Regulation 3(3) of the Vegan Foods Regulations.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 147 
 
for Special Medical Purpose, Functional Food and Novel Food) Regulations, 2016 (“Health Supplements 
and Others’ Regulations ”) are applicable on food for special dietary use, functional foods, health 
supplements, nutraceuticals, food for special medical purpose and novel foods.  
7.2 The food articles with standard nutrients or nutritionally complete formulation shall deliver desired 
level of energy, protein, vitamins and minerals and other essential nutrients required for respective age 
group, gender and physiological stage as per the guidelines made by Indian Council of Medical Research 
as per Regulation 3 of the Health Supplements and Others’ Regulations.  
7.3 The quality of nutrients added to the articles of good shall not be in excess to the recommended daily 
allowance as specified by the Indian Council of Medical Research. If the standards have not been 
specified, the nutrients shall comply with the standards laid down by Codex Alimentarius Commission.61 
7.4 The food articles shall conform to the Food Safety and Standards (Contaminants, Toxins and Residues) 
Regulations, 2011. 
7.5 The food business operator may use the following with food articles covered under the Health 
Supplements and Others’ Regulations: 
(a) Approved colours and additives. 
(b) Natural flavours or nature identical flavours or synthetic flavours. Please note that the addition 
of flavour shall be declared on the label of such food article in accordance with the Labelling 
Regulations. 
(c) The Health Supplements and Others’ Regulations provides that the ingredients listed in the 
schedules I, II, III, IV, VI, VII and VIII of the Health Supplements and Others’ Regulations are 
permitted to be used in food articles. 
(d) The Health Supplements and Others’ Regulations permits the use of additives listed in the 
schedules V-A, V-B, V-C, V-D, V-E and V-F of the Health Supplements and Others’ Regulations 
in the food articles. 
No hormones or steroids or psychotropic ingredients shall be added in any food article covered under 
the Health Supplements and Others’ Regulations. 
7.6 The food articles in the form of capsules, tablets or syrups shall be sold in compliance with the Health 
Supplements and Others’ Regulation including Rule 3 of the Health Supplements and Others’ 
Regulation. 
7.7 Nutrient claim: 
 
61 Regulation 3(4) of the Health Supplements and Others’ Regulations.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 148 
 
(a) The individual nutrient content of the health supplement shall be in compliance with the 
Health Supplements and Others’ Regulation including Regulation 3 and 4 of the Health 
Supplements and Others’ Regulation. 
(b) The health claims62 in respect of an article of food shall be commensurate with the adequate 
level of documentation and valid proof made available for review by the Food Authority when 
called for. For health claims where scientific support does not exist, or if a novel ingre dient is 
to be introduced, there shall be a prior approval of the Food Authority.  
(c) The other claims in a food article other than drug claims may be allowed subject to prior 
approval of the Food Authority. 
(d) If the health claims are product led, the food business operator shall notify to the Food 
Authority before putting the same in the market, by submitting relevant documents and copy 
of the label. 
7.8 Labelling Requirements: 
(a) The labelling on food articles shall be in accordance with the Labelling Regulations, and the 
specific labelling requirements provided in the Health Supplements and Others’ Regulation.  
7.9 The compliance pertaining to different food articles covered under the Health Supplements and Others’ 
Regulations has been tabulated below: 
S. 
No. 
Food article category Requirements under the Heath Supplements and Others’ 
Regulations 
1 Health Supplements The compliance pertaining to health supplements shall be in 
accordance with Regulation 6 of the Health Supplements and 
Others’ Regulation.  
2 Nutraceuticals The compliance pertaining to nutraceuticals shall be in 
accordance with Regulation 7 of the Health Supplements and 
Others’ Regulation.  
3 Food for special dietary use, 
other than infants, and those 
products intended to be 
taken under medical advice 
The compliance pertaining to food for special dietary use, other 
than infants, and those products intended to be taken under 
medical advice shall be in accordance with Regulation 8 of the 
Health Supplements and Others’ Regulation. 
 
4 Food for special medical 
purposes 
The compliance pertaining to food for special medical purposes 
shall be in accordance with Regulation 9 of the Health 
Supplements and Others’ Regulation. 
 
62 Health claim means any representation in respect of an article of food that states, suggests or implies that a relationship e xists 
between the constituent of that nutrient or nutritional, health, and specific disease conditions. The health claim consists o f the 
following two essential components, namely, (i) nutrient or nutritional ingredients; and (ii) health related benefits.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 149 
 
S. 
No. 
Food article category Requirements under the Heath Supplements and Others’ 
Regulations 
5 Food with added probiotic 
ingredients 
The compliance pertaining to food with added probiotic 
ingredients shall be in accordance with Regulation 10 of the 
Health Supplements and Others’ Regulation. 
6 Food with added prebiotic 
ingredients 
The compliance pertaining to food with added prebiotic 
ingredients shall be in accordance with Regulation 11 of the 
Health Supplements and Others’ Regulation. 
7 Specialty food containing 
plant or botanical 
ingredients with safe history 
of usage 
The compliance pertaining to specialty food containing plant or 
botanical ingredients with safe history of usage shall be in 
accordance with Regulation 12 of the Health Supplements and 
Others’ Regulation. 
 
8 Novel Food63 The compliance pertaining to novel food shall be in accordance 
with Regulation 13 of the Health Supplements and Others’ 
Regulation. 
 
H. Food Recall Procedure 
8.1 The Food Safety and Standards (Food Recall Procedure) Regulations, 201764 (“Food Recall Regulations”) 
prescribe the conditions and guidelines for the purpose of recalling food by the food business operator 
in view of Section 28 of the Food Safety Act. These Regulations are applicable on food or food articles 
that are determined to be (on prima facie  basis as well) unsafe 65 and / or specified by the relevant 
 
63  Novel food is defined as a food that— 
(i) may not have a history of human consumption; or 
(ii) may have any ingredient used in it which or the source from which it is  derived, may not have a history of human 
consumption; or 
(iii) a food or ingredient obtained by new technology with innovative engineering process, where the process may give rise to 
significant change in the composition or structure or size of the food or food ingredients  which may alter the nutritional 
value, metabolism or level of undesirable substances. 
64  https://fssai.gov.in/upload/uploadfiles/files/Food_Recall_Regulations.pdf. 
65  The term “Unsafe food” has been defined under Section 3(1)(zz) of the Food Safety Act in the following manner: 
“unsafe food” means an article of food whose name, substance or quality is so affected as to render it injurious to health:— 
(i) by the article itself, or its package thereof, which is composed, whether wholly or in part, of poisonous or deleterious substances; 
or 
(ii) by the article consisting, wholly or in part, of any filthy, putrid, rotten, decomposed or diseased animal substance or vegetable 
substance; or 
(iii) by virtue of its unhygienic processing or the presence in that article of any harmful substance; or 
(iv) by the substitution of any inferior or cheaper substance whether wholly or in part; or 
(v) by addition of a substance directly or as an ingredient which it not permitted; or 
(vi) by the abstraction, wholly or in part, of any of its constituents; or 
(vii) by the article being so coloured, flavoured or coated, powdered or polished, as to damage or conceal the article or to make it 
appear better or of greater value than it really is; or 
(viii) by the presence of any colouring matter or preservatives other than that specified in respect thereof; or 
(ix) by the article having been infected or infested with worms, weevils or insects; or 
(x) by virtue of its being prepared, packed or kept under insanitary conditions; or 
(xi) by virtue of its being misbranded or substandard or food containing extraneous matter; or 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 150 
 
authority. 
8.2 The food recall process may be initiated by the food business operator to fulfil his responsibilities under 
Section 28 of the Food Safety Act, on directions issued by the  Chief Executive Officer, F SSAI or the 
Commissioner of Food Safety of the State or Union territory or both on the basis of report or complaints 
from any stakeholder. 
8.3 The initiation of food recall process does not preclude the  Chief Executive Officer, F SSAI or the 
Commissioner of Food Safety of the State or Union territory from taking any further action. 
8.4 The food business operator shall maintain the food distribution records including the names and 
addresses of suppliers and customers, nature of food, date of purchase, date of delivery, lot number, 
batch code, pack size, brand name, date of manufacture, date of expiry and best before date, for a 
period of one year from best before date or the expiry date, as applicable. 
8.5 The food business operator shall submit information as specified under Schedule I to the concerned 
Authority immediately but not post 24 hours from the time it comes to his notice that such food  is to 
be recalled. Further, Commissioner of Food Safety of the State or Union territory shall inform the Chief 
Executive Officer, FSSAI about the initiation of recall procedure within twenty-four hours of receipt of 
such information. 
8.6 The food business operators (including the food retailers) engaged in the manufacture or importation 
or wholesale supply of food must have an up-to-date recall plan. 
8.7 The food retailers and food businesses in the food service sector  shall remove the recalled stock from 
shelves and return it separately from other food to the manufacturer, importer or wholesaler. 
8.8 The food business operator initiating a food recall shall promptly inform food business operator(s) in 
the food chain including consumers about the recall in accordance with Regulation 8 of the Food Recall 
Regulations. Every Food business operator in the food chain who receives a recall communication shall 
immediately carry out the instructions detailed therein by the recall initiating food business operator 
and extend the recall to all concerned stakeholders. 
8.9 The food business operator shall determine whether the recall is progressing effectively and shall 
submit periodic status reports to the Chief Executive Officer, F SSAI or Commissioner of Food Safety of 
the State or Union territory in accordance with Regulation 9 of the Food Recall Regulations. 
8.10 The accurate records of the recovered food including their lot number, batch code, pack size, brand 
name, date of manufacture, date of expiry, best before date, and all related data  shall be maintained. 
The recovered food shall be stored separately from other food and be identified by a label plate 
including prominently that “RECALLED PRODUCT NOT FIT FOR HUMAN CONSUMPTION” . 
8.11 The report shall be submitted to the Chief Executive Officer, FSSAI after completion of the recall process 
 
(xii) by virtue of containing pesticides and other contaminants in excess of quantities specified by regulations. 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 151 
 
in accordance with Regulations 11 and 13 of the Food Recall Regulations.  
I. Advertising and Claims 
9.1 The FBOs and marketers shall comply with the principles prescribed under the Food Safety and 
Standards (Advertising and Claims) Regulations, 2018 66 (“Advertising Regulations ”) while advertising 
and publishing the marketing communications meant for promotion or sale of food articles including 
the labelling claims. 
9.2 As per the Advertising Regulations, the claims shall be inter alia truthful, unambiguous, conspicuous 
and legible accompanied by relevant disclaimers. It shall not encourage or condone excess consumption 
of the food article. Further, the claims as well as the advertisements shall not undermine the 
importance of healthy lifestyle. The claims and advertisements shall not be deceptive in nature.  
9.3 The compliance pertaining to different  claims covered under the Advertising Regulations  has been 
tabulated below: 
S. 
No. 
Food article category Requirements under the Heath Supplements and Others’ 
Regulations 
1 Nutrition claims The compliance pertaining to nutrition claims shall be in 
accordance with Regulation 5 read with Schedule I [ Nutrition 
Claims] and Schedule II [ Synonyms which may be used for 
claims defined in these regulations ] of the Advertising 
Regulation.  
2 Non-addition claims The compliance pertaining to  claims for non-addition of sugar, 
salt and additives shall be in accordance with Regulation 6 of the 
Advertising Regulation.  
3 Health claims The compliance pertaining to  health claims shall be in 
accordance with Regulation 7 read with Schedules I [ Nutrition 
Claims], III and IV [ Health Claims for Fortified Food Articles ] of 
the Advertising Regulation. 
4 Claims related to dietary 
guidelines or healthy diets 
The compliance pertaining to  claims related to dietary 
guidelines and healthy diets shall be in accordance with 
Regulation 8 of the Advertising Regulation. 
5 Conditional claims The compliance pertaining to  conditional claims shall be in 
accordance with Regulation 9 read with Schedule V [ Use of 
certain words or phrases] of the Advertising Regulation. 
6 Prohibited claims No claim as prohibited under Regulation 10 of the Advertising 
Regulation shall be made. 
 
9.4 The FBO or marketer shall seek prior approval from the FSSAI in accordance with Regulations 11 and 12 
 
66  https://fssai.gov.in/upload/uploadfiles/files/Gazette_Notification_Advertising_Claims_27_11_2018.pdf.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 152 
 
of the Advertising Regulations. 
J. Infant Nutrition Requirements 
10.1 The Food Safety and Standards (Foods for Infant Nutrition) Regulations, 2020 67 (“Infant Nutrition 
Regulations”) prescribe standards and requirements with respect to the composition of food articles 
for infant. 
10.2 Regulation 3 read with Schedules I(a) [ Advisory list of mineral salts for use in foods for infant nutrition 
under the provisions of the regulations ], I(b) [ Advisory list of vitamin compounds for use in food for 
infant nutrition under the provisions of the regulations ] and I(c) [Advisory list of amino acids and other 
nutrients for use in foods for infant nutrition under the provisions of the regulations ] of the Infant 
Nutrition Regulations prescribe general requirements such as variation from declared nutrie nt levels, 
presence of algal and fungal oil in foods for infant nutrition, packaging material and manner of 
packaging.  
10.3 Regulation 4 of the Infant Nutrition Regulations stipulates the specific labelling requirements for foods 
for infant nutrition in addition to provisions of Packaging Regulations.  
10.4 The Infant Nutrition Regulations provide for compliance standards for Infant Food articles as tabulated 
below: 
S. 
No. 
Food article category Requirements under the Heath Supplements and Others’ 
Regulations 
1 Food Additives The compliance pertaining to  food additives shall be in 
accordance with Regulation 5 of the Infant Nutrition Regulation.  
2 Infant Formula 
 
The composition of infant formula and the permissible food 
additives therefor, shall be in compliance with Regulation 7 read 
with Schedule I(d) [ Advisory list of food additives for special 
nutrient formulations under the provisions of the regulations ] 
of the Infant Nutrition Regulation. 
3 Milk cereal based 
complementary food 
The compliance pertaining to  composition of milk cereal based 
complementary food and food additives therefor, shall be in 
accordance with Regulation 8 read with Schedule I(d) of the 
Infant Nutrition Regulation. 
4 Processed cereal based 
complementary food 
The compliance pertaining to  composition of processed cereal 
based complementary food and food additives therefor, shall be 
in accordance with Regulation 9 read with Schedule I(d) of the 
Infant Nutrition Regulation. 
5 Follow Up Formula The compliance pertaining to  composition of follow up formula 
and food additives therefor, shall be in accordance with 
Regulation 10 of the Infant Nutrition Regulation. 
 
67  https://fssai.gov.in/upload/notifications/2020/12/5fd719575c4d5Gazette_Notification_Food_Infant_14_12_2020.pdf.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 153 
 
S. 
No. 
Food article category Requirements under the Heath Supplements and Others’ 
Regulations 
6 Food for infants based on 
traditional food ingredients 
The compliance pertaining to  composition of food for infants 
based on traditional food ingredients shall be in accordance with 
Regulation 11 of the Infant Nutrition Regulation. 
7 Food for special medical 
purpose intended for infants 
The compliance pertaining to  composition of food for special 
medical purpose intended for infants and its advertisements and 
food additives shall be in accordance with Regulation 12 read 
with Schedule I(d) of the Infant Nutrition Regulation. 
8 Preterm infant milk 
substitute 
The requirements for preterm infant milk substitute ha ve been 
prescribed under Regulation 13 of the Infant Nutrition 
Regulations. 
9 Lactose free milk substitutes The requirements for l actose free milk substitutes  have been 
prescribed under Regulation 14 of the Infant Nutrition 
Regulations. 
10 Hypoallergenic infant milk 
substitutes 
The requirements for h ypoallergenic infant milk substitutes  
have been prescribed under Regulation 15 of the Infant 
Nutrition Regulations. 
11 Food for infants with inborn 
errors of metabolism (IEM) 
The compliance (labelling, composition and description)  
pertaining to  food for infants with IEM shall be in accordance 
with Regulation 16 of the Infant Nutrition Regulation. 
 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 154 
 
ANNEXURE – B 
LEGAL METROLOGY ACT, 2009 (“LM ACT”) 
A. Packaging and Labelling Requirements 
1.1 The package or the label affixed to a product in accordance with the PC Rules including Rule 6 of the PC 
Rules, which shall include the name and address of the manufacturer or where the manufacturer is not 
the packer, the name and address of the manufacturer and packer. 
1.2 In the case of packages containing food articles: 
(a) In the case of genetically modified food, the package shall bear the words “GM” on top of its 
principal display panel (“PDP”). 
(b) Where the commodity may become unfit for human consumption after some time, the ‘best 
before’ or ‘use by date, month, and year’ of the commodity shall be mentioned on the package 
thereof. 
1.3 In the case of electronic products: 
(a) the package shall bear the name of the manufacturer or packer or importer ; 
(b) the package shall inform the consumer about the details (including the address of the 
manufacturer, the common or generic name of the commodity, name and number of the 
commodity in case the package consists of more than one commodity, and other information  
which has not been declared on the package) made available through the QR code provided 
on the package; 
(c) the month and year of manufacture shall be specified on the retail package visibly and legibly 
in the case of electronic products, spare parts, and accessories; 
(d) the package shall inform the consumers to scan the QR code for the size and dimension of the 
commodity if such information is declared through the QR Code and not declared on the 
package itself;68 and 
(e) the package shall declare the telephone number and e-mail address on the package itself, and 
such declaration shall also inform the consumers to scan the QR code for other related 
information if such information is declared through the QR Code and not decl ared on the 
package itself. 
Note: If the brand name and address of the brand owner appear on the label as a marketer, then the 
brand owner shall be held responsible for any violation of these rules, and action as may be required 
shall be initiated against the deemed manufacturer and in the event of more than one name and address 
 
68 Proviso to Rule 6(1)(f) of the PC Rules.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 155 
 
appearing in the label, prosecution shall be launched against the manufacturer indicated on the label, 
in the first place and not against all of them. 
1.4 The common / generic names of the commodity and in case of the package with more than one product, 
the name and number or quantity of each product shall be mentioned on the package thereof.  
1.5 The net quantity (weight or measure) and / or size (if relevant) of the commodity contained in the 
package and its maximum retail price shall be specified thereon. 
1.6 The month and year of manufacture of the commodity shall be specified on its package. The packages 
containing seeds have been exempted from such requirements. In this regard, the packages containing 
food articles and cosmetics products shall be subjected t o the provisions of the Food Safety Act and 
Drugs and Cosmetics Rules 1945 respectively. 
1.7 The package shall bear the contact details for consumer complaints.  
1.8 The declarations under PC Rules shall not be made on the package by affixing individual stickers on it.  
1.9 The package of soap, shampoos, toothpastes, and other cosmetics and toiletries shall bear at the top 
of its PDP a red or as the case may be, brown dot for products of non-vegetarian origin and a green dot 
for products of vegetarian origin. 
1.10 The unit sale price in rupees shall be declared on every pre -packaged commodity in the manner 
provided under Rule 6 of the PC Rules. 
1.11 An e-commerce entity shall ensure to display of the mandatory declarations as required under PC Rules, 
except the date of manufacturing or packing, on the digital / electronic network used by such entity.  
1.12 The following declarations are required to be mandatorily mentioned on a wholesale package:  
(a) The name and address of the manufacturer or importer or where the manufacturer or 
importer is not the packer, of the packer; 
(b) The identity of the commodity contained in the package; and 
(c) The total number of retail packages contained in such wholesale package or the net quantity 
in terms of standard units of weights, measures, or number of the commodity contained in the 
wholesale package. 
1.13 The PC Rules are not applicable on the loose commodities ordered through e -commerce channels 
where consumers are aware of the ordered commodity, its type, and quantity. However, such 
commodity shall bear the following: 
(a) name and address of the manufacturer or marketer or brand owner or importer or seller with 
the country of origin or manufacture in the case of imported products;  
(b) Consumer care email id and phone number;  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 156 
 
(c) Retail sale price of the package inclusive of all taxes in the Indian; 
(d) Currency; and 
(e) Net quantity, in terms of the standard unit of weight or measure, or where the commodity is 
sold by number, the number of the commodity. 
(f) All cattle feed products shall be packaged and labelled according to the Food Safety and 
Standards (Packaging) Regulations, 2018. Labels must include product name, net weight, 
manufacturer details, ingredients, nutritional information, and expiry date  and such other 
information as prescribed under applicable laws. 
B. Other compliances under PC Rules: 
Sr. No. Declarations Particulars/ Pre-conditions 
Declarations 
1 General Guidelines Declaration on the package should be as per Rule 4 read with Rule 9 of 
the PC Rules.   
Declarations required under PC Rules shall be made on the package or 
the label affixed thereon. 
When one or more packages intended for retail sale are grouped 
together for being sold as a retail package on a promotional offer, every 
package of the group shall have the declarations prescribed under Rule 
6 of the PC Rules. 
2 Declaration on 
container-type 
commodities  
The declaration with regard to the dimensions of container type 
commodities is provided in the PC Rules including Rule 17 of the PC 
Rules.  
Manner of Declaration 
3 PDP The manner of the declaration on the PDP shall be as per the PC Rules 
including Rule 7 of the PC Rules.  
4 Place of Information on 
the package 
Every declaration required to be made under these rules shall appear on 
the PDP and shall be as per Rule 8 of the PC Rules.  
Maximum Permissible Errors on Net Quantities declared by weight or volume  
5 Maximum permissible 
error 
The maximum permissible error in relation to the quantity contained in 
an individual package, means an error in deficiency which, subject to the 
provision of these rules, does not exceed the limits specified in the First 
Schedule read with Rule 2(e) of the PC Rules.  
 
Note: Nothing under PC Rules precludes a manufacturer, packer, or importer to make declarations on the 
package which are mandated under other laws.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 157 
 
ANNEXURE – C  
THE BUREAU OF INDIAN STANDARDS ACT, 1986 (“BIS ACT”) 
A. Licensing or certification requirements 
1.1 A person may apply for the grant of license or certificate of conformity, as the case may be if the goods, 
article, process, system, or service conforms to an Indian Standard. Where such goods, articles, 
processes, systems, or services conform to a standar d, on payment of requisite fee and/or fine, the 
Bureau issues an order to grant: 
(a) certificate of conformity in a manner as may be specified by the Bureau of Indian Standards 
(Conformity Assessment) Regulations, 2018 (“BIS Regulations”); or 
(b) a license to use or apply a Standard Mark in a manner as may be specified by BIS Regulations.  
1.2 The license holder shall remain responsible for conformance with the compliance requirements 
pertaining to Standard Mark. However, the seller or the distributor shall ensure that the goods, articles, 
processes, systems, or services carrying the Standard Ma rk are purchased from a certified body or 
license holder. Similarly, the seller shall ensure that the goods, articles, processes, systems, or services 
to be sold or offered for sale, conform with the labelling and marking requirements stipulated under 
the BIS Act. 
1.3 In view of the above and the BIS Regulations, the Government has notified various conformity 
assessment schemed which inter alia, include ‘ISI Registration Scheme’, ‘Compulsory Registration 
Scheme’, ‘Compulsory Certification Scheme’ in terms of which compl iance is mandated with the 
relevant standard(s). 
1.4 In pursuance of the above, the Bureau has notified the following schemes with respect to the import 
and supply of certain goods: 
(a) Compulsory Registration Order for electronics and information technology goods (“CRO”)  - 
In terms of the CRO, the importer of electronics and information technology products enlisted 
thereunder is mandated to obtain a BIS registration for the import of such products. In this 
regard, the CROs have been provided on the website.69 
(b) Quality Control Order (“QCO”) – In terms of the QCOs read with Section 17 of the BIS Act, the 
notified goods are required to be manufactured, imported, distributed, sold, hired, leased, 
stored or exhibited for sale in accordance with the respective IS specified in such QCO and affix 
the Standard Mark on such goods. The QCOs issued by the Central Government have been 
provided on the website of the Bureau.70 
 
69 Scheme - II (Registration Scheme) - Bureau of Indian Standards  
70 Scheme - I (ISI Mark Scheme) - Bureau of Indian Standards; Scheme – IV ( Grant Of Certificate Of Conformity ) - Bureau of Indian 
Standards; Scheme – X (Certification) - Bureau of Indian Standards.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 158 
 
(c) Foreign Manufacturer Certification Scheme (“FMCS”) : Under the FMCS, the foreign 
manufacturer may apply for a license under the BIS Laws to use the Standard Mark on the 
products sought to be exported to India. It is pertinent to note that FMCS is voluntary in nature, 
except for the products which require compulsory certification in terms of the QCOs issued by 
the Central Government from time to time. An importer is not required / eligible to apply for 
a license under FMCS. As such, the application can be mad e by the foreign manufacturer 
only.71 
B. Labelling requirements 
2.1 The BIS Act also empowers the Bureau to specify the marking and labelling requirement that shall 
necessarily be affixed. As per Section 18 of the BIS Act, it is the responsibility of the seller before the 
goods or article is sold or offered to be sold or exhibited or offered for sale to ensure the following: 
(a) goods, articles, processes, systems or services carrying the Standard Mark bear the requisite 
labels and marking details, as specified by the Bureau from time to time; and  
(b) the marking and labelling requirements on the product or covering is displayed in a manner 
that has been specified by the Bureau. 
 
71 The FAQs are available at https://www.bis.gov.in/index.php/fmcs/fmcs-faqs/.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 159 
 
ANNEXURE – D 
IMPORT AND EXPORT LAWS 
1.1 In terms of the FTP, the Central Government has notified the import and export policy (Schedule 1 and 
2 to ITC(HS) respectively). As per the provisions of the FTP, Schedule 1 of the import policy provides a 
classification for various kinds of goods, organi zed into chapters containing similar types of goods and 
sub-classifications of the same (based on the Harmonized System of Nomenclature (“ HSN”)). The 
import and export of goods have been divided into three (3) categories under the FTP read with 
Schedule I and II to the ITC(HS), namely: 
(a) Prohibited: If import of a product is specified as Prohibited, then import thereof is not allowed 
in India; 
(b) Restricted: The goods under this category are allowed to be imported, under the specific 
license(s) or permission(s) granted by the Director General Foreign Trade (“DGFT”) or 
concerned ministries of the Indian Government; 
(c) State Trading Enterprises (“STE”): Certain goods are allowed to be imported exclusively by an 
STE (i.e., a government undertaking), and other entities are permitted to import such goods 
only through STEs; 
(d) Free: Goods falling under this category are allowed to be imported into India without any 
specific license, but subject to general procedural requirements applicable to the import of 
goods; and 
(e) Special Chemicals, Organisms, Materials, Equipment and Technologies (“SCOMET” ): The 
goods constituting SCOMET items (falling under Appendix 3 to Schedule – 2 of the ITC(HS) 
Classification of Export and Import Items) are allowed to be exported only under the specific 
authorisation issued by the DGFT or other relevant authorities. 
Note: The import of goods is assumed to be free unless they are specified as prohibited, restricted, or 
allowed to be traded exclusively through STE. 
In addition to the above, the import of goods is subjected to the “General Notes Regarding Import Policy” under 
the FTP, as per which, all the domestic laws apply to the imported goods, including specifically, consumer 
protection laws such as food safety standards, quality standards by the Bureau of Indian Standards, labelling and 
packaging requirements under Legal Metrology laws, etc. 
A. Registration / License 
In terms of the FTP, every importer or exporter of goods, unless specifically exempted, is required to 
obtain the IEC from the DGFT. 
 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 160 
 
ANNEXURE – E 
E-COMMERCE RULES 
1.1 All e-commerce entities shall comply with the provisions of the E -Commerce Rules which includes the 
following compliances: 
(a) Appoint a nodal officer or an alternate senior designated functionary who is resident in India;  
(b) provide the following information in a clear and accessible manner on its platform  - (i) legal 
name of the e -commerce entity; (ii) principal geographic address of its headquarters and all 
branches; (iii) name and details of its website; and (iv) contact details like e -mail address, fax, 
landline and mobile numbers of customer care as well as of grievance officer; 
(c) establish an adequate grievance redressal mechanism and shall appoint a grievance officer for 
consumer grievance redressal, and shall display the name, contact details, and designation of 
such officer on its platform. The grievance officer should acknowled ge the receipt of any 
consumer complaint within 48 hours and redresses the complaint within 1 month;  
(d) if an e-commerce entity offers imported goods or services for sale, it shall mention the name 
and details of any importer from whom it has purchased such goods or services, or who may 
be a seller on its platform; 
(e) not impose cancellation charges on consumers cancelling after confirming purchase unless 
similar charges are also borne by the e- commerce entity; 
(f) record the manual consent of a consumer for the purchase of any good or service; and 
(g) effect all payments towards accepted refund requests of the consumers as prescribed .  
1.2 All marketplace e-commerce entities shall comply with the provisions of the E -Commerce Rules which 
includes the following compliances: 
(a) require sellers through an undertaking to ensure that descriptions, images, and other content 
pertaining to goods or services on their platform is accurate and corresponds directly with the 
appearance, nature, quality, purpose and other general features of such good or service; 
(b) include in its terms and conditions generally governing its relationship with sellers on its 
platform, a description of any differentiated treatment which it gives or might give between 
goods or services or sellers of the same category;  
(c) take reasonable efforts to maintain a record of relevant information allowing for the 
identification of all sellers who have repeatedly offered goods or services that have previously 
been removed or access to which has previously been disabled under the Copyright Act, 1957 
(14 of 1957), the Trade Marks Act, 1999 (47 of 1999) or the Information Technology Act, 2000 
(21 of 2000);  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 161 
 
(d) display of all contractual information required to be disclosed by law, mandatory notices, 
expiry date, details of goods / services along with its sellers and country of origin, name and 
details of importer, information related to exchange, returns and ref und, details related to 
delivery, relevant warranties / guarantees, mode of payment, grievance redressal mechanism, 
procedure to cancel payments, any fees or charges, contact information of payment service 
provider and all information provided to it by sellers; 
(e) display the details about the sellers offering goods and services, including the name of their 
business, whether registered or not, their geographic address, customer care number, any 
rating; 
(f) display a ticket number for each complaint lodged through which the consumer can track the 
status of the complaint; and 
(g) display an explanation of the main parameters which, individually or collectively, are most 
significant in determining the ranking of goods or sellers on its platform and the relative 
importance of those main parameters through an easily and publicly avail able description 
drafted in plain language. 
1.3 All inventory e -commerce entities shall comply with the provisions of the E -Commerce Rules which 
includes the following compliances: 
(a) refrain from falsely representing itself as a consumer;  
(b) refrain from refusing to take back goods, or withdraw or discontinue services purchased or 
agreed to be purchased, or refuse to refund consideration, if paid, if such goods or services are 
defective, deficient spurious, or if such goods or services are del ivered late from the stated 
delivery schedule;  
(c) display of all contractual information required to be disclosed by law, mandatory notices, 
expiry date, details of goods / services along with its sellers and country of origin, name and 
details of importer, information related to exchange, returns and ref und, details related to 
delivery, relevant warranties / guarantees, mode of payment, grievance redressal mechanism, 
procedure to cancel payments, any fees or charges, and contact information of payment 
service provider; 
(d) display total price in single figure of any good or service along with the breakup price, showing 
all the compulsory and voluntary charges, and applicable tax; and  
(e) a ticket number for each complaint lodged, through which the consumer can track the status 
of their complaint. 
1.4 All sellers on a marketplace e -commerce entity shall comply with the provisions of the E -Commerce 
Rules which includes the following compliances: 
(a) No such seller shall falsely represent itself as a consumer and post reviews;    
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 162 
 
(b) No seller offering goods or services shall refuse to take back goods, or withdraw or discontinue 
services purchased or agreed to be purchased, or refuse to refund consideration, if paid, if 
such goods or services are defective, deficient or spurious, or if  such goods or services are 
delivered late from the stated delivery schedule; 
(c) have a prior written contract with the respective e -commerce entity in order to undertake or 
solicit such sale or offer. Further, all the information pertaining to the seller (like legal name, 
address, GSTIN, PAN details, website etc) shall be provided by it to the e-commerce entity; 
(d) appoint a grievance officer for consumer grievance redressal and ensure that the grievance 
officer acknowledges the receipt of any consumer complaint within forty -eight hours and 
redresses the complaint within one month from the date of receipt of the comp laint;  
(e) display all contractual information required to be disclosed by law, mandatory notices, expiry 
date, details of goods / services along with its sellers and country of origin, name and details 
of importer, information related to exchange, returns and refund , details related to delivery 
and relevant warranties / guarantees;  
(f) display total price in single figure of any good or service, along with the breakup price, showing 
all the compulsory and voluntary charges and applicable tax; and  
(g) the name and contact numbers, and designation of the grievance officer.  
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 163 
 
ANNEXURE – F 
GUIDELINES ON MISLEADING ADVERTISEMENTS 
1.1 An advertiser advertising goods or services offered by it to consumers must comply with the conditions 
and restrictions for bait advertising as prescribed under the Guidelines on Misleading Advertisement, 
which includes:  
(a) Advertisements must not encourage consumers to purchase anything goods, products, or 
services without a reasonable expectation of being able to fulfil those offers at the advertised 
price; 
(b) The advertisement must clearly outline the advertiser's reasons for believing they may not be 
able to supply the goods, products, or services within a reasonable time or in sufficient 
quantities; 
(c) The advertisement must indicate that the stock is limited; 
(d) If the advertisement's goal is to assess potential demand, this purpose must be explicitly 
stated; and 
(e) The advertisement should not mislead consumers by omitting any restrictions, such as 
geographic limitations or age restrictions on availability.  
1.2 An advertiser advertising goods or services offered by it to consumers must comply with the conditions 
and restrictions for free -claims advertising as prescribed under the Guidelines on Misleading 
Advertisement, which includes:  
(a) Advertisements must not describe anything as “free” or “without charge” unless the consumer 
is only required to pay the unavoidable costs associated with responding to the advertisement 
or collecting and paying for the delivery of the item; 
(b) The advertisement must clearly outline the commitment required from the consumer to take 
advantage of a free offer; 
(c) Goods, products, or services should not be described as free if the consumer is required to pay 
for packing, packaging, handling, or administration, or if the cost of response;  
(d) The offer should not be described as free if the quality or quantity of the goods, products, or 
services that must be purchased is reduced to take advantage of the offer or it is already 
included in the package price; and 
(e) The term "free trial" must not be used to describe a “satisfaction or your money back” offer 
or any offer that requires a non-refundable purchase. 
1.3 An advertiser advertising goods or services offered by it to consumers must comply with the conditions 
and restrictions for free -claims advertising as prescribed under the Guidelines on Misleading  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 164 
 
Advertisement, which includes:  
(a) Advertisements targeted at children should not encourage dangerous behaviour, take 
advantage of their inexperience or gullibility, or exaggerate product features to create 
unrealistic expectations; 
(b) Advertisements must avoid promoting practices harmful to children's physical or mental 
health, or implying that children will be ridiculed or excluded if they do not buy a product;  
(c) Advertisements should not use misleading price qualifiers, feature children in ads for 
prohibited products (like tobacco or alcohol), or involve celebrities endorsing products with 
health warnings or unsuitable for children; and 
(d) Advertisements should not encourage negative body image or suggest that processed goods 
are superior to natural foods.  
1.4 The Guidelines on Misleading Advertisements also provide for duties of manufacturer, service provider, 
advertiser and advertising agency, which include:  
(a) All descriptions, claims, and comparisons made in an advertisement that relate to objectively 
verifiable facts must be substantiated, and such substantiation should be provided if requested 
by the CCPA;  
(b) If claims are based on independent research or assessments, the source and date of such 
research must be clearly indicated; 
(c) The advertisement must not reference any person, firm, or institution in a way that unfairly 
benefits the advertised product or causes harm to the reputation of the referenced entity, 
unless explicit permission has been obtained. Moreover, advertisements s hould not contain 
statements or visual elements that, whether directly or indirectly, mislead consumers about 
the product, the advertiser, or any other product or advertiser. Advertisements must be 
framed in a way that does not exploit consumers' trust or lack of experience. For example, 
advertisements should avoid vague claims such as "up to five years guarantee" or "prices from 
as low as Rs. X," instead clearly stating the actual guarantee period or fixed price ;  
(d) If different guarantee periods apply to different parts or components of the product, these 
should be disclosed, specifying both the minimum and maximum guarantee periods ; and  
(e) Advertisements promoting lotteries, prize competitions, or gifts must clearly outline all 
relevant terms and conditions, ensuring consumers have a clear and fair understanding of their 
chances and expectations.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 165 
 
ANNEXURE – G 
GREENWASHING GUIDELINES  
1.1 An entity advertising goods or services offered by it to consumers must comply with the Greenwashing 
Guidelines which include the below requirements: 
(a) Generic terms such as ‘clean’, ‘green’, ‘eco-friendly’, ‘eco-consciousness’, ‘good for the planet’, 
‘minimal impact’, ‘cruelty -free’, ‘carbon – neutral’, ‘natural’, ‘organic’, ‘pure’, sustainable, 
regenerative or other similar claims shall not be used with out adequate, accurate and 
accessible qualifiers and substantiation and adequate disclosures ;  
(b) While using technical terms like Environmental Impact Assessment (EIA), Greenhouse Gas 
Emissions, Ecological Footprint, one shall use consumer -friendly language and explain the 
meaning or implications of technical terms; 
(c) All environmental claims shall be supported by accessible verifiable evidence based on 
independent studies or third-party certifications; 
(d) disclose all material information in the advertisement or communications, a QR Code or URL 
(or any such technology or digital medium) can be used to do the same;  
(e) While making an environmental claim should specify whether it refers to the goods, 
manufacturing process, packaging, manner of use of the goods or its disposal; or service or the 
process of rendering the service; 
(f) Specific environmental claims such as Compostable, Degradeable, free -of, Sustainability 
claims, Non -Toxic, 100% Natural, Recyclable, Refillable, Renewable, plastic -free, plastic -
positive, climate-positive, net-zero and similar claims must be supported by d isclosure about 
credible certification, reliable scientific evidence, internal verifiable evidence, certificates from 
statutory or independent third-party verification; and 
(g) Disclosures made in relation to the environmental claims shall: (i) be easily accessible to the 
consumer; and (ii) not contradict the relevant environmental claim.  
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 166 
 
ANNEXURE – H 
DATA PROTECTION LAWS 
A summary of the key obligations under the SPDI Rules of an entity, inter alia, for collecting, processing and 
transferring of SPDI, has been set out below: 
(i) Reasonable Security Practices and Procedures : Section 43 -A of the IT Act mandates following 
"reasonable security practices and procedures" in relation to SPDI. An entity is considered compliant if 
it implements security practices, standards, and a documented information security program with 
managerial, technical, operational, and physical controls proportionate to the information assets it 
seeks to protect. The IS/ISO/IEC 27001 standard relating to ‘Information Technology -Security 
Techniques-Information Security Management System–Requirements’ is one of the specified standards 
under the SPDI Rules. Additionally, an audit must be conducted at least annually or after significant 
upgrades to processes and resources. 
(ii) Privacy policy: Under the SPDI Rules, an entity that collects, receives, possesses, stores, deals or handle 
SPDI of an information provider, is required to publish a privacy policy on its website that addresses its 
handling of SPDI. Such privacy policy must contain clear and easily accessible statements of the entity’s 
practices and policies. Further, the entity is also required to state in its privacy policy, the type of SPDI 
being collected, purpose of collection and usage of such information, information  in relation to 
disclosure of SPDI and the reasonable security practices and procedures it has taken under the SPDI 
Rules. 
(iii) Consent and collection : Under the SPDI Rules, for collection of SPDI, an entity is required to obtain 
consent in writing through letter or any mode of electronic communication from the provider of SPDI. 
Further, the entity is not permitted to collect SPDI unless the information is collected for a lawful 
purpose connected with a function or activity of the entity; and the co llection of SPDI is considered 
necessary for that purpose. The entity is also mandated to take steps, as are reasonable in the 
circumstances to ensure that the information provider has knowledge about the collection of 
information, the purpose of collection of such information, the intended recipients and the name and 
address of the agency collecting and retaining the information.  
(iv) Rights of the information provider : The entity is required to allow the information provider the right 
to review or amend any SPDI and ensure that the same is corrected or amended as feasible if they are 
found to be inaccurate or deficient. The entity is also required to give the informati on provider  an 
option to retract consent at any point of time, in writing, in relation to the information that has been 
so provided.  
(v) Purpose limitation and retention: Under the SPDI Rules, an entity is not permitted to use SPDI for any 
reasons other than those for which it has been collected and is not allowed to retain SPDI for a period 
longer than is required for the purposes for which the SPDI may lawfully be used or is otherwise 
required under any other law for the time being in force. 
(vi) Disclosure of SPDI: The SPDI Rules specify that apart from disclosure of SPDI sought by governmental 
agencies or where it is required for compliance with a legal obligation, the entity is required to obtain  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 167 
 
consent from the information provider, prior to disclosure of such information to a third party, unless 
such disclosure has been agreed to in an agreement between the parties.  
(vii) Transfer of SPDI : As per the SPDI Rules, an  entity may transfer SPDI to any other entity, in India or 
overseas, that ensures the same level of data protection that is adhered to by the transferring entity, 
as provided for under the SPDI Rules. The transfer may be allowed only if: (i) it is necessar y for the 
performance of the lawful contract between the transferring entity and the information provider; or 
(ii) where such information provider has consented to the data transfer.  
(viii) Grievance Officer : Under the SPDI Rules, the entity is required to designate a grievance officer for 
redressal of grievances in relation to SPDI and publish the name and contact details of such officer on 
its website. 
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 168 
 
ANNEXURE – I 
IT RULES  
1.1 A summary of the key obligations under the IT Rules which the NP, as an intermediary, will be required 
to implement, has been set out below: 
(i) Publication of key documents: Publish rules, privacy policy, and user agreement prominently 
on the website or app in English or any language specified in the Eighth Schedule of the 
Constitution. 
(ii) User Information: Inform users about its rules, privacy policy and user agreement and ensure 
users do not host, display, upload, modify, publish, transmit, store, update, or share 
information that falls under the objectionable information as provided under the IT Rules. 
(iii) Notice to users: Inform users at least once a year of any changes to rules, privacy policies, and 
user agreements in English or a language from the Eighth Schedule of the Constitution. They 
must also notify users annually that non -compliance with these terms may result in 
termination of access or usage rights of the users or removal of non-compliant information. 
(iv) Disabling Information : Not store, host, or publish unlawful information that violates laws 
related to India's sovereignty, security, foreign relations, public order, decency, morality, 
contempt of court, defamation, or incitement to an offense. If such information is hosted, the 
intermediary must remove or disable access within 36 hours of a court order or notification 
from a government agency. 
(v) Preservation of Records : Maintain records of content which has been removed or access to 
which has been disabled, for a period of 180 (one hundred and eighty) days, or such longer 
period as may be required by a court or duly authorised government agencies. User -
information collected for registration is required to be preserved for 180 (one hundred and 
eighty) days after cancellation/ withdrawal of such registration. 
(vi) Compliance with SPDI Rules : Take all reasonable measures  to secure its computer resource 
and information contained therein following the reasonable security practices and procedures 
as prescribed in the SPDI Rules. 
(vii) Disclosure and Assistance for Compliance with Lawful Order : Provide (i ) information for 
verification of identity; or (ii) assistance to any lawfully authorised government agency for 
prevention, detection, investigation and prosecution of offences or for cyber security 
incidents, no later than 72 hours of receiving a written order. 
(viii) Modification of technical configuration of a Computer Resource: Not knowingly deploy, 
install or modify the technical configuration of a computer resource in a way that alters its 
normal functioning to circumvent any law, but may use technology to secure the resource and 
its information.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 169 
 
(ix) Reporting of Cyber Security Incidents: Report all cyber security incidents and share cyber 
security incident related information with the Indian Computer Emergency Response Team 
(“CERT-In”). 
(x) Grievance Officer: The grievance officer is required to acknowledge a complaint within 24 
(twenty four) hours and resolve all complaints within 15 (fifteen) days.  
(xi) Grievance Redressal: Complaints for removal of "objectionable information" (as mentioned in 
the IT Rules), must be resolved within 72 hours. This accelerated timeline applies to all content 
in objectionable information, except for information that belongs to another person, infringes 
intellectual property rights, or violates any law. 
(xii) Disabling of Explicit Content: An intermediary must remove or disable access to explicit 
content (e.g., nudity, sexual conduct, impersonation, or morphed images) within 24 hours of 
receiving a complaint from the aggrieved individual or their representative. Additionally, the 
social media intermediary must provide a mechanism for users to lodge such complaints. 
1.2 Additionally, the following are the key obligations applicable to only an online gaming intermediary  
(i.e., an NP who enable the users to access any permissible online real money game):  
(i) Verification: Display a demonstrable and visible mark of verification of permissible online 
game by an online gaming self-regulatory body. 
(ii) User Verification: Identify users and verification of their identity before accepting any deposit 
in cash or kind from them for a permissible online real money game in line with procedure laid 
down for a Reserve Bank of India -regulated entity for identification and verificat ion of a 
customer at the commencement of an account-based relationship. 
(iii) Prohibited activities: Not provide credit or enable financing offered by third party for its users 
for the purpose of playing online games. 
(iv) Disclosures: Inform its users of the following as part of its rules and regulations, privacy policy, 
terms of service and user agreements: 
(a) the policy related to withdrawal or refund of the deposit made with the expectation 
of earning winnings, the manner of determination and distribution of such winnings 
and the fees and other charges payable by the user;  
(b)  the know-your-customer procedure followed by it for verifying the identity of the 
users of such online game; 
(c)  the measures taken for protection of deposit made by a user for such online game; 
and  
(d) the framework for verification of the online game.  
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 170 
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 171 
 
ANNEXURE – J 
COMPLIANCES UNDER DRUGS, COSMETICS AND MEDICAL DEVICES LAWS  
A. License requirement72 
Depending on the nature of Drugs and the activity undertaken by the NP, the following registrations 
are required under the Drugs Rules: 
1.1 To sell Drugs on a retail basis, following licenses are required depending on the nature of the Drug : 
(i) Form 20: Required for the sale, stocking, exhibition, or distribution of drugs other than those 
specified in Schedule C, C1, and X. 
(ii) Form 21: Required for the sale, stocking, exhibition, or distribution of drugs specified in 
Schedule C and C1. 
(iii) Form 20F: Required for the sale, stocking, exhibition, or distribution of drugs specified in 
Schedule X. 
1.2 To sell Drugs on a wholesale basis, following licenses are required depending on the nature of the Drug: 
(i) Form 20B: Required for the sale, stocking, exhibition, or distribution of drugs other than those 
specified in Schedule C, C1, and X. 
(ii) Form 21B: Required for the sale, stocking, exhibition, or distribution of drugs specified in 
Schedule C and C1. 
(iii) Form 20G: Required for the sale, stocking, exhibition, or distribution of drugs specified in 
Schedule X. 
1.3 To import Drugs, following licenses are required depending on the nature of the Drug : 
(i) Form 10: Required for the sale, stocking, exhibition, or distribution of drugs excluding those 
specified in Schedule X.  
(ii) Form 10A: Required for the sale, stocking, exhibition, or distribution of drugs specified in 
Schedule X.  
1.4 To sell restricted drugs, following licenses are required depending on the nature of the Drug : 
(i) Form 20A: Required for the sale, stocking, exhibition, or distribution of drugs other than those 
specified in Schedule C, C1, and X – valid only for drugs set out in the license. 
 
72 Note: Please note that we have covered licenses which are required by the NPs for the sale of products/ services on the ONDC network 
and we have not covered the licenses required at the back -end by such NP (i.e., manufacturing, loan licensing, labelling, packing, testing  
etc.)  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 172 
 
(ii) Form 21A: Required for the sale, stocking, exhibition, or distribution of drugs other than those 
specified in Schedule C1 only – valid only for drugs set out in the license. 
1.5 To sell homeopathic medicines, following licenses are required depending on the nature of the Drug: 
(i) Form 20C: Required for the retail sale, stocking, exhibition, or distribution of homeopathic 
drugs. 
(ii) Form 20D: Required for the wholesale sale, stocking, exhibition, or distribution of 
homeopathic drugs. 
1.6 The following licenses are prescribed under the Medical Devices Rules depending on the activity 
undertaken by the NP: 
(i) Import License in Form MD-15: Required for the import of medical devices. 
(ii) License for manufacture for purpose of sale / distribution in form MD -5 / MD-6: Required for 
distribution of Class A or Class B medical device. 
(iii) License for manufacture for purpose of sale / distribution in form MD-9 / MD-10: Required for 
distribution of Class C or Class D medical device. 
(iv) Seller License in Form MD -42: Required for selling/distribution of medical products including 
in vitro diagnostic medical device. 
1.7 The following licenses are required to import cosmetics in India depending on the category of the 
cosmetics: 
(i) Import License in Form COS-2 from the Central Licensing Authority: Required for the import of 
cosmetics.73 
(ii) Import License in Form COS -4A from the Central Licensing Authority: Required for cosmetic 
manufactured in a foreign site and already registered under the Cosmetics Rules for import 
and sale in India.  
B. Packaging and labelling requirement 
2.1 Depending on the nature and quantity of the Drug, the relevant NP is required to adhere to the 
packaging and labelling requirements as prescribed under the Drugs Rules  which include the following 
labelling requirements: 
(i) Schedule G Drugs must have the following words in legible black font size in a completely red 
rectangular box:  
 
73 Note: A single application may be made and a single registration certificate in Form COS- 2 may be issued in respect of import of one or 
more cosmetics manufactured by the same manufacturer.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 173 
 
SCHEDULE G PRESCRIPTION DRUG – CAUTION 
It is dangerous to take this preparation except under medical supervision.  
(ii) Schedule H Drugs  must have the symbol Rx at the left top corner and the following words in 
legible black font size in a completely red rectangular box: 
SCHEDULE H PRESCRIPTION DRUG – CAUTION 
Not to be sold by retail without the prescription of a Registered Medical Practitioner.  
(iii) Barcoding for Schedule H2 Drugs: 
(a) Primary Packaging or Secondary Packaging  must have a bar code or quick response 
(QR) code that stores specific information to facilitate authentication.  
(b) Following information must be Included on label: 
I. Proper and generic name of the drug 
II. Brand name 
III. Name and address of manufacturer 
IV. Batch number 
V. Date of manufacturing 
VI. Date of expiry 
VII. Manufacturing licence number 
2.2 Depending on the nature of the Medical Device, the relevant NP is required to adhere to the packaging 
and labelling requirements as prescribed under the Medical Devices Rules which include the following 
labelling requirements: 
(i) The following details are required to be disclosed on the label:  
(a) Name of the medical device. 
(b) Details necessary for the user to identify the device and its use. 
(c) Name and address of the manufacturer. 
(d) Batch or lot number. 
(e) Date of manufacture. 
(f) Expiry date.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 174 
 
(g) Any special storage or handling conditions. 
(h) Warnings or precautions to be taken during storage, handling, and use.  
(ii) Additionally, the NPs must also adhere to the following labelling requirements: 
(a) Devices intended for single use must be labelled appropriately. 
(b) Instructions for use or prescriber’s manual must be provided. 
(c) Imported devices must include labelling details via stickering if not already printed.  
(d) Free sample devices intended for medical professionals must bear the words 
“Physician’s Sample—Not to be sold”. 
(iii) Small-Sized Medical Devices: For devices which cannot accommodate all information must at 
least include the following: 
(a) Name of the medical device. 
(b) Name and address of the manufacturer. 
(c) Batch or lot number. 
(d) Date of manufacture. 
(e) Expiry date. 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 175 
 
ANNEXURE – K 
COMPLIANCES APPLICABLE IN RELATION TO LENDING  
A. Compliances under the Guidelines on Digital Lending dated 2 September 2022  
1.1 The Digital Lending Guidelines prescribe the compliance requirements on REs (i.e. all banks and NBFCs) 
in relation to their DLAs and the DLAs of their LSP which include the following: 
(a) An RE / lender is required to ensure that their DLAs and DLAs of their LSPs also display detailed 
information about the loan products which may include particulars such as eligibility criteria, 
features, documents required, steps on how to apply for the lo an products and indicative list 
of fees and charges, interest and gradation of risk in relation to determination of the interest 
percentage.   
(b) RE / lender must ensure that their DLA or the DLA of the LSP include particulars of customer 
care and grievance redressal, links to the privacy policy and terms and conditions as well as 
any other customer facing policy. A link also needs to be provided to  the website of the RE / 
lender where such policies can be viewed at a prominent single place for ease of accessibility.  
(c) RE / lender must prominently publish the list of their DLAs, LSPs engaged by them and DLAs of 
such LSPs along the work performed by such LSPs on their website and DLA.  
(d) RE / lender shall ensure that their DLAs or DLAs of their LSPs at on -boarding stage itself 
prominently displays information relating to the loan product including features, loan limit and 
cost, etc., so as to make the customers aware of these aspects. 
(e) A facility of lodging complaint shall also be made available on the DLAs used by an RE / lender.  
(f) RE / lender shall provide a ‘Key Fact Statement’ (“KFS”) to the customers before the execution 
of the contract in a standardized format74 for all digital lending products.  
(g) RE / lender should publicly make available their or their LSPs privacy policies on their DLA. 
1.2 The Digital Lending Guidelines also impose certain additional obligations and restrictions in relation to 
digital lending. Some of the key restrictions and compliance requirements are set out below:   
(a) Restrictions on usage of third -party accounts : A restriction is placed on disbursals or 
repayments, or loan servicing being routed through or pooled in the accounts of any third 
parties. RE / lenders are required to ensure that all repayments are made by the customers 
directly into their bank accounts  and similarly all disbursals are made into the bank accounts 
of the customers. The only exceptions to the above considered are; (i) disbursals covered 
exclusively under statutory or regulatory mandate (of RBI or of any other regulator); (ii) flow 
of money between REs for co-lending transactions; (iii) disbursals for specific end use, provided 
 
74 Format of KFS - rbidocs.rbi.org.in/rdocs/content/pdfs/CIRCULARKFS1504242_A.pdf  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 176 
 
the loan is disbursed directly into the bank account of the end -beneficiary; and (iv) Where a 
physical interface is used for recovery of delinquent loans.  
(b) Obligations before and during loan execution : A KFS in a standardised format, detailing 
aspects like the annual percentage rate (“ APR”), recovery mechanisms, grievance redressal 
contacts, and the cooling -off period available to the customer must be provided. Loan 
documents, such as KFS, loan summaries, sanction letters, and terms and conditions, must be 
digitally signed and automatically sent to customers upon loan agreement execution.  
(c) Data Collection: RE / lender must ensure that data collection through their DLAs or DLAs of 
LSPs must be on a need -based manner, with explicit consent of the customers. Audit trails 
must be maintained in relation to collection of data from customers. Customers must be 
provided with the options to restrict data usage, revoke consent, and request data deletion. 
Customer information shall only be shared with third parties on obtaining explicit consent for 
the same from customers.  
(d) Access to phone resources: Phone data of the customer, such as files, media, contact list, call 
logs, etc. must not be accessed by the DLA or LSP. However, one -time access for the camera, 
microphone, location or any other facility necessary for on-boarding and / or KYC requirements 
is permitted, only with the explicit consent of the customer. A restriction is prescribed on 
storage or collection of biometric data by the DLA and LSP of RE / lender.  
(e) Storage of customer data: All customer data must be stored on servers located in India, with 
stringent protocols to prevent unauthorised access. 
(f) Grievance redressal and regulatory compliance : Additionally, RE / lender and LSPs must 
establish robust grievance redressal mechanisms, including designated officers for handling 
digital lending-related complaints. If complaints are unresolved within 30 days, customer can 
escalate them to the RBI Complaint Management System (“CMS”).  
(g) Assessment of creditworthiness of borrowers: RE / lender must ensure that creditworthiness 
assessments must be auditable, and there must be no automatic credit limit increases without 
explicit customer consent.  
B. Fair Practice Code related compliances 
2.1 The Scale Based Regulations requires NBFCs having a customer interface to ensure compliance with the 
requirements set out in relation to the ‘fair practice code’ and having a board approved policy based 
on the guidelines set out in the Scale Based Regulati ons. Similarly, requirements to comply with the 
‘fair practices code’ are also imposed on banks engaged in lending through various circulars issued by 
the RBI such as Guidelines on Fair Practices Code for Lenders dated 5 May 2003 and subsequent 
circulars such as Fair Practices Code for Lenders – Charging of Interest dated 29 April 2024. 
2.2 All banks and NBFCs are further directed to ensure that they have a robust board approved policy for  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 177 
 
complying with the requirements specified in relation to the fair practices code as applicable.  
2.3 The key requirements under the fair practices code are detailed below: 
(a) All loan application forms need to include information about the fees/charges, if any, payable 
for processing, pre-payment options, interest rates, penal charges and any other matter which 
affects the interest of the customer.  
(b) All lenders shall give an acknowledgement for receipt of the loan applications. The timeframe 
within which loan applications will be processed would be indicated in the acknowledgement 
of such applications. 
(c) All documents as required for considering the loan application shall be specified in the loan 
application itself. If additional details  / documents are required, the lenders should intimate 
the customers immediately. 
(d) For all categories of loans and irrespective of any threshold limits, the lenders are expected to 
process the application without delay. In case the application is rejected, the lender will convey 
in writing to the applicant the reasons for rejection within one month. 
(e) Lenders must not discriminate on grounds of sex, caste and religion in the matter of lending.  
(f) The relevant lender would convey to the customer the credit limit along with the terms and 
conditions thereof through the KFS and obtain the customer's confirmation that they have 
understood and accepted the terms and conditions in the KFS. Banks must also ensure that all 
terms and conditions are communicated through authorised officials of the banks as well.  
(g) Under the Scale Based Regulations, all communications with the customer should be in the 
vernacular language of the customer. The Scale Based Regulations further require all NBFCs to 
ensure that the loan agreements, KFS, sanction letter and other customer facing documents 
are provided in the vernacular language of the customer. All enclosures and annexures 
relevant to the loan agreements shall also be shared with the customer to ensure they have 
full visibility over the terms of loan. For banks, the KFS mus t be provided in the vernacular 
language of the customer. Other requirements such as ensuring all documents relevant to the 
loan are shared with the customer also apply to banks.  
(h) Sanction letters shall include timeline and place of return of original movable  / immovable 
property documents.   
(i) The RBI notification on ‘Reset of Floating Interest Rate on Equated Monthly Instalments (EMI) 
based Personal Loans’ dated 18 August 2023 mandate that all applicable charges for switching 
loans from floating to fixed rate, if applicable, and any other service charges / administrative 
costs incidental to the exercise of the above options need to be transparently disclosed  in the 
sanction letter by the lenders.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 178 
 
(j) All lenders should also clearly communicate to the customers about the possible impact of 
change in benchmark interest rate on the loan leading to changes in the equated monthly 
instalments (“EMI”) and / or tenor or both. 
(k) The rate of interest and the approach for gradations of risk and rationale for charging different 
rate of interest to different categories of borrowers to be disclosed explicitly in the sanction 
letter in addition to the KFS. 
(l) The sanction letter shall include details in relation to the amount of loan sanctioned along with 
the terms and conditions including annualised rate of interest and method of application of 
such interest. 
(m) In the RBI Notification on ‘ Responsible Lending Conduct – Release of Movable / Immovable 
Property Documents on Repayment/ Settlement of Personal Loans’ dated 13 September 2023, 
all lenders are required to ensure that they release all the original movable / immovable 
property document s and remove charges registered with any registry within a period of 30 
days after full repayment/ settlement of the loan account.  In case of delay for reasons 
attributable to the lender, they shall compensate the customer at a rate of ₹5,000/- for each 
day of delay. 
(n) The acceptance of the terms and conditions mentioned in the sanction letter by the customer 
needs to be kept on record by NBFCs. 
(o) Lenders should give notice of any change in the terms and conditions including interest rates, 
service charges etc. Lenders should also ensure that changes in interest rates and charges are 
made only prospectively and suitable language to this effect shoul d be incorporated in the 
loan agreement.  
(p) The Fair Practices Code for Lenders – Charging of Interest circular dated 29 April 2024 requires 
all lenders to ensure that charging of interest on a loan should be from the date of actual 
disbursement of the funds to the customer and should not be reckone d from the date of 
sanction of the loan or date of execution of the loan agreement. Further interest must only be 
charged on the outstanding amounts and only for the period for which the loan is outstanding. 
In the event the customer makes payment of any a mounts in advance, the interest should be 
calculated on the remaining outstanding amount and not the entire loan amount  
(q) The circular on ‘Fair Lending Practice - Penal Charges in Loan Accounts’ dated 18 August 2023, 
requires all lenders to ensure that any penalty, if charged, for non -compliance of material 
terms and conditions of loan contract by the customer shall be treate d as ‘penal charges’ and 
shall not be levied in the form of ‘penal interest’ that is added to the rate of interest charged 
on the advances. Further, there must not be any capitalisation of penal charges i.e., no further 
interest computed on such charges. 
(r) All lenders must have a board approved policy on penal charges or any similar charges on loans 
and such charges must be disclosed to the customers in the KFS and loan agreement as 
elaborated in sub-paragraph (a) above  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 179 
 
(s) Lenders must ensure that they do not interfere in the affairs of the customers once the loans 
have been issued or in any manner harass the customers for repayment of claims.  
(t) In the matter of recovery of loans, the lenders should not resort to undue harassment viz. 
persistently bothering the customers at odd hours, use of muscle power for recovery of loans, 
etc. 
(u) Lenders should ensure that their DLAs display a board approved policy for ensuring compliance 
with the ‘fair practice code’ as set out in the Scale Based Regulations. 
(v) All lenders shall share / make accessible to the customers, a statement at the end of each 
quarter which shall at the minimum, contain details of the principal amount and interest 
recovered till date, EMI amount, number of EMIs left and annualized rate of interest / APR for 
the entire tenor of the loan. 
(w) Any decision to recall  / accelerate payment or performance under the agreement shall be in 
consonance with the terms specified in the loan agreement. 
(x) In the case of receipt of request for transfer of customers account, either from the customer 
directly or from other banks / FIs which propose to take over the loan, banks are required to 
convey their consent or objection, if any, within 21 days from the d ate of receipt of request. 
C. Requirements in relation to outsourcing of services to third parties. 
3.1 The term “Outsourcing” is defined under the Scale Based Regulations , as well as the Bank Outsourcing 
Guidelines to mean the use of a third party (either an affiliated entity within a corporate group or an 
entity that is external to the corporate group) to perform activities on a continuing basis that would 
normally be undertaken by the bank / NBFC  itself, now or in the future. Examples of outsourcing services 
under the Scale Based Regulations  include loan origination, credit card, document processing, 
marketing and research, supervision of loans, data processing etc. and the Bank Outsourcing Guidelines 
also include back office related activities as part of the services that may be outsourced. Some of the 
key obligations under the Scale Based Regulations and Bank Outsourcing Guidelines are detailed below: 
 
(a) Board approved policy . All NBFCs and banks are required to have a board approved 
outsourcing policy which shall set out the criteria for selection of activities and service 
providers to whom such activities will be outsourced, as well as the extent of delegation of 
authority considering risks and materiality of  the outsourced activity. The policy shall also 
prescribe systems for monitoring the outsourced activities. Core functions such as internal 
audit, compliance function and decision -making functions like determining compliance with 
Know-Your-Customer norms f or opening deposit accounts, providing sanction for loans 
(including retail loans) and management of investment portfolio shall not be outsourced.  
(b) Consideration of risks associated with outsourcing. NBFCs and banks outsourcing any services 
shall take into account risks such as strategic, reputational, legal, compliance, systemic, 
counterparty and operational risks when outsourcing any of its activities and shall also 
consider risks associated with exiting the outsourcing arrangement.   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 180 
 
(c) Due Diligence of service provider . All NBFCs and banks  must conduct a due diligence of the 
service provider which should take into consideration qualitative and quantitative, financial, 
operational and reputational factors before outsourcing any services to such service provider.  
They also rely upon market feedback and independent reviews of the service provider at the 
time of conducting the due diligence exercise. The Scale Based Regulations and Bank 
Outsourcing Guidelines prescribe factors to be consider ed while conducting due diligence of 
the Service Provider. 
(d) Outsourcing Agreement . All NBFCs and banks  must ensure that the agreement with 
outsourced service provider is clearly drafted and the defines the scope of outsourced 
activities and performance standards. In addition to the same the  NBFCs and banks must also 
ensure certain rights in its agreements with outsourced service providers  as detailed in 
paragraph 5.5 of Annex XIII of the Scale Based Regulations and paragraph 5.5 of the Bank 
Outsourcing Guidelines75. For example, REs should ensure that Buyer Apps ensure that all data 
collected by them for providing any services in relation to the credit products are stored in 
India with specific rights provided to the RE and the RBI to audit the services provided by the 
Buyer Apps.  
 
3.2 IT Outsourcing. As REs have been extensively leveraging Information Technology (IT) and IT enabled 
Services (ITeS) to support their business models, products and services offered to their customers , the 
various risks  associated with outsourcing such services to third party service providers need to be 
addressed. The IT Outsourcing Master Directions provides the guidelines to be followed by regulated 
entities for ‘Outsourcing of IT Services’ . The term ‘Outsourcing of IT Services’ is defined in an inclusive 
manner and also includes the following activities: 
 
(a) Information technology infrastructure management, maintenance and support (hardware, 
software or firmware); 
(b) Network and security solutions, maintenance (hardware, software or firmware);  
(c) Application development, maintenance and testing; application service provider including 
ATM switch application service providers; 
(d) Services and operations related to data centres; 
(e) Cloud computing services; 
(f) Managed security services; and 
(g) Management of information technology infrastructure and technology services associated 
with payment system ecosystem. 
 
75 Refer to paragraph 5.5 of Reserve Bank of India - Notifications and Reserve Bank of India - Notifications for Banks and paragraph 5.5 of 
Annex XIII of 106MDNBFCS1910202343073E3EF57A4916AA5042911CD8D562.PDF for NBFCs.    
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 181 
 
 
3.3 Exclusions to IT Outsourcing . Reference is made to Appendix – III of the IT Outsourcing Master 
Directions, which prescribes a list of services which do not fall within the ambit of ‘Outsourcing of IT 
Services’ and entities which are not deemed to be third party service providers.  
 
3.4 Board approved IT outsourcing policy . The IT Outsourcing Master Directions requires all RE to have a 
board approved outsourcing policy for IT outsourcing which shall set out the criteria for selection of 
activities and service providers to whom such activities will be outsourced, parameters for defining 
material outsourcing, delegation of autho rity depending on risk and materiality, disaster recovery and 
business continuity plans, systems to monitor and review the operations of these activities and 
termination processes and exit strategies. Where services of a cloud service provider are availed by the 
RE, the IT outsourcing policy should also cover all processes related to cloud computing services such 
as generation of data, data collected by cloud, erasure / deletion of data from the cloud servers and 
from the regulated entity’s systems. Further, the pol icy should also explicitly list out activities which 
can be moved to the cloud, address various stakeholder interests and safety, and include compliance 
with appropriate regulatory requirements associated with data classification and continuous 
monitoring of the cloud service providers. 
 
3.5 Due Diligence of the service provider. In addition to the due diligence requirements set out in  3.1(c) 
above as applicable in case of outsourcing under the Scale Based Regulation s and Bank Outsourcing 
Guidelines, REs must also consider aspects such as details of the technology, infrastructure stability, 
security and internal control, data backup arrangements, capability to segregate data of the regulated 
entity, information/ cyber security risk assessment etc., when c onducting due diligence of IT service 
providers. 
 
3.6 IT Outsourcing Agreement . The IT Outsourcing Master Directions also prescribe certain provisions to 
be specifically included in the outsourcing agreement with their service providers. REs who are 
outsourcing any IT service to a third party service provider should ensure that the re quirements 
mentioned in paragraph 16 of the IT Outsourcing Master Directions 76 are included in the agreements 
with such service providers.  
 
3.7 Arrangements with cloud service providers . Appendix-I of the IT Outsourcing Master Directions also 
prescribe additional obligations in relation availing the services of cloud service providers.  
 
76 Reserve Bank of India - Master Directions  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 182 
 
ANNEXURE – L 
COMPLIANCES APPLICABLE IN RELATION TO OFFERING OF INSURANCE PRODUCTS  
A. Key compliances applicable to the Insurer under the Insurance Act 
1.1 Registration of Insurer. The Insurance Act is the principal legislation that governs the business of 
insurance. It requires any person carrying on any class of insurance business in India to obtain a 
certificate of registration for the particular class of insurance business undertaken  by it.   
1.2 Payment of remuneration / commission / reward to insurance intermediaries . Insurers are required 
to abstain from excessive amounts of remuneration to insurance intermediaries, by way of commission 
or otherwise. In this regard, the IRDAI (Payment of commission or remuneration or reward to insurance 
agents and insurance intermediaries) Regulations, 2016  (“IRDAI Commission Regulations ”) mandates 
Insurers to have a written policy  for payment of commission or remuneration or reward to insurance 
agents and insura nce intermediaries, which must be approved by the board of the company.  Where 
the Insurer has paid any remuneration / commission / reward to an insurance intermediary, the Insurer 
must not pay any commission to an insurance agent on the same insurance policy. The maximum 
remuneration that can be paid by the Insurer to the ins urance intermediaries is specified in the 
Schedules to the IRDAI Commission Regulations. 
1.3 Assuming of risk by Insurer. The Insurer shall assume any risk in respect of any insurance business (on 
which premium is not ordinarily payable outside India), only upon the premium payable is received by 
the Insurer or is guaranteed or unless and until deposit of such amount is made in advance.  In case of 
risks for which premium can be ascertained in advance, the risk may be assumed not earlier than the 
date on which the premium has been paid in cash or by cheque to the Insurer. Any refund of premium 
which may become due to an insured on account of the cancellation of a policy or alteration in its terms 
and conditions or otherwise shall be paid by the Insurer directly to the insured , in the manner as 
specified in the Insurance Act. 
1.4 Protection of policyholders’ interests. Insurers are subject to the specific compliances and obligations 
prescribed under the IRDAI Master Circular on Protection of Interests of Policyholders dated 5 
September 2024 (“Policyholders Master Circulars ”). Such obligations relate to, inter alia, (a) activities 
prior to sale of insurance products, (b) proposal for sale of insurance policies, (c) issuance of insurance 
policies, (d) servicing of policyholders and settlement of claims, (e) portability of health insurance 
policies, etc. The Policy Ho lders Master Circular, through its schedules, also provides for (a) form and 
manner of policy documents and benefits illustrations, (b) contents of insurance policies, and (c) 
customer information sheet (“CIS”). 
B. Key Compliances applicable to Insurance Brokers 
2.1 Registration of Insurance Brokers . Insurance Brokers are required to be registered with the IRDAI as 
per the Insurance Broker Regulations. In this regard, the Insurance Broker Regulation specifies the form 
and manner of submission of application for grant of certificate of registration.  
2.2 Display of details in correspondences . Every Insurance Broker is required to display, in all their 
correspondences with all stakeholders, their name registered with IRDAI, address of the registered and  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 183 
 
corporate office, IRDAI registration number, category for which Insurance Broker is registered, and 
validity period of registration.  
2.3 Remuneration and reward . For direct insurance business, payment of remuneration and / or reward 
to the Insurance Broker shall be as per the limits specified in the IRDAI Commission Regulations.  
2.4 Risk management services . Insurance Brokers may charge the client fee for the services rendered by 
them to the client for risk management services or other similar services as per the functions defined 
under the Insurance Broker Regulations. The Insurance Broker can undertake thi s activity only for 
commercial risks based on the written confirmation from client for those fees. However, the Insurance 
Broker cannot receive both the remuneration and reward as stipulated under the IRDAI Commission 
Regulations, a nd fees for the same risk management services. The Insurance Broker shall obtain a 
written mandate from the client to offer risk management services and shall keep a record of the risk 
management services offered to the client which will include details su ch as name of the client, place 
of risk, nature and type of risk management services undertaken, amount of fee charged from the 
client, basis of fee charged, etc. 
2.5 Claim consultancy services. Insurance Brokers may undertake claims consultancy only for commercial 
lines of general insurance business, subject to the conditions as prescribed under Regulations 28 of the 
Insurance Broker Regulations.  
2.6 Sale of insurance products through online channels, tele -marketing and distance marketing . 
Insurance Brokers may enter into an agreement with Insurers for sale of insurance products online by 
linking to the web portals of the Insurers, or through tele -marketing and other distance marketing 
activities. The sale of insurance products through suc h online or telemarketing channels by Insurance 
Brokers shall be as per Web Aggregator Regulations and Guidelines on Insurance e -commerce issued 
by IRDAI. 
2.7 Functions of a direct Insurance Broker . Functions of a direct Insurance Broker acting as a Seller App 
would include, inter alia, the following: 
(a) Assisting the insurer by appraising on the client's business and underwriting information; 
(b) Submitting quotation received from Insurer/s for consideration of a client;  
(c) Rendering advice on appropriate insurance cover and terms  and acting promptly on 
instructions from a client and providing written acknowledgements and progress reports;  
(d) Assisting clients in paying premium under the Insurance Act; 
(e) Assisting in the negotiation of the claims; and 
(f) Assisting in opening of e-insurance accounts and assisting in issuing e-insurance policies. 
2.8 Code of conduct . While acting as a Seller App and providing its services, Insurance Broker shall be 
required to adhere to its code of conduct, as prescribed under the Insurance Broker Regulations. The 
code of conduct for Insurance Broker, as provided under Schedule I – Form H of the Insurance Broker  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 184 
 
Regulations, specifies specific conduct requirements in relation to: (i) client relationship; (ii) sales 
practices; (iii) furnishing of information; (iv) explanation of insurance contract; (v) renewal of policies; 
(vi) claims by clients; (vii) receipt of c omplaints; (viii) documentation; (ix) advertising; (x) receipt of 
remuneration; and (xi) training of staff. 
C. Key compliances applicable to Corporate Agents 
3.1 Registration of Corporate Agents. Corporate Agents are required to be registered with the IRDAI as per 
the Corporate Agent Regulations. In this regard, the Corporate Agent Regulations specifies the form 
and manner of submission of application for grant of certificate of registration.  
3.2 Arrangements with Insurers. Corporate Agents must enter into arrangements with Insurers for 
distribution of their products , subject to the specific conditions listed under Regulation 23 of the 
Corporate Agent Regulations . The minimum period of such arrangement must be for 1 year. A 
Corporate Agent (Life), Corporate Agent (Health), and Corporate Agent (General), may have 
arrangements with a maximum of 9 life Insurers, 9 health Insurers, and 9 general Insurers, respectively, 
to solicit, procure and service th eir insurance products Further, the Corporate Agent (General) shall 
solicit, procure and service retail lines of general insurance products and commercial lines of such 
Insurers having a total sum insured not exceeding INR 5 crores per risk for all insuran ces combined. A 
Corporate Agent (Composite) may have arrangements with up to 9 Insurers in each class, subject to the 
condition that the total number of arrangements with life, general and health Insurers, shall not exceed 
27 at any point of time.  
3.3 Grievance redressal . As part of the registration conditions, a Corporate Agent is required to take 
adequate steps for redressal of grievances of its clients within 14 days of receipt of such complaint and 
keep IRDAI informed about the number, nature and other particulars of the complaints received from 
such clients in format and manner as may be specified by IRDAI.  
3.4 Prohibition of multi-level marketing. Corporate Agents are prohibited from undertaking any multi-level 
marketing for solicitation of insurance products. 
3.5 Remuneration and reward . Payment of remuneration and receipt of remuneration by a Corporate 
Agent shall be as per the limits specified in the IRDAI Commission Regulations.  
3.6 Conflict of interest . While soliciting and procuring the insurance business, Corporate Agents are 
required to comply with the following:  
(a) The Corporate Agent having tie -ups with more than 1 Insurer in a particular line of business, 
disclose to the prospective customer the list of Insurers, with whom they have arrangements 
to distribute the products and provide them with the details such as s cope of coverage, term 
of policy, premium payable, premium terms and any other information which the customer 
seeks on all products available with them. Further, disclose the scale of commission in respect 
of the insurance product offered, if asked by the prospect; 
(b) Where the insurance is sold as an ancillary product along with a principal business product, 
the corporate agent or its shareholder or its associates shall not compel the buyer of the  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 185 
 
principal business product to necessarily buy the insurance product through it. The Principal 
Officer and CFO (or its equivalent) of the corporate agent shall file with the Authority a 
certificate in the format given in the Schedule VIII on half -yearly basis, certifying that there is 
no forced selling of an insurance product to any prospect. 
(c) No Insurer shall require the corporate agent to insure every client with it.  
3.7 Servicing of policyholders. Corporate Agent shall have the duty to service its policyholders during the 
entire period of contract. Servicing includes assisting in payment of premium, providing necessary 
assistance and guidance in the event of a claim, and providing all other services and guidance on issues 
which arise during the course of an insurance contract. 
3.8 Sale of insurance products through tele -marketing and other distance marketing. Schedule VII of the 
Corporate Agent Regulations specifies the conditions to be adhered to by Corporate Agents while 
selling of insurance products through tele -marketing mode and other distance marketing activities. It 
specifies various compliances, which  include, inter alia , aspects relating to (i) persons that can be 
engaged for solicitation; (ii) agreements between Corporate Agents and telemarketers; (iii) role of 
authorised verifiers; (iv) conduct in relation to sale of insurance products through distance marketing; 
(v) process of solicitation, including standardised script, introduction, consent, procuring prospect’s 
information, communication of product benefits and features; premium ceilings in case of sale of ULIPs, 
prohibition of sale of universal life products over telephonic mode, etc., (vi) post solicitation process, 
(vii) prohibition of unfair denial of insurance cover, (vii) preservation of records, (vii) verification  
processes to be adopted by Corporate Agents, etc. 
3.9 Code of conduct . While acting as a Seller App and providing its services, Corporate Agents shall be 
required to adhere to its code of conduct, as prescribed under the Corporate Agent Regulations. The 
code of conduct for Corporate Agents, as provided under Schedule III of  the Corporate Agent 
Regulations, prescribes (i) general code of conduct for Corporate Agents; and (ii) Pre -sale code of 
conduct; (iii) Post-sale code of conduct. 
D. Key compliances applicable to Insurance Web Aggregators 
4.1 Registration of Insurance Web Aggregators. Insurance Web Aggregators are required to be registered 
with the IRDAI as per the Web Aggregator Regulations. In this regard, the Web Aggregator Regulations 
specifies the form and manner of submission of application for grant of certificate of registrati on. 
4.2 Display of details in correspondences . Insurance Web Aggregator s are required to display in all its 
correspondences with all stakeholders  its name registered with IRDAI, address of the registered and 
corporate office, IRDAI  registration number and validity period of the registration.  Insurance Web 
Aggregators are not permitted to use any other name in their correspondence / literature / letter heads 
without the prior approval of IRDAI. 
4.3 Board approved policy for comparison and distribution of insurance products . Insurance Web 
Aggregators are required to have a Board approved policy on the manner of soliciting insurance 
products. The policy, amongst others, must include the approach to be followed by the Insurance Web 
Aggregator in having multiple tie-ups, type of products sold, grievance redressal mechanism, reporting  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 186 
 
requirements, etc.  
4.4 Arrangements with Insurers. Insurance Web Aggregators must not enter into any arrangements with 
Insurers which are against the interests of policyholders. The details pertaining to the arrangement 
made by the Insurance Web Aggregators with the Insurers must adhere to the requirement s specified 
in Form L (Arrangements with Insurers for distribution of products) of Schedule III of the Web 
Aggregator Regulations. 
4.5 Conflict of interest. While soliciting and procuring the insurance business, Insurance Web Aggregators 
are required to comply with the following:  
(a) The Insurance Web Aggregator having tie -ups with more than 1 Insurer in a particular line of  
business, shall display to the prospective customer the list of Insurers, with whom they have  
arrangements to distribute the products and provide them with the details such as scope of 
coverage, term of policy, premium payable, premium terms and any other information which 
the customer seeks on all products available with them;  
(b) The product to be sold shall be based on the need analysis of the prospect ; and 
(c) No Insurance Web Aggregator shall promote or push a particular product of a particular 
company either through its web-site or through distance marketing approaches. 
4.6 Duties and functions of Insurance Web Aggregators. Insurance Web Aggregators are required to fulfil 
the following duties: 
(a) Display Information in their designated website pertaining to the products of Insurers who 
have signed agreement with the Insurance Web Aggregators, and carryout the activities for 
the purpose of lead generation for Insurers. 
(b) Ensure that the information systems, (both hardware and software) including the aggregation 
website(s) / portals, Lead Management System and the data centers hosting the website(s) / 
Portal(s) / Lead Management System are in compliance with the generally a ccepted 
information security standards and procedures in force in India from time to time.  
(c) Ensure that the leads and other data is transmitted to the Insurers and others using secured 
layer data encryption technologies like 128-bit encryption. 
(d) Use only RBI registered payment gateways for collection and transfer of premium to Insurers 
when the Insurance Web Aggregator is authorized by the Insurer to collect the premium on 
behalf of the Insurer. 
Further, Insurance Web Aggregators are required to abstain from the following:  
(a) Display any information pertaining to products or services of other financial institutions / 
FMCG or any product or service on the website.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 187 
 
(b) Display advertising of any sort, either pertaining to any product or service including insurance 
product or service, other financial products or service / or any other product or service in the 
Insurance Web Aggregators Website. 
(c) Operate multiple websites or tie up with other approved / unapproved / un-registered entities 
/ websites for lead generation / comparison of product etc. Using multiple domain names or 
same domain names with suffixes such as .com or .in or .co.in for the p rimary website of the 
Insurance Web Aggregator used for comparison of insurance products is allowed provided the 
domain names of primary or secondary or product category specific websites or mobile sites 
are owned and registered in the name of the Insuranc e Web Aggregator; and the Insurance 
Web Aggregator shall inform IRDAI in writing about the date of registration and also date of 
launching of domain names of such websites or mobile sites in the application for grant of 
registration and thereafter within 1 5 days from the date of Domain Name registration and 
date of launching respectively in case of any change in the name(s) of the existing websites or 
new websites. 
(d) Operate the websites of other Financial / Commercial / marketing or sales or service entities 
or use other Social Media sites etc. for comparison of products etc.  
(e) Operate in any other manner for the purpose of transmitting leads to any entity engaged in 
insurance business except as provided under the Web Aggregator Regulations.  
4.7 Display of product comparisons . Insurance Web Aggregators are required to disclose prominently on 
the home page, a notice that, (a) the Prospect’s / visitor’s particulars could be shared with Insurers, and 
(b) the information displayed on the website is of the Insurers with whom our co mpany has an 
agreement. Product information displayed by Insurance Web Aggregators must be authentic and be 
based solely on information received from Insurers. Insurance Web Aggregators must not display 
ratings, rankings, endo rsements or bestsellers of insurance products on their website. The content of 
the websites of the Insurance Web Aggregators must be unbiased and factual in nature; and Insurance 
Web Aggregators must not comment on Insurers or their products in their edito rials or at any other 
location in their websites. Products listed on the Insurance Web Aggregator’s website for comparison 
must be categorized in the form and manner as prescribed under Form Q of Schedule IV under the Web 
Aggregator Regulations. 
4.8 Remuneration and reward . Payment of remuneration and receipt of remuneration by an Insurance 
Web Aggregator shall be as per the limits specified in the IRDAI Commission Regulations , read with 
Regulation 30 of the Web Aggregator Regulations.  
4.9 Code of conduct . While acting as a Seller App and providing its services, Insurance Web Aggregators 
shall be required to adhere to its code of conduct, as prescribed under Form W of Schedule VIII to the 
Web Aggregator Regulations.  
E. Other general compliances applicable to Insurers and insurance intermediaries  
5.1 Insurance advertisements and disclosures . Insurers and insurance intermediaries are required to 
adhere to various compliances in relation practices while issuing advertisements of insurance products,  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 188 
 
as prescribed under the IRDAI (Insurance Advertisements and Disclosure) Regulations 2021 (“Insurance 
Advertisements Regulations”). The requirements, inter alia, include the following: 
(a) Establish and maintain a system of control over the content, form, and method of 
dissemination of all advertisements concerning its policies or products; 
(b) Ensure that (i) the names of the product and benefits shall be as per the product filed with 
IRDAI; (ii) sales material and advertisements shall be comprehensible; (iii) it must prominently 
state the availability of underlying element of ‘insurance coverage’ to clearly identify the 
product as an insurance product;  
(c) Their w ebsite or portal must (i) contain disclosure statements which outline the website’s 
specific policies vis-á-vis the privacy of personal information for the protection of both their 
own businesses and the consumers they serve; and (ii) display their registration numbers on 
their websites. 
(d) Not allow a third party whether individual, association, entity or group, by whatever name 
called, to (i) distribute information about an insurance policy, Insurer or intermediary or 
insurance intermediary, on its letterhead or envelope or through any mode or  medium 
including mail system or domain, unless the third party is providing only a distribution service 
for the advertisement and is not itself soliciting the insurance, and the insurance information 
or advertisement is a piece separate from any other information distributed by the third party 
and clearly indicates its origin; (ii) recommend that its members purchase specific insurance 
products; (iii) imply that a person must become a member of its organization in order to 
purchase the insurance policy;  and (iv) imply that a purchaser of an insurance policy by 
becoming a member of a limited group of persons shall receive special advantages from the 
insurer not provided for in the insurance policy or product. 
(e) Follow recognised standards of professional conduct as prescribed by the Advertisement 
Standards Council of India and discharge its functions in the interest of the policyholders.  
(f) Every proposal form for an insurance product shall carry the following stipulation: “No person 
shall allow or offer to allow, either directly or indirectly, as an inducement to any person to 
take out or renew or continue an insurance in respect of any kind of risk relating to lives or 
property in India, any rebate of the whole or part of the commission payable or any rebate of 
the premium shown on the policy, nor shall any person taking out or renewing or continuing a 
policy accept any rebate, except such r ebate as may be allowed in accordance with the 
published prospectuses or tables of the insurer." 
5.2 Issuance of e -insurance policies . The IRDAI (Issuance of e -Insurance Policies) Regulations, 2016 (“ e-
Insurance Regulations ”) prescribes compliances in relation to issuance of electronic policy and 
submission of electronic proposal form of insurance policies.  
(a) e-Proposal form . Every insurer soliciting insurance business through electronic mode is 
required to create an e -insurance proposal form similar to their physical form approved by  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 189 
 
IRDAI. Such form should enable capture of information in electronic form that would enable 
easy processing and servicing. 
(b) Electronic insurance policies. Every insurer must issue electronic insurance policies that fulfill 
the criteria given in Schedule I to the e -Insurance Regulations. Electronic Insurance Policies 
shall be deemed compliant only when issued with digital  signature in accordance with 
applicable provisions prescribed by law.  
(c) Discount on electronic insurance policies. An insurer may offer discount in the premium rates 
to the policyholders for such electronic insurance policies exempt from issuance in  physical 
form. Such discount must be in accordance with the discount rates filed under the  Product 
Approval or the File & Use guidelines or as specified by IRDAI.  
5.3 Customer information sheet . Insurers and intermediaries are required to forward the CIS to all 
policyholders and acknowledgement, physical or digital, must be duly obtained. The CIS must be made 
available in local language if the policyholder so desires. The CIS shall have minimum font size ‘12’ (Arial) 
or above. All details provided for in the CIS shall be duly filled in. The policy document forwarding letter 
shall contain a cross reference to the CIS.  Annexure 1 to the IRDAI circular on ‘ Revision of Customer 
Information Sheet ’ dated 30 October 2023 provides for the template CIS, which includes the key 
information about the policy. Insurers must provide web-link where the product related documents 
including the CIS are available on the website of the insurer.  In case of any conflict, the terms and 
conditions mentioned in the policy document shall prevail.  Insurers are required take confirmation of 
the policyholder regarding receipt of CIS. 
5.4 Insurance e -commerce. Any Insurer or insurance intermediary undertaking insurance e -commerce 
activities must comply with the ‘Guidelines on Insurance e -commerce’ issued by IRDAI, dated 9 March 
2017 (“Insurance e-Commerce Guidelines”). Any insurance e-commerce activity must undertake such 
activities through an Insurance Self Network Platform (“ISNP”) set up with the permission of IRDAI. The 
Insurance e -Commerce Guidelines prescribes the code of conduct for Insurers and insurance 
intermediaries while undertaking insurance e-commerce activities through their ISNP and provides for 
other operational compliances. 
5.5 KYC of customers . Insurers are required to ensure appropriate KYC fulfilment of their customers, in 
compliance with the guidelines prescribed under the consolidated ‘ Master Guidelines on Anti -Money 
Laundering/ Counter Financing of Terrorism (AML/CFT), 2022’, issued by IRDAI dated 1 August 2022. 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 190 
 
ANNEXURE – M 
COMPLIANCES APPLICABLE IN RELATION TO OFFERING OF MUTUAL FUNDS  
A. Compliances under the Code of Conduct for MFDs 
1.1 The following disclosures are to be provided by MFDs offering Mutual Funds to investors:  
(a) If MFDs are engaged in the distribution of Mutual Fund products of their group / affiliate / 
associate entities, it shall make appropriate disclosures to the investors regarding the conflict 
of interest arising from distribution of such Mutual Fund scheme.  Further, if the MFD is an 
associate / group company / sponsor of AMC of a mutual fund, the MFD shall, while providing 
suggestions to investor, disclose all material information about its association with the 
concerned AMC and the total amount of commission received/receivable 
(b) MFDs are required to provide and full and updated information on Mutual Fund schemes, as 
provided to them by AMCs, to the investors including Statement of Additional Information 
(SAI), Scheme Information Document (SID), addendums, performance reports, fact  sheets, 
portfolio disclosures and brochures. MFDs shall not deliberately withhold or omit any material 
fact or information supplied to them by the AMCs from any investor that the investor should 
know or may want to know. 
(c) MFDs shall disclose to the investors all material information including all commissions (in the 
form of trail commission or any other mode) received or receivable by them for the different 
competing schemes of various Mutual Funds from amongst which the sc heme is being 
recommended to the investor. 
(d) MFDs shall disclose to their clients the list of mutual funds they are affiliated with and inform 
to the clients that the information provided is limited to the mutual fund products that are 
being distributed/promoted by the MFDs and inform the clients tha t the clients may also 
consider other alternate products, which are not being offered by the MFDs before making 
investment decision. 
(e) MFDs shall ensure that on any digital platform provided by MFD for offering investment facility 
to investor, it is categorically disclosed that the scheme the investor is subscribing to is of 
Regular Plan which involves payment of commission to MFD. The li nk for the rate of 
commission received or receivable by the MFD for the different competing schemes of various 
Mutual Funds shall be prominently displayed on the platform indicating the same as a 
hyperlink. Further, a link to the scheme offer documents (SI D/SAI/KIM) shall also be 
prominently displayed on the concerned page. 
B. Compliances under the EOP Guidelines 
2.1 The following disclosures are to be provided by EOPs offering Mutual Funds to investors:  
Disclosures by an EOP  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 191 
 
(a) The platform offering Mutual Funds shall provide an interactive tool for the investors to screen 
or filter various schemes based on the criteria selected by the investor including past 
performance, AUM , etc. and ensure  that there is no auto display of recommendation or  
ranking of any of the schemes. The aforesaid tool shall not itself provide any research reports 
or opinions or perform any research based or investment advisory activity. 
(b) Further, the platform shall display in a user-friendly manner, the factual information pertaining 
to Mutual Funds as available on public domain including past performance of Mutual Fund 
schemes. It shall be ensured that the following disclosures are provided on the platform.  
I. Name of the Mutual Fund. Link to Mutual Fund website whose products are offered.  
II. Name of the scheme of the Mutual Fund. Type and category of the scheme of Mutual 
Fund. 
III. Name of the Fund Manager. 
IV. Investment objective of the scheme. 
V. Scheme performance along with source. 
VI. Scheme details such as minimum investment, AUM, NAV, Exit Load, Expense Ratio.  
VII. Risk-o-Meter of the scheme and Potential Risk Matrix, wherever applicable.  
(c) The platform shall also display the grievance redressal mechanism available for the investors 
including the manner in which a complaint can be lodged by an investor.  
Advertisement Code for EOPs 
(a) Advertisement shall include all forms of communications issued by or on behalf of the platform 
in any publicly available media that may influence investment/sale decisions of any 
investor/prospective investors, or decision of investor to avail services of the EOP including 
digital media, print media, television, radio, out-of-Home, cinema theatres etc. 
(b) The platform shall display the following: 
I. Relevant information regarding the entity providing the platform, which is accurate, 
true, fair, clear, complete, unambiguous and concise. 
II. Name of the entity providing the platform, registered office address, official website, 
email address, helpline number, and AMFI Registration number. 
III. Standard warning in legible fonts (minimum font size 10) stating that 'Mutual Fund 
Investment are subject to market risks, read all the related documents carefully 
before investing.'  No addition or deletion of words shall be made to the standard 
warning.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 192 
 
(c) The advertisements shall not contain / use: 
I. Anything which is otherwise prohibited from being published under any legislation or 
regulations. 
II. Statements which are unwarranted, or exaggerated, or false, or misleading, or biased 
or deceptive, or based on assumptions/projections. 
III. Statements which directly or by implication or by omission may mislead the investor. 
IV. Any customer testimonials and/or any celebrity endorsements. 
V. Any statement which is likely to be misunderstood/ mis -interpreted or likely to 
mislead or disguise the actual intended message. 
VI. Any statement designed to exploit the lack of knowledge of un -informed or 
inexperienced investors. 
VII. Any slogan or tagline which is exaggerated or unwarranted or inconsistent with or 
unrelated to the platform. 
VIII. Any indicative returns or promise or guarantee of assured return to the general 
investors. 
IX. Any statement which directly or indirectly discredits other platforms or make unfair 
comparisons. 
X. Any representations about the performance or activities of the platform unless 
accompanied by factual / verifiable data, disclosures of all the risk factors, etc. and 
disclaimer that "Such representations are not indicative of future results". Such 
disclaimer shall be in the same font as the rest of the advertisement. 
XI. Any superlative terms, such as “The Best”, “No. 1”, “Market leader”, etc.  
XII. Any celebrities in any advertisements regarding its platform services 
Compliance and other requirements 
(a) Statistical information, charts, graphs, etc. whenever used, should invariably mention their 
source. 
(b) Where advertising claims are expressly stated to be based on or supported by independent 
research or assessment, the source and date thereof should be mentioned in the 
advertisement. 
(c) The platform shall not involve/engage in games/leagues/schemes/campaigns/competitions 
etc. which may involve distribution of prize monies/medals/gifts, etc.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 193 
 
C. Compliances under the IA Master Circular 
Disclosures by IAs providing distribution / execution services. 
3.1 IAs are required to disclose the following information on their platforms: 
(a) Full name, type of registration, registration number, validity, complete address with telephone 
number. 
(b) Investor Charter as provided under Annexure E of the IA Master Circular.  
(c) Details of investor complaints. 
(d) Link / option to lodge a complaint with them. Additionally, link to the SCORES platform of SEBI 
may also be provided. 
3.2 In the event IAs are offering mutual funds as part of their distribution services in the capacity of an 
MFD, the requirements as provided in Paragraph A of Annexure E shall apply.  
3.3 Further, while there are no specific disclosure requirements applicable to an IA offering mutual funds 
to clients, it is recommended that the platform offered by the IA adopts similar disclosure requirements 
as detailed for EOPs in Paragraph B of Annexure G.  
D. Compliances under the MF Regulations and MF Master Circular 
4.1 In the event mutual funds are directly provided through the AMC, it is recommended that similar 
disclosures as are applicable to EOPs (highlighted in Paragraph B of Annexure G) are provided. Further, 
a link to the website of the respective AMCs detailing o ther statutory disclosure may also be provided 
thereby ensuring compliance with the disclosure requirements provided under the MF Regulations and 
MF Master Circular.  
4.2 In relation to the advertisements provided by AMCs, it must be ensure that such advertisements inter 
alia comply with the guidelines provided in Sixth Schedule of the MF Regulations.  
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 194 
 
ANNEXURE – N 
COMPLIANCES APPLICABLE TO PESTICIDES 
A. Registration and Licensing 
1.1 Registration of Pesticide: The importer or manufacturer of any pesticide is required to obtain the 
registration for such pesticide by making application in Form I before the Registration Committee, along 
with the applicable fee.77 The certificate of registration is issued within a period of twelve (12) months 
from the date of receipt of application (extendable to a further period of six (6) months). It is important 
to note that a provisional registration is provided for a period of two (2) years in case of introduction of 
a new pesticide in the country. 
1.2 License: In order to manufacture or to sell, stock or exhibit for sale or distribute any pesticide, an 
application for grant of license in Form II, is required to be made before the licensing officer, along with 
applicable fee. 78 The license is granted by the licensing officer on his satisfaction that the necessary 
plant and machinery, safety devices, etc. are made available in the manufacturing premise.  
1.3 It is pertinent for the person filing the application for manufacturing license to possess or to employ a 
person who possesses, the requisite educational qualification, i.e.,  
(a) Doctorate in chemistry or agriculture chemistry or agriculture chemicals or Master of Technology 
or Master of Science in chemical engineering or equivalent for manufacture of technical grade  
pesticides; or 
(b) Master’s degree in science  with chemistry or agricultural chemistry or agriculture chemicals or  
equivalent as one of the subjects for manufacture of pesticide formulation. 
1.4 The person applying for grant of license to sell, stock or exhibit to sell or distribute pesticides shall 
possess or employ a person who possesses the following educational qualification:  
(a) graduate degree in Agricultura Sciences or Biochemistry or Biotechnology or Life Sciences or in 
Science with Chemistry or Botany or Zoology from a recognised university or institute or,  
(b) one year diploma course in Agriculture or Horticulture or related subjects from any government 
recognised university or institute with course content on plant protection and pesticides 
management. 
1.5 The license to sell, stock or exhibit for sale or distribute pesticides issued in Form III, needs to be 
displayed at a prominent place in the premises which is open to the public.  
B. Packaging and Labelling Requirements 
2.1 Prior approval shall be obtained from the Registration Committee with respect to the packages 
 
77  Section 9 of the Insecticides Act  available at ppqs.gov.in/sites/default/files/insecticides_act_1968_0.pdf read with Rule 6 of the 
Insecticides Rules available at Insecticides Rules, 1971 | Directorate of Plant Protection, Quarantine & Storage | GOI 
78  Section 13 of the Insecticides Act read with Rule 9 of the Insecticides Rules.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 195 
 
containing the pesticides. 
2.2 Every package shall contain leaflet providing for the following details 79: 
(a) The plant disease, insects and noxious animals or weeds for which the pesticide is to be applied, 
the adequate direction concerning the manner in which the pesticide is to be used at  the time 
of application; 
(b) Particulars regarding chemicals harmful to human beings, animals and wild life, warning and  
cautionary statements including the symptoms of poisoning, suitable and adequate safety  
measures and emergency first-aid treatment where necessary; 
(c) Cautions regarding storage and application of pesticides with suitable warnings relating to  
inflammable, explosive or other substances harmful to the skin; 
(d) Instructions concerning the decontamination or safe disposal of used containers;  
(e) A statement showing the antidote for the poison shall be included in the leaflet and the label . 
(f) If the pesticide is irritating to the skin, nose, throat or eyes, a statement shall be included to that 
effect; 
(g) Common name of the pesticide as adopted by the International Standards Organisation  and 
where such a name has not yet been adopted such other name as may be approved by the  
Registration Committee; 
(h) The information furnished on the label in English and Hindi shall be translated and published on 
the leaflet in Hindi, English and in the regional language of the region where the  product is 
proposed for sale; 
(i) The leaflet shall be printed legibly and font size of the text shall be not less than eight points  (8) 
or 2mm; 
(j) Safety pictograms provided on the label and others, if any, shall also be printed on the leaflet ; 
(k) Leaflet shall contain advice to physicians for treatment in cases of poisoning  
(l) Details of label claims and directions for use with reference to target organism and crop shall be 
printed on the leaflet; 
(m) Good practices relating to pesticide application techniques covering the following shall be  
provided for each crop or recommended other use, whichever is applicable, namely  (i) weather 
conditions in general, (ii) soil and water, wherever applicable, (iii) crops stage for application, (iv) 
application techniques, (v) equipment type, (vi) nozzle type, (vii) dosage (include gram active 
ingredient formulation and dilution in litres), (viii) instructions for mixing, (ix) re-entry period, (x) 
pre-harvest interval , (xi) application timings, (xii) fertilisers including maximum number of 
sprays; 
(n) Stages during which pesticides should not be applied on any crop shall be furnished ; 
(o) Precautions to be taken to avoid harm to the beneficial insects like honey bees and natural  
enemies of pests shall be furnished; 
(p) The leaflet shall also contain the practices to be followed for usage of pesticides in confined  
areas, such as glasshouses, polyhouses, nursery beds, storage structures, fumigation chambers  
and public dwellings; 
 
79  Rule 18 of the Insecticides Rules.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 196 
 
(q) The warning directing the users not to re -use the containers - “Dangerous to re -use empty  
containers” shall be printed in bold letters; 
(r) Directions for safe disposal of used containers shall be provided; 
(s) Instructions on leaflets shall be appropriately coloured or printed in bold to draw attention of all 
users; 
(t) Company shall furnish all information about the label and leaflet on their website and the  
address of the website shall be printed on the leaflet; and 
(u) The leaflet for the pesticide formulations shall be secured to primary pack or inserted or  kept in 
between primary and secondary packing or pouch. 
2.3 The packages containing pesticides shall be labelled inter alia the following manner80: 
(a) The label shall have either one, two or three panels and shall be printed only in English and Hindi 
languages 
(b) The minimum size of all label panels shall be according to the size affixed on the face of the 
package. There shall be three types of labels depending on the content as prescribed under Rule 
19 of the Insecticides Rules which inter alia includes 
(i) The name of pesticide (brand name or trade name under which the pesticide is sold), 
along with the common name as approved by Registration Committee 
(ii) The instructions to “Read Leaflet Before Use” shall be placed on the top of the label in 
bold, in a prominent place at least in English and Hindi languages in all package sizes. In 
addition, for big pack size in all such regional languages where it is prop osed for sale. 
(iii) The directions for use, manner and time of application and broad category of pests on 
which it is registered to apply. 
(iv) The dosage (include gram active ingredient, formulation and dilution in litres and area) 
(Please refer leaflet for details). 
(v) The purpose of the chemical shall be mentioned on the label, for example — for 
agricultural use 
(vi) The optimal re -entry period after each application of pesticide as approved by the 
Registration Committee. 
(vii) The safety precautions as approved by Registration Committee. 
(viii) The composition of the formulation or pesticides. 
(ix) The symptoms of poisoning and first aid. 
(x) The antidote statement. 
(xi) The name of the manufacturer and marketer. 
(xii) The imported and re-packed by (wherever applicable), marketed by. 
(xiii) Registration number of the pesticide and the manufacturing license number. 
(xiv) Batch number, manufacturing date along with the expiry date. 
(xv) Maximum Retail Price (MRP) Inclusive of all taxes. 
(xvi) Net content weight or volume (in metric system). 
(xvii) Cautionary statement,— 
• Not to be used for any purpose other than those subscribed on label and leaflets; 
 
80  Rule 19 of the Insecticides Rules available at Insecticides Rules, 1971 | Directorate of Plant Protection, Quarantine & Storage | GOI.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 197 
 
• Destroy the container after use as directed on leaflet; and 
• Any other warning or cautionary statement as approved by Registration 
Committee. 
(xviii) Customer care details. 
(xix) QR Code shall be placed on retail pack for opening the URL of the manufacturing 
company and to take the user to the entire unique information of label and leaflet and 
the QR code shall contain at least the following information: 
• Unique Identifier or GTIN; 
• Batch Number; 
• Date of Manufacturing; 
• Date of Expiry; and 
• Web link or URL. 
(c) The label shall be printed legibly with indelible ink in English and Hindi languages in the font sizes 
not less than the size prescribed under Rule 19 of the Insecticides Rules. 
(d) The ultra small or small packages shall also be packed in a secondary pack and manufacturer 
shall ensure leaflet and QR code be securely attached with each primary pack before packing 
them in one secondary pack. 
(e) For ultra -small packs, multiple primary packs may be packed in one secondary pack and the 
manufacturer shall ensure leaflet and QR code be securely attached with each primary pack  
before packing them in one secondary pack. 
(f) The label shall contain in a prominent place and occupying not less than one -sixteenth of the  
area of the panel or four -square centimetres whichever is greater, a square, set at an angle of 
45 degrees (diamond shape). The dimension of the said square shall depend on the size of the 
package on which  the label is to be affixed.  The upper portion of square shall contain the 
following symbols and warning statements: 
(i) Pesticides belonging to Category I (Extremely toxic) shall contain the symbol of a skull 
and cross -bones and the word “POISON” printed in red. The following warning 
statements shall also appear on the label at appropriate place, outside the triangle – 
“KEEP OUT OF THE REACH OF CHILDREN”; “IF SWALLOWED, OR IF SYMPTOMS OF 
POISONING OCCUR CALL PHYSICIAN IMMEDIATELY.” 
(ii) Pesticides in Category II (Highly toxic) will contain the word “POISON” printed in red and 
the statement “KEEP OUT OF THE REACH OF CHILDREN”; shall also appear on the label 
at appropriate place, outside the triangle. 
(iii) Pesticides in Category III (Moderately toxic) shall bear the word “DANGER” and the  
statement “KEEP OUT OF THE REACH OF CHILDREN”; shall also appear on the label at 
suitable place outside the triangle. 
(iv) Pesticides in Category IV (Slightly toxic) shall bear the word “CAUTION”. 
The lower portion of the square shall contain the following colours: 
 
Classification 
of the 
Pesticides 
Medium lethal dose by the 
oral route (acute toxicity) 
LD 50 mg/kg body weight 
of test animal 
Medium lethal dose by 
the dermal route 
(dermal toxicity) LD 50 
Colour of 
identification  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 198 
 
mg/kg body weight of 
test animal 
brand on the 
label 
1 2 3 4 
1. Extremely 
Toxic 
10 – 50 1 – 200 Bright red 
2. Highly Toxic 51 – 500 201 – 2000 Bright yellow 
3. Moderately 
Toxic 
501 – 5000 2001 – 20000 Bright blue 
4. Slightly 
Toxic 
More than 5000 More than 20000 Bright green 
 
(g) The label shall be affixed in the package containing pesticides which are highly inflammable shall 
indicate that it is  inflammable or that the pesticides should be kept away from heat or open 
flame and the like. 
(h) The label of the big package shall be printed with indelible ink displaying all contents of Rule 
19(1)(i). The big package may also be packed in a secondary pack. 
(i) The label shall be printed at least in English and Hindi languages unless stated otherwise. The 
leaflets attached to the package containing pesticides shall be printed in Hindi, English and such 
regional languages in use in the areas where the said packages are likely to be stocked, sold or 
distributed. 
(j) Labelling of pesticides must not bear any unwarranted claims for the safety of the product or its 
ingredients. This includes statements such as ‘SAFE’, ‘ NON-POISONOUS’, ‘NON -INJURIOUS’ or 
‘HARMLESS’ with or without such qualified phrase as “when used as directed ”. 
2.4 The manufacturer is required to pack every container of the pesticide in the following manner:  
(a) The package shall bear the particulars as specified by the Controller 
(b) The container shall be packed and sealed such that the contents cannot be tampered with 
without breaking the seal. 
(c) The bags containing pesticide shall be stitched in such a manner that the contents cannot be 
tampered with or without visible break in the stitching. 
2.5 Any inscription or mark made by the manufacturer on the container, label or wrapper of any pesticide 
shall not be altered. 
C. Import of pesticides 
3.1 Pesticides shall only be imported through one of the following places:  
(a) Inland Container Depot, Gurugram, Haryana. 
(b) Chennai Port, Jawaharlal Nehru Port and Mumbai Port (Mumbai), in respect of pesticides 
imported by sea.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 199 
 
(c) Chennai International Airport (Chennai), Chhatrapati Shivaji International Airport (Mumbai),  
Indira Gandhi International Airport (New Delhi), in respect of pesticides imported by air into  
India. 
D. Sale through e-commerce 
4.1 A licensee may undertake sale of any pesticide through e -commerce entity for supply of pesticides to 
farmers. Such licensee shall comply with the provisions of the Insecticides Act and rules made 
thereunder as well as provisions of the Consumer Protection (E-Commerce) Rules, 2020 (as discussed 
under Error! Reference source not found. above). The e-commerce operator before engaging with the 
licensee for sale, shall verify the validity of the license issued by the concerned Licensing Officer of the 
respective state. 
E. Other Compliances 
In addition to the above requirements, the Pesticides Laws prescribe inter alia the following key compliances: 
5.1 No person shall manufacture or import the pesticides for supply, wherein: 
(a) the label provides for any false or misleading information (in the form of statement, design, 
graphic representation); 
(b) the package is deceptive with respect to its contents; 
(c) the pesticide is an imitation of another pesticide or is sold under the name of another pesticide; 
(d) the label does not provide for warning or caution necessary to prevent risk to human beings 
or animals; 
(e) the relevant information as required under the Insecticides Act is not displayed on the label in 
conspicuous manner or displayed as a customary condition of purchase and use ; 
(f) the registration number is different from the registration number of respective pesticide ; 
(g) the toxicity is higher than the prescribed level; or 
(h) the pesticide has been mixed or packed with any substance to alter its nature or quality or it 
contains any substance which is not covered under the registration.  
5.2 No person shall manufacture, import, formulate, transport, sell, use any pesticide enlisted in Schedule 
to the Pesticides (Prohibition) Order, 2018 (“ Pesticides Prohibition Order ”). The said Schedule to the 
Pesticides Prohibition Order is extracted in Annexure R (Pesticide Prohibition Schedule ) attached 
herewith.  
5.3 The manufacturers and distributors shall keep sufficient stocks of first aid tools, equipment, antidotes, 
medicine and injections to trat poisoning resulting from the inhalation, skin or eye contamination and 
swallowing. The workers shall be provided with protective clothing and respiratory devices in 
accordance with Rules 39 and 40 of the Insecticides Rules. 
5.4 Disposal of pesticides: The manner of disposal as prescribed under Insecticides Rules has been  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 200 
 
discussed hereinbelow: 
S. No. Description Manner of Disposal 
(a)  Surplus Material and washings The manufacturers, formulators and operators 
shall dispose the surplus and washings in safe 
manner which prevents environment or water 
pollution. 
(b)  Used packages The manufacturers, formulators and operators 
shall dispose the used packaged in safe manner 
which prevents environment or water pollution. 
Further, the used packages shall not be left outside 
to prevent their re -use and shall be broken and 
buried away from habitation. 
(c)  Date expired pesticides The date expired pesticides shall be kept by the 
licensee in a separate place demarked for the 
purpose with a declaration “date expired 
insecticides” to be exhibited conspicuously. The 
record of such stock shall be maintained in 
Appendix A to Form III. Suc h stock shall then be 
disposed of in a manner that is environment 
friendly, as prescribed by the Central Government. 
 
5.5 Conditions for storage : The following conditions with respect to the storage of fertilisers shall be 
followed: 
(a) Conditions of packaging while transporting: The pesticides shall be transported and stored in 
such a manner that they do not come in direct contact with food stuff or animal feed. The 
pesticides shall be packed in accordance with the conditions prescribed in the red tariff, when 
transported by rail. In case of any leakage, the transport agency shall take such measures to 
prevent poisoning and pollution of soil or water, if any. 
(b) Conditions for storage of pesticide: The packages shall be stored in separate rooms or premises, 
away from other articles. Such rooms or premises shall be well -built, dry, well-lit and ventilated 
and of sufficient dimensions. 
It is pertinent to note that no person shall manufacture, store or expose for sale or permit the 
sale or storage of any pesticide in the same building where any consumable article for humans 
or animals are manufactured, stored or exposed for sale. 
5.6 In case ‘Sulphur’ or its formulations are used as pesticide, all licenses shall observe precautions to 
prevent its theft; report the theft to the nearest police station, if any; and maintain separate register of  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 201 
 
the persons and their address, to whom it has been sold or distributed.  
5.7 All sales of pesticides shall be made by a bill or cash memo or credit memo in the manner prescribed 
under Rule 15 of the Insecticides Rules. Further, the importers and manufacturers shall maintain the 
stock register, books of accounts and register for sal e, manufacture or import of pesticides as per Rule 
Further, the Controller may direct the manufacturer or dealer to maintain the books, accounts and 
records relating to the manufacture and sale of the pesticides, to submit returns or statement or to 
produce the stocks, accounts or records, when so required for inspection in the manner specified by 
the Controller. 
  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 202 
 
ANNEXURE – O 
COMPLIANCE APPLICABLE ON FERTILISERS 
A. Authorisation or Registration of Dealers  
1.1 The authorisation letter and certificate of registration are required to be obtained for selling or carrying 
on the business of selling fertilisers under the Fertilisers Control Order 81, as discussed hereunder:  
(a) Authorisation of dealers : For the purpose of selling or carrying on the business of selling of 
fertiliser, every person including manufacturer, importer, pool handling agency, wholesaler and 
a retail dealer are required to obtain the authorisation letter from the Notified Authori ty, by 
filing the Memorandum of Intimation thereto along with the requisite fee and certificate of 
source. However, the applicant is required to complete a certificate course of fifteen (15) days 
from any State Agriculture Universit y or Krishi Vigyan Kendras or National  Institute of 
Agricultural Extension Management (MANAGE) or National Institute of Rural Development and  
Panchayati Raj (NIDPR) or Fertiliser Association of India or any other approved Government 
Institute, unless the applicant possesses Bachelor of Science in Agriculture or Chemistry or 
Diploma in Agriculture  Science from a recognised University or Institute or equivalent course 
having one of the subject on fertiliser or Agri-inputs, as notified by the State Government . The 
authorisation letter remains valid for a period of five (5) years. 
(b) Registration of Industrial Dealer: Every person intending to sell or offer to sell or carrying on the 
business of selling the fertilisers for industrial purposes i.e., for uses other than the fertilisation 
of soil and increasing productivity of crops, is required to obtain certificate of registration from 
the Controller, by making an application along with requisite fee and certificate of source 82. 
Pertinently, the Controller shall grant the certificate within a period of thirty (30) days from the 
date of receipt of application, subject to the conditions specified under Clause 9 of the Fertiliser 
Control Order. The certificate of registration is va lid for a period of five (5) years. Any person 
other than state government, manufacturer, importer or pool handling agency, holding the 
certificate of registration for industrial dealer, shall not carry on the business of selling the 
fertilisers for agricultural use. Further, the state government, manufacturer, importer and pool 
handling agency shall not carry on the business of selling the fertilisers for industrial and 
agricultural purposes in the same premises. 
B. Certificate of Manufacture 
2.1 The Fertiliser Control Order stipulates that every person shall obtain the certificate of manufacture to 
carry on the business of preparing any mixture of fertilisers and special mixture of fertiliser. However, 
the applicant is required to comply with the standards provided thereunder and possess the 
qualification as prescribed in accordance with Clause 14 of the Fertiliser Control Order. 83 The certificate 
 
81  Fertilisers Control Order available at https://www.faidelhi.org/general/FCO_24.pdf  
82  The term ‘certificate of source’ has been defined as “ a certificate given by a State Government, Commodity Board, manufacturer,  
importer, pool handling agency or, as the case may be, wholesale dealer indicating therein the source from which fertiliser f or 
purpose of sale is obtained.” 
83  Fertilisers Control Order available at https://www.faidelhi.org/general/FCO_24.pdf   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 203 
 
of manufacture is required to be obtained as discussed hereunder:  
(a) For preparation of mixture of fertiliser : The application for certificate of manufacture shall be 
filed before the registering authority in Form D along with the requisite fee. If the registering 
authority is satisfied with the application, it is required to issue the certificate of manufacture 
within the period of forty -five (45) days from the date of receipt of the application. The said 
certificate of manufacture for preparation of mixture of fertilisers remains valid for a period of 
three (3) years from its date of issuance. 
(b) For preparation of special mixture of fertiliser: The application for certificate of manufacture for 
preparation of special mixture of fertiliser shall be filed before the registering authority, in Form 
D along with fee and attested copy of requisition of purchaser. It is mandatory for such applicant 
to hold a valid certificate of manufacture of any mixture of fertilisers. The certificate of 
manufacture for preparation of special mixture of fertilisers remains valid for a period of six (6) 
months from its date of issuance, extendable for a total period of twelve (12) months.  
C. Restrictions on manufacture, sale, etc. of fertilisers 
3.1 The fertilisers, mixtures of fertilisers and special mixtures of fertilisers which do not conform to the 
standards prescribed under the Fertilisers Control Order, shall not be manufactured for sale, sold, 
offered for sale, stocked or exhibited for sale or distributed. 
3.2 No person shall sell, offer for sale, stock or exhibit for sale or distribute:  
(a)  Any fertiliser with a container which is not packed or marked in accordance with the standards 
prescribed in the Fertiliser Control Order and / or fertiliser whose label bears false claims, name 
of a fictious or non-existing company or firm; 
(b) Any imitation or substitute for another fertiliser under the name of which it is sold;  
(c) Adulterated fertilisers or substance which is not a fertiliser as a fertiliser;  
(d) Any fertiliser without exhibiting the minimum guaranteed percentage by weight of plant 
nutrient. 
3.3 The Central Government may from time to time prescribe separate specifications in respect of imported 
fertilisers and provisional fertilisers84, which remains valid for a period of three years. 
3.4 Customised Fertilisers: The Central Government may from time to time prescribe general specifications 
for customised fertilisers which remains valid for a period of up to four years. The prior permission is 
necessary for manufacturing any particular grade of customised fertiliser. The application for the above 
permission shall be made in Form Q to the Controller. The said permission remains valid for a period of 
three years. Further, the permission for manufacture and sale of Customised Fertiliser is granted to 
 
84   Order dated 10 October 2015 issued by the Department of Agriculture, Cooperation and Farmers Welfare  available at 
https://www.agriportal.cg.nic.in/agridept/ActandRules/Ammendments-Fertilizer-Control-Order-1985/2777%20(E)%20dt.%2010-
10-2015.pdf   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 204 
 
only such Fertiliser Companies whose annual production of fertilisers other than CFs is 5.00 lakh metric 
tonne. Such manufacturers can  set up manufacturing units of CF either on their own or through 
subsidiaries or joint venture through a  minimum stake of 51% in such joint ventures.  Further, it is 
important that the grades of customised fertilisers shall be based on soil fertility data maintained by 
the Ministry of Agriculture and Farmers Welfare or State Government. 85 
3.5 Bio Stimulant: No person shall manufacture or import any bio stimulant which has not been notified by 
the Central Government under the Fertilisers Control Order (Schedule VI). The Central Government 
shall specify the specification of bio stimulants in accordance with Clause 20-C of the Fertilisers Control 
Order. Further, to include any new bio stimulants under the Fertilisers Control Order, the manufacturer 
or importer is required to submit an application before the Control in Form G and in accordance with 
Clause 20-C. It is pertinent to note that the bio stimulant shall not contain any pesticide beyond the 
permissible limit of 1 ppm and any heavy metal beyond the maximum limit tabulated below:  
In mg/kg (maximum) 
Cadmium (as Cd) 5.00 
Chromium VI (as Cr) 50.00 
Copper (as Cu) 300.00 
Zinc (as Zn) 1000.00 
Lead (as Pb) 100.00 
Arsenic (as As2O3) 10.00 
3.6 Nano Fertilisers: All the nano fertilisers shall be manufactured in conformity to the standard set out by 
the Central Government and with the approval of the Controller. The specifications for nano fertilisers 
shall be notified by the Central Government which remains valid for a period up to three years. For the 
purpose of obtaining the approval of the Controller shall submit the application in Form G-4 along with 
a report of the State Agriculture University or of the Indian Council of Agricultural Research on multi -
locational and multi -crop bio efficacy trial of minimum one season and also a report from any of the 
NABL accredited laboratories on biosafety, biotoxicity and quality trial as per the guidelines issued by 
the Department of Bio -Technology. The manufacturer shall  make nano -fertilisers available to the 
 
85  Further reference may be made to the Guidelines for manufacture and sale of Customized Fertilizer under Clause 20’B’ of 
Fertiliser(Control) Order 1985 available at https://agriwelfare.gov.in/Documents/Guideline2013.pdf   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 205 
 
farmers in accordance with Clause 20-D of the Fertilisers Control Order. 
D. Packing and Labelling Requirements 
4.1 The manufacturer, importer and pool handling agencies shall comply with the following packing and 
marking requirements for containers of fertilisers, bio -fertilisers, organic fertiliser, non-edible de-oiled 
cake fertiliser or bio stimulant as prescribed un der the Insecticides Act read with Insecticides (Price, 
Stock Display and Submission of Reports) Order, 1986: 
(a) The fertiliser’ container shall be superscribed with words “Fertiliser” and shall bear only such 
particulars as may be specified by Controller. 
(b) The containers of bio-fertiliser/ organic fertiliser/ bio stimulant shall be packed with words “bio-
fertiliser”/ “organic fertiliser” or “ Non-Edible De -Oiled Cake Fertilizer ”/ “Bio stimulant” 
superscribed on them and shall bear only such particulars as may be specified by Controller.  
(c) The container/ bag shall be packed/ stitched and sealed/ tag sealed such that they cannot be 
tampered without breaking the seal. However, if the bag is stitched in such a manner that it 
cannot be tampered with without breaking the seal, the tag sealed shal l not be necessary. 
(d) The above fertilisers shall be packed in the manner as specified by the Central Government.  
E. Compliance under FMC Order 
5.1 The fertilisers can be taken to any place outside a state in accordance with the FMC Order under the 
authorisation issued by the Government of India in the Ministry of Chemicals and Fertilisers or the 
Director of Agriculture of a state government or any of ficer authorised by the state government. In 
addition to the above, it is pertinent to take note of the following: 
(a) Bringing in the physical and granulated mixtures of fertilizers in a state from another, is subjected 
to the authorisation allowing entry of the same issued by the Director of Agriculture or such 
other officer as authorised by the state government. 
(b) The Government of India may order any manufacturer, importer or supplier to move and sell 
fertilisers produced or imported by him in the manner that it may specify.  
(c) The distribution and movement of fertilisers shall continue to be monitored through online web 
based “Fertilisers Monitoring System.” 
F. Import and Export Requirements 
6.1 The import and export fertilisers classifiable under Chapter 31 of the First Schedule of the Customs 
Tariff Act, 1975 are subject to import and export policy prescribed under Chapter 31 of the Import Policy 
(Schedule I to ITC(HS)) and Export Policy (Schedule II to ITC(HS)). 
(a) Import Policy: The goods falling under Chapter 31 can be freely imported except the following:  
S. 
No. 
HS Code Description Importability Condition, if any  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 206 
 
(i)  31010091 Animal 
Dung 
Restricted - 
(ii)  31010092 Animal 
Excreta 
Restricted - 
(iii)  31021000 Urea, 
whether or 
not in 
aqueous 
solution 
 Import allowed through RCF and NFL 
subject to Para 2.20 of Foreign Trade 
Policy, 2015-2020.  
Import of Urea is also allowed through IPL 
for a period up to 31 March 2024. 
Import of Urea (for agriculture purpose) 
on Government Account shall be allowed 
either by designated State Trading 
Enterprise ( STE) itself, or through any 
entity/entities so authorized by the 
Department of Fertilizer for filing B ills of 
Entry at Indian ports. 
However, import of Technical Grade Urea 
(TGU) meant for non -agricultural 
purpose/ industrial use/ NPK 
Manufacturing shall be "Free". 
(iv)  31021010 Fertiliser 
grade, 
conforming 
to IS 5406 
STE Import allowed through RCF and NFL 
subject to Para 2.21 of Foreign Trade 
Policy, 2023. Import of Urea is also 
allowed through IPL for a period up to 31 
March 2025. 
Import of Urea (for agriculture purpose) 
on Government Account shall be allowed 
either by designated STEs itself, or 
through any entity/entities (Fertilizer 
Marketing Entities) so authorized by the 
Department of Fertilizers from time to 
time, for filing BEs at Indian ports. 
(v)  31021090 Other Free Import of Technical Grade Urea (TGU) 
meant for non -agricultural purpose/ 
industrial use/ NPK Manufacturing shall 
be Free 
(vi)  31023000 Ammonium 
nitrate, 
whether or 
Free However, i mport of Ammonium Nitrate 
having the chemical formula NH4NO3 or 
any combination containing more than  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 207 
 
not in 
aqueous 
solutions 
45% of Ammonium Nitrate by weight 
including emulsions, suspensions, melts 
or gels (with or without inorganic 
nitrates), and classified as explosive 
under Explosives Act, 1884, is subject to 
license from Chief Controller of 
Explosives under the Ammonium Nit rate 
Rules, 2012. 
 
(b) Export Policy: The export of goods falling under Chapter 31 may be subjected to the following 
policy conditions 1 and 2 of the Chapter: 
Policy Condition 1 : Export of the item produced from animal by -products is allowed to be 
exported to European Union subject to the issuance of “shipment clearance certificate” 
consignment wise by the CAPEXIL and submission of “health certificate” consignment wise to 
the buy er, issued jointly by C APEXIL and Regional Animal Quarantine Officer, Department of 
Animal Husbandry, Dairying and Fisheries, Ministry of Agriculture and Farmers Welfare, 
Government of India. 
Policy Condition 2: The Export of NP(16-20-0), NP(20-20-0), NP(28-28-0) and NP(23-23-0) is free 
provided the manufacturers of NP and NPK, as listed in Main Notes 1 at List C (refer to the export 
policy of Chapter 31), shall export their own manufactured NP and NPK subject to intimation to 
department of fertiliser about the quantity of export along with a self-declaration and certificate 
issued by statutory auditors stating that no concession/ subsidy has been claimed. Such 
certificate shall be produced before the customs at the time of export. 
The export of other NP Complex Fertilisers shall be exported on production of prior permission 
or NOC of the Department of Fertilisers. 
For determining the export policy for fertilisers falling under Chapter 31 of the Schedule II to 
ITC(HS) at DGFT Website86. 
G. Other Compliances 
In addition to the above requirements, the Fertilisers Laws prescribe inter alia the following key compliances: 
7.1 The dealers, manufacturers, importers and pool handling agencies shall maintain books of accounts, 
records, etc., with respect to their business and submit the same before the authorities, on directions 
of the Controller. Notably, a person holds certificat e of registration for retail sale, wholesale and for 
sale for industrial use, shall maintain separate books of accounts for these types of sales.  
7.2 For the purpose of bulk sale, it is pertinent to take note of the following:  
(a) The retail dealer may retain one bag or container of each variety of fertiliser in an open and 
unsealed condition for the purpose of bulk sale. 
 
86  Export Policy is available at https://www.dgft.gov.in/CP/?opt=itchs-import-export    
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 208 
 
(b) The manufacturer and importer may sell in bulk the fertiliser manufactured and imported by him 
respectively, to manufacturer or importer of mixture of fertilisers, compound/complex fertilisers 
or special mixture of fertilisers. 
(c) The Central Government (unless the municipality is the manufacturer of city compost), may 
authorise a manufacturer and importer for bulk sale of any fertiliser manufactured or imported 
by him to farmers directly. 
7.3 The fees shall be discharged in accordance with Clause 36 of the Fertiliser Control Order.  
7.4 For disposal of fertilisers, the reference shall be made to the following 87: 
S. No. Description Requirements under the Fertilisers Control Order 
(a)  Non-standard fertiliser The compliance pertaining to disposal of non-standard 
fertiliser shall be in accordance with Clause 23 of the 
Fertilisers Control Order.   
(b)  Fertiliser damaged during storage The compliance pertaining to reprocessing of fertiliser 
damaged during storage  shall be in accordance with 
Clause 23-A of the Fertilisers Control Order.   
(c)  Damaged and expired stock of bio -
fertilisers or organic fertilisers 
The compliance pertaining to disposal of damaged and 
expired bio-fertiliser and/ or organic fertilisers shall be 
in accordance with Clause 23 -B of the Fertilisers 
Control Order.   
 
7.5 The manufacturers, importers and pool agencies, in consultation with the Central Government, shall 
appoint an officer who shall be responsible for compliance with the provisions of Fertilisers Control 
Order. 
7.6 Before the import or within a period of fifteen days of import, the importer shall inform the Director of 
Agriculture of the relevant state where he intends to discharge the imported fertiliser, under intimation 
 
87  The Fertilisers Control Order is available at https://www.faidelhi.org/general/FCO_24.pdf   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 209 
 
to the Central Government, the following: 
(a) name of fertiliser; 
(b) name of the country of import; 
(c) name of manufacturer; 
(d) quantity to be imported; 
(e) date of arrival of the consignment; 
(f) name of the discharge port; 
(g) name, designation of authorized or responsible person along with mobile number;  and 
(h) any other information. 
7.7 The manufacturer and importer shall possess the minimum laboratory facility, as may be specified by 
the Controller. 
7.8 Further, some of the states have issued legislations governing the manufacture, sale and related 
activities pertaining to bio -fertilisers in their respective states such as Telangana Bio -Fertilisers 
(Monitoring and Quality Control) Act, 2006 and Andhra Pradesh Bio-fertilisers (Monitoring and Quality 
Control), Act, 2006.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 210 
 
ANNEXURE – P 
COMPLIANCES APPLICABLE IN RELATION TO SELLING NOTIFIED SEEDS 
A. Marking and labelling of the containers 
1.1 Every mark or label on the container shall contain the following: 
(a) a correct statement of the net content in terms of weight and expressed in metric system ; 
(b) date of testing; 
(c) if the seed in container has been treated in accordance with the Seed Act: 
• a statement indicating that the seed has been treated; 
• the commonly accepted chemical or abbreviated chemical (generic) name of the applied 
substance; and   
• if the substance of the chemical used for treatment, and present with the seed is harmful 
to human beings or other vertebrate animals, a caution statement such as “Do not use 
for food, feed or oil purposes”. The caution for mercurials and similarly toxic s ubstance 
shall be the word “Poison” which shall be in type size, prominently displayed on the label 
in red; 
(d) the name and address of the person who offers for sale, sells or otherwise supplies the seed 
and who is responsible for its quality; and 
(e) the name of the Notified Seed.  
1.2 The mark or label containing the particulars of the Notified Seed shall appear on each container of seed 
or on a tag or mark or label attached to the container in a conspicuous place on the innermost container 
in which the seed is packed and on every other covering in which that container is packed and shall be 
legible. 
1.3 Any transparent cover or any wrapper, case or other covering used solely for the purpose of packing of 
transport or delivery need not be marked or labelled. 
1.4 The mark or label shall not contain any statement, claim, design, device, fancy name or abbreviation 
which is false or misleading in any particular concerning the seed contained in the container . 
B. Other requirements 
2.1 Every person selling, keeping for sale, offering to sell, bartering or otherwise supplying any Notified 
Seed, shall keep over a period of 3 years a complete record of each lot of seed sold except that any seed 
sample may be discarded 1 year after the entire lot represented by such sample has been disposed of.  
2.2 The sample of seed kept as part of the complete record shall be as large as the size notified in the official  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 211 
 
Gazette. This sample, if required to be tested, shall be tested only for determining the purity .  
 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 212 
 
ANNEXURE – Q 
COMPLIANCES APPLICABLE IN RELATION TO ISSUANCE OF GIFT PPI 
A. Key compliances applicable to the PPI Issuers under the PPI Master Directions  
1.1. Registration of PPI Issuer . The PPI Master Directions requires any bank desirous of issuing PPIs, 
including gift PPIs, to seek prior approval from the RBI. Any non -bank entity desirous of issuing PPIs, 
including gift PPIs, is required to obtain authorisation from the RBI as a PPI i ssuer. The PPI Master 
Directions prescribe certain specific eligibility requirements for issuance of PPIs by non -banks. 
1.2. Anti-money laundering compliances. PPI issuers are required to adhere to the requirements under the 
KYC Master Directions. In this regard, PPI issuers must have a board -approved AML / KYC policy. The 
PPI issuer must maintain a log of all the transactions undertaken using the PPIs issued b y it, including 
any gift PPI, for at least 10 years. The PPI issuer shall also file Suspicious Transaction Reports (“ STRs”) 
to Financial Intelligence Unit-India (“FIU-IND”). 
1.3. Issuance and loading of PPIs. PPI issuer must have a clear board-approved policy for issuance of various 
types / categories of PPIs and all activities related thereto. Therefore, the PPI issuer must have a policy 
for issuance of gift PPIs also.  Further, PPI issuers are required to adhere to the following requirements 
specifically in respect of issuance and loading of gift PPIs: 
(a) Ensure that the name of the PPI issuer is prominently displayed along with the PPI brand name.  
(b) Not pay any interest on PPI balances. 
(c) PPI may be loaded by cash, debit to a bank account, credit and debit cards, PPIs and other 
payment instruments issued by regulated entities in India and shall be in INR only.  
(d) PPIs may be issued as cards, wallets, and in any such form / instrument which can be used to 
access the PPI and to use the amount therein. No PPI must be issued in the form of paper 
vouchers. 
1.4. Co-branding of PPIs. The co-branding arrangement must be as per the board approved policy of the PPI 
issuer. The policy must clearly lay down the roles, responsibilities and obligations of each co -branding 
partner. PPI issuer shall be liable for all acts of the co -branding p artner. The PPI issuer shall also be 
responsible for all customer-related aspects of the co-branded PPIs. PPI issuer is permitted to co-brand 
the PPIs with the name / logo of the company for whose customers / beneficiaries such co -branded 
instruments are to be issued. The name of the PPI issuer must be prominently visible on the co-branded 
PPI. Non-bank PPI issuer desirous of issuing co-branded PPIs must seek one time approval from the RBI. 
1.5. Specific compliances in relation to Gift PPIs . Prepaid gift instruments are subject to the following  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 213 
 
additional compliance requirements: 
(a) Maximum value of each prepaid gift instrument must not exceed INR 10,000.  
(b) These instruments shall not be reloadable. 
(c) Cash-out or refund or funds transfer shall not be permitted for such instruments.  
(d) KYC details of the purchasers of such instruments shall be maintained by the PPI issuer. Separate 
KYC would not be required for customers who are issued such instruments against debit to their 
bank accounts and / or credit cards in India. 
(e) Entities must adopt a risk -based board-approved approach in deciding the number of prepaid gift 
instruments which can be issued to a customer, transaction limits, etc.  
(f) The PPI issuer must provide the prepaid gift PPI holder the option to revalidate the gift PPI 
(including through issuance of new instrument) as per the board -approved policy of the issuer. 
(g) The features of gift PPIs must be clearly communicated to the PPI holder by SMS / e -mail / post or 
by any other means at the time of issuance of the PPI / before the first loading of funds.  
(h) 2-factor authentication / additional factor of authentication is not mandatory for gift PPIs.  
1.6. Validity and redemption. All issued PPIs, including gift PPIs, must have a minimum validity period of 1 
year from the date of last loading in the PPI. PPI issuers are free to issue PPIs with a longer validity. In 
case the PPI is issued in the form of card (with validity period mentioned on the card), then the customer 
must be given the option to seek replacement of the card. In case the PPI holder approaches the PPI 
issuer for refund of such amount, at any time after the expiry date of PPI, then the same mu st be paid 
to the PPI holder in a bank account. 
1.1 PPIs with no financial transaction for a consecutive period of 1 year must be made inactive by the PPI 
issuers after sending a notice to the PPI holder/s. These can be reactivated only after validation and 
applicable due diligence. 
1.7. Interoperability. Gift PPI issuers have the option to offer interoperability on the prepaid gift 
instruments issued by them. Where the PPIs are issued in the form of wallets, interoperability across 
PPIs shall be enabled through UPI; and where the PPIs are issued in the form of cards (phys ical or 
virtual), the cards shall be affiliated to the authorised card networks. 
1.8. Disclosure of terms. PPI issuers are required to disclose all important terms and conditions in clear and 
simple language (preferably in English, Hindi and the local language) to the holders while issuing the  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 214 
 
instruments. These disclosures shall include: 
(a) All charges and fees associated with the use of the instrument; and  
(b) The expiry period and the terms and conditions pertaining to expiration of the instrument.  
1.9. Grievance redressal. The framework shall include, inter alia, the following key obligations:  
(a) disseminate the information of customer protection and grievance redressal policy in simple 
language. 
(b) clearly indicate the customer care contact details, including details of nodal officials for grievance 
redressal (telephone numbers, email address, postal address, etc.) on website, mobile wallet 
apps, and cards. 
(c) provide specific complaint numbers for the complaints lodged along with the facility to track the 
status of the complaint by the customer. 
(d) initiate action to resolve any customer complaint / grievance expeditiously, preferably within 48 
hours and endeavour to resolve the same not later than 30 days from the date of receipt of such 
complaint / grievance. 
(e) in case of PPIs issued by banks and non -banks, customers shall have recourse to the  Reserve 
Bank - Integrated Ombudsman Scheme, 2021 for grievance redressal. 
   
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 215 
 
ANNEXURE – R 
SCHEDULE (LIST OF PROHIBITED PESTICIDES) TO THE PESTICIDES (PROHIBITION) ORDER, 2018 
 
Sl. No. Name of Pesticides Decision of the Central Government 
1.  Benomyl The registrations, import, manufacture, formulation transport, sell is 
prohibited and its use is completely banned from the date of 
publication of this Order. 
2.  Carbaryl The registrations, import, manufacture, formulation transport, sell is 
prohibited and its use is completely banned from the date of 
publication of this Order. 
3.  Diazinon The registrations, import, manufacture, formulation transport, sell is 
prohibited and its use is completely banned from the date of 
publication of this Order. 
4.  Fenarimol The registrations, import, manufacture, formulation transport, sell is 
prohibited and its use is completely banned from the date of 
publication of this Order. 
5.  Fenthion The registrations, import, manufacture, formulation transport, sell is 
prohibited and its use is completely banned from the date of 
publication of this Order. 
6.  Linuron The registrations, import, manufacture, formulation transport, sell is 
prohibited and its use is completely banned from the date of 
publication of this Order. 
7.  Methoxy Ethyl Mercury 
Chloride 
The registrations, import, manufacture, formulation transport, sell is 
prohibited and its use is completely banned from the date of 
publication of this Order. 
8.  Methyl Parathion The registrations, import, manufacture, formulation transport, sell is 
prohibited and its use is completely banned from the date of 
publication of this Order.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 216 
 
9.  Sodium Cyanide The registration, import, manufacture, formulation transport, sell and 
its use is completely banned for insecticidal purpose only from the 
date of publication of this Order. 
10.  Thiometon The registrations, import, manufacture, formulation transport, sell is 
prohibited and its use is completely banned from the date of 
publication of this Order. 
11.  Tridemorph The registrations, import, manufacture, formulation transport, sell is 
prohibited and its use is completely banned from the date of 
publication of this Order. 
12.  Trifluralin (i) The Registration, import, manufacture, formulation, transport, sell 
and its all uses except use in wheat shall be prohibited and completely 
banned from date of publication of this Order. 
(ii) A cautionary statement has to be incorporated in the label and 
leaflet that it is toxic to aquatic organism, hence should not be used 
near water bodies, aquaculture or pisciculture area. 
13.  Alachlor (i) No new certificate of registration to manufacture shall be issued 
after publication of this Order. 
(ii) No person shall import, manufacture or formulate Alachlor with 
effect from the 1st January, 2019. 
(iii) The use of Alachlor shall be completely banned with effect from 
the 31st December, 2020. 
(iv) It is toxic to aquatic organism, hence a cautionary statement 
should be incorporated on label and leaflets “toxic to aquatic 
organism hence should not be used near water bodies, aquaculture 
or pisciculture area. 
14.  Dichlorvos (i) No new certificate of registration to manufacture shall be issued 
after publication of this Order. 
(ii) No person shall import, manufacture or formulate dichlorvos with 
effect from the January, 2019. 
(iii) The use of dichlorvos shall be completely banned with effect from 
the 31st December, 2020.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 217 
 
(iv) It is very toxic to aquatic organism, hence a cautionary statement 
should be incorporated on label and leaflets that it is toxic to aquatic 
organism, hence should not be used near water bodies, aquaculture 
or pisciculture area. 
(v) A warning may be incorporated in the label and leaflet stating that 
this product is toxic to honey bees so do not spray during active honey 
bees foraging period of the day. 
15.  Phorate (i) No new certificate of registration to manufacture shall be issued 
after publication of this Order. 
(ii) No person shall import, manufacture or formulate Phorate with 
effect from the 1st January, 2019. 
(iii) The use of Phorate shall be completely banned with effect from 
the 31st December, 2020. 
(iv) It is very toxic to aquatic organism, hence a cautionary statement 
should be incorporated on label and leaflets that it is toxic to aquatic 
organism, hence should not be used near water bodies, aquaculture 
or pisciculture area. 
(v) A warning may be incorporated in the label and leaflet stating that 
this product is toxic to honey bees so do not spray during active honey 
bees foraging period of the day. 
(vi) A cautionary statement should incorporate in label and leaflet 
that this product is toxic to birds. 
16.  Phosphamidon (i) No new certificate of registration to manufacture shall be issued 
after publication of this Order. 
(ii) No person shall import, manufacture or formulate Phosphamidon 
with effect from the 1st January, 2019. 
(iii) The use of Phosphamidon shall be completely banned with effect 
from the 31st December, 2020. 
(iv) It is very toxic to aquatic organism, hence a cautionary statement 
should be incorporated on label and leaflets that it is toxic to aquatic 
organism, hence should not be used near water bodies, aquaculture 
or pisciculture area.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 218 
 
(v) A warning may be incorporated in the label and leaflet stating that 
this product is toxic to honey bees so do not spray during active honey 
bees foraging period of the day. 
(vi) A cautionary statement should incorporate in label and leaflet 
that this product is toxic to birds. 
17.  Triazophos (i) No new certificate of registration to manufacture shall be issued 
after publication of this Order. 
(ii) No person shall import, manufacture or formulate Triazophos with 
effect from the 1st January, 2019. 
(iii) The use of Triazophos shall be completely banned with effect 
from the 31st December, 2020. 
(iv) It is very toxic to aquatic organism, hence a cautionary statement 
should be incorporated on label and leaflets that it is toxic to aquatic 
organism, hence should not be used near water bodies, aquaculture 
or pisciculture area. 
(v) A warning may be incorporated in the label and leaflet stating that 
this product is toxic to honey bees so do not spray during active honey 
bees foraging period of the day. 
(vi) A cautionary statement should incorporate in label and leaflet 
that this product is toxic to birds. 
18.  Trichlorfon (i) No new certificate of registration to manufacture shall be issued 
after publication of this Order. 
(ii) No person shall import, manufacture or formulate Trichlorfon with 
effect from the 1st January, 2019. 
(iii) The use Trichlorfon shall be completely banned with effect from 
the 31st December, 2020. 
(iv) It is very toxic to aquatic organism, hence a cautionary statement 
should be incorporated on label and leaflets that it is toxic to aquatic 
organism, hence should not be used near water bodies, aquaculture 
or pisciculture area. 
(v) A cautionary statement should incorporate in label and leaflet that 
this product is toxic to birds.  
 KHAITAN & CO | COMPLIANCE HANDBOOK FOR ONDC NETWORK PARTICIPANTS 219 
 
 
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
This document has been created for informational purposes only. Neither Khaitan & Co nor any of its partners, associates or allied professionals shall 
be liable for any interpretation or accuracy of the information contained herein, including any errors or incompleteness. This document is intended 
for non-commercial use and for the general consumption of the reader, and should not be considered as legal advice or legal opinion o f any form 
and may not be relied upon by any person for such purpose. It may not be quoted or referred to in any public document, or shown to, or filed with 
any government authority, agency or other official body. 
 
 
www.khaitanco.com | © Khaitan & Co 2025 | All Rights Reserved. 
Ahmedabad  ·  Bengaluru  ·  Chennai   ·   Delhi-NCR   ·   Kolkata   ·   Mumbai  ·   Pune   ·   Singapore 

--- FILE: ONDC Network Participant Agreement | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/resource/final_ondc_network_participant_agreement.pdf ---

ONDC NETWORK PARTICIPANT AGREEMENT
Version History
Version Date Description
0.3 12th May 2022 Released to NPs
1.0 14th June 2022 - Added reciprocal protections for NPs’ IP- Removed clauses that were repeated- Made the non-disparagement clause less ambiguous- Clarified clauses on liability resulting from unfairtrade practices by Network Participants- Provision for termination on grounds of exposingONDC to liability made less ambiguous- Added indemnification process, and other relatedprovisions on settlement etc.- Removed phone calls as a method to serve notice- Defined the term “Buyer” which has been usedsynonymously with the term “Customer” in otherpolicies
1.1 28th June 2022 - Removed the reciprocal participation sub-clause inclause 1- Made the non-disparagement clause mutual- Simplified the indemnification process- Made the cessation of use of Marks after terminationof the Agreement mutual- Included Gateways under the definition of NetworkParticipant
1INTRODUCTION
This Network Participant Agreement (Agreement) is an electronic record published by OpenNetwork for Digital Commerce (ONDC) under the provisions of the Information Technology Act,2000andtherulesmadethereunder(asapplicable)andshallactasavalidagreementbetweenONDCandthe NetworkParticipants (hereinafter alsoreferredtoas Participant), as definedintheNetworkPolicy published by ONDC. This Agreement together with the Network Policy and TransactionalDocuments shall constitute the entire agreement betweenthe parties inrelationtothissubjectmatter.ONDC is an open network developed on open protocols based on open-source specifications withestablished registries, enabling wide-scale participation by digital commerce ecosystemplayers asprovidedinONDC's NetworkPolicy.TheONDCNetworkisowned,managedandmadeavailablebyONDC, a Section8companyregisteredundertheCompaniesAct,2013.ByutilisingoraccessingtheONDCNetwork, the Participant agrees tobe boundbythetermscontainedinthisAgreementandtheNetworkPolicyas amendedfromtime totime.ThisAgreementshalltakeeffectonthedateonwhichthe Participant’s registration with the ONDC Network is accepted or approved by ONDC.
1. GENERAL
1.1 ONDCshall provide access tothe Participants tothe ONDCNetworktoenable transactionsbetween the End Users, and between the Participants in accordance with the terms of thisAgreement, Network Policy and any other policies, specification or guidelines issued byONDC in this regard.
1.2 The Participant mustmeetthecriteriaaslaiddownintheNetworkPolicyforbeingeligibletoaccess and use the ONDC Network and to register with ONDC.
1.3 The Participant shall ensure compliance with and shall comply with all obligations andresponsibilities laid out inthe NetworkPolicyandother guidelines, specificationor policiesissued by ONDC from time to time.
1.4 The Participants shall complywithall requirements under the Applicable Laws, existingandfuture, with regard to and in connection with the services or products offered through theONDC Network.
2. OBLIGATIONS AND RESPONSIBILITIES OF ONDC
2.1 ONDCshall provideaccesstotheParticipanttotheONDCNetworkandreasonablyassisttheParticipant in its Interfacing to the ONDC Network. ONDC will endeavour to make theONDC Network available at all times on a best effort basis, however, ONDC does notpromise or guarantee anyuptime tothe Participants. ONDCas a networkfacilitatingentitywill provide a base framework of policies and guidelines for ONDC Network that allParticipants must comply with at all times.
2.2 ONDCshall alsohave the right tobuildandmaintainthe reputationledgerrankingbasedonthe quality of products and services provided by all Sellers, opting to participate in thereputation ledger, on the basis of data that the Participant may be requested to provide, inaccordance withthe ONDCNetworkPolicy.TheParticipantshallberesponsibleforensuringthe accuracy of data andtakingnecessaryconsents under the Applicable Laws. ONDCshallnot be held liable for any inaccuracies in the data hosted by the reputation ledger.
23. SERVICE / REGISTRATION FEES
3.1 In consideration of the services provided and grant of rights under this Agreement, theParticipant shall payONDCa service fee as providedinthe NetworkPolicy.TheParticipantacknowledges that in addition to the service fee, the Participants will be required to payONDC any other fee, as may be determined and notified by ONDC from time to time.
3.2 The Participant will be requiredtopayandsettle all relatedservice fees andanyotherfeeasprovidedinthe ONDCNetworkPolicy.ServicefeepayablebytheParticipanttoONDCshallbe exclusive of GST and will be charged separately on the service fee payable by theParticipant.
3.3 The Participant shall be responsible for allofitsexpensesinconnectionwiththisAgreement,unless stated otherwise.
4. INTELLECTUAL PROPERTY RIGHTS
4.1 ONDC hereby grants to the Participant a non-exclusive, royalty-free, non-transferable andlimited right, during the termof this Agreement, to use, reproduce and display the ONDCMarks as per the terms andconditions set out inthe NetworkPolicy. The Participant herebygrants toONDCa non-exclusive, worldwide, androyaltyfree licence for thedurationofthisAgreement to use, reproduce and display the Participant’s Marks including on ONDC'sNetwork and website in respect of the endeavours contemplatedwithinthis Agreement andthe Network Policy.
4.2 Provided that neither party to this agreement will alter any of the provided trademarks,(except to re-size trademarks tothe extent necessaryfor presentation, solongas the relativeproportions of suchtrademarks remainthe same) andwill complywiththe removal requestsas to specific uses of each part.
4.3 Notwithstanding the foregoing, the Participant must ensure compliance with the ONDCBranding Guidelines, as amended from time to time.
5. REPRESENTATIONS AND WARRANTIES
5.1 Each Party represents and warrants to the other Party that:
5.1.1 it has the fullcorporateright,power,andauthoritytoenterintothisAgreementandtoperform the acts required of it under this Agreement;
5.1.2 this Agreement will constitute alegal,valid,andbindingobligationofsuchPartythatis enforceable against such Party;
5.1.3 it has andshallmaintainallnecessarystatutoryandregulatorypermissions,approvalsand permits, that is necessary for the runningandoperationof its establishment forthe conduct of its operations;
35.1.4 it has and shall maintain all the title and ownership, licence, or right to use, asapplicable, in all the IPRassociatedwithit andthere is noneedfor anypayment orpermission, or authorizationrequiredfromanyother partyorentitytouse,distribute,or otherwise exploit in all manners permitted by this Agreement and/or NetworkPolicy;
5.1.5 all informationsubmittedbythePartiesistruthful,lawfulandaccurate,asonthedateof this Agreement;
5.1.6 it has compliedwithorwillensurecompliancewithallconditionsprovidedundertheApplicable Laws inorder toenableittolawfullyenterintoandexerciseitsrightsandperformits obligations underthisAgreement,andtomakethisAgreementadmissibleas evidence;
5.1.7 the fulfilment or compliance with the terms and provisions hereof, will not conflictwith, or result in a breach of the provisions of any agreement, instrument, order,judgment, decree, statute, law, rule, or regulationtowhichtheyare subject toor theIPRs of anythirdparty, or require anyconsent,approvalorotheractionbyanycourt,tribunal, administrative or Competent Authority; and
5.1.8 it shall not make any statement to defame or disparage the other Partyor adverselyaffect the other Party’s reputation, except when such statement is truthful and isreasonably necessary for the Party to enforce or defend its rights under thisAgreement, or is required by a court of law, mediator, arbitrator or regulatory orlegislative body with jurisdiction to order the Party to make such statement;E x p l a n a t i o n : Creation, maintenance and publication of the reputation ledger byONDC, or publication of any information or making any disclosures by ONDCinaccordance with the ONDC Network policy shall not constitute defamation ordisparagement under this clause 5.1.8.
5.2 TheParticipantrepresents and warrants to ONDC that:
5.2.1 the Participant has an application that is capable of integration with the ONDCNetwork and conforms to the ONDC Specifications;
5.2.2 it shall not exploit the rights granted under this Agreement in any manner notspecified in this Agreement or the Network Policy and any other policies,specification or guidelines issued by ONDC in this regard; and
5.2.3 it shall ensure compliance with the Network Policy.
6. INDEMNIFICATION
6.1. The Participant agrees tofullyindemnifyandholdharmlessONDCanditsaffiliatesandtheirrespective officers, directors, employees, and agents fromand against anyall direct claims,actions, losses, demands, suits, judgments, decrees, proceedings, damages, costs, expenses,
4penalties, liabilities (including, without limitation, reasonable legal fees) or causes of action(collectively,Claims) brought against or incurredby ONDC as a result of:
6.1.1. anyact offraud,wilfulmisconductorgrossnegligencebytheParticipantoranyofitsemployees, officers, agents, service provider or sub-contractors;
6.1.2. any breach by the Participant of anyof its obligations, covenants, representations orwarranties under this Agreement or the Network Policy;
6.1.3. any violation by the Participant or any of its employees, officers, agents, serviceprovider or subcontractors of any Applicable Law, rule or regulation;
6.1.4. anyuse of unfair trade practices bythe Participant, includingbut not limitedtofalseor misleading advertisements during offer, sales, fulfilment, or alleged breach ofrepresentation, or for any personal injury, death or property damage cause by theproduct or service provided by the Participant;
6.1.5. anyinfringement or unauthoriseduse of ONDCIntellectualPropertyorONDCMarkor ONDC Protocol Specifications by the Participant;
6.1.6. any losses and damages caused by the Participant’s APIs or App to the ONDCNetwork or other Participants;
6.1.7. anythird-partyclaims includingclaims byEndUsers or other Participants relatedtoservices and/ or functions that the Participant is liable toperformor provide toEndUsers or other Participants or its service providers under this Agreement or itsagreement with any third-party or End Users or other Participants;
6.1.8. claims byCompetent Authorityfor Tax, fines, penalties, sanctions or other remediesarising from or in connection with the Participant’s failure to comply with theAgreement, Network Policy or Applicable Laws; or
6.1.9. in case of any TDS by any Participant inrespect of service fees payable toONDC,any losses suffered by ONDC(including any Tax, expenses including legal cost orother charges) as a result of a failure of the Participant to timely deposit TDS, fileTDS returns, issue TDS certificates or adhere to any other compliances requiredinthis regard under Applicable Law.
6.2. Indemnification process:
6.2.1. Inthe eventofanyindemnifiableClaim,ONDCwillpromptlyprovidetheParticipantwith written notice of the Claim, and will notify the Participant within ten (10)business days of the receipt of the written notice relating to the Claim.
6.2.2. Any indemnification payment due under this Agreement shall be made infull (andwithout deduction for any counterclaim, defence, recoupment, or set-off) by theNetworkParticipant nolater thansixty(60) days after receiptofthewrittennoticeinaccordance with this clause unless objected by the Network Participant in writingwithin fifteen (15) days of receipt of the written notice from ONDC.
56.2.3. If the Network Participant objects tothe indemnificationinrespect of anyClaimasper Clause 6.2.2 above, then such dispute shall be settled in accordance with theprocedure set out in Clause 9 of this Agreement.
6.2.4. Any failure to notify the Network Participant as per this clause shall not constitutewaiver of suchClaims but ONDCshallnotbeentitledtoreceiveanyindemnificationwith respect to any additional loss occurred as a result of the failure to give suchnotice within the prescribed time period.
6.2.5. The NetworkParticipant is herebyauthorisedtohandleanddealwithallsuchClaimscovered under this Agreement.
6.2.6. The Network Participant shall be entitled to assume the defence of any matter onbehalf of ONDC, at its own Expense, provided written consent has been obtainedfromONDCfor anydefence onbehalfofONDC.TheNetworkParticipantinitssolediscretionshall have the right tosettle, compromiseordefenduntilfinaladjudicationany dispute or alleged liability for which a Claim for indemnification has been made.
6.2.7. The Participant agrees to cooperate in good faithanduse best efforts toensure thatONDC is indemnified and reimbursed for any and all Claims.
6.2.8. ONDCwill provide the Participant with all available information knowntoONDCrelating to the Claim, and agrees tocooperate ingoodfaithandprovide anyandallinformation available with it, as required for the defence of any Claim.
E x p l a n a t i o n : For the purposes of Clause 6, “Expense” shall mean all costs incurred in thedefence of any claim or action brought against ONDC, including lawyers’ fees.
7. LIMITATION OF LIABILITY
7.1. ONDC shall not be liable for any charges by any Participant in relation to any of thetransactions executed through the ONDC Network. Prima facie, the transactions on theONDCNetwork will be betweenthe EndUsers, andbetweenthe Participants. Accordingly,any liability for any claims with respect to or arising out of any transaction onthe ONDCNetwork including those raised by any End User will rest withthe contractingparties withrespect tothe transactionandwill be governedbythe terms andconditions of therespectiveParticipant. The Participants shall have no claimagainst ONDCwith respect to any lossesarising out of such disputes and it is hereby agreed that ONDC shall not be liable orresponsible for any such liability incurred by the Participant.
7.2. ONDCshall not be held responsible or liable for anyloss arisingout of the interruptionordisruption of the ONDC Network.
7.3. ONDCshall not be held responsible or liable for anyKYC/ AMLnon-compliance byanyParticipants or for anynon-compliance withApplicable Laws or the act of the Participant inrelation to the goods or services offered or sold through the ONDC Network.
67.4. Unless otherwise expresslyspecifiedinwriting, the ONDCNetworkisprovidedonan‘asis’basis, without any express or implied warranties in respect thereof. It is hereby mutuallyagreed between the Parties that under no circumstances shall ONDC be liable for anydamages or loss whatsoever, whether such damages or loss are direct, indirect, incidental,remote, consequential; or irrespective of whether any claim is based on loss of revenue,interruption of business or any loss of any character or nature whatsoever and whethersustained by the Participant or by any other person, as a result of the operation of thisAgreement.
7.5. Notwithstanding anything else contained in this Agreement or in any other document, theliabilityof ONDCtothe Participant, if any, or as maybe determinedbyacourtoflaw,shallbe limitedtothe fees paidbythe Participant toONDCunderthisAgreement,inthepastone(1) month preceding the claimtill the date of the incident whichresults inactual loss beingsuffered by the Participant.
8. TERM AND TERMINATION
8.1. This Agreement shall commence upon the completion andacceptance of registrationof theParticipant in the ONDCNetwork and shall continue, unless terminatedinaccordance withthis Agreement.
8.2. ONDC reserves the right to suspend the Participant fromthe ONDCNetwork after a dueprocess prescribed in the Network Policy for reasons as may be provided in the NetworkPolicy from time to time.
8.3. Either Partymayterminate this Agreement at anytime,withorwithoutcause,upon60days’written notice of termination to the other Party.
8.4. Without prejudice to other provisions of this Agreement and other rights or remedies toterminate this Agreement, ONDCmayat its sole discretionterminate this Agreement as perthe due process specified in the Network Policy by providing a written notice to Participant if:
8.4.1. the Participant fails to fully perform any obligation under this Agreement or theNetworkPolicyor violates anypolicyor procedure, providedthattheParticipanthasfailed to remedy such failure or violation withinfifteen(15) days followingwrittennotice from ONDC.
8.4.2. the Participant commits an offence or engages in any unlawful or unfair businesspractice or fails to comply with Applicable Law.
8.4.3. there is a material change in or transfer of the Participant’s management,shareholding, ownership, control or business operations, or the Participant becomesaffiliated, throughcommonmanagement, ownership, or control, withanypersonthatis not eligible to be part of ONDC Network;
8.4.4. the Participant’s actions expose ONDC to any liability, obligation, or violation ofApplicable Law.
8.4.5. the Participant undergoes an Insolvency Event; or
78.4.6. immediately, if the Participant (i) discontinuesitsapplication;or(ii)materiallyvariesthe manner in which it offers the application to its End Users; or (iii) offers theapplicationtoEndUsersinamannernotapprovedbyONDC;or(iv)theParticipant’sapplications fails to meet security requirements and threatens safety of the ONDCNetwork; or (v) stops availing the ONDCNetwork and its associated services fortransactions in the ONDC Network.
8.5. Upon termination of this Agreement:
8.5.1. All rights and obligations incurred under this Agreement shall cease immediately.
8.5.2. Termination shall not affect any accrued rights or obligations of the parties.
8.5.3. The Participant herebypermits ONDCtouse or process all informationstoredintheONDCRegistry, as deemed fit by ONDC, inaccordance withApplicable Laws. Tothis extent, the Participant shall obtainnecessaryconsents under Applicable Lawforsuch continued use of the information by ONDC.
8.5.4. Each Party shall promptly return or destroythe Confidential Informationrelatingtothe other Party, as may be requested by the other Party.
8.5.5. The Participant’s account in the ONDCNetwork shall be immediately deactivated,andthe Participant will cease touse or access the ONDCNetwork, ONDCMarksorany related services provided, including but not limitedtooptional tools or featuresprovided by ONDC. Additionally, ONDC will also cease to use any Participant’sMarks upon termination except as provided in the clause 8.5.3 above.
8.5.6. The Participant will clear any pending payments within 30 days fromthe date oftermination.
8.5.7. The NetworkParticipantshallnotdiscloseordivulge,eitherdirectlyorindirectly,anyinformation regarding the ONDC Network which is not available on the publicdomain.
9. GOVERNING LAW AND DISPUTE RESOLUTION
This Agreement shall be governed by the laws of India for the time being in force. Intheevent ofanydispute,controversyordifferencebetweenthePartiesarisingoutoforrelatingtothis Agreement, includinganydispute relatingtothe validityor existence of this Agreementandanynon-contractualobligationsarisingoutoforinconnectionwiththisAgreementortheNetworkPolicy(Dispute), suchPartyshall be entitledtorefertheDisputetoarbitrationbyanotice to the other Party, to be finallyresolvedinthe manner set out inthe NetworkPolicyandthe rights andobligations of the Parties shall remaininfull force andeffect pendingthefinal award in such arbitration proceeding.
Prima facie, the transactions on the ONDC Network will be between the End Users, andbetween the Participants. The Participants agrees that ONDCwould not be a party to anydispute arising between the Participants or with the End Users.
8Subject totheDisputeResolutionchapter,thecourtsinDelhishallhaveexclusivejurisdictionfor any Dispute between Participant and ONDC in reference to this Agreement or theNetwork Policy.
10. MISCELLANEOUS
10.1. Assignment: The Participant shall not assign or transfer the whole or any part of thisAgreement or anybenefit, interest, obligation, or liabilityinorunderthisAgreementwithoutthe prior written consent or permission of ONDC. ONDCwill have the rights toassignortransfer this Agreement, inwhole or inpart,includingtherightsandobligationsanddutiesinthis Agreement to any person or entity in case it is legally required under any lawor asdirected by Competent Authority.
10.2. Force Majeure:NotwithstandinganythingelsecontainedinthisAgreement,ONDCshallnotbe liable for any damages, loss of profit or business, whether direct or indirect, whatsoeverarising out of Force Majeure Events or other similar circumstances, directly or indirectlyaffecting ONDCand/or the ONDCNetwork. Force Majeure Events or other events beyondONDC’s control that causes anyhindrance, delay, or complicationinthe maintenance of theONDCNetwork or related services entitles ONDCtosuspendor limit access tothe ONDCNetwork and related services until further notice.
10.3. Severability: If any term, provision, or covenant contained in this Agreement or theapplication thereof to any person or circumstances shall, to any extent, be construed to beinvalid or unenforceable in whole or inpart, thensuchterm, provisionor covenant shall beconstruedina manner as topermit its enforceabilityunder the Applicable Lawtothe fullestextent permitted by law. In any case, the remaining provisions of this Agreement or theapplicationthereof toanypersonor circumstances, other thanthose towhichtheyhavebeenheld invalid or unenforceable, shall be deemedtobe severedfromthis Agreement andshallremain in full force and effect.
10.4. No Waiver: The failure of ONDC to exercise or enforce any right or provision of thisAgreement shall not constitute a waiver of such right or provision.
10.5. NoImpliedTerms: EachPartyacknowledgesthatnorepresentations,inducements,promisesor agreements, orally or otherwise, have beenmade bythe other Party, or anyone actingonbehalf of the other Party, which are not embodied herein and that pertain to the matterscovered by this Agreement.
10.6. Amendment: ONDCreserves the right tochange, modify, amend, or updatethisAgreementor NetworkPolicies fromtime totime andsuchamendedprovisions of thisAgreementshallbe effective immediatelyuponbeingpostedonONDC’swebsite.TheParticipant’scontinueduse of the network services will be deemed to signify their acceptance of the amendedprovisions of this Agreement.
10.7. Survival: The provisions of Clause 4 (Intellectual Property Rights), Clause 5(Representations and Warranties), Clause 6 (Indemnification), Clause 7 (Limitation ofLiability), Clause 8 (Term and Termination), Clause 9 (Governing Law and DisputeResolution) andother representations, warranties, covenants,andprovisionscontainedherein
9that by their nature survive or are required to supplement the above mentionedClauses formaking them effective, shall survive the expiry or termination of this Agreement.
10.8. Language: The languageofthisAgreementandalloralandwrittencommunicationrelatedtothis Agreement, including all deliverables, reports and other documents required to besubmitted in accordance with this Agreement, shall be in English.
10.9. Notice: The Participant must send all notices and other communications relatingtoONDCNetwork by email, the contact us forms, or similar means specifiedbyONDC. ONDCmayalso communicate with the Participant in connection with their platformelectronically andthrough any other media, and the Participant consents to such communications. Forcontractual purposes, the Participant consents to receive such communications through anymode including e-mail. Any notice, demand, or other communication given or made underthis Agreement shallbeinshallbeinwritingandshallbedeemedeffectivelygivenwhensentto the last notifiedaddress by(a) electronic mail onthe date onwhichthe electronic mail issent, or (b) one (1) day after deposit with a nationally recognized overnight courier,specifying next day delivery, with written verification.
10.10. Relationship: The relationship between ONDC and the Participant is that of independentcontractors dealingat arm's lengthandnothinginthis Agreement shall constitute the Partiesas partners, joint venture, or co-owners, or constitute either Partyas the agent, employee, orrepresentative of the other.
10ANNEXURE A
DEFINITIONS
In this Agreement or the Network Policy, unless the context otherwise requires capitalizedterms shall have the following meanings:
Applicable Law shall mean any and all laws, including but not limited to the ConsumerProtection Act, 2019, Consumer Protection (E-Commerce) Rules, 2020, InformationTechnology Act, 2000 and rules framed thereunder, Legal Metrology Act, 2009 and rulesframed thereunder, Information Technology (Reasonable Security Practices and Proceduresand Sensitive Personal Data or Information) Rules, 2011, Foreign Exchange Management(Non-Debt Instruments) Rules, 2019, Foreign Direct Investment Policy, other statutes,directives, regulations, decisions, legislations, regulatory rules, orders, judgments, decrees,frameworks, code of practice, guidelines or industry standards as issuedbyGovernment ofIndia, any State Government in India and/or any other statutoryandregulatoryauthorityinIndia from time to time and are applicable to a Party, the services and /or arrangementscovered under the Agreement.
Applicant means a person as defined in the chapter of the Network Policy titled“Onboarding, compliance requirements and certification requirements”.
Buyer Side Applications /BuyerAppsmeansallplatformsorapplicationswhichenabletheCustomer to purchase any goods or avail any service on the ONDC Network.
Competent AuthoritymeansthegovernmentofanycountryandincludestheGovernmentofIndia, or any Central or State Government,; any person, authority or body exercisinggovernmental, political, executive, legislative, quasi-judicial, regulatory, statutory or taxauthorities or administrative functions of or pertaining to government, including anygovernment or local authority,regulatoryauthority,court,tribunalorarbitraltribunal,agency,department, board, commission or instrumentality of India.
Confidential Informationof eachPartyshallmeananyandallinformationanddatarelatingto Customers, End-Users, Sellers, Service Providers, payment information, documents,software or application or other proprietary material, experience and know-how, dealings,transactions, or affairs of or relatingtosuchPartydisclosedor sharedbysuchPartywiththeother Party in relation to the Agreement, whether or not marked as confidential.
Customer / Buyer shall mean the registered users of the Buyer App accessingthe ONDCNetwork to purchase any good or avail any service offered by Sellers on the Seller App.
End User shall include a Customer, Seller or a Service Provider whois registeredwiththerespectiveParticipant.
Force Majeure Events shall meanevents suchastheoccurrenceofafire,flood,earthquake,embargo, labour dispute, strike, act of sabotage, terrorism, riot, civil unrest, accident, war orthreat of war, act of God or public enemy, pandemic or epidemic or lockdowns or othergovernment actionsoranyothersimilarcausebeyondaParty’sreasonablecontrol,whensuchevent impacts a Party’s obligations to perform its obligations under the Agreement.
11Gatewayshall meanthe technologyprovider that will ensure discoverabilityofallSellersinthe ONDCNetworkbymulticastingthe searchrequestreceivedfromBuyerApptoallSellerAppandvice-versa, basedoncriteria, includingbut not limitedto, location, availability,andother customer preferences as provided for in the Network Policies of ONDC
Goods and Service Taxor GSTshall meanthe Taxor cess leviedunder GSTLaws bytheCompetent Authority in the Republic of India on supply of goods or services or both.
GST Laws shall mean the Central Goods and Services Tax Act, 2017, the relevant StateGoods and Services Tax Act, 2017, the Integrated Goods and Services Tax Act, 2017, therelevant Union Territory GoodandServices TaxAct, 2017andthe Goods andServices Tax(Compensation to States) Act, 2017 and the rules and regulations framed thereunder.
INRshall mean Indian Rupee.
Interfacing shall mean the establishing ONDC- API communication of the Participant’ssystems withONDCNetworkbyadheringtoONDCSpecificationstoenabletransactionsonONDC Network and the terms, Interface, Interfaced, Interfacing shall be construedaccordingly.
Intellectual Property means and includes any and all copyright, script, story, soundrecording, audio-visual recordings, images, pictures, music, lyrics, titles, slogans, and allother artistic, literary, dramatic, vocal andmusical materials, includinganycinematographicfilms or recordings, background score, song elements; trademarks, tradenames, domainnames, service marks, brands, designs, includingall setdesigns,productiondesigns,costumedesigns; goodwill, know-how, concepts, ideas, and all other intellectual property and otherancillary assets as recognised under Applicable Law, and in industry usage or otherwise.
Intellectual Property Rights or IPRshall mean all past, present, and future rights of thefollowingtypes,whichmayexistorbecreatedunderthelawsofanyjurisdictionintheworld:(a) rights associated with works of authorship, including exclusive exploitation rights,copyrights, moral rights, and mask work rights; (b) trade secret rights; (c) patent andindustrial property rights; (d) trademarks, service marks, logos, andtrade name andproductname rights and similar rights; (e) other proprietary rights in intellectual property of everykind and nature; and (f) rights in or relating to registrations, renewals, extensions,combinations, divisions, andreissues of, andapplications for, anyof the rights referredtoinclauses (a) through (e) of this sentence.
Insolvency Eventshall mean in relation to a Person,shall mean where:
1. suchPersonis unable, or is deemedbyanycourt or tribunal ofCompetentAuthorityto be unable, or admits in writing its inability, to pay its debts as they fall due; or
2. any action, legal proceedings or other procedure or any step is taken in relation to:
(a) the suspension of payments, moratoriumof any Indebtedness, winding-up,dissolution, administration, provincial supervision, or reorganisation(bywayof a voluntaryarrangement, scheme of arrangement or otherwise) relatingtosuch Person; or
12(b) the appointment of a receiver, administrative receiver, interim resolutionprofessional, resolution professional, liquidator, official liquidator,administrator, compulsory manager, provincial supervisor, or similar officerin respect of such Person or substantially all of its assets or undertakings; or
(c) enforcement of any encumbrances created by such Person on its assets orundertakings; or
(d) the passage of a resolution by the members of the Person to initiate avoluntary liquidation process in relation to the Person; or
(e) filing of a petition or application for insolvency of the Person before anyCompetent Authority, whichis not dismissedbytheGovernmentalAuthoritywithin 30 days from the date of such filing, or, with respect to a naturalPerson, declaration of bankruptcy of that Person; or
(f) or any analogous procedure or step is taken in any relevant jurisdiction.
3. any expropriation, compulsory acquisition, nationalisation, attachment, sequestration,distress, or execution over any assets of such Person is undertaken.
Network Participants / Participants shall mean the participants on the ONDCNetworkincluding Gateways, Buyer Side Application, Seller Side Applications, NP-ISN, NP-MSN,and NP-BN.
NetworkParticipant- InventorySeller Node(NP-ISN)isanentitywhoisregisteredontheONDC network and acts as the “seller on record” with respect to the goods and servicesofferedbythemtoanybuyer accessingthe NetworkfromanyNP-BN(definedbelow)fromtheir own inventory which is either fromtheir own production or obtained procured fromother merchants / service providers.
Network Participant- Market Place Seller Node (NP-MSN) is anentitywhois registeredon the ONDCnetwork and represents itself and acts as the marketplace withrespect tothegoods andservicesofferedbythirdpartymerchants/serviceproviderstoanybuyeraccessingtheNetworkfromanyNP-BN.InthiscasetheNP-MSNwillnotbe“selleronrecord”,butthethird-party merchants/ service providers will be the “seller on record”
Network Participant –Buyer Node (NP-BN) is anentityregisteredinthe ONDCnetworkandenablesanypersontosearchforandbuyproductsorservicesontheONDCnetworkfromany NP-ISN / NP-MSN.
Network Policyshall meanthe policyframeworkdevelopedbyONDCinconsultationwithvarious Network Participants to lay out the rules and code of conducts that all NetworkParticipants must ensure compliance with. ONDCmayupdate the saidNetworkPolicyfromtime-to-time.
ONDC-Application shall mean the Buyer Side Applications and Seller Side ApplicationsdevelopedanddeployedbytheParticipantforprovidingservicesaspartofONDCnetworktotheir clients, or both, as may be applicable.
13ONDC - Application Programming Interface (ONDC-API) shall mean applicationprogramming interface compliant with ONDC Specifications, including protocols,specifications and related documentation provided by ONDC.
ONDCMarks shall meanthe relevant trademarks and/or servicemarks,brandnames,tradenames, whether registered or unregistered, owned, or licensed, and any other marks asprovided in writing by ONDC.
ONDC Network shall mean the open, interoperable network established, facilitated,managed, made available and owned by ONDC for enabling digital commerce.
ONDCRegistryshall meana digital list continuouslyupdatedandmaintainedbyONDCforthe benefit of the various users with digital access enabled through pend APIs for easyintegration. There would be multiple registries including but not limited to the registry ofParticipants, Policies, Sellers etc.
ONDC Protocol Specifications shall mean the functional and technical specifications andAPI fortheParticipantsandGatewaysp r o c e d u r e s andprotocolsprescribedbyONDCthatarenecessary toenable transactions onthe ONDCNetwork, whichshall be providedbyONDCto the Participant.
Participant’s Marks shall meanthe relevant trademarks and/or service marks inrelationtothe Agreement or Network Policy as provided to ONDCbythe Participant inwritingfromtime to time.
Party shall mean either ONDCor the Participants that enters intothe Agreement andshallcollectively be referred to as theParties.
Person shall mean any individual, sole proprietorship, partnership, unincorporatedassociation, unincorporated syndicate, unincorporated organisation, body corporate,corporation, company, limited liability partnership, limited liability company, joint venture,Competent Authority, trust or any other entity or organisation and a natural person in hiscapacity as trustee, executor, administrator, or other legal representative.
Product shall mean any goods or services made available for sale and purchase by theParticipants through ONDC network.
Seller shall mean any seller registered with a Seller Side Network Participant to offerproducts or services throughONDCnetwork, includingserviceproviderasdefinedundertheConsumer Protection Act, which can be searched for, discovered, and procured by Buyersregistered with Buyer Side Applications.
Seller Side Applications / Seller App means all platforms or applications of NetworkParticipant NP - ISN/ MSNthat, which allows the sellers to publish their product/ serviceinventory, pricing, andother terms of transactionandenables the sellers or anyotherserviceproviders, including but not limited to logistics service providers, totransact onthe ONDCNetwork.
Technology Service Providers (TSP) shall include entities who provide a softwareapplication (either stand alone or through cloud) and who do not act or represent as amarketplace tothe potential or actual buyers, but onlyas anoutsourcedsoftware providerto
14the NP-ISN, NP-MSNor NP-BN. Any other services to the NP-ISN, NP-BNor NP-MSNrelated to their business offered byTSPandprocuredbyNPshall be a private arrangementbetween these parties and will not form a part of ONDC network agreement and policies.
Taxor Taxationmeans all forms of taxation, impositions, duties, imposts, contributionsandlevies in the nature of taxation including without limitation income tax, transfer taxes,withholding tax, value addedtax, sales tax, central sales tax, service tax, goods andservicestax, customs andexcise duties, otherlegaltransactiontaxes,realestatetaxes,othermunicipaltaxes andduties, andanyother type of taxes andduties, or anyfuturetaxwhichisinlieuof,or supplants or replaces anysuchtaxtogether withanyinterest,penalties,surcharges,cessorfines relating thereto, due, payable, levied, imposed upon or claimed to be owed by anyCompetent Authority and Taxes means all of them.
Transactional Documents shall mean the Agreement, the Network Policy, the other termsand conditions, any document incorporatedbyreference intoanyof the foregoingincludingany other agreement.
15

--- FILE: Frequently asked questions on the Network Participant Agreement | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/resource/frequently_asked_questions_on_the_network_participant_agreement.pdf ---

Frequently asked questions on the Network Participant Agreement (NPA/NP 
Agreement) 
 
 
 
Version History 
 
Version Date Description 
1.0 28th June 2022 Released with NP Agreement V1.1 
1.1 29th December 
2023 
1. Added clarifications on: (a) how to read 
the NP Agreement and governance in 
ONDC Network; and (b) IP related 
clauses in the NP Agreement 
2. Restructured the clause to enhance and 
improve readability 
 
 
  1. How to read and interpret the NP Agreement? 
Open Network for Digital Commerce (ONDC), a Section 8 company under the Companies Act, 2013, is an 
initiative aimed at promoting open networks for all aspects of the exchange of goods and services over a digital 
network. In this regard, ONDC manages two aspects: (a) ONDC Protocol - underlying technology or technical 
standards that enables NPs to interface/communicate with each other, and (b) ONDC Network - means open, 
interoperable network established, facilitated, managed, made and owned by ONDC for enabling participants to 
interface/communicate with each other through the ONDC Protocol. The NP Agreement involves recognizing 
its nature as a means for entities to access the ONDC Network (i.e. interface with other NPs using the ONDC 
Protocol), similar to user-provider relationships in other network services.  
Notably, the NP Agreement does not establish a vendor-client relationship between the NP and ONDC. Rather, 
the NP Agreement grants the entity signing it access to the ONDC Network. To comprehend the NP Agreement 
effectively, it is helpful to draw an analogy to other network services, such as telecom networks, social 
networks, or similar network providers. 
2. How is the ONDC Network Governed? 
There are three-tiers of rules that govern the conduct of parties to a transaction conducted through the ONDC 
Network. The three tiers are depicted in Figure below. Governance for each tier of these rules consists of 
processes for making the rules, 
processes for administering 
them and processes for 
enforcing them. 
In the ONDC context, the 
Transaction-level Contract 
governs the terms of an 
individual transaction between 
NPs for the purchase and sale of 
goods/services, but the ONDC 
Network Policy governs the 
general rules of engagement on 
the Network. Further, this entire 
construct operates within the 
confines of applicable laws. 
These three layers of rules are intended to ensure that participants conduct themselves in a fair, predictable, 
transparent and consistent manner. 
 
3. What is the ONDC Network Policy? 
ONDC Network Policy is the compilation of all policies governing the ONDC Network which is developed by 
ONDC in consultation with various NPs and which lays out rules and code of conduct that must be complied 
with by NP. It contains the operational details of how the ONDC Network will function, such as the roles and 
responsibilities of NPs, code of conduct and ethics, governance processes, how transactions will take place etc. 
The Network Policy is thematically arranged. ONDC Network Policies are available on the ONDC website. 
While the NPA will be a static document, the Network Policies will evolve and be updated over time as the 
Network expands and matures. 
4. What is a Transaction-Level Contract? 
A Transaction-level Contract is a digitally-signed, machine-readable contract executed through the ONDC 
Protocol between the Buyer App and Seller App on behalf of the buyer and seller to facilitate purchase and sale 
of goods/services on Network with respect to one single transaction and covers various reference terms that are 
typical across commercial contracts and also configurable terms that can be customized by contracting parties. 
ONDC is not a party to that transaction and does not have visibility on the terms agreed upon by the parties. 
However, the terms of the contract cannot be in violation of the Network Policy or the NP Agreement overall. 
5. Why is ONDC asking the NP to indemnify ONDC against claims, but not indemnifying the NP against 
claims brought against the NP? 
As stated in answer to Q1, ONDC plays a facilitator role and it does not operate any pieces of infrastructure or 
any applications or involve itself in any transactions. The only components of the Network for which ONDC is 
responsible are the ONDC Registry and the ONDC Protocol Specifications. Notably, ONDC has no visibility of 
transaction-level activity on the ONDC Network. Most data-flows in the ONDC Network are peer-to-peer, 
meaning the information flows directly between NPs. The only exception is the process of search and discovery 
which passes through one of the Gateways to perform a look-up on the ONDC Registry.  
It is worth noting that ONDC Registry look-up may or may not be performed for every transaction. The entries 
in the ONDC Registry are highly cacheable since they do not change frequently. The only entries in the Registry 
that have a limited validity period are the NPs’ public keys, and the validity period is available in the Registry 
itself, which means it is highly predictable. So in practice, NPs can and do cache the Registry data, meaning 
look-ups at the time of actual transactions are likely to be performed on the cached data. The implication is that 
ONDC cannot find out about actual 
searches being conducted.  
ONDC has to be viewed akin to a utility, 
such as an electricity distributor, or 
internet service provider, in its operation 
of the Registry and as a standard-setting 
body (such as IETF) with respect to the 
Protocol. ONDC will not be selling any 
products or services by itself, or running 
any promotional offers etc.  
ONDC merely provides access to the 
Network. With respect to transactions 
between users and sellers/service 
providers on the ONDC Network, it is 
worth noting that ONDC is not a party to 
these transactions nor does it have 
visibility or control over them. Moreover, 
the use of a participant's IP by ONDC is solely for the purpose of indicating that the entity is onboarded on the 
ONDC Network. Therefore, the indemnity clause in the NP Agreement is structured taking into account this 
limited involvement of ONDC.  
To sum up, ONDC cannot indemnify the NP against any action brought against the NP and/or any loss, damage 
etc. suffered by NP. Furthermore, given ONDC's not-for-profit status and its non-contributory role in these 
risks, such contractual provisions are essential for ensuring the effective and responsible functioning of the 
ONDC Network. 
6. Why is ONDC asking the NP to indemnify it against third-party claims in relation to the NP’s obligation to 
provide a product/service (clause 6.1.7) if it doesn’t have privity of contract with the End Users?  
As stated in the answer to Q 5, ONDC is merely a network enabler. It will not be a party to any transactions on 
the network. However, apps that transact using the ONDC Network may use ONDC’s Marks etc. Given the 
unbundled, decentralised nature of the network there might be instances where an NP or an End User raises 
claims against ONDC for actions and/or omissions that are attributable to another NP on the Network. This is 
despite the fact that ONDC is neither a party to the transaction nor has any visibility or control over transactions 
over the ONDC Network. Similarly, it is possible that ONDC may face regulatory or law enforcement actions 
due to Network Participant’s non-compliance with respective regulatory and statutory obligations. Given that 
ONDC neither has any control of the interface available to end-users (i.e. buyers/consumers and sellers/service 
providers) nor is it involved in the transaction, the said clause safeguards ONDC against situations which would 
otherwise place ONDC in a vulnerable situation on account of breach of the law and/or due to the act or 
omission of the NP, without any fault on its part. 
7. Why will ONDC not bear liability for disruptions to the Network? 
As stated in the answer to Q 5, ONDC is merely a network enabler. The Registry is the only active component 
of the network that ONDC will operate. The role of the Registry in any given transaction begins and ends with 
being a reference for the Gateway to look-up Seller NPs that fit the parameters for a given search request. After 
that point, ONDC is not involved in the transaction - i.e. in the Buyer selecting a seller of choice, confirming an 
order, making a payment, the respective NPs fulfilling the order etc. For these reasons, ONDC cannot take on 
liability for losses arising out of disruptions to the Network. It is worth noting that ONDC Registry look-up may 
or may not be performed for every transaction. The entries in the ONDC Registry are highly cacheable since 
they do not change frequently. The only entries in the Registry that have a limited validity period are the NPs’ 
public keys, and the validity period is available in the Registry itself, which means it is highly predictable. So in 
practice, NPs can and do cache the Registry data, meaning look-ups at the time of actual transactions are likely 
to be performed on the cached data.  
Moreover, it is crucial to clarify that ONDC does not manage or operate any physical infrastructure. As 
explained above, in practice, the entire communication within the ONDC Network operates on a peer-to-peer 
basis, where information is exchanged digitally without reliance on a central physical infrastructure. This virtual 
nature ensures that disruptions associated with physical networks, such as maintenance issues or geographical 
limitations, are nonexistent. The decentralized and digital architecture of ONDC, combined with the peer-to-
peer communication model, reinforces the rationale behind the liability clause, as disruptions to the network, in 
the traditional sense, are mitigated by its inherent design. 
Therefore, the liability clause is drafted keeping in mind ONDC’s involvement in transactions on the ONDC 
Network. 
8. Why is the liability for NPs not capped? 
It is not possible for ONDC to a priori estimate the nature and severity of violations/breach that may occur, or 
the quantum of claims or damages that may be sought by a third-parties or may be awarded by Courts or 
consumer protection bodies. Therefore, NPs’ liability is not capped. To mitigate this concern, the indemnity 
clause has been amended to include only direct claims or damages. It is crucial to note that ONDC operates as a 
not-for-profit entity. Consequently, ONDC cannot assume the risk associated with network user activities, 
particularly when it does not contribute to these risks in any manner. 
9. Why do obligations provided in Clause 10.7 continue post the termination of the NP Agreement? 
The obligations outlined in Clause 10.7 persist beyond the termination of the NP Agreement for specific 
reasons. As elucidated earlier, ONDC functions solely as a network enabler and lacks control or visibility into 
transactions between buyers and sellers. As highlighted in Q1, ONDC essentially operates as a network 
provider, similar to other network infrastructure services. 
The extension outlined in Clause 10.7 serves the purpose of addressing potential liabilities arising from certain 
activities of network users that may not be constrained by statutes of limitation. An example of such activities 
includes the sharing of criminally proscribed content. Additionally, this provision aligns with the industry 
practice observed in the terms and conditions provided by other providers of network infrastructure services. 
10. Will ONDC retain the authority to unilaterally change the provisions of the ONDC Network Policy? No. ONDC is developing a formal governance mechanism for the long-term governance of the ONDC Network, 
which includes the policy-making aspect. The governance mechanism will give all NPs and/or their 
representatives adequate opportunity to participate in the policy-making process. It will aim to ensure that the 
process is transparent and inclusive. The final governance mechanism will be shared with NPs for their 
feedback as soon as it is ready. 
11. What is the reputation ledger, how will it function and what data will NPs be required to share for it? 
The reputation ledger will be a network-wide system for rating Sellers. The ledger itself and the policy 
governing it are both under development. The design of the ledger and the corresponding policy will be shared 
with NPs for their feedback before being fully implemented on the ONDC Network as deemed fit by ONDC. 
12. What are the fees that ONDC will charge? 
ONDC is a section 8 company. The objectives of ONDC are to be an enabler with minimal infrastructure, and to 
deepen the adoption of digital commerce, to make it small-business friendly. In line with that overarching 
vision, the fees that ONDC may charge will be minimal, and limited to what will be necessary to sustain its 
operations. The details of the fees that may be charged - the quantum of the fees, from when to charge them (if 
at all) etc - are still under discussion, internally. Once ONDC arrives at a decision on this, all NPs will be 
informed well in advance what the fee structure (if any) is, and from when it will be applicable. 
13. How will ONDC Use NP’s Intellectual Property (IP)?? 
According to Clause 4.1 of the NP Agreement, the NP is granted a non-exclusive, royalty free, non-transferable 
and limited right to use, reproduce and display the ONDC Mark, contingent upon strict adherence and 
compliance with the ONDC Branding Guidelines. Likewise, ONDC is granted a non-exclusive, worldwide and 
royalty free licence to use, reproduce and display the NP’s Mark on its website or related materials for 
confirming the entity is part of the ONDC Network. 
It is important to emphasize that ONDC will only use the intellectual property or name shared by the NP for 
display on its website or related materials. These related materials may encompass announcements on social 
media, introducing and confirming that the NP is now part of the ONDC Network. 
14. Does ONDC require the NP to share the IP with which it has no ownership or right to transfer or licence or 
right to use? 
No. ONDC will use the mark/name provided by the NP on for confirming that the entity is part of the ONDC 
Network as outlined in the NP Agreement. Clause 5.1.4 is pivotal in this context, as it seeks representation from 
a Party establishing the ownership and title, licence, or right to use, as applicable of the mark provided by the 
NP to ONDC for display on the website. 
In situations where the NP holds a mere license to sell a brand owner's products and lacks the legal authority in 
its arrangement with the brand owner to grant ONDC the use of the brand owner's intellectual property (IP), the 
NP Agreement does not compel the NP to provide licence or right to use the brand owner's IP. It's crucial to 
note that the interpretation of Clause 5.1.4 should be harmonized with Clause 4.1 of the NP Agreement. 
Clause 4.1 specifies that ONDC will use the Participant's Marks (in this case, the entity entering into the NP 
Agreement) on its website or related materials in respect of endeavours contemplated under NP Agreement. 
Simultaneously, Clause 5.1.4 functions as a representation from the Party to ONDC, affirming ownership and 
title, licence or right to use, as may be applicable over the mark provided for display on the website. 
The term 'IPR associated with it' in Clause 5.1.4 should not be considered in isolation but rather in conjunction 
with Clause 4.1. In the current scenario, the intellectual property rights (IPR) associated with it refer specifically 
to the logos and name of the entity signing the NP Agreement. To clarify, ONDC will only use the logo/brand 
name shared by the NP for the designated purpose. 
15. Will ONDC unilaterally suspend or terminate the NPA in case of any breach? No. In case an NP is found to be in violation/breach of the NPA, the process described in the Network Policy 
will be followed. A council will be constituted to decide on all cases of breaches that may merit a suspension or 
termination. The NP will get a fair chance to present their case, and - depending on the nature of the violation - 
get an opportunity to remedy the violation (where possible). The decision to terminate the NPA will only be 
taken after the due process. The disciplinary policy - which includes the rules governing the constitution and 
functioning of the council - is currently under development and will be finalised after consultation with the NPs.  
16. How will an NP (X) safeguard itself from the acts of commission or omission of another NP (Y) that lead to 
X not being able to fulfil its obligations under the Transaction-level Contract? 
The relationship between the NPs will be governed by their transaction level agreement executed through the 
ONDC Protocol. If NP(Y) fails to fulfil its part of the obligations, then NP(X) will be safeguarded from the acts 
of NP(Y) as per the terms and conditions in their transaction-level agreement. The Transaction-level  Contract 
allows NPs to set their offer terms for things like pricing and charges, terms of settlement, terms of payment 
collection, indemnity clauses, limitation of liability etc. A mechanism for NPs to negotiate on these parameters 
is also provided for in the ONDC Protocol. ONDC will not, and does not plan to, interfere with this bipartite 
arrangement between NPs. 
17. Why are the exceptions to performance due to force majeure events not extended to NPs? 
ONDC is not availing of any service from the NP. So it cannot suffer damages, loss of profit or business as a 
result of an NP not being able to perform its responsibilities due to a force majeure event. To protect itself from 
another NP or End User, the NP may include force majeure exceptions in the terms and conditions it offers to 
the counterparty NP or End User under Transaction-level Contract. 
 

--- FILE: Glossary of terms of the Transaction Level Contract | URL: https://docs.google.com/document/d/1DPztkqv405W_t2o1LDNOL5t8Bv0K2j-s8UMG3v4Og0E/edit?tab=t.0#heading=h.470e8eu7r842 ---

 
Glossary  of  terms  of  the  Transaction  Level  Contract  
 What  is  the  Transaction  Level  Contract  The  prevalent  practice  in  e-commerce  is  for  the  e-commerce  entity  to  enter  into  an  agreement  with  each  user  and  service  provider(s),  and  then  
all
 
transactions
 
between
 
the
 
parties
 
take
 
place
 
under
 
the
 
terms
 
of
 
that
 
agreement.
 
So
 
as
 
an
 
example,
 
a
 
Buyer
 
will
 
agree
 
to
 
the
 
Terms
 
of
 
Use
 
of
 
an
 
online
 
marketplace,
 
the
 
Seller
 
will
 
have
 
been
 
on-boarded
 
onto
 
this
 
marketplace
 
through
 
a
 
merchant
 
on-boarding
 
agreement,
 
and
 
service
 
providers,
 
such
 
as
 
delivery
 
agents
 
will
 
have
 
contracts
 
with
 
the
 
marketplace
 
or
 
the
 
Seller.
 
Each
 
transaction
 
that
 
takes
 
place
 
between
 
the
 
Buyer
 
and
 
Seller,
 
as
 
well
 
as
 
any
 
ancillary
 
transactions
 
(e.g.:
 
pick
 
up
 
and
 
delivery),
 
will
 
take
 
place
 
under
 
the
 
terms
 
of
 
the
 
aforementioned
 
agreements.
  In  the  ONDC  Network,  Buyer  Apps  and  Seller  Apps  have  no  such  pre-existing  contractual  relationship  at  the  time  of  entering  into  a  transaction.  
Furthermore,
 
the
 
Buyer
 
has
 
no
 
privity
 
of
 
contract
 
with
 
the
 
Seller
 
App,
 
and
 
the
 
Seller
 
does
 
not
 
have
 
privity
 
of
 
contract
 
with
 
the
 
Buyer
 
App.
 
So,
 
the
 
terms
 
and
 
conditions
 
of
 
each
 
transaction
 
are
 
codified
 
through
 
a
 
digital
 
contract
 
that
 
is
 
created
 
on-the-fly
 
and
 
digitally
 
signed
 
by
 
transacting
 
parties.
 
This
 
contract,
 
executed
 
using
 
the
 
ONDC
 
Protocol
1
,
 
contains
 
two
 
sets
 
of
 
terms:
 
(i)
 
the
 
terms
 
of
 
sale
 
between
 
the
 
Buyer
 
and
 
Seller,
 
and
 
(ii)
 
the
 
terms
 
between
 
Buyer
 
App
 
and
 
Seller
 
App
 
for
 
facilitating
 
this
 
sale.
 
If
 
the
 
Seller
 
App
 
or
 
Buyer
 
App
 
(Logistics
 
Buyer)
 
purchases
 
logistics
 
on
 
the
 
Network,
 
the
 
terms
 
will
 
be
 
between
 
the
 
Logistics
 
Buyer
 
and
 
the
 
Logistics
 
Service
 
Provider
 
(Logistics
 
Seller),
 
however,
 
these
 
terms
 
will
 
be
 
part
 
of
 
a
 
separate,
 
linked
 
order,
 
with
 
its
 
own
 
digital
 
contract,
 
with
 
appropr
 iate  cross-reference.   Purpose  of  this  document  Many  critical  parts  of  the  contractual  arrangement  between  the  Network  Participants  that  are  part  of  a  transaction  are  contained  in  the  digital  
contract,
 
whose
 
structure
 
is
 
specified
 
in
 
ONDC’s
 
API
 
Specifications
 
(which
 
form
 
one
 
part
 
of
 
the
 
ONDC
 
Protocol).
 
While
 
the
 
structure
 
of
 
the
 
digital
 
contract
 
(i.e.
 
the
 
API
 
Specifications)
 
is
 
human-readable
 
in
 
the
 
strictest
 
sense
 
(in
 
that
 
it
 
is
 
a
 
plain
 
text
 
file,
 
and
 
not
 
machine
 
code),
 
a
 
lay
 
person
 
may
 
not
 
be
 
able
 
to
 
understand
 
it
 
without
 
some
 
assistance.
 
The
 
purpose
 
of
 
this
 
document
 
is
 
to
 
bridge
 
that
 
gap
 
-
 
i.e.
 
to
 
explain
 
the
 
contractual
 
terms
 
that
 
the
 
ONDC
 
Protocol
 
allows
 
Network
 
Participants
 
to
 
define
 
in
 
a
 
systematic
 
way.
 
This
 
document
 
also
 
explains
 
how
 
the
 
Network
 
Participants
 
can
 
utilise
 
the
 
API
 
Specifications
 
to
 
construct
 
contractual
 
terms
 
that
 
they
 
prefer,
 
as
 
well
 
as,
 
how
 
to
 
interpret
 
terms
 
received
 
from
 
another
 
Network
 
Participant.
 
1
 ONDC  Protocol  means  the  API  Specifications  (based  on  the  Beckn  Protocol)  and  the  associated  process  specifications  developed  and  maintained  by  
ONDC.
 
Page  1  
   
Page  2  
 
I.  Retail  contract  spec  (Food  &  Beverage,  Grocery,  Home  &  Decor,  Beauty  &  Personal  Care,  Electronics)  v1.2.0  
Term  Attribute  name  in  API  Specification  
Proposed  by  
Acceptable  values  
Interpretation  and  configuration  
Buyer  App  Fee  
payment.@ondc/org/buyer_app_finder_fee_type  
Buyer  App  
“amount”,  “percent”  
If  set  to  “amount”  it  means  Buyer  App’s  fee  is  a  flat  amount  in  INR.  If  set  to  “percent”  it  means  the  Buyer  App’s  fee  is  set  as  a  percentage  of  the  Total  Order  Value.  
payment.@ondc/org/buyer_app_finder_fee_amount  
Buyer  App  
Positive  Decimal  Number  
Quantum  of  the  Buyer  App’s  Fee.  To  be  interpreted  in  connection  with  the  “type”  field  mentioned  above.  For  example ,  let’s  assume  the  value  is  set  at  “5”.  If  the  “type”  is  set  to  “Amount”,  that  means  the  Buyer  App  Fee  is  INR  5.  If  the  “type”  is  set  to  “percent”,  it  means  the  Buyer  App  Fee  is  5%  of  the  Total  Order  Value.  
Payment  Collector  
payment.collected_by  
Either  “BAP”,  “BPP”  If  set  to  “BAP”,  it  means  that  the  Buyer  App  will  collect  payment  from  the  Buyer.  If  set  to  “BPP”,  it  means  that  the  Seller  App  will  collect  payment  from  the  Buyer.  
Payment  Type  
payment.type  Either  “ON-ORDER”,  “ON-FULFILLMENT”,  “POST-FULFILLMENT”  
How  payment  is  going  to  be  collected  from  the  Buyer.  If  this  parameter  is  set  to  “ON-ORDER”,  that  means  it  is  a  pre-paid  order,  i.e.  the  payment  is  collected  at  the  time  of  order  confirmation.  If  this  parameter  is  set  to  “ON-FULFILLMENT”,  that  means  it  is  pay-on-delivery  order,  i.e.  the  payment  is  collected  at  the  time  of  delivering  the  product  to  the  Buyer.  If  this  parameter  is  set  to  “POST-FULFILLMENT”,  that  means  it  is  post  the  order  delivery/service,  i.e.  the  payment  is  collected  post  delivery  of  the  product  to  the  Buyer.  
Withholding  Amount  
payment.@ondc/org/withholding_amount  
Either  Positive  Decimal  Number  
The  percentage  of  the  total  order  value  that  the  Payment  Collector  will  withhold  till  the  return  window  expires.  This  amount  will  be  settled  if  the  return  period  is  completed  and  the  Buyer  has  not  returned  the  product  in  that  time.  Explanation:  This  is  typically  most  relevant  where  the  order  is  pre-paid  and  the  Buyer  App  is  the  Payment  Collector.  It  is  a  mechanism  to  allow  for  easy  refunds  to  the  Buyer  in  case  of  a  return.  
Page  3  
 
Term  Attribute  name  in  API  Specification  
Proposed  by  
Acceptable  values  
Interpretation  and  configuration  
Settlement  Basis  
payment.@ondc/org/settlement_basis  
Either  “return_window_expiry”,  “shipment”,  “delivery”  
The  event  that  will  trigger  settlement  from  the  Payment  Collector  to  counterparty  Network  Participant(s).  If  it  is  set  to  “delivery”,  that  will  mean  settlement  by  the  Payment  Collector  will  be  after  completion  of  delivery.  If  it  is  set  to  “shipment”,  that  will  mean  settlement  by  the  Payment  Collector  will  be  after  the  product  is  successfully  shipped  from  the  seller.  If  it  is  set  to  “return_window_expiry”,  that  will  mean  settlement  by  the  Payment  Collector  will  be  on  the  expiry  of  the  return  window.  
Settlement  Window  
payment.@ondc/org/settlement_window  
Either  Time  period  (ISO8601  format)  
The  time  period  from  completion  of  the  Settlement  Basis  within  which  the  Payment  Collector  will  settle  with  counterparty  Network  Participant(s).  As  an  example ,  if  the  Settlement  Basis  is  set  as  “Delivery”  and  the  Settlement  Window  is  set  to  7  days,  and  the  Buyer  App  collects  the  payment,  it  means  the  Buyer  App  will  remit  funds  to  the  Seller  App  on  or  before  the  completion  of  the  7th  day  after  successful  delivery,  assuming  the  Buyer  does  not  return  the  product  within  that  time.  ISO8601  duration  notation  is  used  to  specify  the  value  of  the  parameter.  As  an  illustration ,  a  Settlement  Window  of  5  days  after  delivery  can  be  specified  as  “P5D”  (i.e.  period  5  days)  or  “PT120H”  (i.e.  period  120  hours).  
Settlement  Amount  
payment.@ondc/org/settlement_details.settlement_amount  
Either  Positive  Decimal  Number  
The  amount  that  the  Payment  Collector  will  remit  to  the  counterparty  Network  Participant  for  the  instant  transaction.  For  clarity,  if  the  Buyer  App  is  the  Payment  Collector,  the  Buyer  App  will  deduct  their  fee  from  the  Buyer  Price  and  remit  the  balance  to  the  Seller  App.  If  the  Seller  App  is  the  Payment  Collector,  they  will  remit  the  Buyer  App’s  fees  from  the  Buyer  Price,  deduct  its  own  charges/commission  and  remit  the  rest  to  the  Seller.  The  settlement  with  the  Logistics  Service  Provider  will  follow  this  same  logic  if  either  of  the  Network  Participants  procures  on-network   logistics.  
Settlement  Type  
payment.@ondc/org/settlement_details.settlement_type  
Either  “neft”,  “rtgs”,  “upi”  
The  Payment  Collector  will  use  the  selected  method  to  remit  the  due  payment  to  the  counterparty  Network  Participant.  To  illustrate,  if  the  Buyer  App  collects  the  payment  and  the  Settlement  Type  is  set  to  “rtgs”,  when  the  settlement  is  due,  the  Buyer  App  will  transfer  the  Seller  App’s  share  of  the  Buyer  Price  to  the  Seller  App’s  account  via  RTGS.   
Page  4  
 
Term  Attribute  name  in  API  Specification  
Proposed  by  
Acceptable  values  
Interpretation  and  configuration  
Fulfillment  Type  
fulfillments[].type  Seller  App  
“Delivery”,  “Self-Pickup”,  “Return”    
This  parameter  describes  how  the  order  is  going  to  be  fulfilled.  The  parameter  can  be  configured  for  both  forward  fulfilment  (i.e.  bringing  the  product  from  the  seller  to  the  buyer)  as  well  as  returns.   -  If  the  parameter  is  set  to  “Delivery”  that  means  the  product  will  be  delivered  to  the  address  provided  by  the  Buyer.   -  If  the  parameter  is  set  to  “Self-Pickup”  that  means  the  buyer  must  arrange  to  have  the  product  picked  up.  -  If  the  parameter  is  set  to  “Return”  that  indicates  that  return  has  been  initiated  and  the  product  will  be  picked  up  from  the  buyer.  In  forward  fulfilment,  this  parameter  will  take  the  value  “Delivery”  or  “Self-Pickup”,  it  can  take  the  value  “Return”  only  when  the  order  is  marked  for  return.  
Fulfillment  TAT  
fulfillments[].@ondc/org/TAT  
Either  (usually  Seller  App)  
Time  period  (ISO8601  format)  [Can  be  a  single  value  or  a  range]  
This  is  the  turnaround  time  (TAT)  for  fulfilment.  In  the  context  of  forward  fulfilment  (i.e.  bringing  the  product  from  the  seller  to  the  buyer),  if  the  Fulfillment  Type  is  “Delivery”,  the  Fullfilment  TAT  describes  the  promised  time  within  which  the  order  will  be  delivered  to  the  buyer  from  the  time  of  confirmation  of  the  order.  If  the  Fulfillment  Type  is  “Return”,  the  Fullfilment  TAT  describes  the  promised  time  within  which  an  order  marked  for  return  will  be  delivered  back  to  the  seller  after  initiation  of  return.  -  If  a  single  value  is  provided  it  will  mean  that  the  order  will  be  fulfilled  before  the  expiry  of  the  specified  period.  E.g.:  If  it  is  a  single  value  configured  as  “P5D”,  it  means  the  the  order  will  be  delivered  to  the  intended  recipient  (i.e.  buyer  in  case  of  forward  shipping,  and  seller  in  case  of  return)  within  5  days  from  the  time  of  confirmation  (i.e.  confirmation  of  order  by  Buyer  or  acceptance  of  return  by  Seller,  as  applicable)  -  If  a  range  is  provided,  it  will  mean  that  the  order  will  be  delivered  between  the  specified  period.  E.g.:  If  it  is  configured  as  [“P5D”,  “P10D”]  the  order  will  be  delivered  to  the  intended  recipient  after  5  days  but  before  10  days  from  the  confirmation.  
Fulfillment  Provider  
fulfillments[].@ondc/org/provider_name  
Either  (usually  Seller  App)  
String  (name  of  the  entity)  
This  attribute  contains  the  name  of  the  entity  that  will  deliver  the  order  to  the  Buyer.  This  attribute  is  populated  only  when  the  Buyer  App  or  Seller  App  purchases  logistics  through  the  ONDC  Network,  to  fulfil  the  order  in  question.  
Item  Returnability  
item.@ondc/org/returnable  
Seller  App  
true/  false  Whether  the  item  in  question  is  returnable  as  per  the  Seller.  Returnability  is  necessarily  defined  at  the  level  of  item.  If  set  to  “true”  that  means  the  item  is  returnable.  
Page  5  
 
Term  Attribute  name  in  API  Specification  
Proposed  by  
Acceptable  values  
Interpretation  and  configuration  
Item  Return  Pick-up  
item.@ondc/org/seller_pickup_return  
Seller  App  
true/  false  In  case  the  item  is  returnable,  whether  the  Seller  (whether  directly  or  through  the  Seller  App)  will  arrange  for  the  item  to  be  picked  up  for  return.  
Item  Return  Window  
item.@ondc/org/return_window  
Seller  App  
Time  period  (ISO8601  format)  
The  time  period  from  completion  of  the  delivery  within  which  the  Buyer  may  return  the  item.  The  time  period  follows  the  ISO8601  duration  notation.  As  an  illustration ,  a  return  period  of  5  days  after  delivery  can  be  specified  as  “P5D”  (i.e.  period  5  days)  or  “PT120H”  (i.e.  period  120  hours).  
Item  Cancellability  
item.@ondc/org/cancellable  
Seller  App  
true/  false  Whether  the  order  for  that  item  can  be  cancelled  after  being  confirmed.  If  set  to  “TRUE”  that  means  the  Seller  allows  the  Buyer  to  cancel  the  order  for  the  item  in  question,  after  confirmation.  
Limitation  of  Liability  
order.tags.bpp_terms.max_liability  
Seller  App  Zero  or  Positive  Decimal  Number  
max_liability  is  the  maximum  aggregate  liability  of  either  party  expressed  as  multiple  of  the  total  transaction  value,  while  the  max_liability_cap  is  the  maximum  aggregate  liability  expressed  in  Indian  Rupees  (INR).  To  illustrate,  if  the  value  of  max_liability  is  set  to  “2”,  the  total  transaction  value  is  INR  100,  and  max_liability_cap  is  empty,  that  will  mean  the  aggregate  liability  of  either  party  shall  not  be  more  than  INR  200  (i.e.  2  multiplied  by  100).  If  the  max_liability_cap  is  set  as  100,  and  the  max_liability  is  empty,  that  means  the  maximum  aggregate  liability  will  be  INR  100.  If  both,  max_liability_cap  and  max_liability  are  provided,  then  the  maximum  aggregate  liability  will  be  the  lower  of  the  two  amounts.  To  illustrate ,  if  the  max_liability  is  set  to  “2”,  the  total  transaction  value  is  INR  100,  and  the  max_liability_cap  is  set  to  100.  That  will  mean  the  maximum  aggregate  liability  will  be  INR  100  (the  lower  of  INR  200  and  INR  100).  If  neither  max_liability_cap  nor  max_liability  are  provided,  i.e.  both  are  empty,  that  would  mean  the  contract  does  not  have  any  clause  related  to  limitation  of  liability.  Effectively  that  would  mean  the  liability  is  uncapped.  If  max_liability_cap  and  max_liability  are  both  set  to  0  (zero),  that  would  mean  that  both  parties  agree  that  neither  of  them  will  bear  any  liability.  
order.tags.bpp_terms.max_liability_cap  
Seller  App  Zero  or  Positive  Decimal  Number  
Mandatory  Arbitration  
order.tags.bpp_terms.mandatory_arbitration  
Seller  App  
true/  false  If  this  attribute  is  set  to  true,  that  would  mean  both  parties  agree  that  in  case  of  a  dispute,  both  parties  must  resolve  the  dispute  through  arbitration.  
Page  6  
 
Term  Attribute  name  in  API  Specification  
Proposed  by  
Acceptable  values  
Interpretation  and  configuration  
Court  Jurisdiction  
order.tags.bpp_terms.court_jurisdiction  
Seller  App  
Pick  a  city  from  a  given  list  of  cities  which  have  a  High  Court  bench  
The  name  of  the  city  whose  courts  will  have  exclusive  jurisdiction  over  disputes  related  to  this  contract.  The  list  of  options  will  only  contain  Indian  cities  which  have  a  High  Court  bench.  
Delay  Interest  
order.tags.bpp_terms.delay_interest  
Seller  App  
Positive  Decimal  Number  
This  is  the  annual  rate  of  interest  that  the  Payment  Collector  will  be  charged  if  they  delay  a  payment  to  the  counterparty  Network  Participant,  calculated  pro  rata  for  each  calendar  day  of  delay.  As  an  example ,  if  the  value  is  set  as  “7.3”,  and  the  amount  of  payment  due  is  INR  1000,  that  will  mean  the  Payment  Collector  will  pay  the  counterparty  Network  Participant  an  interest  of  7.3%  per  annum  (i.e.  INR  100),  calculated  pro  rata  for  each  day  of  delay.  So  if  the  Payment  Collector  delay  was  50  days,  the  total  interest  payable  would  be  INR  10  [calculated  as  1000x(7.3/100)x(50/365)]  
Static  Terms  intent.tags.bap_terms.static_terms  
Buyer  App  
URL  This  will  be  the  URL  of  a  web-page  where  the  standard  Terms  and  Conditions  of  the  Network  Participant  -  which  are  not  covered  in  the  API  Specification  (e.g.:  indemnity)  -  will  be  hosted.  These  terms  will  apply  to  the  transaction,  in  addition  to  the  terms  decided  through  the  ONDC  Protocol.  If  there  is  a  conflict  between  the  terms  decided  through  the  Protocol,  and  the  Static  Terms,  the  terms  decided  through  the  ONDC  Protocol  will  prevail.  Also,  if  there  is  a  conflict  between  the  Static  Terms  and  the  ONDC  Network  Policy  or  the  Static  Terms  and  the  Network  Participant  Agreement,  the  terms  of  the  ONDC  Network  Policy  or  the  Network  Participant  Agreement  (as  the  case  may  be)  will  prevail.   
Page  7  
 
II.  Logistics  contract  spec  v1.2.0  NOTE-1 :  Logistics  Buyer  can  be  either  the  retail  Buyer  App  or  retail  Seller  App.  In  most  cases,  it  will  be  the  retail  Seller  App,  however  the  protocol  allows  
retail
 
Buyer
 
Apps
 
to
 
purchase
 
on-network
 
logistics.
 
Therefore,
 
in
 
this
 
table,
 
we
 
use
 
the
 
terms
 
Logistics
 
Buyer
 
and
 
Logistics
 
Service
 
Provider
 
(LSP)
 NOTE-2 :  When  we  use  the  term  Cash-on-Delivery  or  CoD,  it  means  that  the  LSP  collects  payment  from  the  retail  Buyer.  The  payment  may  not  actually  be  in  
cash
 
money.
 
It
 
could
 
be
 
through
 
UPI
 
or
 
credit/debit
 
card,
 
depending
 
on
 
what
 
is
 
enabled
 
by
 
the
 
LSP.
 Term  Attribute  name  in  API  Specification  
Proposed  by  
Acceptable  values  
Interpretation  and  configuration  
Payment  Collector  
payment.collected_by  
Logistics  Buyer  
“BAP”,  “BPP”  If  set  to  “BAP”,  it  means  that  the  Logistics  Buyer  will  collect  payment  from  the  Buyer.  If  set  to  “BPP”,  it  means  that  the  Logistics  Service  Provider  (LSP)  will  collect  payment  from  the  Buyer  (i.e.  the  payment  will  be  CoD).  The  LSP  must  deposit  the  entire  amount  into  the  Logistics  Buyer’s  account  in  case  of  CoD  payment.  
CoD  Collection  Amount  
payment.@ondc/org/collection_amount  
Logistics  Buyer  
Positive  Decimal  number  
The  amount  (in  INR)  to  be  collected  from  the  Buyer,  in  case  the  payment  method  is  CoD.  
Payment  Type  
payment.type  Logistics  Buyer  
“ON-ORDER”,  “ON-FULFILLMENT”  “POST-FULFILLMENT”  
This  parameter  describes  the  payment  terms  for  the  retail  order  linked  to  this  logistics  order.  If  set  to  “ON-ORDER”  it  means  the  order  is  pre-paid  and  payment  has  already  been  collected  from  the  Buyer.  If  set  to  “ON-FULFILLMENT”  it  means  the  payment  is  to  be  collected  upon  delivery.  If  this  parameter  is  set  to  “POST-FULFILLMENT”,  that  means  it  is  post  completion  of  the  service,  i.e.  the  payment  is  collected  post  delivery  of  the  product  to  the  Buyer.  
Settlement  Window  
payment.@ondc/org/settlement_window  
Either  Time  period  (ISO8601  format)  
The  time  period  from  completion  of  the  Settlement  Basis  within  which  the  Logistics  Buyer  will  settle  with  the  LSP.  As  an  example ,  if  the  Settlement  Window  is  set  to  7  days,  it  means  the  Logistics  Buyer  will  remit  funds  to  the  LSP  on  or  before  the  completion  of  the  7th  day  after  confirming  the  logistics  order.  ISO8601  duration  notation  is  used  to  specify  the  value  of  the  parameter.  As  an  illustration ,  a  Settlement  Window  of  5  days  after  delivery  can  be  specified  as  “P5D”  (i.e.  period  5  days)  or  “PT120H”  (i.e.  period  120  hours).  
Settlement  Type  
Payment.@ondc/org/settlement_details.settlement_type  
Either  “neft”,  “rtgs”,  “upi”  
The  Logistics  Buyer  will  use  the  selected  method  to  remit  the  due  payment  to  the  LSP.  To  illustrate,  if  the  Settlement  Type  is  set  to  “rtgs”,  when  the  settlement  is  due,  the  Logistics  Buyer  will  transfer  the  LSP’s  dues  via  RTGS.  
Page  8  
 
Term  Attribute  name  in  API  Specification  
Proposed  by  
Acceptable  values  
Interpretation  and  configuration  
Fulfillment  Type  
fulfillments[].type  Logistics  Buyer  
"Delivery",  "Return",  "RTO"    
This  parameter  describes  the  broad  type  of  the  logistics  order.  The  parameter  can  be  used  for  both  forward  fulfilment  (i.e.  bringing  the  product  from  the  seller  to  the  buyer)  as  well  as  returns.   -  If  the  parameter  is  set  to  “Delivery”  that  means  the  order  is  for  forward  shipping,  i.e.  from  the  Seller  to  the  Buyer.  -  If  the  parameter  is  set  to  “RTO”  that  means  the  LSP  is  returning  the  product  to  the  Seller,  due  to  a  failure  to  complete  the  delivery.
 2
 -  If  the  parameter  is  set  to  “Return”  that  means  the  order  is  for  a  reverse  pick-up,  (i.e.  pick-up  from  Buyer  and  delivery  to  Seller),  due  to  a  return  being  requested  by  the  Buyer,  and  accepted  by  the  Seller.  For  clarity,  the  reverse  logistics  order  does  not  necessarily  have  to  be  placed  by  the  same  entity  who  purchased  forward  logistics,  and  neither  does  the  LSP  have  to  be  the  same  as  the  LSP  who  did  forward  logistics.   It  will  be  treated  as  a  fresh  logistics  order.   As  an  example,  the  forward  logistics  may  have  been  purchased  by  the  Seller  App  from  LSP-X,  while  the  reverse  logistics  may  have  been  purchased  by  the  Buyer  App  from  LSP-Y.  
Declared  value  
order.@ondc/org/linked_order.item.price.value  
Logistics  Buyer  
Positive  Decimal  Number  
Value  of  the  item  as  declared  by  the  Logistics  Buyer.  This  value  is  read  from  the  linked  order,  i.e.  the  retail  order  for  whose  fulfillment  the  instant  logistics  order  is  being  placed.  The  Logistics  Buyer  would  be  either  the  Buyer  App  or  Seller  App  in  the  linked  order.  
Delivery  Category  
category.id  LSP  [“Express  Delivery”,  “Standard  Delivery”,  “Immediate  Delivery”,  “Same  Day  Delivery”,  “Next  Day  Delivery”]  
Category  of  the  delivery  services  which  the  LSP  is  promising  to  the  Logistics  Buyer.  The  exact  TAT  that  corresponds  to  the  Delivery  Category  will  be  provided  through  the  Delivery  TAT  attribute.  
2
 The  reasons  can  include  (but  are  not  limited  to)  the  buyer  rejecting  delivery,  drop  location  being  incorrect,  Buyer  refusing  to  pay  for  a  CoD  order,  and  the  
LSP
 
refusing
 
to
 
hand
 
over
 
the
 
product
 
as
 
a
 
result
 
etc.
 
Page  9  
 
Term  Attribute  name  in  API  Specification  
Proposed  by  
Acceptable  values  
Interpretation  and  configuration  
Delivery  TAT  
category.time  LSP  Time  period  (ISO8601  format)  
This  is  the  turnaround  time  (TAT)  for  delivery.  In  the  context  of  forward  logistics  (i.e.  bringing  the  product  from  the  Seller  to  the  Buyer),  the  Delivery  TAT  describes  the  maximum  time  within  which  the  order  will  be  delivered  to  the  buyer  from  the  time  of  confirmation  of  the  order.  In  the  case  of  reverse  logistics  (i.e.  returning  a  product  from  the  Buyer  to  the  Seller),  the  Delivery  TAT  describes  the  maximum  time  within  which  the  product  will  be  returned  to  the  Seller  from  initiation  of  the  return.  ISO8601  duration  notation  is  used  to  specify  the  value  of  the  parameter.  As  an  illustration ,  a  Settlement  Window  of  5  days  after  delivery  can  be  specified  as  “P5D”  (i.e.  period  5  days)  or  “PT120H”  (i.e.  period  120  hours).  
Payload  Weight  
fulfillment.@ondc/org/payload_details.weight  
Logistics  Buyer  
Positive  Decimal  Number  
Weight  of  the  payload  to  be  transported.  The  weight  can  be  specified  in  grams  or  kilograms.  
Payload  Dimensions  
fulfillment.@ondc/org/payload_details.weight  
Logistics  Buyer  
Length,  Breadth  and  Height  in  Decimal  Number  
Dimensions  -  i.e.  length,  breadth  and  height  -  of  the  payload  to  be  transported.  Each  dimension  can  be  specified  in  metres  or  centimetres.  
Page  10  
 
Term  Attribute  name  in  API  Specification  
Proposed  by  
Acceptable  values  
Interpretation  and  configuration  
Limitation  of  Liability  
order.tags.bpp_terms.max_liability  
LSP  Zero  or  Positive  Decimal  Number  
max_liability  is  the  maximum  aggregate  liability  of  either  party  expressed  as  multiple  of  the  total  transaction  value,  while  the  max_liability_cap  is  the  maximum  aggregate  liability  expressed  in  Indian  Rupees  (INR).  To  illustrate,  if  the  value  of  max_liability  is  set  to  “2”,  the  total  transaction  value  is  INR  100,  and  max_liability_cap  is  empty,  that  will  mean  the  aggregate  liability  of  either  party  shall  not  be  more  than  INR  200  (i.e.  2  multiplied  by  100).  If  the  max_liability_cap  is  set  as  100,  and  the  max_liability  is  empty,  that  means  the  maximum  aggregate  liability  will  be  INR  100.  If  both,  max_liability_cap  and  max_liability  are  provided,  then  the  maximum  aggregate  liability  will  be  the  lower  of  the  two  amounts.  To  illustrate ,  if  the  max_liability  is  set  to  “2”,  the  total  transaction  value  is  INR  100,  and  the  max_liability_cap  is  set  to  100.  That  will  mean  the  maximum  aggregate  liability  will  be  INR  100  (the  lower  of  INR  200  and  INR  100).  If  neither  max_liability_cap  nor  max_liability  are  provided,  i.e.  both  are  empty,  that  would  mean  the  contract  does  not  have  any  clause  related  to  limitation  of  liability.  Effectively  that  would  mean  the  liability  is  uncapped.  If  max_liability_cap  and  max_liability  are  both  set  to  0  (zero),  that  would  mean  that  both  parties  agree  that  neither  of  them  will  bear  any  liability.  
order.tags.bpp_terms.max_liability_cap  
LSP  Zero  or  Positive  Decimal  Number  
Mandatory  Arbitration  
order.tags.bpp_terms.mandatory_arbitration  
LSP  true/false  If  this  attribute  is  set  to  true,  that  would  mean  both  parties  agree  that  in  case  of  a  dispute,  both  parties  must  resolve  the  dispute  through  arbitration.  
Court  Jurisdiction  
order.tags.bpp_terms.court_jurisdiction  
LSP  Pick  a  city  from  a  given  list  of  cities  which  have  a  High  Court  bench  
The  name  of  the  city  whose  courts  will  have  exclusive  jurisdiction  over  disputes  related  to  this  contract.  The  list  of  options  will  only  contain  cities  which  have  a  High  Court  bench.  
Page  11  
 
Term  Attribute  name  in  API  Specification  
Proposed  by  
Acceptable  values  
Interpretation  and  configuration  
Delay  Interest  
order.tags.bpp_terms.delay_interest  
LSP  Positive  Decimal  Number  
This  is  the  annual  rate  of  interest  that  the  Payment  Collector  will  be  charged  if  they  delay  a  payment  to  the  counterparty  Network  Participant,  calculated  pro  rata  for  each  calendar  day  of  delay.  As  an  example ,  if  the  value  is  set  as  “7.3”,  and  the  amount  of  payment  due  is  INR  1000,  that  will  mean  the  Payment  Collector  will  pay  the  counterparty  Network  Participant  an  interest  of  7.3%  per  annum  (i.e.  INR  100),  calculated  pro  rata  for  each  day  of  delay.  So  if  the  Payment  Collector  delay  was  50  days,  the  total  interest  payable  would  be  INR  10  [calculated  as  1000x(7.3/100)x(50/365)]  
Static  Terms  
catalog.bpp_descriptor.tags.bpp_terms.static_terms  
LSP  URL  This  will  be  the  URL  of  a  web-page  where  the  standard  Terms  and  Conditions  of  the  Network  Participant  -  which  are  not  covered  in  the  API  Specification  (e.g.:  indemnity)  -  will  be  hosted.  These  terms  will  apply  to  the  transaction  in  addition  to  the  terms  decided  through  the  ONDC  Protocol.  If  there  is  a  conflict  between  the  terms  decided  through  the  Protocol  and  the  Static  Terms,  the  terms  decided  through  the  ONDC  Protocol  will  prevail.  Also,  if  there  is  a  conflict  between  the  Static  Terms  and  the  ONDC  Network  Policy  or  the  Static  Terms  and  the  Network  Participant  Agreement,  the  terms  of  the  ONDC  Network  Policy  or  the  Network  Participant  Agreement  (as  the  case  may  be)  will  prevail.                
Page  12  
 
III.  FS  Contract  Specification  -  Credit  v1.2.0   Term  Attribute  name  in  API  Specification  
Proposed  by  
Acceptable  values  Interpretation  and  configuration  
Buyer  App  Fee  
payment.@ondc/org/buyer_app_finder_fee_type  
Buyer  App  “amount”,  “percent-  annualized”,  “percent”  
If  set  to  “amount”  it  means  Buyer  App’s  fee  is  a  flat  amount  in  INR.  If  set  to  “percent”  it  means  Buyer  App’s  fee  is  an  absolute  percentage  of  the  total  loan  amountwhat   If  set  to  “percent-  annualized”  it  means  the  Buyer  App’s  fee  is  set  as  a  percentage  of  the  Total  Loan  Disbursed  for  a  12-month  tenure  loan.   For  example:  Assume  the  Buyer  App  Fees’  value  is  5%   -  For  a  12  month  tenure  loan  the  ‘effective  fees’  paid  by  Seller  App  to  the  Buyer  App  would  be  5%  *  (12  months/  12  months)  i.e  5%  -  For  6  month  tenure  loan  the  ‘effective  fees’  paid  by  Seller  App  to  the  Buyer  App  would  be  5%  *  (6  months/  12  months)  i.e  2.5%  -  For  18  month  tenure  loan  the  ‘effective  fees’  paid  by  Seller  App  to  the  Buyer  App  would  be  5%  *  (18  months/  12  months)  i.e  7.5%  
payment.@ondc/org/buyer_app_finder_fee_amount  
Buyer  App  Positive  Decimal  Number  
Quantum  of  the  Buyer  App’s  Fee.  To  be  interpreted  in  connection  with  the  “type”  field  mentioned  above.  For  example ,  let’s  assume  the  value  is  set  at  “5”.  If  the  “type”  is  set  to  “Amount”,  that  means  the  Buyer  App  Fee  is  INR  5.  If  the  “type”  is  set  to  “percent  -  
Page  13  
 
annualized”,  it  means  the  Buyer  App  Fee  is  5%  of  the  Total  Order  Value  for  a  12-  month  tenure  loan.  
Offline  contract  applicability  
   If  set  to  "true,"  the  offline  bilateral  contract  between  the  buyer  and  the  seller  app  will  supersede  the  transaction-level  contract  (TLC).  TLC  will  be  applicable  if  this  field  is  not  present  or  set  to  false.  
Payment  Collector  
payment.collected_by  Either  “BAP”,  “BPP”  If  set  to  “BAP”,  it  means  that  the  Buyer  App  will  collect  processing  fees  if  any  from  the  Buyer.  If  set  to  “BPP”,  it  means  that  the  Seller  App  will  collect  processing  fees  if  any  from  the  Buyer.  
Settlement  Window  
payment.@ondc/org/settlement_window  
Either  Time  period  (ISO8601  format)  
The  time  period  from  completion  of  the  Settlement  Basis  within  which  the  Payment  Collector  will  settle  with  counterparty  Network  Participant(s).  As  an  illustration ,  a  Settlement  Window  of  5  days  after  loan  disbursal  can  be  specified  as  “P5D”  (i.e.  period  5  days)  or  “PT120H”  (i.e.  period  120  hours).  
Settlement  Basis   
payment.@ondc/org/settlement_basis  
Either   “Delivery”,  “  “return_window_expiry,   “  invoice_receipt”  
The  event  that  will  trigger  settlement  from  the  Payment  Collector  to  counterparty  Network  Participant(s).   Example:  1.  Upon  confirmation  of  order  delivery,  then  set  this  to  “delivery”   2.  Upon  expiry  of  cancellation/  return  window,  then  set  this  to“return_window_expiry”  3.  Upon  receipt  of  an  invoice  from  the  counterparty,  then  this  to  “invoice_receipt”  
Page  14  
 
Settlement  Amount  
payment.@ondc/org/settlement_details.settlement_amount  
Either  Positive  Decimal  Number  
The  amount  that  the  Payment  Collector  will  remit  to  the  counterparty  Network  Participant.  For  clarity,  if  the  Buyer  App  is  the  Processing  Fees  collector,  the  Buyer  App  will  deduct  their  Buyer  finder  fees  from  the  Processing  Fees  and  remit  the  balance  to  the  Seller  App.  If  seller  app  is  the  Processing  Fees  collector,  the  Seller  app  will  remit  the  Buyer  Finder  Fees  to  Buyer  App.  
Settlement  Type  
payment.@ondc/org/settlement_details.settlement_type  
Either  “neft”,  “rtgs”,  “upi”  The  Payment  Collector  will  use  the  selected  method  to  remit  the  due  payment  to  the  counterparty  Network  Participant.  To  illustrate,  if  the  Buyer  App  collects  the  payment  and  the  Settlement  Type  is  set  to  “rtgs”,  when  the  settlement  is  due,  the  Buyer  App  will  transfer  the  Seller  App’s  share  of  the  Buyer  Price  to  the  Seller  App’s  account  via  RTGS.  
Item  Cancellability  
item.@ondc/org/cancellable Seller  App true/  false Whether  the  loan  can  be  cancelled  after  the  borrower  signs  digital  loan  agreement..  If  set  to  “TRUE”  that  means  the  Seller  allows  the  Buyer  to  cancel  the  order  for  the  item  in  question,  after  confirmation. 
Cancellation  Window  
item.@ondc/org/cancellation  Window   
Seller  App  Time  period  (ISO8601  format)  
The  time  period  from  the  acceptance  of  loan  offer,  via  the  signing  of  the  digital  agreement  by  the  borrower,  till  when  the  borrower  is  allowed  to  exit  from  the  loan  by  paying  principal  and  proportional  APR  without  any  penalty.  
Mandatory  Arbitration  
mandatory_arbitration  Seller  App  true/  false  If  this  attribute  is  set  to  true,  that  would  mean  both  parties  agree  that  in  case  of  a  dispute,  both  parties  must  resolve  the  dispute  through  arbitration.  
Page  15  
 
Court  Jurisdiction  
court_jurisdiction  Seller  App  Pick  a  city  from  a  given  list  of  cities  which  have  a  High  Court  bench  
The  name  of  the  city  whose  courts  will  have  exclusive  jurisdiction  over  disputes  related  to  this  contract.  The  list  of  options  will  only  contain  cities  which  have  a  High  Court  bench.  
Delay  Interest  
delay_interest  Seller  App  Positive  Decimal  Number  
This  is  the  annual  rate  of  interest  that  the  Payment  Collector  will  be  charged  if  they  delay  a  payment  to  the  counterparty  Network  Participant,  calculated  pro  rata  for  each  calendar  day  of  delay.  As  an  example ,  if  the  value  is  set  as  “7.3”,  and  the  amount  of  payment  due  is  INR  1000,  that  will  mean  the  Payment  Collector  will  pay  the  counterparty  Network  Participant  an  interest  of  7.3%  per  annum  (i.e.  INR  100),  calculated  pro  rata  for  each  day  of  delay.  So  if  the  Payment  Collector  delay  was  50  days,  the  total  interest  payable  would  be  INR  10  [calculated  as  1000x(7.3/100)x(50/365)]  
Static  Terms  static_terms  Either  URL  This  will  be  the  URL  of  a  web-page  where  the  standard  Terms  and  Conditions  of  the  Network  Participant  -  which  are  not  covered  in  the  API  Specification  (e.g.:  indemnity)  -  will  be  hosted.  These  terms  will  apply  to  the  transaction,  in  addition  to  the  terms  decided  through  the  ONDC  Protocol.  If  there  is  a  conflict  between  the  terms  decided  through  the  Protocol,  and  the  Static  Terms,  the  terms  decided  through  the  ONDC  Protocol  will  prevail.  Also,  if  there  is  a  conflict  between  the  Static  Terms  and  the  ONDC  Network  Policy  or  the  Static  Terms  and  the  Network  Participant  Agreement,  the  terms  of  the  ONDC  Network  Policy  or  the  Network  Participant  Agreement  (as  the  case  may  be)  will  prevail.  
Page  16  
    
 
  
IV.  FS  Contract  Specification  -  Insurance  v1.2.0   
Term  Attribute  name  in  API  Specification/Tag  
Proposed  by  
Acceptable  values  
Interpretation  and  configuration  API  Call  
Buyer  App  Fee  –  New  Policy  Sale  
payment.@ondc/org/buyer_app_finder_fee_type  
 BUYER_FINDER_FEES_PERCENTAGE  BUYER_FINDER_FEES_AMOUNT  
 
Buyer  App  “amount”,  “percent”  
“Null”  
If  set  to  “amount”  it  means  Buyer  App’s  fee  is  a  flat  amount  in  INR  paid  upon  the  sale  of  a  new  insurance  policy  via  respective  buyer  app   If  set  to  “percent”  it  means  the  Buyer  App’s  fee  is  set  as  a  percentage  of  the  Total  Premium  Amount  Paid  by  the  customer  upon  the  sale  of  a  new  insurance  policy  via  respective  buyer  app   If  set  to  “Null”  it  means  ‘as  agreed  in  offline  bilateral’  contract  between  buyer  apps  and  the  insurer  
/Search  
Page  17  
 
 
payment.@ondc/org/buyer_app_finder_fee_amount  
 BUYER_FINDER_FEES  
 
Buyer  App  Positive  Decimal  Number  
Quantum  of  the  Buyer  App’s  Fee.  To  be  interpreted  in  connection  with  the  “type”  field  mentioned  above.  For  example ,  let’s  assume  the  value  is  set  at  “5”.  If  the  “type”  is  set  to  “Amount”,  that  means  the  Buyer  App  Fee  is  INR  5.  If  the  “type”  is  set  to  “percent”,  it  means  the  Buyer  App  Fee  is  5%  of  the  Total  Order  Value.  
/Search  
Buyer  App  Fee  –  Policy  Renewal  
  
  
  
Buyer  App  “amount”,  “percent”  
“  Null”  
If  set  to  “amount”  it  means  Buyer  App’s  fee  is  a  flat  amount  in  INR  paid  upon  the  renewal  of  an  existing  insurance  policy  via  respective  buyer  app    If  set  to  “percent”  it  means  the  Buyer  App’s  fee  is  set  as  a  percentage  of  the  Total  Premium  Amount  Paid  by  the  customer  upon  the  renewal  of  an  existing  insurance  policy  via  respective  buyer  app   If  set  to  “Null”  it  means  ‘as  agreed  in  offline  bilateral’  contract  between  buyer  apps  and  the  insurer   
/Search  
Page  18  
 
  
  
  
  
Buyer  App  Positive  Decimal  Number  
Quantum  of  the  Buyer  App’s  Fee.  To  be  interpreted  in  connection  with  the  “type”  field  mentioned  above.  For  example ,  let’s  assume  the  value  is  set  at  “5”.  If  the  “type”  is  set  to  “Amount”,  that  means  the  Buyer  App  Fee  is  INR  5.  If  the  “type”  is  set  to  “percent”,  it  means  the  Buyer  App  Fee  is  5%  of  the  Total  Order  Value.  
 
Settlement  Window  
payment.@ondc/org/settlement_window  
 SETTLEMENT_WINDOW  
 
Seller  App  Time  period  
(ISO8601  format)  
 
 
“  Null”  
 
The  time  period  from  completion  of  the  transaction  within  which  the  Payment  Collector  will  settle  with  counterparty  Network  Participant(s).  As  an  illustration ,  a  Settlement  Window  of  5  days  after  policy  disbursal  can  be  specified  as  “P5D”  (i.e.  period  5  days)  or  “PT120H”  (i.e.  period  120  hours)    If  set  to  “Null”  it  means  ‘as  agreed  in  offline  bilateral’  contract  between  buyer  apps  and  the  insurer  .  
/Search  
/On_Search  
Page  19  
 
Settlement  Basis  
payment.@ondc/org/settlement_basis  
Seller  App  “Delivery”,  “  “return_window_expiry,  
“  invoice_receipt”  
“Null”  
The  event  that  will  trigger  settlement  from  the  Payment  Collector  to  counterparty  Network  Participant(s).  
Example:  
1.  Upon  confirmation  of  order  delivery,  then  set  this  to  “delivery”  
2.  Upon  expiry  of  cancellation/  return  window,  then  set  this  to“return_window_expiry”  
3.      Upon  receipt  of  an  invoice  from  the  counterparty,  then  this  to  “invoice_receipt”   4.  If  set  to  “Null”  it  means  ‘as  agreed  in  offline  bilateral’  contract  between  buyer  apps  and  the  insurer    
/Search  
/On_Search  
Settlement  Amount  
payment.@ondc/org/settlement_details.settlement_amount  
Seller  App  Positive  Decimal  Number  
“Null”  
The  amount  that  the  Payment  Collector  will  remit  to  the  counterparty  Network  Participant  
If  set  to  “Null”  it  means  ‘as  agreed  in  offline  bilateral’  contract  between  buyer  apps  and  the  insurer.    
/Init  
/On_init  
Page  20  
 
Item  Cancellation  Window  
 Seller  App  Time  period  
(ISO8601  format)  
 
 
“Null”   
The  time  period  from  completion  of  the  order  within  which  the  Buyer  may  cancel  the  policy.  The  time  period  follows  the  ISO8601  duration  notation.  As  an  illustration ,  a  cancellation  period  of  5  days  after  delivery  can  be  specified  as  “P5D”  (i.e.  period  5  days)  or  “PT120H”  (i.e.  period  120  hours).    If  set  to  “Null”  it  means  ‘as  agreed  in  offline  bilateral’  contract  between  buyer  apps  and  the  insurer   
 
Mandatory  Arbitration  
order.tags.bpp_terms.mandatory_arbitration  
Seller  App  true/  false  
 
“Null”  
If  this  attribute  is  set  to  true,  that  would  mean  both  parties  agree  that  in  case  of  a  dispute,  both  parties  must  resolve  the  dispute  through  arbitration.   If  set  to  “Null”  it  means  ‘as  agreed  in  offline  bilateral’  contract  between  buyer  apps  and  the  insurer  
/Search  
/On_Search  
Court  Jurisdiction  
order.tags.bpp_terms.court_jurisdiction  
Seller  App  Pick  a  city  from  a  given  list  of  cities  which  have  a  High  Court  bench  
“Null”  
The  name  of  the  city  whose  courts  will  have  exclusive  jurisdiction  over  disputes  related  to  this  contract.  The  list  of  options  will  only  contain  Indian  cities  which  have  a  High  Court  bench.   If  set  to  “Null”  it  means  ‘as  agreed  in  offline  bilateral’  contract  between  buyer  apps  and  the  insurer  
 
Page  21  
 
 
Static  Terms  
intent.tags.bap_terms.static_terms  Buyer  App  “Null”  
 If  set  to  “Null”  it  means  ‘as  agreed  in  offline  bilateral’  contract  between  buyer  apps  and  the  insurer   
 
  
         
Page  22  
        
Page  23  


--- FILE: Guidance Note on Static Terms | URL: https://docs.google.com/document/d/1ICITftohKoehn-8og4vB_6L0CoWM0Z4U/edit#heading=h.gjdgxs ---

Guidance
 
Note
 
on
 
Static
 
Terms
 What  is  the  Transaction  Level  Contract?  The  prevalent  practice  in  e-commerce  is  for  the  e-commerce  entity  to  enter  into  an  agreement  
with
 
each
 
user
 
and
 
service
 
provider(s),
 
and
 
then
 
all
 
transactions
 
between
 
the
 
parties
 
take
 
place
 
under
 
the
 
terms
 
of
 
that
 
agreement.
 
So
 
as
 
an
 
example,
 
a
 
Buyer
 
will
 
agree
 
to
 
the
 
Terms
 
of
 
Use
 
of
 
an
 
online
 
marketplace,
 
the
 
Seller
 
will
 
have
 
been
 
on-boarded
 
onto
 
this
 
marketplace
 
through
 
a
 
merchant
 
on-boarding
 
agreement,
 
and
 
service
 
providers,
 
such
 
as
 
delivery
 
agents
 
will
 
have
 
contracts
 
with
 
the
 
marketplace
 
or
 
the
 
Seller.
 
Each
 
transaction
 
that
 
takes
 
place
 
between
 
the
 
Buyer
 
and
 
Seller,
 
as
 
well
 
as
 
any
 
ancillary
 
transactions
 
(e.g.:
 
pick
 
up
 
and
 
delivery),
 
will
 
take
 
place
 
under
 
the
 
terms
 
of
 
the
 
aforementioned
 
agreements.
 In  the  ONDC  Network,  Buyer  Apps  and  Seller  Apps  have  no  such  pre-existing  contractual  
relationship
 
at
 
the
 
time
 
of
 
entering
 
into
 
a
 
transaction.
 
Furthermore,
 
the
 
Buyer
 
has
 
no
 
privity
 
of
 
contract
 
with
 
the
 
Seller
 
App,
 
and
 
the
 
Seller
 
does
 
not
 
have
 
privity
 
of
 
contract
 
with
 
the
 
Buyer
 
App.
 
So,
 
the
 
terms
 
and
 
conditions
 
of
 
each
 
transaction
 
are
 
codiﬁed
 
through
 
a
 
digital
 
contract
 
that
 
is
 
created
 
on-the-ﬂy
 
and
 
digitally
 
signed
 
by
 
transacting
 
parties.
 
This
 
contract,
 
executed
 
using
 
the
 
ONDC
 
Protocol
1
,
 
contains
 
two
 
sets
 
of
 
terms:
 
 (a)  Conﬁgurable  Terms:  these  are  core  operational  obligations  such  as  the  fee  charged  by  
the
 
Buyer
 
App,
 
party
 
that
 
will
 
handle
 
the
 
delivery
 
and
 
the
 
TAT
 
for
 
delivery
 
of
 
product,
 
and
 
the
 
party
 
that
 
will
 
collect
 
payments
 
from
 
the
 
Buyer.
 
These
 
obligations
 
are
 
dynamic
 
in
 
nature
 
as
 
it
 
will
 
differ
 
from
 
transaction
 
to
 
transaction.
 
In
 
the
 
ONDC
 
Network,
 
these
 
obligations
 
are
 
agreed
 
by
 
the
 
parties
 
mutually
 
through
 
the
 
ONDC
 
Protocol
 
(API
 Speciﬁcations).  Please  refer  to  the  document  available  here  for  more  details.  and  (b)  Static  terms :  Static  terms  are  the  unchanging  clauses  that  provide  a  standardized  
framework
 
for
 
each
 
contract,
 
ensuring
 
consistency
 
and
 
clarity.
 Purpose  of  this  document  ONDC  received  representations  from  several  Network  Participants  regarding  the  need  for  
standardising
 
static
 
terms.
 
Standardised
 
terms
 
may
 
ensure
 
consistency
 
in
 
the
 
way
 
transactions
 
are
 
conducted
 
across
 
the
 
network.
 
This
 
reduces
 
confusion
 
and
 
ensures
 
that
 
all
 
parties
 
involved
 
are
 
on
 
the
 
same
 
page.
 To  this  end,  ONDC  has  created  a  Model  Static  Terms  that  includes  clauses  related  to:  1.  Representation  and  Warranties  2.  Fees,  Payments  and  Invoicing  3.  Indemnity  4.  Data  Protection  5.  Conﬁdential  Information  6.  Intellectual  Property  7.  Performance  obligations  8.  Governing  law  and  dispute  resolution  9.  Category  speciﬁc  terms  
1
 ONDC  Protocol  means  the  API  Speciﬁcations  (based  on  the  Beckn  Protocol)  and  the  associated  
process
 
speciﬁcations
 
developed
 
and
 
maintained
 
by
 
ONDC.
 Please  note  that  the  Static  terms  along  with  the  dynamic  terms  exchanged  and  agreed  between  
the
 
parties
 
through
 
the
 
ONDC
 
Protocol
 
will
 
govern
 
the
 
legal
 
relationship
 
between
 
the
 
Network
 
Participants
 
in
 
a
 
transaction.
 
Therefore,
 
we
 
suggest
 
following
 
points
 
should
 
be
 
kept
 
in
 
mind
 
while
 
interpreting
 
the
 
clauses
 
provided
 
in
 
the
 
Static
 
Terms:
 1.  In  contrast  to  traditional  contracts  that  are  ongoing  in  nature  with  a  predetermined  
tenure,
 
TLC
 
on
 
the
 
ONDC
 
Network
 
will
 
be
 
an
 
event
 
speciﬁc
 
contract.
 
To
 
put
 
it
 
differently,
 
NPs
 
will
 
enter
 
into
 
a
 
contract
 
to
 
fulﬁl
 
a
 
speciﬁc
 
Order.
 2.  Holistic  understanding  of  terms  and  conditions  agreed  under  the  TLC  will  be  conditions  
agreed
 
by
 
the
 
parties
 
under
 
conﬁgurable
 
terms
 
and
 
static
 
terms.
 
  How  are  Static  Terms  different  from  the  NP  agreement,  ONDC  Network  Policy  and  
Disclosures
 
made
 
by
 
Network
 
Participants?
 The  Static  terms  are  the  standardised  clauses  of  the  Transaction-level  contract,  which  will  
cover
 
the
 
terms
 
and
 
conditions
 
which
 
are
 
not
 
captured
 
over
 
the
 
APIs.
 
Such
 
terms
 
include
 
clauses
 
related
 
Representation
 
and
 
Warranties,
 
Indemnity,
 
Conﬁdentiality,
 
Intellectual
 
Property,
 
Performance
 
obligations,
 
Handling
 
of
 
customer
 
grievances
 
etc.
 
These
 
terms
 
only
 
come
 
into
 
effect
 
after
 
Network
 
Participants
 
have
 
agreed
 
to
 
an
 
order
 
i.e
 
after
 
a
 
Buyer
 
App
 
has
 
sent
 
an
 
ACK
 
to
 
an
 
on_conﬁrm
 
call.
 The  diagram  below  will  help  you  understand  the  difference  between  Transaction-level  
contract,
 
Network
 
Participant
 
Agreement,
 
Network
 
Policy
 
and
 
the
 
disclosures
 
by
 
Network
 
Participants
 
    


--- FILE: Guidelines for usage of Network Participant’s Mark by ONDC | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/notifications/guidelines_for_usage_of_network_participant%20_01_may_2024_%2001.pdf ---

GuidelinesforusageofNetworkParticipant’sMarkbyONDC
NotificationNo.:2024/05/01/01Date:01/05/2024
1. Context
Open Network for Digital Commerce (ONDC) and Network Participants regularlycoordinatetousetheNetwork Participant’s brand(NetworkParticipant’sMark) forvarious purposes suchas social mediaposts tohighlight anewNetwork Participantjoining the ONDC Network, marketing posts or onONDC’s websiteshowcasingthepresenceandparticipationof theNetworkParticipant withintheONDCNetwork.
Hence, it is imperative that ONDC’s obligations with regards using the NetworkParticipant’s brand/logoareclearly identifiedfor clarity onthescopeof theusageoftheNetworkParticipant’sMark.
Accordingly, ONDCisissuingthisnotification.
2. Notification
ONDC is amending Chapter 5 Branding Guidelines
1
, Network Policy to reflect thechangesdescribeThechangesareasfollows:
i. Extensionof Scope: Inparagraph1titled“Purposeof theChapter”, weareaddingthefollowing:
“In addition, the Branding Guidelines also include provisionsrelatedtotheuseof ParticipantsMarkbyONDC. Thishelpsinpromoting collaboration within the ONDC ecosystem andensuring that everyone's contributions are properlyacknowledged.”
ii. Insertionof Clause5.4: Anewclausehasbeenaddedprovidingcleardirectivesonhow ONDC will utilize Network Participant’s Mark on its Network and website,adheringstrictly tothetermsoutlinedintheNetworkParticipant Agreement. Thenewclause5.4will readasfollows:
5.4 Guidelines for usage of Network Participant’s Mark byONDC
5.4.1 ONDCmayusetheParticipant’sMarkonlyonitsNetworkandwebsite or any other related material as provided by theParticipant andinlinewiththeNetworkParticipant Agreement.The Participant’s Mark will be usedby ONDCtoconfirmthattheParticipant ispart of theONDCNetwork.
1 
Chapter5BrandingGuidelines, ONDCNetworkPolicy5.4.2 Related materials under Clause 5.4.1 may encompassannouncements on social media, introducing and confirmingthat theNPisnowpart of theONDCNetwork.
5.4.3 Any updates or changes to theMark must becommunicatedinwritingbytheParticipant.
5.4.4 ONDC may use the Participant’s Mark for which NetworkParticipant has given the representation establishing theownership and title, licence, or right to use, as applicable ofthe Mark provided by the Network Participant to ONDC fordisplayonitsNetworkorwebsite.
5.4.5 Ininstances whereaNetwork Participant possessesmerelyalicensetodistributeorretail productsunderathird-partybrandowner’s mark without the requisite authority to sublicense orotherwise grant rights in such mark to ONDC, the NetworkParticipant shall not be obligated to confer upon ONDC anyrights or licenses pertaining to the third-party brand owner'sintellectual property.”
iii. Insertion of Definitions: A new definition has been added defining the NetworkParticipant’sMarkwhichwill readasfollows:
“Participant’sMarksshall meantherelevant trademarksand/or service marks in relation to the Agreement or NetworkPolicy as providedtoONDCby theParticipant inwritingfromtimetotime.”
3. Queries/Concerns
For any queries, concerns, or requests related to this notification, youmay writetonetwork.policies@ondc.org

--- FILE: Know Your Business Customer obligations for Marketplace Seller Nodes on ONDC Network | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/notifications/kybc_requirement_on_msn.pdf ---

KnowYourBusinessCustomerobligationsforMarketplaceSeller
NodesonONDCNetwork
NotificationNo.:2024/09/02/01
Date:02/09/2024
1.Context
Inthee-commercelandscape, ensuringtheauthenticityandlegalityof productsiscrucial for
maintainingtrust andahealthy marketplaceenvironment. Tosupport this goal, e-commerce
marketplaces conduct aKnow-Your-Business-Customer (KYBC) process for thesellersthey
onboard. This proactive approach helps ensure that only legitimate sellers with traceable
identities can list their products or services, fostering a safer and more reliable shopping
experience for consumers. The KYBC practice helps e-commerce marketplaces to
significantly reduce the risk of fraud and scams, and enable a more robust and reliable
consumer grievanceredressal mechanism. Inaddition, thepracticeupholdlegal andquality
standardsbut alsostrengthentheoverall trust andintegrityof theecosystem.
To enhance the trust of all stakeholders participating in the Network, there was a need to
codify this industry practice of conductingduediligenceof merchants/sellers onboardedby
Marketplace Sellers Nodes (MSNs) operating in the retail domain (Food & Beverage,
Grocery, Home & Decor, Electronics, Fashion, Beauty &Personal Care, Gift Cards) onthe
Network.
Furthermore, in the 6th User Council meeting held on 9th August 2024, ONDC received
assent tointroducethisobligationtoChapter2BusinessRules, NetworkPolicy.1
Accordingly, ONDCisissuingthisnotification.
2.Notification
ONDCisamendingChapter2BusinessRules, NetworkPolicybyinsertingthefollowing2
clause2.5.7
“2.5.7 All Marketplace Seller Nodes (MSNs) that are operational in the retail
domain shall conduct due diligence on all sellers andmerchants they onboard.
This due diligence must include collecting and maintaining the following
information:
2 Chapter2BusinessRules, ONDCNetworkPolicy,
https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-w
ebsite/files/chapter_2__business_rules_v2.1.pdf
1 Summaryof proceedings, 6thUserCouncil meetingheldon9thAugust 2024● Thename, address, telephonenumber, andemail addressof themerchant orits
grievanceredressal officer.
● Identityproof that validatestheidentityof themerchant.
● Where a merchant is a registered or incorporated business, its registration
numberoranequivalent meansof identification.
● A self-certificationby themerchant committingtoonly offer products or services
that complywiththeapplicablelaws.”
3.Guidance
To effectively comply with the KYBC obligations, MSNs must make reasonable efforts to
verify the authenticity of the information provided by sellers on-boarded by them. This due
diligence process may be conducted using existing official online databases, such as the
Goods and Service Tax Network, or by requesting reliable supporting documents fromthe
merchants, such as identity documents, certified bank statements, company registration
certificatesetc.
4.Queries/Concerns
Foranyqueries, concerns, orrequestsrelatedtothisnotification, youmaywriteto
network.policies@ondc.org

--- FILE: Network Observability and Open Data Framework on ONDC Network | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/notifications/network_observability_and_open_data_framework_on_ondc_network_v2.pdf ---

NetworkObservabilityandOpenDataFrameworkonONDC
Network
NotificationNo.:2023/06/14/01
Version Issuedon Description
1.01 14thJune
2023
- ReleasedtotheNPs
1.12 16th
October
2023
- Amendednotificationtoincludedatahandling
policyinAnnexure6
- Inclusionofon_searchAPIintransactionlog
submissionrequirementinAnnexure1,owingto
protocolchangesinAPIcontractv1.2
- SimplificationandadditionofsamplesinAnnexure
4.
1.22 27thAugust
2024
- Addedclause7(d)formetricstobepublished
underOpenDataFramework
- RenumberederstwhileAnnexures4,5,6to5,6
and7respectively
- Addedannexure4onmethodologyforcomputation
ofmetricsunderopendataframework
- ChangedthetermPersonalInformationto
PersonalDatawhichwillbeinaccordancewiththe
DigitalPersonalDataProtectionBill2023
1.3 15th
October
2024
- RenumberederstwhileAnnexure5,6,7to6,7,8
respectively
- AddedAnnexure5formetricswhichwillbe
publishedforFinancialServices(Credit)alongwith
thecomputationmechanismforthemetrics
- AddedmetricscalculatedforLogisticsandMobility
domainsunderAnnexure3
2NetworkObservabilityandOpenDataFrameworkonONDCNetwork,version1.2,27thAugust
2024,
https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/noti
fications/network_observability_and_open_data_framework_on_ondc_network.pdf
1NetworkObservabilityontheONDCNetwork,14June2023,
https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/noti
fications/ONDC_Notification_Network_Observability_on_ONDC_Network_14June2023.pdf1. Context
OpenNetworkforDigitalCommerce(ONDC)isauniqueinitiativewhichhasbeen
establishedtodemocratiseandlevel theplayingfieldofdigitalcommerce.Thisis
madepossibleinONDC’sopennetworkarchitecturewhichisprimarilybasedon
principlesof‘Unbundling’and‘Interoperability’.Bymakingtheunbundledentitiesof
the e-commerce value chain to be technically compatible with each other or
interoperable,ONDCmakesitpossibleforentitiesperformingacertainfunctionor
legof thevaluechaintonowparticipateinane-commercetransaction, thereby
reducingbarrierstoentry.
IntheONDCNetwork’sdecentralisedsetup, wheredecisionsandoperationsare
distributedamongsttheunbundledNetworkParticipants,thereisnocentraloperator
whichhasvisibilityof howtheNetwork, at large, isperformingatanaggregated,
Network-widelevel.Asaresult,thereexistsnomechanismtoidentifyanysuccessful
trendsorearlywarningindicatorsofnetworktrust,atanetwork-widelevel.
Inthe4thUserCouncilmeetingheldon18thMay2023,itwasagreedbetweenthe
Membersfor theneedtoimplement anetwork-wideprogram, whichcanenable
observationof keymetricswhichdeterminethehealthandgrowthof theONDC
Network.
Furthermore,pursuanttothe5thUserCouncilmeetingheldon21stNovember2023,
MembershadagreedtoimplementanetworkwideOpenDataframeworktowards
publicly publishing key aggregated metrics indicating healthandgrowthonthe
ONDCNetwork.
2. Objective
While, it is imperativetobuildaconsolidatedframeworkwhichcanenablethe
observation of key network indicators of reliability, health and growth, such a
frameworkmustbeinlinewithONDC’sfundamentalprinciples,givenbelow
● ONDCisafacilitatorandnotanoperator
● GovernanceonONDCisparticipative
● ONDCstrivestobeprivacypreserving
Bearing in mind the above guiding principles, ONDC is initiating a Network
Observabilityprogram, whichmakeskeymetricsrelatedgrowthandhealthofthe
NetworkavailablefortheNetworkParticipants,atanaggregated,network-widelevel
andatanindividualNetworkParticipantlevel.
Therefore, inexerciseof powersgrantedunderClause2.2.4,Chapter2Business
Rules, Network Policy3, ONDC is issuing this notification for all the Network
Participants.
3Chapter2BusinessRules,NetworkPolicy3. Definitions
APICallreferstothetransferofinformation(requestandresponse)usingONDC
APIsbetweenNetworkParticipantsovertheONDCProtocol
JSONFormatmeansdatarepresentedinaJavaScriptObjectNotation(JSON)
structure,andisacommonformatusedfordataexchange
PersonalDatameansdataasdefinedinDigitalPersonalDataProtectionBill,2023
ProcessedMetricsreferstothemetricsgeneratedbyONDCusingcomputation
methodsasspecifiedinAnnexure2,Annexure3,Annexure4andAnnexure5ofthis
notification
SynchronousCallsreferstoAcknowledgement(ACK)andNegative
Acknowledgement(NACK)callsdefinedinONDCAPIspecifications.
TransactionLogsreferstotheAPIcallsandSynchronousCallsinJSONFormat
andPersonalDatascrubbed,whichareinitiatedovertheONDCProtocol
4. Applicability
ThisnotificationwillbeapplicabletoallNetworkParticipantswhichareinthe
ProductionenvironmentontheONDCNetwork.
Toclarify, ProductionEnvironment referstoanenvironment whereaNetwork
Participant isconductinglive/actual transactionsontheONDCNetwork
5. SubmissionofTransactionLogs
a. NetworkParticipantsshallsubmitTransactionLogsforalltheAPIcalls,asspecified
inAnnexure1,initiatedontheONDCNetwork
b. TransactionLogsshallbesubmittedinJSONFormatafterremovalofPersonalData.
Forthepurposesof clarity, Personal DataintheAPI contractswill includeanynames
of personssuchasbuyers, all contact numberslikemobile, landline, all email
addresses, residential andofficeaddressesat housenumberlevel, buildingnameor
buildingnumberandlocality
c. TransactionLogsshallbesubmittedwithin15minutesoftheAPICallinitiated.
NetworkParticipantsmayrefertoAnnexure5fordetailsonsubmittingthe
TransactionLogs.
6. Post-submissionmodificationandre-submissiona. IncaseofsubmissionofincorrectorincompleteoroldTransactionLogs,Network
Participantsmayrequestpartdeletion/updationoftheTransactionLogs
b. ONDCwillconsiderrequestsfordeletion/updationofTransactionLogsonacaseto
casebasis.
c. ONDCmayrequiretheNetworkParticipanttoresubmittheTransactionLogs,ifthe
firstsubmissionfailsvalidationandhygienechecksasperClause5(a)and5(b)
7. ProcessingandDisclosure
a. ONDCwillgenerateProcessedMetricsinamannerasspecifiedinAnnexure2,
Annexure3,Annexure4andAnnexure5.
b. ProcessedMetrics,asspecifiedinAnnexure2,willbevisibletoalltheNetwork
Participants.
i. Thesemetricswillbepublishedinanaggregatedform,NetworkParticipant
anonymised,acrossdimensionssuchasgeography,time,
categories/domains,typeoflogistics,roleplayedbyaNetworkParticipant, in
theONDCNetwork.
Toclarify, thesemetricswill not beidentifiablebyanyNetworkParticipant or
byanyuser.
c. ProcessedMetrics,asspecifiedinAnnexure3andAnnexure5willonlybevisibleto
theNetworkParticipantstowhomtheypertain
i. ThesemetricswillbecomputedatanindividualNetworkParticipantleveland
willbepublishedinamannerasspecifiedinAnnexure7.
ii. Thesemetricswillnotbesharedwithanyotherparty.
d. ProcessedMetrics,asspecifiedinAnnexure4,willbepublishedandavailable
publicly
i. Thesemetricswillbepublishedinananonymised,aggregatedacross
dimensionssuchasgeography(district/statelevel),days,
domain/categories/sub-categoriesasperthecategorymapping,typeof
logistics,roleplayedbyaNetworkParticipantintheONDCNetworketc.
8. Governance
a. TransactionLogsandProcessedMetricswillbetreatedasperthedatahandling
policydefinedinAnnexure8
9. Policyreview
ONDCmayamendthisnotificationthroughsubsequentnotifications.10. Queries/Concerns
Foranyqueries,concerns,orrequestsrelatedtothisnotificationorNetwork
Observability,youmaywritetoneeraj@ondc.organdvaibhav.goel@ondc.orgAnnexure1
ListofAPICallsforsubmissionofTransactionLogsbyNetworkParticipants
i. /on_search
ii. /selector/on_select
iii. /initor/on_init
iv. /confirmor/on_confirm
v. /statusor/on_status
vi. /cancelor/on_cancel
vii. /updateor/on_update
viii. /issueor/on_issue
ix. /issuestatusor/on_issuestatus
x. /collector_reconor/on_collector_recon
xi. /settleor/on_settle
xii. /receiver_reconor/on_receiver_recon
xiii. /recon_statusor/on_recon_status
xiv. /catalog_rejection
Annexure2MetricstobepublishedNetwork-wideandaggregated
Metric Definition Computation
ONDCTraffic Thismetricrepresentsthe
demandonthenetwork
Numberof'SelectAPI'callsinitiated
fromBuyerNPs
CartConversion Thismetricrepresentsthe
conversionrateoftheitem
selectiontopurchase
Noof‘On_confirm’APIcalls/Noof
‘On_select’APIcalls
Check-out
Conversion
Thismetricistheindicatorof
check-outuserflowonthe
network
Noof‘On_confirm’APIcalls/Noof
‘On_Init’APIcalls
OrderFillRate(in
percentage)
Thismetricistheindicatorof
customerexperienceonthe
network.Thismetriccovers
ordercancelledbytheseller.
Unsolicitedcallstobe
considered.On_UpdateAPI
callwithstatus“Partcancel”
1–((‘On-cancel’APIcalls+
’On-update’APIcall)/‘OnConfirm’
APIcalls)
"Thismetricistheindicatorof
customerexperienceonthenetwork.
Unsolicitedcallstobeconsidered.
On_UpdateAPIcallwithstatus“Part
cancel”
ItemFillRate(in
percentage)
Thismetricistheindicatorof
customerexperienceonthe
network.Thismetriccovers
itemcancelledbytheseller
asagainsttotalitems
orderedUnsolicitedcallsto
beconsidered.On_Update
APIcallwithstatus“Part
cancel”
(No.ofitemsinOn_statusAPIcall)/
(No.ofitemsinOn_confirmAPIcall)
Averagefulfillment
time(O2D)
Indicatoroffulfillment
experienceofthecustomer.
Timetodeliverorderfrom
thetimeofconfirmation
Sum(Timefrom'Confirm’APIcallto
Deliveredstatusfrom‘On_status’
APIcalls)/Totalorders(numberof
On_confirmAPIs)
Thisisonlyapplicableforthose
orderswhereorderStatusmarkedas
"Delivered"Averageshipping
time(O2S)
Indicatoroffulfillment
experienceofthecustomer.
Timetomarktheorderready
toship
Sum(Timefrom‘Confirm’APIcallto
'orderpickedup'statusfrom
‘On-status’APIcalls)/Totalorders
(numberofOn_confirmAPIs)
AverageDelivery
time(S2D)
Thismetricistheindicatorof
fulfillmentefficiencyofthe
network.Timetodeliverthe
orderpostmarkingreadyto
ship
Sum(Timefromorderpickedup
statusfromon-statusAPIcallto
Deliveredstatusfrom‘On-status’API
calls)/Totalorders(numberof
On_confirmAPIs)
-Thisisonlyapplicableforthose
orderswhereorderStatusmarkedas
"Delivered"
-"updated_at"timestamptobe
consideredforbothstatusin
on_statusAPI
-"updated_at"timestamptobe
consideredforon_confirmAPI
OrderGrowth ThismetrichelpsONDC
networkandNPstoassess
thegrowth/decline.
Improvementoforder
No.ofOn_ConfirmAPIcalls
Numbersof
orderspercityin
last2weeks
(Citieswithatleast
1orderintrailing
month)
IndicatorofONDC’s
presenceinthecity.Citywith
atleast1confirmedorder
Citieswithatleast1On-confirmAPI
call
Citieswithatleast
1seller
IndicatorofcitieswithSeller
onRecordpresence.Cities
withatleast1sellerliveon
network
From"On_Search"APIcalls
SellerGrowth ThismetrichelpsONDCand
SellerNPstoassessthe
needtoimproveseller
densityandsupplybase.
Improvementinsellercount
From"On_Search"APIcalls.The
sellersdatawouldbeincremental.
Uniquecombination"bppIdand
ProviderId"tobeconsidered.
SKUGrowth ThismetrichelpsONDCand
SellerNPstoassessthe
needtoimproveseller
From"On_Search"APIcalls.The
sellersdatawouldbeincremental.
Uniquecombination"bppId,Providerdensityandsupplybase.
ImprovementinSKUcount
IdandItemId"tobeconsidered.
ActiveSellers Indicatorofactivesellerson
ONDCnetwork.Sellers
gettingatleast1order
"On_Status"APIcallwithorderstate
as"Completed".Uniquecombination
of"bppid"and"providerid"tobe
considered.
Fore.g:If10ordershavebeen
placedforaseller(e.g:McdinNoida
Sector30)itwillbeconsideredas1
order
ActiveNPs IndicatorsofactiveNetwork
participants(BuyerApp,
SellerApp,LSPs)onONDC
network.Networkparticipant
receivingatleast1order
"On_Status"APIcallwithorderstate
as"Completed"."bapid"and"bppid"
tobeconsidered
On-timedelivery
percentage
Indicatoroffulfillment
experienceofthecustomer.
%agedeliveryagainst
promistedtime
1.PromisedTime="TAT"attributein
On_confirmAPI
2.Actualtime=Timedifferencedata
field(order_to_delivery_seconds)
fromO2Ddashboard
IfActualtime>Promisedtime=
ordertagged'Delayed"
Percentage=1-(Orderstagged
'delayed'/'Totalordersdelivered')
ReferO2DAPI
RTOPercentage Indicatorsofrevenue
leakageinthenetwork.
%ageordersreturnedback
toseller
No.of‘On-Cancel’APIwithcancel
reasonas"RTO"/No.of
‘On-confirm’APIcallswithstatusas
"accepted"or"created"
Consider"cancellation_reason_id"
datafieldReturn
Percentage(Post
Order)
Indicatorofproductquality,
selleroperationsefficiency
andlogisticsefficiency.%
ageordersreturneddueto
customerraisedissues
Noof'on-update'and'on_status'API
callswithstatus"returnpicked"or
"liquidated"/Noofon-confirmAPI
calls
DeduplicatebasedonTransition
ID.MessageID
Refund
Percentage
Indicatorsofrevenue
leakageinthenetwork.
%agerefundsissuedagainst
deliveredorders
(On_Cancel(buyercancellation+
sellercancellation+RTO)+
On_Update(postorderreturn(fullor
partial)+partcancellation))/Noof
‘On_confirmAPIcalls
Average
Grievance
resolutiontime
Indicatorofefficiencyof
grievanceresolutionprocess
amongtheNPs.Avgtimeto
resolvecustomergrievance
(Grievanceresolutiontimestamp–
Grievanceinitiationtimestamp)/No
ofNetworkissueIdswithGrievance
asIssuetype
Numberofissues
per1000orders
Thismetricistheindicatorof
operationsefficiencyonthe
ONDCnetwork
(NoofNetworkissueIds(IssueAPI)
/Noof‘onconfirm’APIs)*1000
Averageissue
resolutiontime
Indicatorofefficiencyof
issueresolutionprocess
amongtheNPs.Avgtimeto
resolvecustomerissues
(Issueresolutiontime–Issue
initiationtime)/NoofNetworkissue
Ids
%Grievances
(%ageofissues
escalatingto
grievances)
Indicatorofefficiencyof
issueresolutionprocess
amongtheNPs.%issues
leadingtogrievances
NoofNetworkissueIDswith
GrievanceFlag/NoofNetworkissue
IDs
Attempttoconfirm Indicatorofimpacton
demandfulfilment(order
confirmation)owingto
businesserrorsonthe
network
Minimumof(1-(#ErrorsinOn_select
calls/No.ofSelectcalls)),(1-
(#ErrorsinOn_initcalls/No.ofinit
calls)),(1-(#ErrorsinOn_confirm
calls/No.ofConfirmcalls))
TATBreach Indicatesthenumberoforderswheretheactualdeliverytime
breachedthepromisedETA
Motorable
distanceview
IndicatestheaveragemotorabledistanceforeachLogisticsService
Providerandnumberofordersfordifferentbucketsofmotorable
distanceTimefor
ready-to-ship
Indicatesthenumberoforderswhichweremarkedreadytoshipin
variousbucketsoftimeduration
Timeforpickup
frommerchants
Indicatesthenumberoforderswhichwerepickedupinvarious
bucketsoftimeduration,aftertheorderwasmarkedready-to-ship
Confirmedrides Indicatesthenumberof
rideswhichwereconfirmed
bythebuyer
No.ofon_confirmcallssentfromthe
SellerApp
Assignmentrate% Indicatesthepercentageof
confirmedrideswherethe
driverwasassignedtothe
rider
No.ofcallswithstatus=‘Ride
Assigned’inon_confirm+on_update
+on_status/totalon_confirmcalls
Confirmedto
completed%
Indicatesthepercentageof
confirmedrideswhichwere
completedbythedriver
No.ofcallswithon_status=
‘completed’/totalconfirmedridesAnnexure3
MetricstobepublishedatanindividualNetworkParticipantlevelforRetail,Mobility
andLogisticsdomains
Metric Definition Computation
APIResponseTime
(Asynchronous
Responses)
ThismetricistheIndicatorof
SellerApp’sapplicationand
infrastructureperformance
(Totaltimespentfrom‘sendingthe
request’to‘receivingthe
response’)/TotalNo.ofAPIrequests)
APIResponseTime
(Synchronous
Responses)
ThismetricistheIndicatorof
NetworkParticipants’and
Gateway’sapplicationand
infrastructureperformance
(Totaltimespentfrom‘sendingthe
request’to‘receivingsynchronous
response’)/TotalNo.ofAPIrequests)
APIerrors IndicatoroffulfillmentoftheAPI
Requestsonthenetworkand
NP’sapplicationor
infrastructureperformance
4xx&5xxerrorsaretobecaptured
GatewayUptime ThismetricindicatesGateway’s
availabilityonONDCnetwork
(1-(TotalDowntime/(Total
Time)))*100
Thismetricnowalsohasfollowing
parameters,whicharebeing
captured:
1.Buyerappsmakingrequests
2.Sellerappsrespondingtosearch
request
3.SellerAppsnotrespondingto
searchrequest
4.CitieswhereONDCisLive
5.Numberofcitiesrequesting
6.Numberofcitiesresponding
GatewayResponse
Time
ThismetricindicatesGateway’s
latencyonONDCnetwork
(TotalTimespentfrom‘receivingthe
requestfromBuyerApp’to‘sharing
theOn_searchresponsebackto
BuyerApp’)/TotalNo.ofRequests
RegistryUptime ThismetricindicatesRegistry’s
availabilityonONDCnetwork
(1-(TotalDowntime/(Total
Time)))*100RegistryResponse
TimeforeachAPI
ThismetricindicatesRegistry’s
latencyonONDCnetwork
Totaltimespentfrom‘receivingthe
request’to‘respondingbackto
NP’)/No.ofAPIsneedingreply
Averageshipping
time(O2S)
Indicatoroffulfillment
experienceofthecustomer.
Timetomarktheorderreadyto
ship
Sum(Timefrom‘Confirm’APIcallto
'orderpickedup'statusfrom
‘On-status’APIcalls)/Totalorders
(numberofOn_confirmAPIs)
AverageDelivery
time(S2D)
Thismetricistheindicatorof
fulfillmentefficiencyofthe
network.Timetodeliverthe
orderpostmarkingreadyto
ship
Sum(Timefromorderpickedup
statusfromon-statusAPIcallto
Deliveredstatusfrom‘On-status’API
calls)/Totalorders(numberof
On_confirmAPIs)
-Thisisonlyapplicableforthose
orderswhereorderStatusmarkedas
"Delivered"
-"updated_at"timestamptobe
consideredforbothstatusin
on_statusAPI
-"updated_at"timestamptobe
consideredforon_confirmAPI
On-timedelivery
percentage
Indicatoroffulfillment
experienceofthecustomer.
%agedeliveryagainst
promistedtime
1.PromisedTime="TAT"attributein
On_confirmAPI
2.Actualtime=Timedifferencedata
field(order_to_delivery_seconds)
fromO2Ddashboard
IfActualtime>Promisedtime=
ordertagged'Delayed"
Percentage=1-(Orderstagged
'delayed'/'Totalordersdelivered')
ReferO2DAPI
RTOPercentage Indicatorsofrevenueleakage
inthenetwork.%ageorders
returnedbacktoseller
No.of‘On-Cancel’APIwithcancel
reasonas"RTO"/No.of
‘On-confirm’APIcallswithstatusas
"accepted"or"created"
Consider"cancellation_reason_id"
datafieldReturnPercentage
(PostOrder)
Indicatorofproductquality,
selleroperationsefficiencyand
logisticsefficiency.%age
ordersreturneddueto
customerraisedissues
Noof'on-update'and'on_status'API
callswithstatus"returnpicked"or
"liquidated"/Noofon-confirmAPI
calls
DeduplicatebasedonTransition
ID.MessageID
RefundPercentage Indicatorsofrevenueleakage
inthenetwork.%agerefunds
issuedagainstdeliveredorders
(On_Cancel(buyercancellation+
sellercancellation+RTO)+
On_Update(postorderreturn(fullor
partial)+partcancellation))/Noof
‘On_confirmAPIcalls
AverageGrievance
resolutiontime
Indicatorofefficiencyof
grievanceresolutionprocess
amongtheNPs.Avgtimeto
resolvecustomergrievance
(Grievanceresolutiontimestamp–
Grievanceinitiationtimestamp)/No
ofNetworkissueIdswithGrievance
asIssuetype
Numberofissues
per1000orders
Thismetricistheindicatorof
operationsefficiencyonthe
ONDCnetwork
(NoofNetworkissueIds(IssueAPI)
/Noof‘onconfirm’APIs)*1000
Averageissue
resolutiontime
Indicatorofefficiencyofissue
resolutionprocessamongthe
NPs.Avgtimetoresolve
customerissues
(Issueresolutiontime–Issue
initiationtime)/NoofNetworkissue
Ids
%Grievances
(%ageofissues
escalatingto
grievances)
Indicatorofefficiencyofissue
resolutionprocessamongthe
NPs.%issuesleadingto
grievances
NoofNetworkissueIDswith
GrievanceFlag/NoofNetwork
issueIDs
ONDCTraffic Thismetricrepresentsthe
demandonthenetwork
Numberof'SelectAPI'callsinitiated
fromBuyerNPs
CartConversion Thismetricrepresentsthe
conversionrateoftheitem
selectiontopurchase
Noof‘On_confirm’APIcalls/Noof
‘On_select’APIcalls
Check-out
Conversion
Thismetricistheindicatorof
check-outuserflowonthe
network
Noof‘On_confirm’APIcalls/Noof
‘On_Init’APIcallsOrderFillRate(in
percentage)
Thismetricistheindicatorof
customerexperienceonthe
network.Thismetriccovers
ordercancelledbytheseller.
Unsolicitedcallstobe
considered.On_UpdateAPI
callwithstatus“Partcancel”
1–((‘On-cancel’APIcalls+
’On-update’APIcall)/‘OnConfirm’
APIcalls)
"Thismetricistheindicatorof
customerexperienceonthenetwork.
Unsolicitedcallstobeconsidered.
On_UpdateAPIcallwithstatus“Part
cancel”
ItemFillRate(in
percentage)
Thismetricistheindicatorof
customerexperienceonthe
network.Thismetriccovers
itemcancelledbytheselleras
againsttotalitemsordered
Unsolicitedcallstobe
considered.On_UpdateAPI
callwithstatus“Partcancel”
Attempttoconfirm Indicatorofimpactondemand
fulfilment(orderconfirmation)
owingtobusinesserrorsonthe
network
Minimumof(1-(#ErrorsinOn_select
calls/No.ofSelectcalls)),(1-
(#ErrorsinOn_initcalls/No.ofinit
calls)),(1-(#ErrorsinOn_confirm
calls/No.ofConfirmcalls))
TATBreach Indicatesthenumberoforderswheretheactualdeliverytimebreached
thepromisedETA
Motorabledistance
view
IndicatestheaveragemotorabledistanceforeachLogisticsService
Providerandnumberofordersfordifferentbucketsofmotorable
distance
Timefor
ready-to-ship
Indicatesthenumberoforderswhichweremarkedreadytoshipin
variousbucketsoftimeduration
Timeforpickup
frommerchants
Indicatesthenumberoforderswhichwerepickedupinvarious
bucketsoftimeduration,aftertheorderwasmarkedready-to-ship
Confirmedrides Indicatesthenumberofrides
whichwereconfirmedbythe
buyer
No.ofon_confirmcallssentfromthe
SellerApp
Assignmentrate% Indicatesthepercentageof
confirmedrideswherethe
No.ofcallswithstatus=‘Ride
Assigned’inon_confirm+on_update
+on_status/totalon_confirmcallsdriverwasassignedtotherider
Confirmedto
completed%
Indicatesthepercentageof
confirmedrideswhichwere
completedbythedriver
No.ofcallswithon_status=
‘completed’/totalconfirmedridesAnnexure4
OpenDataMetrics&Aggregation
ThemetricsdefinedbelowandcombinationoftheseMetricsmaybeusedtopublishon
OpenDataatthefollowingaggregatelevels:
Metric Definition Computation
TotalOrders
Delivered
Thismetricistheindicatorof
volumeofNetworkcommerce
CountofDistinctNetworkOrderId
withintheselectedrange,Order
Status=Completed
%changefrom
previousperiod(
TotalOrders
delivered)
Thismetricistheindicatorof
growthintheNetwork
Commerce
DeliveredOrdersoftheselected
DateRangeoftheFilterminusthe
daterangeofthepreviousperiod.
Example:Last7daysisfrom
01/01/2024to08/01/2024Vs
24/12/2023-31/12/2023
Avg.ItemsPer
Order
Thismetricsisanindicatorof
howmanyitemsarebeing
purchasedperOrder
TotalNumberofItemsordered/Total
UniqueOrders
TotalActive
Districts
Thismetricindicatesdistricts
whereatleast1orderhasbeen
delivered
UniquecountofDistrictswhereorder
hasbeendeliveredwithinthedate
range.Districtsarefetchedusing
districtsmappingusingEndpincode
(IndiaPostTable)
%changefrom
previousperiod(
TotalActive
Districts)
ThismetricistheIndicatorof
growthintheActiveDistricts
ActiveDistrictsoftheselectedDate
RangeoftheFilterminusthedate
rangeofthepreviousperiod.
Example:Last7daysisfrom
01/01/2024to08/01/2024Vs
24/12/2023-31/12/2023
TotalActiveSellers ThismetricindicatesSellers
whodeliveredatleast1order
Uniquecountofcombinationof
(ProviderID+SellerApp)where
orderhasbeendeliveredwithinthe
daterange
Maximum#Orders
DeliveredTo
ThismetricindicatestheDistrict
orStatetowhichthemaximum
#ordershavebeendelivered
SorttheTotalOrdersDeliveredby
State/Districts,basisthedaterange
andotherfiltersselected.Itwillshowtopdistrictswithinastateifastate
mapisselected.Districtsare
mappedusingdeliverypincode.
Maximum#Orders
in
Thismetricindicatesthe
Category/sub-categorytowhich
themaximum#ordershave
beendelivered
SorttheTotalOrdersDelivered
(distinctcountofNetworkOrderId)
groupedatsubCategorylevel,basis
thedaterangeandotherfilters
selected
Intrastate% IndicatorofZonalcommerce
betweenstates
IfDeliveryStateissameasseller
state,itwillbetreatedasintrastate
orders.Percentageofintrastate
ordersw.r.tTotalOrdersgivesthe
values
IntraDistrict% IndicatorofZonalcommerce
betweenDistricts
IfDeliveryDistrictissameasseller
Districtitwilltreatedasintradistrict
orders.Percentageofintradistrict
ordersw.r.tTotalOrdersgivesthe
valuesIAnnexure5
MetricstobepublishedatanindividualNetworkParticipantlevelforFinancial
Services(Credit)
Metrics Definition Computation
NumberofUnique
Searches
Thismetricindicatesuniquenumber
ofborrowersthathaveloggedininto
buyerappandlookedforpersonal
loans,helpingtogaugeinterestin
personalloanproductsonthe
network.
UniquetransactionIdson
searchactioncall
Numberof
applicationssubmitted
Thismetricindicatesunique
borrowerswhohavefilledthebasic
detailsandinitiatedtherequestfor
loan,providinginsightintouser
engagementandapplicationflow.
UniquetransactionIdson
successfulselectcalls
Numberofconsents
Requested
Thismetricreferstothenumberof
timesborrowerconsentisrequested
bylenderstoaccesscreditdata,
ensuringregulatorycomplianceand
transparencyindata-sharing
processes.
UniquetransactionIds
under"ConsentInfo"form
headerbutformstatus
showing"Pending"
Numberofconsents
received
Thismetriccapturesthenumberof
approvalsreceivedfromborrowersto
accesstheircreditinformation,
highlightingborrowerwillingnessand
trustinthenetwork.
UniquetransactionIds
under"ConsentInfo"form
headerbutformstatus
showing"Approved"
Numberofloanoffers
offeredtothe
borrowers
Thismetricindicatesthenumber
borrowerswhohavereceivedloan
offerspostcompletingallnecessary
checks,providingvaluableinsights
intothenetwork’slendingcapacity
andoutreach.
UniquetransactionIds
under"SetLoanAmount"
formheaderandformstatus
showing"Success"
NumberofKnowYour
Customercompleted
Thismetricrepresentsthenumberof
borrowerswhohavesuccessfully
completedtheKYCprocessfor
personalloanrequests,ensuring
compliancewithregulatorystandards.
UniquetransactionIds
under"KnowYourCustomer
(KYC)"formheaderand
formstatusshowing
"Success"Numberof
E-Mandatessetupby
borrowers
Thismetrictracksthenumberof
borrowerswhohavesuccessfully
completedtheauto-debitEMIsetupto
repaytherequestedloans,
streamliningtheloanrepayment
process.
UniquetransactionIds
under"E-mandate"form
headerandformstatus
showing"Success"
NumberofLoan
Agreementsenttothe
borrowers
Thelenderplatformsendstheformto
collecte-signonloanagreementfrom
theborrower.
UniquetransactionIdson
theconfirmcallsunder
"LoanAgreement"form
headerandformstatus
showing"Success"
Numberofloans
disbursed
Thismetriccapturesthetotalnumber
ofpersonalloansdisbursedto
borrowers,reflectingthenetwork’s
abilitytomeetborrowingdemands
andfosterfinancialinclusion.
UniquetransactionIds
wherethefulfilmentstatusis
"Disbursed"andformstatus
is"Success"Annexure6
MechanismforsubmissionofTransactionLogs
● NetworkParticipantsmust shareall thetransactionAPIsandunsolicitedcallsfor
variousAPIs(ACKandNACK)receivedfromSellerAppstothefollowingendpoint
https://analytics-api.aws.ondc.organdtheAPI link
https://analytics-api.aws.ondc.org/v1/api/push-txn-logs
● NetworkParticipant shouldsharethedataasdescribedaboveinJSONformat
● Network Participant shouldscrubPersonal Databyanonymisingineachof theJSON
submittedforAPIscalls.
● ONDChaspreparedthepostmancollectionforreference.
● Network Participants must submit the Transaction Logs as per the process given
below
● Bearer token will be generated and shared in below format, this token should be
usedtosharethejsons.
NPs Token
NP Name and
NPtype
will besharedbyONDCteam
● NPs need to use the bearer token and submit the json using - push-txn-logs
endpoint. Forbetterunderstanding, pleasereferthebelowexamples:
Request
Name
Is_ack Typevaluein
request
Example
init no init
https://pastebin.com/embed_iframe/Pizde
tCD
init yes init_response https://pastebin.com/ecXN20j1
on_init no on_init https://pastebin.com/N9ahqKEzon_init yes on_init_response https://pastebin.com/C05fsYDTAnnexure7
PublishingProcessedMetricsonanindividualNetworkParticipantlevel
● Network Participants level metrics will beusedfor creatingNetworkParticipant
scorecards.
● NetworkParticipantscorecardswillbecommunicatedalongwithactionableinsights
totheindividualNetworkParticipants
● OncetheNetworkParticipantportalislive,somekeyactionrecommendationsbased
ontheNetworkObservabilitymetricscanbeaccessedbyNetworkParticipantspost
login.Annexure8
DataHandlingforNetworkObservability
1. Principles
a. PrivacybyDesign:NetworkObservabilityisdesignedwithprivacybydesign
measuresthroughouttheentirelifecycleofdatamanagement
b. LeastPrivilegeAccess:Accesstodatawillberestrictedtolimitedand
necessarypurposesonly
c. PurposeSpecificationandLimitation:Processingwillbebasedonclearlyand
unambiguouslystatedpurposesandlimitedtothespecifiedpurposesstates
d. StorageLimitation:ONDCshallstoredataforadefinedtimeperiodandonlytill
itfulfilsthepurposeforwhichthedatawascollected
2. Collection
a. NetworkParticipantsmustsubmitTransactionLogswithallPersonalData
scrubbed
b. AnyTransactionsLogswhichhavebeensubmittedwithoutPersonalData
scrubbedwillberejectedandwillnotbestoredbyONDC
c. TransactionLogswillbesubmittedusingJSONWebTokensandcollected
throughasecure‘https’framework
3. Usage
a. ONDCwillgenerateProcessedMetricsfromtheTransactionLogsasstatedin
Annexure2,Annexure3,Annexure4andAnnexure5ofthisnotification
4. Retention
a. ONDCwillstoreTransactionLogsforaperiodofsixty(60)calendardaysfrom
thedateofsubmission
b. ONDCwillstoreProcessedMetricsforaperiodofuptofive(5)yearsfromthe
dateofgeneration
5. Storage
a. TransactionLogsandtheProcessedMetricswillbestoredwithinthe
geographicalboundariesofIndia.
6. Dataprotectionandaccesscontrol
ONDCwillimplementandmaintainacomprehensivesecurityinfrastructurewhichwill
includetechnologicalmeasures,policies,andprocedurestoidentify,prevent,detect,andrespondtopotentialthreatsorbreachestotheentity'sinformationassets.
a. DatastorageandcybersecuritywillbeasperIS/ISO/IEC27001standards
b. TransactionLogsandProcessedMetricsbothintransitandatrestwillbe
encrypted.
c. TopreventaccidentalorintentionaldisclosureofTransactionLogsand
ProcessedMetrics,thefollowingsecuritymeasureshavebeenimplemented
i. Nextgenerationfirewallwithintrusionprevention
ii. Rolebasedaccesscontrol
iii. SecureAPIframework
d. Accesswillbegrantedtoindividualsandorganisationsinatieredmanneras
givenbelow
i. System Administrator Access: TheSystemAdministratorcancreate,
modify and delete applicationwideUser Administrator access, access
privilegesetc.. Thisrolewill beassignedtoauthorisedindividual(s)as
designatedbytheCEOofONDC.
ii. UserAdministratoraccess:UserAdministratorscancreate,modifyand
deleteaccessbyassigningtheappropriaterolesandprivilegesfor
individualswithintheirorganisation.Thisrolewillbeassignedtoauthorised
individual(s)nominatedbyNetworkParticipants..TheUserAdministrator
willnothaveanyoftheEditor,Contributor,Vieweretc.access.
iii. Editoraccess:Individualswhocanupload,modify,delete,processdata
andpublishProcessedMetricstotherespectiveviewersofthedata.This
rolewillbeassignedtoauthorisedindividualsasdesignatedbyONDCand
notifiedunderthispolicy.
iv. Contributoraccess:Thisroleislimitedtoindividualswhoonlyhave
write–onlyaccessandcansubmitTransactionLogs.Thisrolewillbe
assignedtoindividualsnominatedbyNetworkParticipants
v. Vieweraccess:Thisroleenablesread-onlyaccesstoviewProcessed
Metricswhichwillberestrictedtospecificauthoriseduserssuchas
individualsnominatedbyNetworkParticipantsandauthorisedindividuals
designatedbyONDC.
vi. Individualsmayrequestdetailsaccessprivilegesunderrolebasedaccess
controlbywritingtotech@ondc.org
e. ONDCwillestablishandmaintainanauditablesystemthatrecordsandretains
anaccurateandcomprehensiveaudittrailofallactivitiesperformedbyindividualsbasedontheirassignedroles.
7. Destruction
a. Ontheexpiryoftheretentionperiod,TransactionLogsandProcessedMetrics
willbepurgedfromONDC’ssystemsandstoragemedia.
b. Upondirectionsfromanycompetentauthorities,courts,lawsorregulationsto
ONDC,TransactionLogsandProcessedMetricswillberetainedbeyondthe
retentionperiodorpurgedbeforetheretentionperiodasspecifiedinClause4of
Annexure8ofthisnotification.
8. Breach
Intheeventofadatabreachorunauthorisedaccess,
a. ONDCwillnotifytheaffectedpartieswithin72hoursofobservinganysuch
incident.
b. ONDConabesteffortbasiswillattempttoimmediatelypreventanyfurther
attemptofunauthorisedaccessordisclosureoftheTransactionLogsand
ProcessedMetricsandtakesuchstepstosecurethebreachorpossiblecyber
securityincident.
c. ONDCshallmakereasonableeffortstorestoretheTransactionLogsand
ProcessedMetricsofparticipantstotheirpre-incidentstate,ortotheextent
technicallyfeasible.

--- FILE: Notification on Streamlining Inter-NP Vendor Registration post go live | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/notifications/notification_on_streamlining_inter_np_vendor_registration_post_go_live.pdf ---

 
 
Streamlining inter-NP vendor registration post go-live  
 
Notification No.: 2025/05/28/01 
Date: 28th May 2025 
 
1. Context 
At present, when Network Participants (NPs) go production live on ONDC Network, 
they often face friction before beginning to conduct transactions with counterparty 
NPs. A common reason for such friction is NPs have to go through a vendor 
registration process first before beginning to transact, with each of the counterparty 
NPs separately. These vendor registration requirements typically include inter alia 
undergoing a  Know Your Customer (KYC) process, for invoicing and TDS/TCS 
related compliances. 
While most of the vendor registration requirements of various NPs are similar, the 
current process is not standardised and mostly conducted through ‘off-procotol’ 
channels such as emails. In many cases, NPs also face difficulties in identifying the 
appropriate contact person of the counterparty NP for conducting vendor registration 
process, thereby resulting in confusion and multiple iterations of communication. 
Hence, the current process is not scalable, inefficient and ultimately causes delays in 
conducting transactions for both Buyer Apps and Seller Apps. 
Therefore, to reduce the time taken from onboarding on the ONDC Network to 
beginning to conduct transactions, it is imperative that the information exchange for 
vendor registration between NPs is made seamless using a standardised process. 
To address the same, ONDC had released the info/on_info APIs in November 2023, 
which would enable NPs to exchange information required for vendor onboarding in a 
programmatic manner. However, NPs have faced operational challenges in 
prioritising adoption of info/on_info API specs. Accordingly, as a stopgap measure, till 
the NPs have adopted the info/on_info APIs on a network wide scale, ONDC is 
releasing features on the ONDC Participant Portal which will facilitate exchange of 
information required for vendor registration. 
2. Approach  
The ONDC Participant Portal (https://portal.ondc.org) now has features, listed below, 
to enable seamless exchange of information required for vendor registration.  
1. NPs can define their requirements for vendor registration in their disclosures 
2. Documents required for vendor registration can be uploaded and made 
available to Buyer NPs, in one single place 
3. Updating information of contact person who handles vendor registration for 
the NP 
4. NPs can access documents of other NPs as required for vendor registration  
 
5. NPs can update the above information as and when required 
3. Direction 
Accordingly, Network Participants are directed to ensure the following 
i. Buyer Apps must publish their requirements for vendor registration as part of 
their disclosures for listing criteria, in accordance with Clause 2.4.2 (d), 
Chapter 2 Business Rules. 
ii. Seller Apps must publish their requirements for vendor registration, if 
applicable, as part of their disclosures for differential treatment, in accordance 
with Clause 2.5.4 (b), Chapter 2 Business Rules. 
iii. Starting 1st June 2025, both Buyer Apps and Seller Apps must ensure that 
they must conduct their vendor registration through the ONDC Participant 
Portal in a time-bound and transparent manner and avoid using offline 
channels such as Email, Whatsapp etc. This is in line with obligations 
applicable on Buyer Apps to ensure that Seller App’s catalog is displayed to 
buyers in a non-discriminatory manner1 and on Seller Apps to make their 
catalog discoverable to all Buyer Apps in a non-discriminatory manner.2 
iv. NPs must complete their adoption of info/on_info APIs by 31st December 
2025, in accordance with Clause 5.2.1 of the Network Participant Agreement3,  
which requires NPs to conform with ONDC’s Protocol Specifications. 
Failure to comply with the above may result in disciplinary action in accordance with 
the Chapter 9 Governance and Disciplinary Policy of the ONDC Network Policy 
4. Guidance on using ONDC Participant Portal for vendor 
registration 
A summary of the processes to use the features enabled on the NP portal for 
streamlined vendor registration process are given below. 
a. How a Buyer NP can defining requirements for vendor registration 
i. Log in to the ONDC Participant Portal. 
ii. From the top menu, go to: 
 Profile → Manage Profile → Configuration Details. 
iii. Under "Domain", locate the configuration for your Buyer App. 
iv. Find the section titled: “Disclosure for Minimum Standards for 
Displaying Search Results to Buyers.” (Refer to template for Buyer 
App’s listing criteria) 
v. Upload your updated requirements in this section. 
3 Network Participant Agreement 
2 Clause 2.5.4 (a), Chapter 2 Business Rules 
1 Clause 2.4.2 (c), Chapter 2 Business Rules  
 
vi. Click Update to save your changes. 
b. How a Seller NP can define requirements for vendor registration 
i. Log in to the ONDC Participant Portal. 
ii. From the top menu, go to: Profile → Manage Profile → 
Configuration Details. 
iii. Under "Domain", locate the configuration for your Seller App. 
iv. Find the section titled: “Differential treatment towards Buyer Apps” 
v. Upload your updated requirements in this section. (Refer to the 
guidance on preparing disclosures) 
vi. Click Update to save your changes. 
c. Uploading documents for vendor registration 
i. Log in to the ONDC Participant Portal. 
ii. Navigate to: Profile → Manage Profile → Basic Information. 
iii. Scroll down to the KYC Details section. 
iv. Fill in the required fields, including: 
■ PAN 
■ GSTIN 
■ Certificate of Incorporation 
■ Upload the necessary documents required for vendor 
registration. NPs may refer to this guidance note for details on 
the documents which  
d. Viewing Vendor Registration requirements of other Network Participants 
i. Log in to the ONDC Participant Portal. 
ii. Go to: Search on Network → Declarations and KYC. 
iii. In the search bar, enter the name of the Network Participant (NP) 
you want to look up. 
iv. View the NP’s available KYC and declaration details to proceed with 
your verification process. 
e. Requesting vendor registration by counterparty NP 
i. Log in to the ONDC Participant Portal. 
ii. Navigate to: Issue Resolution Hub → Raise Issue. 
iii. Under Your Configuration, select the relevant configuration (e.g., 
 Seller App – MSN Retail – Version 1.2). 
iv. Under Issue Type, select: Other Participant Issues. 
v. In the Raised For field: Select the Network Participant (NP) you’re 
raising the ticket against. 
vi. Under Raised For Config: Choose the NP’s configuration (e.g., 
 Buyer App – [Domain] – Contract Version X.X). 
vii. Under Issue Category, select: LIVE - Operations.  
 
viii. Under Issue Sub-Category, choose ‘Request whitelisting by 
counterparty NP’ 
ix. Enter the Expected Response Time and Resolution Time. 
x. Fill in the Summary and Detailed Description of the issue. 
xi. Click Submit to raise the ticket. 
5. Escalation mechanism 
In case of discrepancies between NP’s published requirements for vendor 
registration and actual documents required in practice, NPs can raise a ticket against 
another NP 
i. Log in to the ONDC Participant Portal. 
ii. Navigate to: Issue Resolution Hub → Raise Issue. 
iii. Under Your Configuration, select the relevant configuration (e.g., 
 Seller App – MSN Retail – Version 1.2). 
iv. Under Issue Type, select: Other Participant Issues. 
v. In the Raised For field: Select the Network Participant (NP) you’re raising 
the ticket against. 
vi. Under Raised For Config: Choose the NP’s configuration (e.g., 
 Seller App – [Domain] – Contract Version X.X). 
vii. Under Issue Category, select: LIVE - Compliance Issues. 
viii. Under Issue Sub-Category, choose ‘Report whitelisting criteria 
discrepancy’ 
ix. Enter the Expected Response Time and Resolution Time. 
x. Fill in the Summary and Detailed Description of the issue. 
xi. Click Submit to raise the ticket. 
6. Queries/Concerns 
For any queries, concerns, or requests related to this notification you may write to 
network.policies@ondc.org. For any concerns related to the ONDC Participant Portal 
you may write to portal-support@ondc.org. 
 
 
 
 
 

--- FILE: Guidelines for applicability of Section 194O, Income Tax Act in multi-ECO model | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/files/ONDC_Guidance_On_Tax/ondc_explainer_deck_on_income_tax_clarification_on_applicability_of_194_o_income_tax_act_in_multi_eco_model_Update.pdf---

CBDT Clariﬁcation 
Circular No 20/2023 
dated 28 December 2023
Guidelines for applicability of Section 194O, Income T ax Act in multi-ECO modelDisclaimer/T erms of use
This document is only for the information of the reader. Nothing in this document is to be construed 
as legal opinion or advice, or tax advice. Any person using this document is advised to conduct an 
assessment of their liabilities and compliances based on their speciﬁc business model, contractual 
arrangements, corporate structure and other relevant considerations. Open Network for Digital 
Commerce Ltd does not make any claims or give any guarantees or warranties regarding the 
completeness or accuracy of the information contained in this document. Open Network for Digital 
Commerce Ltd (and/or its subcontractors, employees and directors) will not be liable for any losses, 
claims (including but not limited to claims by tax authorities), court orders/decrees, or any cause of 
action including (but not limited to) by any government agency or authority brought against the 
reader or the reader’s associates as a result of the reader’s use of the information contained in this 
document.
Guidelines 3.1 : Who is liable to undertake TDS compliance under 
Section 194O in following situations? 
Page 3
Situation 1: Multiple EOPs are involved in a single 
transaction of sale of goods and seller-side EOP is not the 
actual seller of goods or provider of services, but a 
facilitator to the actual seller (e-commerce participant)
Situation 2: Multiple EOPs are involved in a single 
transaction of sale of goods and actual seller of goods or 
provider of services also uses their own electronic or digital 
platform for sale
TDS compliance to be undertaken by seller-side EOP 
(E-commerce Operator) who is responsible or deemed 
to be responsible for payment to e-commerce 
participant
TDS compliance to be undertaken by the intermediary 
EOP who is responsible for making payment Seller 
e-commerce participant
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for speciﬁc advice.
Guidelines 3.2 to 3.6 : Inclusions and exclusions from the “gross amount” 
for the purposes of TDS (as per examples provided in the circular)
Unravelling Equalisation Levy 2.0Page 4
Component Whether to be included in ‘gross amount of sale’ for the purpose of 194-O ?
Packing fees, shipping fees and 
convenience charges invoiced by the 
seller to the buyer (Para 3.2 of the 
Circular)
Yes – to be subject to 194O
GST/ any state levy and taxes indicated 
separately (Para 3.3  of the Circular)
No  - However, TDS under Section 194O may apply on GST component where (i) GST 
component is not included on the invoice (ii) If the taxes are to be deducted on 
payment basis (if it is earlier than credit)
Purchase returns
(Para  3.4 of the Circular)
Purchase return leading to refunds : Where tax is already deducted on purchase, it can 
be adjusted against the next transaction vis-à-vis the same seller in the same FY
Purchase returns leading to replacement : Where tax is already deducted at the time of 
original purchase, no TDS upon replacement 
Seller discount 
(Para 3.5(a) of the Circular)
No – TDS to be undertaken on net sales price ie the sales price less the seller discount
Buyer EOP or Seller EOP discount 
(Para 3.5(b) of the Circular)
Yes – TDS is to be undertaken on gross sales price (without reducing discount) as seller 
receives full consideration and discount is borne by the e-commerce platform
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for speciﬁc advice.
Unravelling Equalisation Levy 2.0Page 5
Guidelines 3.2 : Exclusion under 194O(3) on convenience fee/ 
platform charges of e-commerce operators/ ONDC 
Component
Whether TDS under Section 194H to be deducted?
[where TDS under Section 194O is already deducted on gross 
sales (inclusive of all fees charged by the intermediaries)]
Seller app fees and buyer app fees 
(charged by the seller from the buyer 
and forming part of gross sales for 
194O calculation)
(ie convenience fees or commission, etc)
No TDS since its linked to the main transaction of sale of goods/ 
provisions of services are referred to 194O(1)
Platform fees (ONDC fees)
- Where included in billing to the buyer 
(by the seller) and linked to 
transaction
- Where made on lumpsum basis and 
not linked to speciﬁc transaction 
No TDS since its linked to the main transaction of sale of goods/ 
provisions of services are referred to 194O(1)
Yes
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for speciﬁc advice.
Unravelling Equalisation Levy 2.0Page 6
• Guidelines on applicability of Section 194-O, Income T ax Act 
in multi-ECO model, 
https://incometaxindia.gov.in/communications/circular/ciruc
lar-20-2023.pdf
References
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for speciﬁc advice.


--- FILE: GUIDANCE NOTE ON INDIRECT TAX IMPLICATIONS FOR SUPPLY BY UNREGISTERED/COMPOSITION SELLER THROUGH ECO I.E. SELLER APP | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/files/ONDC_Guidance_On_Tax/ondc_note_on_unregistered_and_composition_sellers_1.pdf ---

 
GUIDANCE NOTE ON INDIRECT TAX 
IMPLICATIONS FOR SUPPLY BY 
UNREGISTERED/COMPOSITION 
SELLER THROUGH ECO I.E. SELLER 
APP 
 
  
 
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  1 
 
Disclaimer/Terms of use 
 
 
 
This document is only for the information of the reader. Nothing in 
this document is to be construed as legal opinion or advice, or tax 
advice. Any person using this document is advised to conduct an 
assessment of their liabilities and compliances based on their specific 
business model, contractual arrangements, corporate structure and 
other relevant considerations. Open Network for Digital Commerce 
Ltd does not make any claims or give any guarantees or warranties 
regarding the completeness or accuracy of the information contained 
in this document. Open Network for Digital Commerce Ltd (and/or its 
subcontractors, employees and directors) will not be liable for any 
losses, claims (including but not limited to claims by tax authorities), 
court orders/decrees, or any cause of action including (but not limited 
to) by any government agency or authority brought against the reader 
or the reader’s associates as a result of the reader’s use of the 
information contained in this document. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  2 
 
 
 
 
Table of Contents 
 
Sr. 
No. 
Content Page 
No. 
I Background 3 
II Executive Summary 4 
III Key GST Topics 11 
A Category of person providing services through ECO 11 
B Person liable to collect TCS – Overview of TCS provisions. 13 
IV Guidance Note for Sellers 15 
A Provisions prior to 1 October 2023 16 
B Amendment in provisions (w.e.f. 1 October 23) - Categories of persons 
who can supply through ECO 
16 
C Conditions for not obtaining GST registration and carrying on business 
through ECO 
17 
D Applicability of TCS 18 
E Compliances to be done by sellers, reporting requirements 20 
F Process to obtain enrolment number 21 
V Guidance Note for ECOs i.e. Seller Apps 23 
A Provisions prior to 1 October 2023 24 
B Amendment in provisions (w.e.f. 1 October 23) - Categories of persons 
whom ECOs can onboard  
24 
C Applicability of TCS 26 
D Penal Implications on ECOs 28 
E Onboarding process - Illustrative checklist for ECOs  29 
F Compliances to be done by ECOs, reporting requirements 31 
VI Glossary 32 
VII Important Links 33 
VIII List of Notifications or Advisories 34 
IX Scope Limitations 35 
 
 
 
   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  3 
 
I. Background 
 
1. ONDC is a not-for-profit company, set-up with an objective of democratizing digital 
commerce in India.  
 
2. ONDC has set-up an inter-operable open network, where Buyers and Sellers can transact 
with each-other without both parties needing to be present on same platform/ application. 
 
3. With the recent amendment w.e.f. 1 October 2023, GST unregistered taxpayer and 
taxpayers registered under the composition scheme can now also supply goods through E-
commerce portal.  
 
4. In light of the above amendment, ONDC could use the below points to prepare a guidance 
note for such unregistered or composition seller and ECOs in view of the above provisions 
under the GST Law. 
 
   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  4 
 
 
 
 
EXECUTIVE 
SUMMARY 
 
 
 
 
 
 
 
 
 
 
  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  5 
 
 
II. Executive Summary 
 
A. Types of Sellers on ECO 
 
Unregistered person Normal Taxable person Composition Taxable 
person 
• Not required to register 
under GST Law 
• Can provide only intra state 
supply 
• Below persons are not 
required to obtain GST 
registration 
 
o Aggregate turnover is 
below the threshold 
(10/20/40 lakhs) – For 
state wise turnover 
limits, please refer 
detailed guidance note 
o Persons exclusively 
engaged in providing 
exempt supply 
o Agriculturist whose 
supply is from cultivated 
land 
o As may be notified by 
government 
• Charge GST as per rate 
prescribed for the 
underlying supply 
• Can avail ITC of GST 
charged on procurements 
• Can provide both intra or 
inter state supply 
• Is required to file monthly 
or quarterly returns (if 
turnover is more than 5 
crores) 
• Is required to issue a Tax 
Invoice 
• Simple, voluntary and 
optional scheme for 
eligible taxpayers 
• Aggregate turnover is 
below the threshold 
(1.5 crore/75 lakhs) 
• Tax to be paid on 
turnover and not on 
each transaction 
• No tax can be 
recovered from the 
customer 
• Not eligible to avail ITC 
• Is required to issue Bill 
of Supply 
• Cannot make inter-
state supplies 
 
B. Overview of GST TCS 
 
Below table summarises key aspects relating to GST TCS 
 
Particulars Description 
ECO • ECO means any person who owns, operates, or manages digital or 
electronic facility or platform for electronic commerce 
GST TCS • ECO is required to collect GST TCS on the taxable supplies made 
through it by Sellers where the consideration with respect to such 
supplies is received by ECO 
GST TCS 
Rate 
• To be collected by the ECO’s @ 1% (IGST) or @ 0.5% each of CGST and 
SGST  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  6 
 
Amount on 
which GST 
TCS is to be 
collected 
• GST TCS is to be deducted from the net value of taxable supplies for the 
month 
• Net value of taxable supplies for the month is to be calculated separately 
for each underlying Seller and GST TCS is to be paid for each 
registration  
• Net value of taxable supplies means the aggregate value of taxable 
supplies made by each underlying Seller through the ECO reduced by 
the aggregate value of taxable supplies returned to each underlying 
Seller during the month (for respective tax heads) 
• GST TCS is withheld by the ECO from the amount collected for the 
underlying supply, the amount is deposited with the government and 
can be used by the Seller for making payment of GST on its outward 
supplies 
Exempt 
Supply 
• Exempt supply means (a) supply which attracts nil rate of tax (b) supply 
exempt by way of notification (c) non taxable supply (supply which is 
not leviable to tax) 
• No TCS is required to be collected as TCS is only applicable on taxable 
supplies 
GST 
registration 
• GST registration to be taken by ECO in all states where the suppliers 
are located 
 
C. Conditions for composition taxable person & unregistered person to supply goods 
through ECO who is required to collect TCS – Amendment wef 1 October 2023 
 
1. W.e.f. 1 October 2023, following person are allowed to supply through ECO (subject to 
certain conditions as listed below) 
 
Unregistered Person Composition Taxable Person 
• Inter- State supply - Not permitted to 
make interstate supplies or supply from 
more than one state 
• Threshold - Aggregate turnover should 
be below threshold1 
• PAN - Should have PAN under Income 
Tax Act, 1961 
• Declaration - Should declare PAN, 
address and state for where supply will 
be made 
• Enrolment Number - Should o btain 
enrolment number from GSTN portal 
and share it with ECO . Refer detailed 
• Inter- State supply - Not permitted to 
make interstate supplies 
• TCS - ECO shall collect TCS on such 
supplies made by seller and pay in cash 
• Reporting - ECO shall report such 
supplies in GSTR-8 
• Liability - TCS deducted can be used to 
make payment of liability  
 
 
1 Check detailed guidance note below for more details  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  7 
 
guidance note for procedure to obtain 
enrolment number. 
• Reporting - ECO shall report such 
supplies in GSTR-8  
 
D. Person allowed to supply through ECO under various scenarios post 1 October 2023 
 
2. Below mentioned is the summary  of scenarios for unregistered or composition taxable 
person for supplying goods through ECO who is required to collect TCS in the table below: 
 
Sr. 
No. Type of Person Nature of 
Supply 
Nature of 
Transaction 
Whether supply 
can be made 
through ECO 
Before 
01 
October 
2023 
W.e.f. 1 
October 
2023 
1.  Composition Taxable 
Person  
Inter State Goods / 
Services 
No No 
2.  Composition Taxable 
Person  
Intra State  Goods No 
 
Yes 
3.  Composition Taxable 
Person (except restaurant 
services) 
Intra State  Services NA NA 
4.  Composition Taxable 
Person – Restaurant 
Services 
Intra State Services Yes Yes 
5.  Unregistered Person  Inter State Goods / 
Services 
No No 
6.  Unregistered Person  Intra State  Goods No Yes 
7.  Unregistered Person  Intra State  Services  Yes Yes 
 
E. TCS applicability – Marketplace / Aggregator model2 
 
Sr. 
No Category of Seller Nature of 
Supply 
Nature of 
Transaction 
TCS 
Applicable 
TCS to be 
collected 
by 
1.  Composition Taxable 
Person  
Intra State  Goods Yes Seller App 
 
2 We have provided the TCS applicability under marketplace / inventory model assuming that the 
consideration of goods / services is collected by the Seller App / Buyer App / Logistics Service Provider 
appointed by such Buyer / Seller App  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  8 
 
2.  Composition Taxable 
Person – Restaurant 
Services 
Intra State Services No 3 NA 
3.  Composition Taxable 
Person – Other than 
Restaurant Services 
Intra State Services Not Permissible 
4.  Composition Taxable 
Person 
Inter State Goods / 
Services 
5.  Unregistered Person  Intra State  Goods No NA  
6.  Unregistered (other 
than notified 
services where ECO 
is required to pay 
tax) 
Intra State  Services No NA 
7.  Unregistered 
(notified services 
where ECO is 
required to pay tax) 
Intra State  Services No4  NA 
8.  Unregistered person Inter State Goods / 
Services 
Not Permissible 
 
F. TCS applicability – Inventory Model (i.e. Seller and Seller App are the same)5 
 
Sr. 
No 
Type of Seller App 
(i.e. Seller) 
Nature of 
Supply 
Nature of 
Transaction 
TCS 
Applicable 
TCS to be 
collected 
by 
1.  Composition Taxable 
Person  
Intra State  Goods Yes Buyer App 
2.  Composition Taxable 
Person – Restaurant 
Services 
Intra State 
 
Services 
 
No6 NA 
3.  Composition Taxable 
Person - Other than 
Restaurant Services 
Intra State Services Not Permissible 
4.  Composition Taxable 
Person  
Inter State Goods / 
Services 
5.  Unregistered Person  Intra State  Goods No NA  
6.  Unregistered (other 
than notified 
Intra State  Services No NA 
 
3 GST on restaurant service to be paid by ECO i.e. the Seller App 
4 GST to be paid by ECO i.e. the Seller App 
5 We have provided the TCS applicability under inventory model, assuming that the consideration of 
goods / services is collected by the Buyer App / Logistics Service Provider appointed by such Buyer App  
6 GST to be paid by ECO i.e. the Buyer App  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  9 
 
services where ECO 
is required to pay 
tax) 
7.  Unregistered 
(notified services 
where ECO is 
required to pay tax) 
Intra State  Services No7 NA 
8.  Unregistered person Inter State Goods / 
Services 
Not Permissible 
 
G. Penalty Implications on ECO 
 
• ECOs are liable for penalty amounting to INR 10,000 each under CGST and SGST or 
amount of tax involved, whichever is higher in following cases: 
 
o Allows supply of goods / services by unregistered persons other than persons 
exempted from registration by a notification 
 
o Allow inter-state supply of goods or services by a person who is not eligible to make 
such supplies 
 
o Fails to furnish correct details in the TCS return of any outward supplies effected 
through it by person exempted from obtaining registration 
 
  
 
7 GST to be paid by ECO i.e. the Buyer App  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  10 
 
 
 
DETAILED 
GUIDANCE 
NOTE 
   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  11 
 
 
 
III. Key GST Topics 
 
A. Category of person providing services through ECO 
 
1. Unregistered person  
 
• Unregistered person refers to an individual who is not obligated to register under the GST 
Laws.  
 
• Persons not required to obtain GST registration (as per section 23 of the CGST Act): 
 
o Person engaged in businesses that supply goods or services not subject to tax or wholly 
exempt from tax under the CGST Act,  
o an agriculturist to the extent that their supply is produced from cultivated land, and 
o Categories of individuals specified by the Government who may be exempt from 
obtaining GST registration through notification. 
 
• This category also includes individuals whose turnover does not exceed the threshold limit 
(INR 10/20/40 lakhs). 
  
2. Normal Taxpayer 
 
• Normal taxpayer is liable for collecting and paying GST on the value of goods and services 
supplied, based on the rates of the goods/service notified by the Government.  
 
• Such taxpayer can avail ITC of the taxes paid on procurements which can be utilized for 
payment of taxes due on the supply of goods or services. 
 
• Taxpayer can file monthly or quarterly returns (for a turnover up to 5 crores) 
 
• A supplier has to obtain registration in every State/UT where he makes taxable supply if his 
aggregate turnover8 exceeds a specified threshold limit. 
 
Threshold Limit – Person is required to obtain GST registration if the aggregate turnover of 
such person exceeds specified threshold limit.  State wise threshold for GST registration has 
been summarised below: 
 
 
8 *Aggregate turnover includes taxable supplies, exempt supplies, exports, interstate supplies of persons having 
same PAN and value on outward supplies on which tax is payable under reverse charge.   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  12 
 
Threshold limit of INR 10 
lakhs (both goods & 
services) (Special category 
states) 
Threshold limit of INR 20 
lakhs (both goods & services) 
Threshold limit of INR 20 lakhs 
(both goods and services) and 
INR 40 lakhs (only for goods) 
1. Manipur 5. Arunachal Pradesh  11. Jammu & Kashmir 
2. Mizoram 6. Meghalaya 12. Assam 
3. Nagaland 7. Sikkim 13. Himachal Pradesh 
4. Tripura 8. Uttarakhand 14. Remaining states not 
covered elsewhere 9. Puducherry 
10. Telangana 
 
3. Composition levy scheme:   
 
• Composition levy scheme is a very simple, hassle-free compliance scheme for small 
taxpayers. It is a voluntary and optional scheme. 
 
• Under such scheme, tax is to be paid on a certain percentage (ranging from 1% to 6%) of 
entire turnover and not on each transaction.  Hence, no tax can be recovered from the 
customer. 
 
• Registered person opting for composition scheme for goods should have an aggregate 
turnover up to INR 1.5 crores (INR 75 lakhs in Arunachal Pradesh, Manipur, Uttarakhand, 
Meghalaya, Mizoram, Nagaland, Sikkim, Tripura) in the preceding FY. 
 
• Persons not eligible to opt for Composition scheme: 
 
• Any supply of goods which are not liable to be taxed under this Act. 
• Inter-state outward supplies of goods 
• Supply of services through electronic commerce operators who are required to collect 
tax under section 52.  
• a manufacturer of notified goods 
• a casual dealer 
• a Non-Resident Foreign Taxpayer 
• a person registered as Input Service Distributor (ISD) 
• a person registered as TDS Deductor/Tax Collector 
 
• Also, composition taxable person is not eligible to avail ITC and required to file monthly 
returns. 
 
4. Difference Between Composition GST & Regular GST Schemes 
 
Particulars Composition taxable person Regular Taxpayer 
Threshold  INR 1.5 crore (Specified states- INR 
75 lakhs) 
INR 10/20/40 lakhs depending on the 
state and nature of business  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  13 
 
Particulars Composition taxable person Regular Taxpayer 
Restriction on 
inter-state 
supplies  
Yes No 
Availment of ITC ITC cannot be availed  ITC can be availed 
Documents to 
be issued 
Bill of supply and shall mention the 
words ‘Composition taxable person, 
not eligible to collect tax on supplies’ 
Tax invoice to be issued 
Returns o Quarterly payment of taxes in 
Form CMP-08 
o Furnishing of return in Form 
GSTR-4 annually 
o Furnishing of annual return in 
GSTR-9A 
o Furnishing of return in Form 
GSTR-1 (outward supplies) 
o Furnishing of return in Form 
GSTR- 3B, and payment of taxes 
o Annual Return and reconciliation 
statement in GSTR-9 & GSTR-9C 
Payment of GST No GST shall be collected from the 
customer 
Net tax to be paid in cash after 
adjustment of ITC.  GST is required to 
be separately charged on the invoice 
 
B. Person liable to collect TCS – Overview of TCS provisions. 
 
Particulars Description 
Who is required to 
collect TCS? 
 
• ECO is required to collect GST TCS on the taxable supplies made 
through it by Sellers where the consideration with respect to such 
supplies is received by ECO. 
 
• In case of ONDC both Buyer App and Seller App will qualify as ECO.  In 
case of multiple ECOs, TCS compliance is required to be undertaken by 
the ECO who is making payment to the seller (Clarified by CBIC) 
 
• It is relevant to note that liability to collect TCS under Section 52 of the 
CGST Act will not be applicable if ECO supplies own goods or services 
through its platform. 
 
• FAQ issued by CBIC clarifies that in case of multiple ECOs, TCS is to be 
collected by the person who is making payment to the Seller. 
Note - ECO means any person who owns, operates, or manages digital or 
electronic facility or platform for electronic commerce 
GST TCS Rate 
 
• GST TCS is to be collected by the ECOs at the rate of 1% (IGST) or 0.5% 
(CGST and SGST each)  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  14 
 
Particulars Description 
Value on which TCS is 
collected: 
• GST TCS will be deducted on the Net value of taxable supplies for the 
month. 
 
• Net value of taxable supplies for the month is to be calculated 
separately for each underlying Seller and GST TCS is to be paid for each 
registration. 
 
• Net value of taxable supplies means the aggregate value of taxable 
supplies each underlying Seller through the ECO reduced by the 
aggregate value of taxable supplies returned to each underlying Seller 
during the month (for respective tax heads). 
 
• GST TCS is withheld by the ECO from the amount collected for the 
underlying supply. 
 
• Amount withheld is then deposited to the government and the same 
shall be available in the electronic cash ledger of the underlying Seller 
who can use the same for making the payment of GST on its outward 
supplies. 
TCS on exempt 
supplies 
• Section 52 of the CGST Act categorically provides that TCS is to be 
collected on the net value of taxable supplies. Thus, provision of 
collecting TCS is not applicable for exempt supplies.  
 
• This is also clarified by the government vide FAQs on TCS, which is 
mentioned below: 
 
Q 15. Whether TCS to be collected on exempt supplies? Ans. No, TCS is not 
required to be collected on exempt supplies. 
Hence, TCS compliance would not be required by Seller App if 
underlying product is exempt 
 
   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  15 
 
 
 
GUIDANCE 
NOTE FOR 
SELLERS 
   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  16 
 
 
IV. Guidance note for Sellers 
 
A. Provisions prior to 1 October 2023 – Certain supply restricted through ECO. 
 
1. Under the provisions of CGST Act, every person supplying goods or services through ECOs 
liable to deduct TCS (other than supplies wherein ECO is required to pay tax), was required 
to be mandatorily registered under GST. 
 
2. Vide Notification No. 65/2017 dated 15 November 2017, supplier of services (other than 
supplies where ECO is required to pay tax) were exempted from obtaining GST 
registration if they are supplying services through ECO who is required to collect TCS and 
whose aggregate turnover is below threshold in a FY.   
 
3. Above exemption during the period prior to 1 October 2023 was applicable only for intra 
state supplier of services and not for any supply of goods. 
 
4. Further, taxable persons making supply of goods or services through an ECO (who is 
required to collect TCS) were not eligible to opt for composition scheme. 
 
B. Amendment in provisions (w.e.f. 1 October 2023) - Categories of persons who can supply 
through ECO. 
 
5. Amendments have been made w.e.f. 1 October 2023 to allow unregistered and 
composition taxable persons to supply goods through ECO: 
 
• Persons under the composition scheme can now supply through ECO. 
  
6. Prior to 1 October 2023, person supplying through ECO was not eligible to opt for 
composition scheme. 
 
7. W.e.f., 1 October 20239, this restriction has been removed and hence, now person 
registered under composition scheme can also supply through ECO. 
 
8. It may be noted that composition scheme is available only for intrastate supply of goods i.e. 
supplies should be in the same state.   
 
• Unregistered supplier of goods being allowed to supply through ECO.10 
 
9. As mentioned above, unregistered suppliers of services were allowed to provide services 
through ECO without obtaining GST registration within the state. 
 
9 Notification No. 36/2023 – Central Tax dated 4 August 2023 
10 Notification No. 37/2023-Central Tax dated 4 August 2023  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  17 
 
 
10. CBIC has issued Notification No. 34/2023-Central Tax dated 31 July 2023 to allow 
unregistered person whose aggregate turnover does not exceed the threshold for GST 
registration to also make supply of goods through an ECO who is required to collect TCS.  
 
11. For ease of reference, we have summarized different scenarios for unregistered or 
composition taxable person for supplying goods through ECO who is required to collect 
TCS in the table below: 
 
Sr. 
No. Type of Person Nature of 
Supply 
Nature of 
Transaction 
Whether supply 
can be made 
through ECO 
Before 
01 
October 
2023 
W.e.f. 1 
October 
2023 
1.  Composition Taxable 
Person  
Inter State Goods / 
Services 
No No 
2.  Composition Taxable 
Person  
Intra State  Goods No 
 
Yes 
3.  Composition Taxable 
Person (except restaurant 
services) 
Intra State  Services NA NA 
4.  Composition Taxable 
Person – Restaurant 
Services 
Intra State Services Yes Yes 
5.  Unregistered Person  Intra State  Goods No Yes 
6.  Unregistered Person  Inter State Goods No No 
7.  Unregistered Person  Intra State  Services  Yes Yes 
8.  Unregistered Person  Inter State  Services  No No 
 
C. Conditions for not obtaining GST registration and carrying on business through ECO 11 
 
12. While unregistered persons are now allowed to supply through ECO, it may be noted that 
they are now required to comply with following conditions: 
 
i. Inter-State Supply - Restriction on Inter-State supply of goods and supply through 
ECO in more than one State or Union territory 
ii. Turnover Threshold - Aggregate turnover should be below the threshold limit. 
iii. PAN - Unregistered person should have PAN issued under the Income Tax Act, 1961 
 
11 Notification No. 34/2023-Central Tax dated 31 July 2023  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  18 
 
iv. Declaration - Before making any supply of goods through ECO, the person must 
declare their PAN, address, and the State or Union territory in which such persons seek 
to make such supply. 
v. Enrolment Number - Unregistered person should obtain enrolment number on GSTN 
portal.  Limitation to one enrolment number in a state or union territory.  No supply can 
be made without enrolment number. It is important to note that only one enrolment 
number can be applied using one PAN (irrespective of the state). 
vi. Cessation of enrolment number - Where registration is subsequently granted to such 
person, the enrolment number shall cease to be valid from the effective date of 
registration. 
 
D. Applicability of TCS in case of unregistered and composition taxable person 
 
13. Every ECO, not being an agent is required to collect GST TCS on the taxable supplies made 
through it by Sellers where the consideration with respect to such supplies is  to be 
collected by the ECO. 
 
14. GST TCS is to be collected by the ECOs at the rate of 1% (IGST) or 0.5% (CGST and SGST 
each). 
 
15. TCS is to be collected on ‘net value of taxable supplies’ i.e. net of sales returns pertaining to 
seller for the particular month. 
 
16. In this connection, we have summarised applicability of TCS for unregistered and 
composition taxable person: 
 
Unregistered person 
 
Section 52 provides that TCS is to be collected on ‘net value of taxable supplies’ and 
definition of net value of taxable supplies provides that it shall mean the aggregate value of 
taxable supplies made during any month by all registered persons through the operator.  
 
Thus, ECO is not liable to collect TCS where the supplies are made by unregistered person. 
This has also been prescribed in the Notification No. 37/2023-Central Tax dated 4 August 
2023. 
 
Composition taxable person  
 
Since, goods supplied by composition taxable person are taxable and hence, such 
composition taxable person is required to collect TCS @1% in respect of supplies made by 
composition taxable person if consideration is collected by ECO. This has been prescribed 
in the Notification No. 36/2023-Central Tax dated 4 August 2023.  
  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  19 
 
17. Following are the list of scenarios where the supply through ECO is restricted and hence 
the question of TCS applicability does not arise: 
 
Sr. 
No. Type of Person Nature of 
Supply 
Nature of 
Transaction 
1.  Composition Taxable Person  Inter State Goods / Services 
2.  Composition Taxable Person (except 
restaurant services) 
Intra State  Services 
3.  Unregistered Person  Inter State  Goods/Services 
 
18. TCS applicability for various scenarios applicable for unregistered and composition taxable 
person has been captured in the below table where consideration is to be collected by 
ECO: 
 
Marketplace and aggregator model12 
 
Sr. 
No Type of Person Nature of 
Supply 
Nature of 
Transaction 
TCS 
Applicable 
TCS to be 
collected 
by 
1.  Composition Taxable 
Person  
Intra State  Goods Yes Seller App 
2.  Composition Taxable 
Person – Restaurant 
Services 
Intra State Services No 13 NA 
3.  Unregistered Person  Intra State  Goods No NA  
4.  Unregistered (other 
than notified 
services where ECO 
is required to pay 
tax) 
Intra State  Services No NA 
5.  Unregistered 
(notified services 
where ECO is 
required to pay tax) 
Intra State  Services No14  NA 
 
 
12 We have provided the TCS applicability under marketplace / inventory model assuming that the 
consideration of goods / services is collected by the Seller App / Buyer App / Logistics Service Provider 
appointed by such Buyer / Seller App 
13 GST on restaurant service to be paid by ECO i.e. the Seller App 
14 GST to be paid by ECO i.e. the Seller App  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  20 
 
Inventory model15 
 
Sr. 
No 
Type of Seller App 
(i.e. Seller) 
Nature of 
Supply 
Nature of 
Transaction 
TCS 
Applicable 
TCS to be 
collected 
by 
1.  Composition Taxable 
Person  
Intra State  Goods Yes Buyer App 
2.  Composition Taxable 
Person – Restaurant 
Services 
Intra State 
 
Services 
 
No16 NA 
3.  Unregistered Person  Intra State  Goods No NA  
4.  Unregistered (other 
than notified 
services where ECO 
is required to pay 
tax) 
Intra State  Services No NA 
5.  Unregistered 
(notified services 
where ECO is 
required to pay tax) 
Intra State  Services No17 NA 
 
E. Compliances to be done by sellers-reporting requirements. 
 
19. Various compliances applicable to unregistered and composition taxable person on 
account of the amendment under the GST Law has been provided below: 
 
Sr. 
No. Compliance Composition taxable person Unregistered person 
1.  Document to 
be issued 
Issue a bill of supply18 for the 
supplies made by it through 
the ECO. 
Issue invoice without GST for 
the supplies made by it through 
the ECO. 
2.  E-Invoicing Not Applicable as below 
threshold limit for 
applicability of e-invoices 
Not Applicable as below 
threshold limit for applicability 
of e-invoices 
 
15 Practically, we understand that the unregistered and composition taxable persons would not be 
registering as seller apps on the ONDC network, instead they would be registering as sellers.  However, 
we have included the implications for completeness purpose.  
Further, We have provided the TCS applicability under inventory model, assuming that the 
consideration of goods / services is collected by the Buyer App / Logistics Service Provider appointed by 
such Buyer App 
 
16 GST to be paid by ECO i.e. the Buyer App 
17 GST to be paid by ECO i.e. the Buyer App 
18 Bill of supply will have to be issued as prescribed under Rule 49 of the CGST Rules   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  21 
 
Sr. 
No. Compliance Composition taxable person Unregistered person 
3.  TCS credit Payment of TCS shall be made 
by the ECO only in cash. TCS 
of a month shall be deposited 
with Government by 10th of 
next month. 
 
TCS will be available in the 
electronic cash ledger of the 
Composition taxable person 
and the composition taxable 
person can utilise the TCS to 
pay its GST liability on the 
outward supplies. 
 
Not Applicable 
4.  Return Filing Composition taxable person 
shall have to file return GST 
CMP-08 on quarterly basis 
and GSTR-4 on annual basis. 
Not Applicable 
5.  E-way bill E-way bill shall have to be 
generated where the value of 
goods exceeds INR 50,000. 
Not Applicable 
 
F. Process to obtain enrolment number (Not relevant for composition taxable person) 
 
20. As mentioned under Section C – ‘Conditions for not obtaining GST registration and 
carrying on business through ECO’, Unregistered person is required to obtain enrolment 
number on GSTN portal in order to make supplies through ECO. 
 
21. It is important to note that only one enrolment number can be applied using one PAN. 
 
22. Further, if the GSTIN is already Active/Suspended using one PAN on GSTN portal then 
user shall not be able to enrol to supply through e-commerce operators using same PAN. 
 
23. We have laid down the process of obtaining the enrolment number herein below: 
 
Steps to generate enrolment number by unregistered persons19: 
 
i. Visit the GSTN Portal at Goods & Services Tax (GST) | Home 
 
 
19 Advisory issued on the GSTN portal dated 12 October 2023  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  22 
 
ii. Select the "User Services" Tab and opt for "Generate User ID for Unregistered 
Applicant. 
 
 
iii. Click “Yes” on the Warning window which asks you to Continue.  
 
iv. Select to apply as a supplier through E-commerce operators. 
 
v. Fill in the mandatory details highlighted in red: 
 
 
Mandatory fields: 
• Name as per PAN 
• PAN of the unregistered supplier 
• Primary email address and mobile number 
• State in which the unregistered supplier wants to enrol as a supplier through 
ECO. 
• Complete address 
• HSN of goods or services 
 
vi. Enrolment number will be generated by the GSTN portal after verification of the 
details filled at point no.v.  
 
  
 
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  23 
 
 
 
 
GUIDANCE 
FOR ECOs i.e 
SELLER APPS 
   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  24 
 
V. Guidance note for ECOs (i.e. Seller Apps) 
 
A. Provisions prior to 1 October 2023 - Certain supply restricted through ECO. 
 
1. Under the provisions of CGST Act, every person supplying goods or services through ECOs 
liable to deduct TCS (other than supplies wherein ECO is required to pay tax), was required 
to be mandatorily registered under GST.  
 
2. Vide Notification No. 65/2017 dated 15 November 2017, supplier of services (other than 
supplies where ECO is required to pay tax) were exempted from obtaining GST 
registration if they are supplying services through ECO who is required to collect TCS and 
whose aggregate turnover is below the threshold in a FY.   
 
3. Above exemption during the period prior to 1 October 2023 was applicable only for intra 
state supplier of services and not for any supply of goods. 
 
4. Further, taxable persons making supply of goods or services through an ECO (who is 
required to collect TCS) were not eligible to opt for composition scheme. 
 
B. Amendment in provisions (w.e.f. 1 October 23) - Categories of persons whom ECOs can 
onboard 
 
5. Amendments have been made w.e.f. 1 October 2023 to allow unregistered and 
composition taxable persons to supply goods through ECO: 
 
• ECOs can now onboard persons under the composition scheme  
 
6. Under the composition levy scheme, a registered person supplying goods whose aggregate 
turnover is below the specified limit can opt to pay tax at a fixed percentage on its annual 
turnover to the government.   
 
7. Currently specified categories of persons whose aggregate turnover in the preceding FY 
did not exceed one crore fifty lakh rupees (seventy-five lakh rupees for selected States20) 
are allowed to opt under composition scheme and GST rates for such persons varies 
between the range of 1% - 5%. 
 
8. Prior to 1 October 2023, person supplying through ECO was not eligible to opt for 
composition scheme. 
 
9. W.e.f., 1 October 202321, this restriction has been removed and hence, now ECOs can 
onboard persons registered under composition scheme. 
 
20 (i) Arunachal Pradesh, (ii) Manipur, (iii) Meghalaya, (iv) Mizoram, (v) Nagaland, (vi) Sikkim, (vii) Tripura, 
(viii) Uttarakhand: 
21 Notification No. 36/2023 – Central Tax dated 4 August 2023  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  25 
 
 
10. It may be noted that composition scheme is available only for intrastate supply of goods.     
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  26 
 
 
• ECOs can now onboard unregistered supplier of goods22 
 
11. As mentioned above, unregistered suppliers of services were allowed to provide services 
through ECO without obtaining GST registration within the state. 
 
12. Recently, CBIC has issued Notification No. 34/2023-Central Tax dated 31 July 2023 to 
allow unregistered person whose aggregate turnover does not exceed the threshold for 
GST registration to also make supply of goods through an ECO who is required to collect 
TCS.  
 
13. Therefore, ECOs can onboard unregistered supplier of goods making supplies within the 
state. 
 
14. For ease of reference, we have summarized different scenarios for unregistered or 
composition taxable person for supplying goods through ECO who is required to collect 
TCS in the table below: 
 
Sr. 
No. Type of Person Nature of 
Supply 
Nature of 
Transaction 
Whether ECO can 
onboard 
Before 
01 
October 
2023 
W.e.f. 1 
October 
2023 
1.  Composition Taxable 
Person  
Inter State Goods / 
Services 
No No 
2.  Composition Taxable 
Person  
Intra State  Goods No 
 
Yes 
3.  Composition Taxable 
Person (except restaurant 
services)23 
Intra State  Services NA NA 
4.  Composition Taxable 
Person – Restaurant 
Services 
Intra State Services Yes Yes 
5.  Unregistered Person  Intra State  Goods No Yes 
6.  Unregistered Person  Inter State Goods No No 
7.  Unregistered Person  Intra State  Services  Yes Yes 
8.  Unregistered Person  Inter State  Services  No No 
 
 
22 Notification No. 37/2023-Central Tax dated 4 August 2023 
23 Composition taxable person are not allowed to provide services other than restaurant services 
(Section 10 of CGST Act)  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  27 
 
15. While unregistered persons are now allowed to supply through ECO, it may be noted that 
they are now required to comply certain conditions for both ECO and sellers. 
 
16. There are penal implications prescribed under the GST Law on the ECOs in case the 
conditions are not complied with. Therefore, it is imperative for the ECOs to ensure that 
the unregistered persons being onboarded comply with the following conditions: 
 
i. Inter-State Supply - Restriction on inter-State supply of goods and supply through 
ECO in more than one State or Union territory. 
ii. Turnover Threshold - Aggregate turnover should be below the threshold limit. 
iii. PAN - Unregistered person should have PAN issued under the Income Tax Act, 1961. 
iv. Declaration - Before making any supply of goods through ECO, the person must 
declare their PAN, address, and the State or Union territory in which such persons seek 
to make such supply. 
vii. Enrolment Number - Unregistered person should obtain enrolment number on GSTN 
portal.  Limitation to one enrolment number in a state or union territory.  No supply can 
be made without enrolment number. It is important to note that only one enrolment 
number can be applied using one PAN. 
v. Cessation of enrolment number - Where registration is subsequently granted to such 
person, the enrolment number shall cease to be valid from the effective date of 
registration. 
 
For ECO, it will be critical to now capture above relevant details at the time of onboarding of 
unregistered seller. 
 
C. Applicability of TCS  
 
17. Every ECO, not being an agent is required to collect GST TCS on the taxable supplies made 
through it by Sellers where the consideration with respect to such supplies is to be 
collected by the ECO. 
 
18. GST TCS is to be collected by the ECOs at the rate of 1% (IGST) or 0.5% (CGST and SGST 
each). 
 
19. TCS is to be collected on ‘net value of taxable supplies’ i.e. net of sales returns pertaining to 
seller for the particular month. 
 
20. In this connection, we have summarised applicability of TCS for unregistered and 
composition taxable person: 
 
Unregistered person - Section 52 provides that TCS is to be collected on ‘net value of 
taxable supplies’ and definition of net value of taxable supplies provides that it shall mean 
the aggregate value of taxable supplies made during any month by all registered persons 
through the operator. Thus, ECO is not liable to collect TCS where the supplies are made  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  28 
 
by unregistered person. This has also been prescribed in the Notification No. 37/2023-
Central Tax dated 4 August 2023. 
 
Composition taxable person – Since, goods supplied by composition taxable person are 
taxable and hence, TCS is required to collect TCS @1% in respect of supplies made by 
composition taxable person if consideration is collected by ECO.  Hence, for the purpose of 
collection of TCS, there is no differential treatment for composition taxable person. This 
has been prescribed in the Notification No. 36/2023-Central Tax dated 4 August 2023.  
 
21. Following are the list of scenarios where the supply through ECO is restricted and hence 
the question of TCS applicability does not arise: 
 
Sr. 
No. Type of Person Nature of 
Supply 
Nature of 
Transaction 
1.  Composition Taxable Person  Inter State Goods / Services 
2.  Composition Taxable Person (except 
restaurant services)24 
Intra State  Services 
3.  Unregistered Person  Inter State  Goods/Services 
 
It would be responsibility of the ECO to ensure that such restricted supplies are not made 
through them. 
 
22. TCS applicability for various scenarios applicable for unregistered and composition taxable 
person has been captured in the below table where consideration is to be collected by 
ECO: 
 
Marketplace and aggregator model25 
 
Sr. 
No Type of Person Nature of 
Supply 
Nature of 
Transaction 
TCS 
Applicable 
TCS to be 
collected 
by 
1.  Composition Taxable 
Person  
Intra State  Goods Yes Seller App 
2.  Composition Taxable 
Person – Restaurant 
Services 
Intra State Services No 26 NA 
3.  Unregistered Person  Intra State  Goods No NA  
 
24 Composition taxable are not allowed to provide services other than restaurant services (Section 10 of 
CGST Act) 
25 We have provided the TCS applicability under marketplace / inventory model assuming that the 
consideration of goods / services is collected by the Seller App / Buyer App / Logistics Service Provider 
appointed by such Buyer / Seller App 
26 GST on restaurant service to be paid by ECO i.e. the Seller App   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  29 
 
4.  Unregistered (other 
than notified 
services where ECO 
is required to pay 
tax) 
Intra State  Services No NA 
5.  Unregistered 
(notified services 
where ECO is 
required to pay tax) 
Intra State  Services No27  NA 
 
Inventory model28 
 
Sr. 
No 
Type of Seller App 
(i.e. Seller) 
Nature of 
Supply 
Nature of 
Transaction 
TCS 
Applicable 
TCS to be 
collected 
by 
1.  Composition Taxable 
Person  
Intra State  Goods Yes Buyer App 
2.  Composition Taxable 
Person – Restaurant 
Services 
Intra State 
 
Services 
 
No29 NA 
3.  Unregistered Person  Intra State  Goods No NA  
4.  Unregistered (other 
than notified 
services where ECO 
is required to pay 
tax) 
Intra State  Services No NA 
5.  Unregistered 
(notified services 
where ECO is 
required to pay tax) 
Intra State  Services No30 NA 
 
D. Penal Implications on ECOs 
 
23. Under the CGST Act, ECOs are liable to penalty31 amounting to INR 10,000 or amount of 
tax involved, whichever is higher where ECOs: 
 
27 GST to be paid by ECO i.e. the Seller App 
28 Practically, we understand that the unregistered and composition taxable persons would not be 
registering as seller apps on the ONDC network, instead they would be registering as sellers.  However, 
we have included the implications for completeness purpose.  
Further, We have provided the TCS applicability under inventory model, assuming that the 
consideration of goods / services is collected by the Buyer App / Logistics Service Provider appointed by 
such Buyer App 
29 GST to be paid by ECO i.e. the Buyer App 
30 GST to be paid by ECO i.e. the Buyer App 
31 Penalty is applicable as per Section 122(1B) of the CGST Act   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  30 
 
 
i. Allows supply of goods / services by unregistered persons other than persons 
exempted from registration by a notification. 
ii. Allow inter-state supply of goods or services by a person who is not eligible to make 
such supplies. 
iii. Fails to furnish correct details in the TCS return of any outward supplies effected 
through it by person exempted from obtaining registration. 
 
24. Responsibility is casted on the ECOs to ensure that supplies by only permitted 
unregistered persons and composition taxable person and done on the ECO portal and 
therefore it is imperative for the ECOs to ensure that the sellers onboarded are compliant 
with the provisions under the law. 
 
E. Onboarding process - Illustrative checklist for ECOs 
 
25. Imposition of penalty on ECO in case of non-compliance done by an unregistered person or 
composite taxable person while supplying goods through ECO casts the responsibility on 
ECO to ensure that there are no violations of the provisions of GST Law in case of such 
supplies. 
 
26. Thus, to ensure compliance, it is advisable to have a proper checklist at the time of 
onboarding any composition taxable person or unregistered person over ECO platform. 
 
27. Considering the same, we have provided the following check list/ procedure which can be 
considered by ECOs while designing their checklist for onboarding any composition 
taxable person or unregistered person.  The checklist is illustrative and in addition to the 
existing documents collected by them: 
 
28. ECO must monitor to ensure that if an unregistered person surpasses any conditions or 
thresholds that make them liable for GST registration, immediate action is taken. In such 
cases, ECO should restrict the sale of goods by such unregistered person through ECO 
until they have obtained GST registration. 
 
• At the time of onboarding 
 
29. At the time of onboarding ECOs could obtain the following information from the sellers: 
 
i. Taxpayer type – To capture whether vendor is regular taxpayer/composite taxpayer or 
unregistered person and determine associated compliances with the same. 
ii. GSTIN / UIN Status – To understand whether the GSTIN of the vendor is 
Active/cancelled/suspended. 
iii. PAN and enrolment number - in order to provide supplies through ECO, CBIC has 
directed unregistered person to have PAN and enrolment number before affecting  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  31 
 
supplies through ECO.  Accordingly, ECO should collect PAN and enrolment number 
from unregistered person at the time of onboarding. 
 
Considering that unregistered taxpayers may need help on process to obtain 
enrolment number, ECO could educate the unregistered sellers. 
 
iv. Process to verify enrolment number – ECO is required to report sales made by 
unregistered person through them.  Reporting is required to be made based on the 
enrolment number.  Such details are required to be verified on GSTN portal or through 
service providers such as GSPs.   
 
• At the time of affecting supplies through ECO 
 
30. Obtain details of HSN code of the supplies made by the composition taxable person and 
unregistered person to ensure that composition taxable person is supplying only goods and 
not supplying any services (except restaurant services). 
 
31. Pin code mapping – ECO should develop restrictions on the platform to ensure that only 
intra state supplies are being undertaken by such unregistered and composition taxable 
person. 
 
32. Verify aggregate turnover of the sellers. 
 
• Declarations 
 
33. Terms and conditions should be modified to cast onus on the seller to comply with the 
provision under the GST Law. 
 
34. ECO could consider obtaining declaration / indemnity from the vendor on account of non-
compliances by the vendor.  
 
35. Please note that above is an illustrative check list and not exhaustive. Therefore, ECO can 
have additional check list as per their requirement of business. 
 
F. Compliances to be done by ECOs-  Reporting requirements. 
 
36. Various compliances applicable to ECOs on account of the amendment under the GST Law 
has been provided below: 
 
Applicable 
Return Reporting to be done Table 
GSTR-8 ECOs will have to report the following details in respect of 
the supplies made by unregistered person through ECO: 
Table 3.1  
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  32 
 
Applicable 
Return Reporting to be done Table 
⎯ Enrolment no. of supplier 
⎯ Gross value of supplies made 
⎯ Value of supplies returned 
⎯ Net value of the supplies 
GSTR-8 ECOs will have to report the following details in respect of 
the supplies made by composition person through ECO: 
⎯ GSTIN of supplier  
⎯ Details of supplies made which attract TCS: 
• Gross value of supplies made 
• Value of supplies returned 
• Net amount liable for TCS 
⎯ Amount of tax collected at source (CGST/SGST/IGST) 
Table 3 
GSTR-1 ECO providing notified supplies under Section 9(5) of CGST 
Act (Restaurant Services) are required to report the 
following details: 
⎯ URP2B: Transaction between unregistered supplier and 
registered recipient (Invoice wise details to be furnished) 
⎯ URP2C: Transaction between unregistered supplier and 
recipient (POS wise details to be furnished) 
Table 15 
GSTR-3B ECO providing notified supplies under Section 9(5) of CGST 
Act (Restaurant Services) are required to report the same in 
GSTR-3B.  
Table 3.1(a) 
 
37. Composition taxable persons shall issue a bill of supply for the supplies made by it through 
the ECO. Therefore, the ECOs shall have to allow bill of supply as a document type on its 
platform.  
   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  33 
 
VI. Glossary 
 
Acronym Full form 
ONDC Open Network for Digital Commerce 
GST Goods and Services Tax 
ECOs Electronic Commerce Operators  
CGST Act Central Goods and Services Tax Act, 2017 
TCS Tax Collected at Source 
FY Financial Year 
CBIC Central Board of Indirect Taxes and Customs 
PAN Permanent Account Number 
GSTN  Goods and Services Tax Network 
GSTIN Goods and Services Tax Identification number 
HSN Harmonized System of Nomenclature 
UIN Unique Identity Number 
GSPs GST Suvidha Providers 
GSTR Goods and Services Tax Return 
SGST State Goods and Services Tax 
IGST Integrated Goods and Services Tax 
POS Place of Supply 
NPs Network Participants 
KYC Know your customer 
 
   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  34 
 
VII. Important links 
 
 
Sr. 
No Particulars Links or websites 
1. GSTN Portal Goods & Services Tax (GST) | Home 
2. GST rate check Goods & Service Tax, CBIC, Government of India :: GST 
Goods and Services Rates (cbic-gst.gov.in)  
 
(This site may not be updated so it is prudent to check with 
GST rate notifications available on CBIC website) 
3. GST Acts, notifications, 
circulars 
CBICWEBSITE 
4. Flyers on TCS, E-
commerce, 
Composition taxable 
person 
CBIC Content Msts 
5. Search enrolment 
number 
Goods & Services Tax (GST) | Services 
6. Application for 
enrolment number 
https://reg.gst.gov.in/registration/generateuid  
 
   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  35 
 
VIII. List of Notifications/ Advisories/Section  
 
Notification No/Advisory Gist of Notification/Advisory 
Notification No. 65/2017 
dated 15 November 2017 
Exemption from obtaining GST registrations through ECO 
in case turnover is below INR 20 Lakhs  
Notification No. 52/2018 
dated 20 September 2018 
Provides rate of collection of TCS 
Notification No. 10/2019 - 
Central Tax dated March 
2019 
Exemption from registration for any person engaged in 
exclusive supply of goods and whose aggregate turnover in 
a FY does not exceed INR 40 lakhs 
Notification No. 34/2023-
Central Tax dated 31 July 
2023 
Conditions for not obtaining GST registration and carrying 
on business through ECO 
Notification No. 36/2023 – 
Central Tax dated 4 August 
2023 
Removal of restriction for supply of goods through ECO for 
composition taxable person 
Notification No. 37/2023-
Central Tax dated 4 August 
2023 
Unregistered supplier of goods being allowed to supply 
through ECO 
Advisory issued on 12 
October 2023 
Steps to generate enrolment number by unregistered 
persons 
 
 
 
 
 
   
DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. 
The reader is advised to consult a tax expert for specific advice. 
  36 
 
IX. Scope Limitations 
 
Our comments are provided in respect of the GST implications alone, which are based on our 
interpretation of the provisions and is not binding on the GST tax authorities or any third party other 
than ONDC. 
 
Our view above is based on the present legal provisions and clarifications/notifications/ case laws 
available as on date. 
 
Our comments are based on the CGST Act and Rules and notifications and circulars available on the 
subject matter as on date in public domain. Unless specifically requested to do so, we are under no 
obligation to keep you informed of subsequent modifications to the law or practice. 
 
A misstatement or omission of any fact or a change or an amendment in any of the facts, assumptions, 
or representations we have relied upon, may require a modification of all or a part of our document. 
 
This document is based on an analysis of the tax laws in India and represents our interpretation of the 
said laws. The foregoing is subject to change and any such change could have a retroactive effect on 
the conclusions presented in this document. 
 
Our interpretation of the tax laws and our consequent comments are not binding on any Revenue/ 
Regulatory authorities and there can be no assurance that the Revenue/ Regulatory authorities may 
not take a position contrary to our comments and the basis of claim will not be challenged. The 
outcome of the proceedings before the revenue authorities is outside our control and hence you 
understand and accept the responsibility for the outcome of our recommendation under the 
engagement. 
 
Our advice is as of the date of this document and is based on the law and practice as on that date. 
Unless specifically requested to do so, we are under no obligation to keep you informed of subsequent 
modifications to the law or practice. 
 
Our document is solely for the benefit of ONDC and not to be relied upon by anyone other than 
ONDC. Hence, if you wish to disclose copies of our work to any other person or entity, you must 
inform them that they may not rely upon any of our work for any purpose without our written 
consent. 
 

--- FILE: Disclosures by Seller Apps for differential treatment to Buyer Apps | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/notifications/ONDC_Notification_Disclosures-by-Seller-Apps-for-differential-treatment-to-Buyer-Apps_08July2023.pdf ---

DisclosuresbySellerAppsfordifferentialtreatmenttoBuyerApps
NotificationNo.:2023/07/08/04Date:08/07/2023
1. Context
Fair search and discovery is a fundamental requirement to keep an open networkhealthy andcompetitive. Onthebuyer-side, fair searchanddiscoveryisachievedbymandating Buyer Apps to be transparent about their parameters for sorting andfiltering search results, and also requiring them to apply those parameters in anon-discriminatorymanner.
1
On the seller-side, Seller Apps have certain obligations to ensure fair search anddiscovery. Clause2.4.6of Chapter2BusinessRules
2 
requiresSellerAppsto
“ensure that all goods or services that are listed on their platformare discoverable on other Buyer SideApps ontheONDCNetworkand will ensure that End Users always have access to the entirecatalogueof goodsorservicesofferedbytheSellerSideApps.”
This obligation is intended to ensure Sellers and their catalogues are discoverablethroughall BuyerApps, whichisanessential requirement foranopennetwork.
Whilesellers havefull discretiontodecidewithwhomtheywishtotransact (includingwhether they want torespondtoasearchquery), inpractice, thechoicemayactuallybe exercised by Seller Apps on the Sellers’ behalf. So Seller Apps may refuse torespondtoasearchqueries or offer differential transactionterms or selectivelyofferadd-ons/features to certain Buyer Apps and not to others. There may be validreasons to refusetotransact (orrespondtoasearch)suchasstorenot serviceable,inventory stock out, systemdown, buyer finder feenot acceptableetc. WhileSellerApps do need tobegivendiscretion, this discretioncannot beabsolutesinceit canbe misused to engage in anti-competitive practices such as collusion with specificBuyer Apps. Consequently, the open network may turn into a closed, oligopolisticnetwork.
While, asaprinciple, ONDCdoesnot curtail NetworkParticipants’ choices, it isof theview that if Network Participants want to engage in differential treatment of otherNetwork Participants, they should be transparent about it. This has already beenmandated for Buyer Apps
3 
, with respect to search and discovery. ONDC is nowintroducingreciprocal obligations for Seller Apps. Towit, SellerAppswill berequired
3 
ProvisoClause2.3.3(k), Chapter2BusinessRules, version1.1
2 
Chapter2BusinessRules, version1.1
1 
Clause2.3.3(k), Chapter2BusinessRules, version1.1to disclose their terms (if any) for refusingtorespondtosearchrequests or offeringdifferential transactiontermsorfeaturestocertainBuyerApps.
2. Notification
Accordingly, Clause2.4.6of Chapter2BusinessRules
4 
isamendedanderstwhileClause2.4.6will nowbeClause2.4.6(a)andClause2.4.6(b)will beadded(indicatedinblue). ThenewClause2.4.6(a)andClause2.4.6(b)will readasfollows:
2.4.6SellerSideApps
(a) ensurethat all goods orservicesthat arelistedontheirplatformarediscoverableonother Buyer SideApps ontheONDCNetwork andwill ensure that End Users always have access to the entirecatalogueof goodsorservicesofferedbytheSellerSideApps.
(b) must publishtheircriteriaforrefusingtorespondtosearchrequests,or for giving any differential treatment toBuyer SideApps intermsof their offer which includes different prices, transaction terms,different features/add-ons, or refusing certain parts of the offer tocertain Buyer Side Apps, and apply such criteria consistently andfairlytoall theBuyerSideApps.
3. Queries/Concerns
Foranyqueries, concerns, orrequestsrelatedtothisnotification, youmaywritetonetwork.policies@ondc.org
4 
Chapter2BusinessRules, version1.1

--- FILE: Displaying Seller App’s name to the Buyer | URL https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/notifications/ONDC_Notification_Displaying_Seller_App_s_name_to_the_Buyer_08July2023.pdf ---

DisplayingSellerApp’snametotheBuyer
NotificationNo.:2023/07/08/05Date:08/07/2023
1. Context
AtransactionontheONDCNetwork is betweentwopartiesi.ebuyerandseller, withBuyer Apps andSeller Apps, facilitatingthetransaction. BothBuyerAppsandSellerApps can be considered e-commerce entities/operators under existing laws.However, existinglaws andregulations relevant toe-commerce-suchasConsumerProtection Act 2019, E-Commerce Rules 2020, Food Safety and Standards(Labelling and Display) Regulations 2018 etc. - are predicated on the assumptionthat atransactionisfacilitatedbyasinglee-commerceplatform.
This lack of one-to-one correspondence between the ONDC Network’s model andthe existing laws can raise concerns related to consumer protection as well asregulatory compliance. Further, unless all the e-commerce entities involved in atransaction are clearly identified, Buyer Apps could end up being held liable foractions/omissions by the Seller Apps, and vice versa. Froma consumer’s point ofview, knowing who the Seller App is, can be an additional factor in theirdecision-making. Therefore, identifying all e-commerce entities intermediating atransactionisimportant fromboththebuyers’ andregulators’ perspective.
Accordingly, ONDCisissuingthisnotification.
2. Notification
Anewsub-clause(l)will beaddedaftersub-clause(k)inClause2.3.3of Chapter2BusinessRules
1 
of theONDCNetworkPolicy, whichdescribestheobligationsof theBuyerApp. ThenewClause2.3.3(l)will readasfollows:
“(l)toprominentlydisplaythenameof theSellerSideAppofferingtheproduct/service, andmust clearlyconveythesametoCustomers/ EndUsersontheirapplicationat anytimebeforethecompletionoftheorder, whichmayincludethelistingpagewiththesearchresultsortheproduct/servicedisplaypage.”
3. Queries/Concerns
Foranyqueries, concerns, orrequestsrelatedtothisnotification, youmaywritetonetwork.policies@ondc.org
1 
Chapter2BusinessRules, version1.1

--- FILE: ONDC network infrastructure development and services fee | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/notifications/ondc_notification_network_infrastructure_and_services_development_fee.pdf ---

 
ONDC network infrastructure development and 
services fee 
Notification No.: 2024/12/03/01 
Date: 03/12/2024 
1. Context 
Open Network for Digital Commerce (ONDC) is a not -for-profit company registered under 
Section 8 of the Companies Act 2013. ONDC develops and maintains the infrastructure that 
underpins the ONDC Network and provides critical network services to Network Participants 
(NPs) that allow the Network to function, while maintaining trust. Some of the criti cal services 
provided by ONDC include: 
a. Technology Enablement 
ONDC develops protocol specifications to enable interoperable transactions in various 
categories of products and services.  
b. NP onboarding support and lifecycle management 
The ONDC NP Portal provides a mechanism for NPs to manage their lifecycle on the 
Network from prototyping and onboarding, to day -to-day compliance and operations, 
till deboarding. ONDC’s Pramaan portal gives NPs a streamlined mechanism to 
automate QA testing for their applications. 
c. Community management 
ONDC builds and manages communities to drive network governance & evolution 
d. Policy Development and Compliance 
ONDC develops and drives compliance with the ONDC Network Policy, which in turn 
ensures that all NPs behave in a fair & non -discriminatory manner. ONDC also engages 
with various government authorities to promote a regulatory environment that is 
conducive to doing business, and to ensure that the Network and its participants do not 
fall afoul of any existing laws. 
e. Transparency 
ONDC provides transparency and actionable insights on network growth, performance 
& network health metrics through the Network Observability framework, Catalogue 
Rejection Framework, and Open Data. 
f. Capacity building & Knowledge sharing 
ONDC publishes guidance and good practices for Network Participants to assist in their 
growth and to improve their offerings. ONDC also publishes guidance and conducts 
training sessions for NPs on various critical statutory and tax compliance issues, for t he 
benefit of the NPs. 
g. Grievance redress 
ONDC provides a robust, multi-tiered consumer grievance redress system. 
In the interest of driving quick adoption and to encourage participation, especially among 
smaller businesses, ONDC had so far not charged any fees. This approach has allowed the 
Network to establish a strong foundation and achieve healthy growth.   
However, as the Network matures further, the introduction of a nominal fee is necessary to 
sustain and enhance the Network’s and ONDC’s operations. As an open network, ONDC 
requires continuous investments in technology infrastructure, information security,  protocol 
development, and technical support to Network participants. 
Accordingly, ONDC will start levying a nominal ONDC Network infrastructure development and 
services development fee to all NPs for each transaction conducted through the ONDC Network. 
The fee will ensure that ONDC can continue providing reliable infrastructure services to the 
Network ecosystem, while adhering to its not -for-profit principles, and also make further 
investment into the ecosystem for sustained growth and innovation. 
ONDC has conducted extensive consultations with Network Participants, including an in-person 
consultation at the Network Participant Connect event held on 7th -8th November 2024, to 
arrive at a Network-wide consensus on the nature and quantum of these fees. 
In view of all the above ONDC is issuing this notification. 
2. Guiding principles for charging fees 
ONDC has relied on a few key design principles in the design and implementations of the fee: 
(a) Simplicity - The fee has to be simple to understand, compute, implement and monitor 
(b) Data-minimization - Calculating and administering the fee should not require an NP to 
expose business-sensitive data beyond the bare minimum 
(c) Fairness - Since transactions of all categories use the infrastructure and network 
services to an identical degree, they should attract the same fee 
(d) Equity - The fees should be calibrated in a way that businesses in the Network can thrive 
(e) Value-realisation: The fees should only be levied when a Network Participant actually 
realises some value from using the Network 
 These guiding principles underpin the quantum, structure, and implementation of the fee. 
3. Notification 
In exercise of its powers under Clause 3 of the ONDC Network Participant Agreement, and 
Clause 3.3.1 of the ONDC Network Policy Chapter 3: Commerce Model; ONDC hereby notifies 
the following: 
(1) Quantum of fees : ONDC will levy a fee of INR 1.5 (exclusive of taxes) for every 
transaction conducted through the ONDC Network on every successful transaction 1 
where the total transaction value exceeds INR 250 after discounts and taxes. 
(2) Who will pay : This fee will be paid by each Seller Network Participant (both ISN and 
MSN) on the basis of the number of successful transactions. The term Seller Network 
Participant includes Logistics Services Providers who are Network Participants. In the 
case of financial services the following entities on the network will be considered Seller 
Network Participants, and therefore liable to pay the fee: 
(a) Credit - lenders; 
(b) Insurance - insurance companies; 
 
1 As defined in Chapter 3 of the ONDC Network Policy  
(c) Mutual funds – AMC or their agents offering this in the network. 
(3) How will transaction value be determined: The transaction value amount will be as per 
the invoice issued to the customer. 
(4) On which transactions will the fee apply: The fee has to be paid on all successful 
transactions (irrespective of category) above the specified value threshold, provided 
there is no return or refund issued within the return/refund window specified by the 
seller in advance in their terms of sale to the buyer. The fee will apply even to 
transactions where the Buyer Network Participant and Seller Network Participant the 
same or related entities. 
(5) Which transactions are exempt: A transaction will not attract the fee if:  
(a) the order is cancelled before being fulfilled,  
(b) if the transaction is below the aforementioned value threshold or  
(c) if a return or refund is issued by the seller within the return/refund window 
specified by the seller in advance in its terms of sale to the buyer. 
(6) Determining number of chargeable transactions : The total number of chargeable 
transactions2 conducted by the NP in every month will be as declared by the NP to ONDC 
by the 7th of the following month. ONDC may ask for additional information, and/or ask 
for certifications and declarations against the reported transactions for the month or 
carry out other necessary verifications, to ensure that the number of reported 
chargeable transactions is accurate. 
(7) Invoicing: The ONDC Finance team will issue an invoice to each Seller NP by the 15th of 
every month for successful transactions conducted in the previous month. For example, 
a Seller NP conducts 100 transactions in January where a fee is attracted. ONDC Finance 
Team will send an invoice to the Seller NP by 15th of February for fees to be paid against 
those 100 transactions. 
(8) Fee payment timeline: The fee will be payable within 10 calendar days from the date of 
issuing the invoice. 
(9) Acceptable payment methods : At this stage, all payments must be made to ONDC’s 
bank account through a bank transfer. Account details as follows: 
(a) Payee name: Open Network for Digital Commerce Ltd 
(b) Account number: 50100529332662 
(c) IFSC Code: HDFC0000503 
(10) Commencement date: The fees will be on transactions starting 1st April 20253. 
(11) Dispute resolution: In case of any complaints related to the quantum of fees or 
any other matter related to ONDC fees, the Network Participant may contact the ONDC 
Team on fees@ondc.org. In case of a dispute arising between the NP and ONDC in 
relation to the fees, the dispute will be resolved as per Chapter 6 of the ONDC Network 
Policy. 
Any amendments including revising the quantum, nature, applicability, implementation 
mechanisms and other aspects of the fee Intimated as a notification 30 days in advance of the 
applicability of the new structure. 
 
2 Chargeable transactions means transactions on which the fee has to be paid.  
3 Revised 1st January 2025 with 1st April 2025 by Notification No. 2024/12/26/01 dated December 26, 2024  
4. Queries and concerns 
In case of any concerns or queries related to this notification please write to us on 
fees@ondc.org 

--- FILE: Providing Buyers with alternatives to default/organic sorting | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/notifications/ONDC_Notification_Providing_Buyers_with_alternatives_to-default_organic_sorting_11July2023.pdf ---

ProvidingBuyerswithalternativestodefault/organicsorting
NotificationNo.:2023/07/11/01Date:11/07/2023
1. Context
Buyer Apps are solely responsible for the buyer-side interface and for curatingthebuyer’s experience. Toattract morebuyers, BuyerAppsmaypersonaliseorenhancethe experience for the buyers using proprietary technology to sort search results.These could be based on various parameters such as buyer’s search/transactionhistory or onthebasis of certainparameters suchas - seller rating, deliverytime, fillrateetc. -chosenbytheBuyerApp. However, thedefault sortingcriteriathat aBuyerAppuses canleadtocertainsellersbeingdemotedintherankingsinawaythat theyhavepractically nochanceof beingdiscoveredby thebuyer. This inturnwouldleadtothebuyer’schoicebeinglimited.
ONDC has already instituted one mechanism to enable the buyer to make aninformed choice: Buyer Apps are required to declare their organic/default sortingparameters
1 
and their filtering criteria
2
. However, this still means that thebuyer canonly seeresults that theBuyer Appchooses toshowthemusingalgorithmsthat thebuyer may have no say over. The buyer may not always be interested in thesorting/ranking provided by the Buyer App, and may instead want to viewsellers/products/services sortedinadifferent manner. Whileit couldvarybyproduct/servicecategories, theparametersthat abuyermaybeinterestedincaninclude:
● sortingbycost● sortingbysellerratingorproduct rating● sortingbydistanceordeliverytime
While Buyer Apps are likely to provide some of thesesortingoptions totheir usersanyway, ONDCis of theviewthat thereis aneedtocodify theobligationtoprovidealternativesortingoptionsbytheBuyerApp.
Under the provisions of the ONDC Network Policy, Buyer Apps have the right toexcludeanyresultsthat:
(1) arenot compliant withthelaw,
2 
ProvisoinClause2.3.3(k), Chapter2BusinessRules, version1.1, “Providedfurtherthat, theBuyerAppmayprescribeuniformminimumstandardsforsearchresultstobedisplayedtotheBuyer, solongasit publishessuchstandardsonitswebsiteandapplication, andappliessuchstandardsconsistentlyandfairlytoall Sellers.”
1 
ProvisoinClause2.3.3(k), Chapter2, BusinessRules, version1.1, “Providedthat, theBuyerApppublishessuchanexplanationontheirwebsiteand/ormobileapplication, asthecasemaybe, thekeyparametersof thelogicusedforsorting/listingsearchresults, toensurethat Sellersareabletoimprovetheirrankingonlistingsorresults(2) arenot compliant withtheONDCProtocol Specifications, or
(3) arenot inlinewiththeBuyerApps’ publishedminimumcriteria.
3
The obligations related tosortingapply only after agivenresponsetoasearchhasclearedthethreeaforementionedrequirements(asshowninFigure1).
Figure1: Searchresponsedisplayfunnel
2. Illustration
Let’s assume a Buyer App A, whichis intheONDCNetwork, operates intheFoodand Beverages category. Buyer App A in its sorting/filtering disclosures has statedthat its minimumrequirement (“MinimumCriteria”) to display search responses isthat the restaurant must provide at least one high quality photograph of the fooditem.
4 
Further, in line with Chapter 2 Business Rules
5
, Buyer App A has alsodisclosed the their default/organic sorting algorithm uses the following parameters(“SortingParameters”)tosort theresults(indescendingorderof importance):
i. relevancetothebuyer’skeywordsearch(most importance)
ii. restaurant rating,
5 
ProvisoinClause2.3.3(k), Chapter2, BusinessRules, version1.1, “Providedthat, theBuyerApppublishessuchanexplanationontheirwebsiteand/ormobileapplication, asthecasemaybe, thekeyparametersof thelogicusedforsorting/listingsearchresults, toensurethat Sellersareabletoimprovetheirrankingonlistingsorresults”
4 
ProvisoinClause2.3.3(k), Chapter2, BusinessRules, version1.1, “Providedfurtherthat, theBuyerAppmayprescribeuniformminimumstandardsforsearchresultstobedisplayedtotheBuyer, solongasit publishessuchstandardsonitswebsiteandapplication, andappliessuchstandardsconsistentlyandfairlytoall Sellers”
3 
ProvisoinClause2.3.3(k), Chapter2, BusinessRules, version1.1, “Providedfurtherthat, theBuyerAppmayprescribeuniformminimumstandardsforsearchresultstobedisplayedtotheBuyer, solongasit publishessuchstandardsonitswebsiteandapplication, andappliessuchstandardsconsistentlyandfairlytoall Sellers”
iii. timetodeliver,
iv. distancefromdeliverylocation(least importance)
This means the algorithm uses these four parameters to sort responses fromrestaurants. Further, relevance to keyword search has the highest weightage, anddistancefromdeliverylocation, thelowest importance.
So now when a Buyer searches for aparticular fooditemonBuyer AppA, theappwill first remove all results that are not compliant (as explained in the previoussection). TheApp’s listingpagewill thendisplay thecompliant searchresults sortedby Buyer AppA’ssortingalgorithm, whichusestheSortingParametersstatedabove.Under this notification, Buyer AppAwill berequiredtoprovidetheBuyeralternativesortingoptionssuchas:
● Sort bycost,● Sort bydeliverytime,● Sort bydistance,● Sort byseller/product ratingoranyothers
Whilethereisnospecificmandateonwhichoptionsshouldbeprovided, thereshouldbe a reasonable variety of options for an average person to be able to make aninformeddecision.
To reiterate, this notification does not mandate Buyer App A to display any searchresults that donot meet its MinimumCriteriaor arenot compliant withthelawortheONDC Protocol Specifications. These provisions only apply to the sorting ofcompliant searchresults.
3. Notification
Intheinterest of consumerchoice, ONDCisamendingsub-clause(k)of Clause2.3.3of Chapter 2 Business Rules
6 
of the ONDC Network Policy. The following provisoshouldbeaddedtoClause2.3.3(k):
“Provided further that, theBuyer Appprovides theBuyer theoptionto sort searchresults as per reasonableparameters relevant totheproduct/service in question, to enable the Buyer to make aninformedpurchasedecision.”
4. Queries/Concerns
For any queries, concerns, or requests related to this notification, youmay writetonetwork.policies@ondc.org
6 
Chapter2BusinessRules, version1.1

--- FILE: Publishing information on parameters affecting ranking of goods/services or sellers | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/notifications/ONDC_Notification_Publishing_information_on_parameters%20affecting_06June23.pdf ---

Publishing information on parameters af fecting ranking of goods/services or sellers 
 Notification No.: 2023/06/06/01 Date:06/06/2023 
Context 
 C l a u s e 5 ( 3 ) ( f ) o f t h e E - C o m m e r c e R u l e s , 2 0 2 0 r e q u i r e s e - c o m m e r c e e n t i t i e s t o p u b l i s h 
 “ a n e x p l a n a t i o n o f t h e m a i n p a r a m e t e r s w h i c h , i n d i v i d u a l l y o r c o l l e c t i v e l y , a r e m o s t s i g n i f i c a n t i n d e t e r m i n i n g t h e r a n k i n g o f g o o d s o r s e l l e r s o n i t s p l a t f o r m a n d t h e r e l a t i v e i m p o r t a n c e o f t h o s e m a i n p a r a m e t e r s t h r o u g h a n e a s i l y a n d p u b l i c l y a v a i l a b l e d e s c r i p t i o n d r a f t e d i n p l a i n a n d i n t e l l i g i b l e l a n g u a g e . ” 
 P u r s u a n t t o t h e 3 r d U s e r C o u n c i l m e e t i n g h e l d o n 2 8 t h M a r c h 2 0 2 3 , i t w a s a g r e e d t h a t B u y e r A p p s o n O N D C w i l l b e r e q u i r e d t o p u b l i s h s u c h a n e x p l a n a t i o n o n t h e i r w e b s i t e a n d / o r m o b i l e a p p l i c a t i o n , a s t h e c a s e m a y b e . 
 T h e r e a f t e r , i t w a s d e c i d e d t o a m e n d ( t e x t a d d e d i n c o l o u r ) C l a u s e 2 . 3 . 3 ( k ) o f C h a p t e r 2 B u s i n e s s R u l e s o f t h e O N D C N e t w o r k P o l i c y r e q u i r i n g B u y e r A p p s t o 
 “ e n s u r e a l l s e a r c h r e s u l t s r e c e i v e d f r o m t h e G a t e w a y a r e d i s p l a y e d t o t h e E n d U s e r i n a n o n - d i s c r i m i n a t o r y m a n n e r , u n l e s s t h e p r o d u c t o r s e r v i c e s e a r c h r e s u l t f a i l s t o d i s p l a y a l l i n f o r m a t i o n m a n d a t e d u n d e r A p p l i c a b l e L a w o r t h e O N D C N e t w o r k P o l i c y , 
 P r o v i d e d t h a t , t h e B u y e r A p p d i s c l o s e s , t o o t h e r N e t w o r k P a r t i c i p a n t s a n d O N D C p u b l i s h e s s u c h a n e x p l a n a t i o n o n t h e i r w e b s i t e a n d / o r m o b i l e a p p l i c a t i o n , a s t h e c a s e m a y b e , t h e k e y p a r a m e t e r s o f t h e l o g i c u s e d f o r s o r t i n g / l i s t i n g s e a r c h r e s u l t s , t o e n s u r e t h a t S e l l e r s a r e a b l e t o i m p r o v e t h e i r r a n k i n g o n l i s t i n g s o r r e s u l t s ; 
 P r o v i d e d f u r t h e r t h a t , t h e B u y e r A p p m a y p r e s c r i b e u n i f o r m m i n i m u m s t a n d a r d s f o r s e a r c h r e s u l t s t o b e d i s p l a y e d t o t h e B u y e r , s o l o n g a s i t p u b l i s h e s s u c h s t a n d a r d s o n i t s w e b s i t e a n d a p p l i c a t i o n , a n d a p p l i e s s u c h s t a n d a r d s c o n s i s t e n t l y a n d f a i r l y t o a l l S e l l e r s . ” 
 P a g e 1 o f 2 Direction 
 I n l i g h t o f t h e a b o v e , B u y e r A p p s a r e r e q u i r e d t o c o m p l y w i t h t h i s p r o v i s i o n a s r e q u i r e d u n d e r t h e E - C o m m e r c e R u l e s , 2 0 2 0 a n d C h a p t e r 2 B u s i n e s s R u l e s o f t h e O N D C N e t w o r k P o l i c y a n d p u b l i s h , i n a c o m p r e h e n s i v e m a n n e r , t h e f o l l o w i n g 
 ● i n f o r m a t i o n o n p a r a m e t e r s a n d t h e i r r e l a t i v e i m p o r t a n c e w h i c h d e t e r m i n e s t h e r a n k i n g o f g o o d s o r s e l l e r s d i s p l a y e d t o t h e i r b u y e r i n a n e a s i l y a n d p u b l i c l y a v a i l a b l e d e s c r i p t i o n d r a f t e d i n p l a i n a n d i n t e l l i g i b l e l a n g u a g e . ● t h e m i n i m u m c r i t e r i a f o r d i s p l a y i n g s e l l e r ’ s r e s p o n s e s t o t h e B u y e r s 
 B u y e r A p p s s h o u l d n o t e t h a t f a i l u r e t o c o m p l y w i t h t h e s e r e q u i r e m e n t s b y 9 t h J u n e 2 0 2 3 , m a y r e s u l t i n d i s c i p l i n a r y a c t i o n b e i n g i n i t i a t e d b y O N D C a g a i n s t t h e r e s p e c t i v e B u y e r A p p . 
 F u r t h e r , i t m a y a l s o e x p o s e t h e r e s p e c t i v e B u y e r A p p t o e n f o r c e m e n t a c t i o n b y t h e c o m p e t e n t a u t h o r i t i e s . 
 B u y e r A p p s m u s t p u b l i s h t h i s i n f o r m a t i o n o n t h e i r w e b s i t e a n d / o r m o b i l e a p p l i c a t i o n ( a s a p p l i c a b l e ) a n d s h a r e w h e r e t h i s i n f o r m a t i o n i s p u b l i s h e d a n d h o w t h i s i n f o r m a t i o n c a n b e a c c e s s e d o n n e t w o r k . p o l i c i e s @ o n d c . o r g o n o r b e f o r e 9 t h J u n e 2 0 2 3 . 
 P a g e 2 o f 2 

--- FILE: Part A - Tax Implications on ONDC Network | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/files/ONDC_Guidance_On_Tax/Part%20A%20-%20Tax%20Implications%20on%20ONDC%20Network.pdf ---

Tax Implications on the ONDC Network
Page 2DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
DISCLAIMER / TERMS OF USEThis document is only for the information of the reader. Nothing in this document is to be construed as legal opinion or advice, or tax advice. Any person using this document is advised to conduct an assessment of their liabilities and compliances based on their specific business model, contractual arrangements, corporate structure and other relevant considerations.Open Network for Digital Commerce Ltd does not make any claims or give any guarantees or warranties regarding the completeness or accuracy of the information contained in this document.Open Network for Digital Commerce Ltd (and/or its subcontractors, employees and directors) will not be liable for any losses, claims (including but not limited to claims by tax authorities), court orders/decrees, or any cause of action including (but not limited to) by any government agency or authority brought against the reader or the reader’s associates as a result of the reader’s use of the information contained in this document.Page 3DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
BackgroundPage 4DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Background ONDC - Architecture
Buyers Registered / unregistered/ compositionBuyer app collects payment along with applicable GST
Buyer AppService of buyer app to seller app (Buyer finder fee)Payment transferred to the seller app
Seller AppONDC network
Supply of logistic services to the buyer appSupply of goods or service by the seller to the buyerSeller App to charge listing fees to the sellerRegistered/unregistered/compositionSeller
Payment for supply transferred to sellerGST on underlying supply to be discharged by sellerNetwork participantFlow of SupplyFlow of consideration
This transaction flow is for a sample scenario. The considerations in blue could vary in different scenarios Page 5DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Background Three Different Operating Models for the Seller Side App
Marketplace ModelInventory ModelAggregator ModelSeller and Seller App are different personsSeller supplies the goods / services  through the platform of the Seller App i.e. the ECOSeller is liable to discharge GSTSeller and Seller App are different personsSeller supplies the services through the platform of the Seller App i.e. the ECOUnder GST law, Seller App is liable to discharge GSTSeller and Seller App is the same personSeller i.e. the Seller App supplies goods / services through its own platformSeller i.e. the Seller App is liable to discharge GSTTypical categoriesGrocery, Home Décor, electronicsTypical categoriesF&B, MobilityTypical categoriesConsumer electronics, Home DécorPage 6DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Key considerations to determine Tax implicationsWho collects payment from buyer?- Buyer App- Seller App- Seller- LSP appointed by Buyer App / Seller App/ Seller01Who gives discount?- No discount- Seller App/ Seller- Buyer App02Who appoints LSP?- Buyer App- Seller App- Seller03GST registration status of Buyer / Seller- Registered- Unregistered - Composite04Operating Model of Seller Side App- Marketplace- Aggregator- Inventory05Page 7DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Overview – Key aspects covered in this documentPart 1:GST Implications on Network Participants
GST liability on underlying supply• E-Commerce & Applicability of GST TCS• Value on which GST TCS is to be deducted• Invoicing, E-invoicing & QR Code requirements under GSTPart 2:TDS Implications on Network Participants
Applicability of TDS under Section 194-O of the Income Tax Act• Person responsible for deducting TDS under Section 194-O.• Value on which TDS is to be deducted under Section 194-OPart 3:TDS and GST implications on NP Fees
• Buyer app fees• Seller app fees• Logistics Service Provider’s feesPage 8DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.Part I – GST Implication on Network ParticipantsPage 9DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST liability on underlying supplyPage 10DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST Liability on underlying supplyParticulars AnalysisMarketplace model►Underlying supply is made by the Seller►Seller App/Buyer App provides platform to Sellers and Buyers; and are not engaged in making the supply of main goods on its own account►Seller is liable to discharge GST on the underlying supply of goods/services and raise an invoice for the sameInventory model►Seller and the Seller App are the same under Inventory model►Seller App is making the supply of the underlying goods►The Buyer App is providing a platform to the Buyers and are not engaged in making the supply of the main goods / services on its own account►Therefore the Seller i.e. Seller App is liable to discharge GST on the underlying supply of goods/services and raise an invoice for the samePage 11DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST Liability on underlying supplyParticulars AnalysisAggregator model►Government has notified services where the GST on the outward supply would be paid by the ECO►Such services include:-Transportation of passenger services by a radio-taxi, motorcab, maxicab, motor cycle, omnibus or any other motor vehicle-Accommodation services in hotels, inns, guest houses, clubs, campsites or other commercial places meant for residential or lodging purposes. except where the service provider is a registered person-Housekeeping services except where the service provider is a registered person-Restaurant services other than the services supplied by restaurant, eating joints etc. located at specified premises i.e. at premises providing hotel accommodation service having declared tariff of any unit of accommodation above INR 7500 per unit per day or equivalent►Therefore ECO i.e. the Seller App through which Seller is providing services is liable to pay GST and raise an invoice for the same.Page 12DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Particulars AnalysisAggregator model (Cont.)►Invoices for such services are to be raised by ECO►Key aspects in relation to restaurant services as clarified by CBIC-ECOs are not required to take separate registration for payment of GST on restaurant services-ECOs will be liable to pay GST on all restaurant services supplied through them, including service by an unregistered restaurant-Restaurant is not required to get registered if supplying only through ECO-Aggregate turnover of restaurant providing restaurant service through ECOs shall include the aggregate value of supplies made by the restaurant through ECOs-Invoice on end customer for restaurant service provided through ECO will be raised by the ECO i.e. Seller App in this case-Restaurant to issue commercial invoice since the income will be accounted in their books of account-ECOs are not recipient for restaurant services and hence, the same would not qualify as inward supply for Seller App-Tax liability is to be paid mandatorily in cash
GST Liability on underlying supplyPage 13DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
E-Commerce OperatorPage 14DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST: E-Commerce OperatorWho will qualify as an ECO?Buyer and Seller App►Both the Buyer App and Seller App own, operate or manage digital or electronic facility or platform for supply of goods or services or both, including digital products over digital or electronic network►Considering the same, both Buyer App and Seller App would qualify as ECO under the GST LawONDC►ONDC acts as enabler and does not play any role in actual transaction of sale/services/collection. Transaction takes place on Seller App/ Buyer App►Therefore ONDC does not qualify as an ECO
E-Commerce Operator – Section 2(45) of the CGST Act►Electronic Commerce Operator means any person who owns, operates, or manages digital or electronic facility or platform for electronic commercePage 15DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST Tax Collected at SourcePage 16DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST TCS – An overviewParticulars AnalysisGST TCS►ECO is required to collect GST TCS on the taxable supplies made through it by Sellers where the consideration with respect to such supplies is received by ECOGST TCS Rate►To be collected by the ECO’s @ 1% (IGST) or @ 0.5% each of CGST and SGSTAmount on which GST TCS is to be collected ►GST TCS is to be deducted from the net value of taxable supplies for the month►Net value of taxable supplies for the month is to be calculated separately for each underlying Seller and GST TCS is to be paid for each registration ►Net value of taxable supplies means the aggregate value of taxable supplies each underlying Seller through the ECO reduced by the aggregate value of taxable supplies returned to each underlying Seller during the month (for respective tax heads)►GST TCS is withheld by the ECO from the amount collected for the underlying supply, the amount is deposited with the government and can be used by the Seller for making payment of GST on its outward supplies►If the underlying goods/services are exempt supplies, no GST TCS is to be deductedRegistration►Every ECO who is required to collect TCS must be compulsorily registered. Hence, there is no threshold limits for registration as tax collector►Therefore, the ECO shall be required to register in every State where the concerned suppliers are located to comply with the TCS provisionsPage 17DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Who is liable to collect TCSWho is liable to collect GST TCS- Marketplace ModelPayment is collected by Person liable to collect GST TCSBasisSeller App Seller App Payment is collected by Seller App (an ECO) on behalf of the Sellers on the supplies made through itBuyer App Seller App Buyer App collects the payment from Buyer, it eventually passes it to the Seller App who then pays the Sellers. FAQ issued by CBIC clarifies that in case of multiple ECOs, TCS is to be collected by the person who is making payment to the SellerAccordingly, GST TCS should be collected by the Seller AppLSP Appointed by Buyer App/ Seller AppSeller App LSP will pass the consideration to the Buyer App / Seller App whosoever has appointed the LSPSeller App to whom eventually the consideration is transferred shall be liable to collect GST TCSLSP Appointed by SellerNo GST TCS is deductibleCollection made by LSP will be paid to the seller, therefore no requirement of deducting GST TCSSeller No GST TCS is deductiblePayment directly collected by seller, consideration is not received by ECO, therefore no GST TCS is deductiblePage 18DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Who is liable to collect TCSWho is liable to collect TCS – Aggregator ModelPayment is collected by Person liable to collect GST TCS BasisSeller AppNo GST TCS is deductible Certain services have been notified (as mentioned under the aggregator model) wherein liability to pay GST is on the aggregatorAs per GST Law, net value of taxable supplies on which TCS is required to be deducted shall not include supplies where aggregator is required to pay GST under Section 9(5) of CGST Act i.e. under the aggregator modelWhere aggregator is required to pay GST, TCS is not required to be deducted on such suppliesSeller LSP Appointed by Buyer App / Seller App/ Buyer / Seller Buyer AppPage 19DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Who is liable to collect TCSWho is liable to collect GST TCS- Inventory Model Payment is collected by Person liable to collect GST TCSBasisBuyer App Buyer App Payment is collected by the Buyer App i.e. the ECO, therefore it shall be liable to deduct GST TCSSeller i.e. Seller App No GST TCS is deductiblePayment is directly collected by the Seller i.e. consideration is not received by the ECO and therefore no GST TCS is deductibleLSP Appointed by Buyer AppBuyer App LSP will pass the consideration collected to Buyer App i.e. the ECO who has appointed the LSP therefore it shall be liable to deduct  GST TCSLSP Appointed by Seller i.e. Seller AppNo GST TCS is deductibleLSP will pass the consideration to Seller App. Since the payment is directly collected by the Seller, consideration is not received by the ECO and therefore no GST TCS is deductiblePage 20DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Value on which GST TCS is to be collected Page 21DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Value on which GST TCS is to be collectedParticulars To be considered in net value of taxable suppliesAnalysisDiscount offered by Seller NoIf gross price of goods is INR 100 and discount offered by Seller is INR 10, GST TCS shall be deducted on INR 90Discount offered by Seller does not form a part of the consideration /sale price. It will not be collected by the ECO.Discount offered/charged by Seller App/Buyer AppYesIf gross price of the goods is INR 100, discount offered by Seller App is INR 5, GST TCS shall be deducted on INR 100, also GST shall be payable by Seller on INR 100Discount is offered by the Seller / Buyer App on their own account and borne by them.It will form a part of the consideration that is required to be collected from Buyer i.e. it is a part of taxable supplies made by Seller.Page 22DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Value on which GST TCS is to be collectedParticulars To be considered in net value of taxable suppliesAnalysisConvenience/ Delivery fee charged by SellerYesIf gross price of goods is INR 100, convenience fee charged by Seller is INR 5, GST TCS shall be deducted on INR 105It is a part of the consideration charged by the Seller for the taxable supplies and hence, TCS is required to be collected. Convenience/ Delivery fee charged by Seller App / Buyer AppNoIf gross price of goods is INR 100, convenience fee charged by Seller App / Buyer App is INR 7, GST TCS shall be deducted on INR 100It shall form a part of the value of services of the Buyer App/ Seller App and not of the Seller.In case the delivery fee is separately collected by the Seller from the Buyer, it will be included in the value on which TCS is to be deducted.Page 23DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Compliance under GSTPage 24DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Compliance under GSTTax Invoice►Tax invoice has to be issued by the Seller for the supply of goods or services. Tax invoice should contain all the following particulars as per the CGST Rulesi.Name, address and GSTIN of the Sellerii.Consecutive serial number not exceeding 16 characters, containing alphabets or numerals or special characters "-" and "/" unique for a financial yeariii.Date of issue of invoiceiv.Name, address and GSTIN of the recipient (if registered)v.Name, address, name of State and code of the recipient (if unregistered)vi.HSN Code for goods / servicesvii.Description of goods / servicesviii.Quantity of goodsix.Total value of supplyx.Taxable value of supplyxi.Rate of Tax (for CGST, SGST, IGST)xii.Amount of tax (CGST, SGST, IGST)xiii.Place of supply and name of the Statexiv.Address of delivery, if it is different from place of supplyxv.Declaration whether tax is payable under reverse charge basisxvi.Signature / digital signature of the Seller / authorized representativexvii.QR code and IRN in case of E-invoicePage 25DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Compliance under GSTE-Invoicing►E-Invoice i.e. a tax invoice with IRN and QR Code is to be issued►for B2B supplies►made by registered Sellers whose aggregate turnover in any preceding financial year from 2017-18 onwards exceeds INR 10 croresDynamic QR Code►Dynamic QR code is mandatory►for B2C supplies ►Made by registered Sellers whose aggregate turnover in any preceding financial year from 2017-18 onwards exceeds INR 500 crores►Contents of a dynamic QR code:►GSTIN of Seller►Seller’s UPI ID►Payee’s bank account number and IFSC code►Invoice number and invoice date►Total invoice value►GST amount along with the break-up of CGST, SGST , IGST►In case where the payment is collected by some person other than the Seller, i.e. the ECO being the Seller App or the Buyer App, authorized by the supplier on his/ her behalf, the UPI ID of such person may be provided in the Dynamic QR Code, instead of UPI ID of the SellerPage 26DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.Part 2 – TDS Implication on Network ParticipantsPage 27DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Demystifying Section 194-OPage 28DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Seller E-commerce participantBuyerE-commerce operatorListing of productsPlacement of orderSale of productPrice of productTransaction FlowCash flowPrice of product (net seller app fees)•TDS Obligation on: ‘E-commerce operator’•Scope: E-commerce transactions of e-commerce participant facilitated by e-commerce operator , includingdirect payments by buyer to e-commerce participants•TDS rate: 1% (5% where e-commerce participant doesnot have P AN)•Threshold: Threshold of INR 500,000, where e-commerce participant is individual / HUF•Quantum: Gross amount of sales or services or both (including payments collected directly by seller)•Compliance requirement: Monthly TDS payments and Quarterly TDS return filings
Demystifying Section 194-OOverviewPage 29DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Demystifying Section 194-OOverviewKey condition for trigger of Section 194-ODefinition under the lawCondition 1: Sale of goods/ Provision of services to qualify as ‘E-commerce’‘E-commerce’ means supply of goods or services or both, including digital products, over digital or electronic networkCondition 2:Presence of ‘E-commerce operator’‘E-commerce operator’ means a person who owns, operates or manages a digital or electronic facility or platform for electronic commerceCondition 3 : ‘Facilitation’ by E-commerce operatorLaw has not provided any guidance as to the meaning of the term ‘facilitate’. In general parlance, facilitate may mean to make things easy, to assist, to free from difficulty, etc.‘E-commerce operator’ is required to undertake TDS compliance under Section 194-O where prescribed conditions are satisfiedPage 30DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Liability to undertake TDS :Scenario A : Marketplace / Aggregator model(ie Seller and seller app are same legal entity)Scenario B : Inventory model (Seller and seller app are different legal entities)Page 31DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Scenario A : Inventory modelMechanics •Seller app and buyer app enter into a transaction level contract (TLC) for sale of product•Seller app (as a seller) sells product to the buyer and raises the invoice on the buyer (privity of contract of sale is between buyer and seller app)•Price of product is collected by the buyer app/ seller app (or the LSP appointed by one of them, in COD transactions)TDS•Buyer app is likely to qualify as an ‘e-commerce operator’ as it is facilitating the sale of seller app’s product to the buyer . Accordingly, Buyer app to deduct TDS under Section 194-O (irrespective of who collects the payment)TLC to factor the following:•To facilitate TDS compliance, Seller App to provide its PAN to Buyer App•In case Buyer App undertakes collections directly from the Buyer, Buyer App to deduct taxes at the time of payment/ credit of amounts payable to Seller App•In case where Buyer App does not undertake collection (i.e. seller app or LSP collects), Seller app can either deposit TDS using TAN of buyer app or Seller app to pass TDS amount to Buyer App for Section 194-O compliance
T&CTLCProduct price + delivery charges
Network Policy & NP AgreementInvoice
Buyer Buyer app Seller/ Seller app
Transaction FlowCash flowPage 32DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Scenario B : Marketplace/ Aggregator modelMechanics •Seller signs a listing agreement with Seller app•Seller app and buyer app enter into a transaction level contract (TLC) for sale of product•Seller sells product to the buyer and raises the invoice on the buyer (privity of contract of sale between buyer and seller)•Price of product is collected by the buyer app/ seller app/seller (or the LSP appointed by one of them, in COD transactions)TDS•Both Buyer app and Seller app are likely to qualify as an e-commerce operator as they are facilitating the sale of seller’s product to the buyer . Technically, both Buyer app and Seller app may be liable to deduct TDS under Section 194-OTLC to factor the following (Indicative guidance*):•As there cannot be multiple TDS on the same underlying transaction, Seller App and Buyer App to mutually pre-decide on who will take the responsibility of complying under Section 194-O. From an ease of compliance perspective and to align with the GST TCS provisions, Seller app may undertake the responsibility of complying under Section 194-O. •The TLC will be updated to allow a declaration by the seller app to the buyer app on TDS compliance in case seller app is a marketplace (if required)
T&CTLCProduct price + delivery charges
NP Policy & AgreementInvoice
Transaction FlowCash flowBuyer Buyer app Seller app 
SellerListing agreement*Current law does not provide clarity on obligation to withhold in case of multiple e-commerce operators. Accordingly, this is only the indicative position and risk of tax authorities taking a contrary view leading to unintended litigation cannot be ruled out. The reader is advised to make their own assessment of their obligations and liabilities for their specific case.Page 33DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Quantum on which TDS under Sec 194-O appliesPage 34DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Section 194-OQuantum on which TDS under Section 194-O appliesLaw : TDS @ 1% to be deducted on gross amount of sales or services or bothCurrent law does not provide clarity on which component should be included or excluded for the purpose of arriving at the quantum on which Section 194-O should apply.  Based on judicial precedents and past circulars issued in the context of TDS, we have outlined below the indicative TDS positions which can be explored.  Please note that this is only the indicative technical position and risk of tax authorities taking a contrary view leading to unintended litigation cannot be ruled out.Component Technical view (Whether to be included?)Indicative practical guidance (on the premise that gross transaction value (price) agreed between the seller and buyer is INR 100)GST on sale of goods/ provision of services (where indicated separately on the invoice)Yes No- Where the price of goods/ services is INR 100 and GST of INR 18 on the same is separately indicated in the invoice, TDS under Section 194-O may be applied on INR 100 given the clarification provided by CBDT on exclusion of GST for other TDS sectionsDiscount offered by sellerYes No- Where the price of goods/ services is INR 100 and discount of INR 10 is offered by the seller in the invoice, TDS under Section 194-O may be applied on INR 90 as discount directly reduces the pricePage 35DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Section 194-OQuantum on which TDS under Section 194-O appliesComponent Technical view (Whether to be included?)Indicative practical guidance (on the premise that gross transaction value (price) agreed between the seller and buyer is INR 100)Discount offered by seller app/ buyer appYes Yes- Where the price of goods/ services is INR 100 and discount of INR 10 is offered by the seller app/buyer app, TDS under Section 194-O may be applied on INR 100 as the gross transaction value agreed between seller and buyer is INR 100Convenience fees/ logistic delivery charges – charged by sellers on top of value of goods/ servicesYes Yes– Where the price of goods/ services is INR 100 and convenience fees/ delivery charges of INR 10 are charged by the seller, TDS under Section 194-O may be applied on INR 110 as such charges are closely linked to sale/ supply of productConvenience fees/ logistic delivery charges – charged by buyer appNo No– Where the price of goods/ services is INR 100 and convenience fees/delivery charges of INR 10 are charged by the buyer app, TDS under Section 194-O may be applied on INR 100. as the gross transaction value agreed between seller and buyer is INR 100Page 36DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Section 194-OQuantum on which TDS under Section 194-O appliesComponent Technical view (Whether to be included?)Indicative practical guidance (on the premise that gross transaction value (price) agreed between the seller and buyer is INR 100Returns/ Refunds YesNo– Where the price of goods/ services is INR 100 and returns/ cancellations of INR 10, TDS under Section 194-O may be applied on INR 90 as the said sum (ie INR 10) is not recoverable from buyer Buyer app fees/ seller app fees - Where the price of goods/ services is INR 100 and the buyer app fees is INR 5 and seller app fees is INR 10, TDS under Section 194-O may be applied on INR 100 as the gross transaction value agreed between seller and buyer is INR 100Page 37DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.Session 3 – Applicability of GST and TDS on NP feesPage 38DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST and TDS implications-Buyer app fee-Seller app fee-LSP feePage 39DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST and TDS implicationsI. Buyer app feeUnderstanding•The Buyer App provides services of connecting the Buyer and the Seller and charges the finder fees and convenience fees as a consideration for the same. •Nature of arrangement between buyer app and seller app would be on Principal-to-Principal basisGST implications•It shall be considered as a supply and leviable to GST•Where location of Buyer App and location of the Seller App are in same state, CGST and SGST shall be charged @ 9% each•Where location of Buyer App and location of the Seller App) are in two different states, IGST shall be charged @ 18%•The Seller App should be eligible to avail the ITC of the GST charged on Buyer finder fees incurred by it for providing the Seller App services, subject to the restrictions as per the law and compliances to be done by Buyer AppBuyer finder feesTransaction level contract for each sale
Transaction FlowCash flow
Seller appBuyer app Buyer app feePage 40DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST and TDS implicationsI. Buyer app feeTDS Obligation on: Seller appRate of TDS :Technically, it maybe arguable that buyer app fee ought not to be subject to TDS as : ►TDS @ 10% under Section 194J (Royalty/Fees for technical or profession service): As buyer app is not given access to seller app’s systems/ app and is not providing any consultancy, technical, managerial or professional services, TDS under Section 194J ought not to trigger►TDS @ 2% under Section 194C (Work contract) : As there is no ‘contractual work’ being performed by Buyer App for the Seller App, there ought not be TDS under Section 194C of the Act►TDS @ 5% under Section 194H (Commission) : Absent Principal-to-agency relationship between buyer app and seller app, arguable that TDS under Section 194H of the Act ought not to trigger ►However, absent any explicit contract/ arrangement between parties and considering the role played by Buyer App is akin to a facilitator and existing judicial controversy on Section 194H, the Seller App may on conservative basis deduct TDS @ 5% under Section 194H of the Act on the buyer app fee**This is only the indicative position and risk of tax authorities taking a contrary view leading to unintended litigation cannot be ruled out. The reader is advised to make their own assessment of their obligations and liabilities for their specific case.Page 41DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST and implicationsII. Seller app feeUnderstanding•Seller App provides collection services, fulfilment services (order management and delivery), display services to the Seller and charges Seller fees as a consideration in lieu of such services.•Nature of arrangement between seller and seller app is typically on Principal-to-Principal basisGST implications•Same shall be considered as a supply and shall attract GST•Where location of Seller App and location of the Seller are in same state, CGST and SGST shall be charged @ 9% each•Where location of Seller App and location of the Seller are in two different states, IGST shall be charged @ 18%•Seller App is using the services of ONDC, Buyer App, LSP for further providing services to the Sellers •Accordingly, the Seller App should be eligible to avail the ITC of the GST charged on ONDC fees, Buyer finder fees and the LSP fees incurred by it for providing the Seller App services, subject to the restrictions as per the law and compliances to be done by respective NPsSeller app fees•Listing services•Fulfilment services•Collection services
Transaction FlowCash flow
Sellers Seller app Seller app feePage 42DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST and implicationsII. Seller app feeTDS Obligation on:SellerRate of TDS:•Technically, Seller App fees may be liable to TDS @ 2% under Section 194C of the Act as it is paid for carrying out ‘work’ (which inter-alia includes e-cataloguing, storage, handling and dispatch of goods)•However, absent any explicit contract/ arrangement between the parties and activities of the Seller App being closer to a facilitator/ intermediary (functioning on behalf of the Seller), Seller may conservatively deduct TDS @ 5% under Section 194H of the Act on seller app fees•The above TDS position is only indicative and may need to be analysed on case-on-case basis depending upon the exact nature of arrangement between seller app and sellerPage 43DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST and TDS implicationsIII. LSP feeUnderstanding►LSPs shall be appointed by the Seller/ Seller App/ Buyer App for providing logistic services and charges the fee as a consideration for the same►Nature of arrangement with LSP is typically on Principal-to-Principal basisGST implications►LSP Fee shall be considered as a supply and shall be leviable to GST►Generally logistics services provided by LSPs is taxable @ 18%►If LSP is GTA then he can opt to pay GST @5% / @12%►If LSP opts for 5%, then it cannot claim ITC and GST paid by the recipient of service under prescribed RCM►If LSP opts for 12%, then it can claim ITC and GST is payable by LSP under forward charge►Where location of LSP and location of the registered Seller or the location at which such goods are handed over for their transportation in case of unregistered recipient are in same state, CGST and SGST shall be charged►Where location of LSP and location of the registered Seller or the location at which such goods are handed over for their transportation in case of unregistered recipient are in two different states, IGST shall be chargedLogistic/ Delivery chargesLogistic/ Delivery Service
Transaction FlowCash flowLSPBuyer app/Seller app/ SellerLSP feePage 44DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST and TDS implicationsIII. LSP feeTDS Obligation on: Appointing partyRate of TDS:►Section 194C of the Act provides for withholding on payment/credit of any sum for carrying out  any ‘work’ pursuant to a contract. Scope of ‘work’ is defined in an inclusive manner to include ‘carriage of goods or passengers by any mode of transport other than by railways’. •Hence, any charges paid for carriage of goods to LSP is likely to fall within the ambit of ‘work’ and be subject to TDS @ 1%/ 2% under Section 194C of the Act•The above TDS position is only indicative and may need to be analysed on case-on-case basis depending upon the exact nature of arrangement with LSPPage 45DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
SummaryPage 46DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
GST SummaryParticulars AnalysisMarketplace model►Seller is liable to discharge GST on the underlying supply of goods/services and raise an invoice►Seller App is liable to deduct GST TCS, except when consideration is collected by the Seller ►No GST TCS is deductible, if consideration is collected by the Seller / LSP appointed by SellerAggregator model►ECO i.e. the Seller App through which Seller is providing services is liable to pay GST and raise an invoice►No GST TCS is deductibleInventory model►Seller i.e. Seller App is liable to discharge GST on the underlying supply of goods/services and raise an invoice ►Buyer App is liable to deduct GST TCS, if consideration is collected by Buyer App / LSP appointed by Buyer App►No GST TCS is deductible, if consideration is collected by the Seller i.e. Seller App  / LSP appointed by Seller*Value on which TCS is to be deducted -Aggregate value of taxable supplies reduced by the aggregate value of taxable supplies returnedGST on other revenue streams•Buyer finder fees -Buyer App to discharge GST @ 18%•Seller App fees -Seller App to discharge GST @18%•LSP fee : Generally logistic services provided by LSPs is taxable @ 18%. If LSP is GTA then he can opt to pay GST @5%  (without ITC) / @12% (with ITC)Page 47DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
TDS SummaryParticulars AnalysisMarketplace model / Aggregator Model►Technically, both Buyer app and Seller app may be liable to deduct TDS under Section 194-O . ►Practically, from an ease of compliance perspective and to align with GST TCS provisions, Seller app may deduct TDS @ 1% under Section 194-O . A declaration may be obtained by the buyer app to this effect in the TLC.Inventory model►Buyer app to deduct TDS @ 1% under Section 194-O (irrespective of who collects the payment)Quantum : Gross value of sale or servicesIndicative exclusions : GST, seller discount, returns/ refunds, buyer app’s convenience fees Indicative inclusion : Seller’s convenience fees, Seller app/ buyer app’s discount TDS on other revenue streams•Buyer app fee: Seller App may on conservative basis deduct TDS @ 5% under Section 194H of the Act •Seller app fee : Seller may conservatively deduct TDS @ 5% under Section 194H of the Act•LSP fee: Appointing party may to deduct TDS @ 1%/ 2% under Section 194C of the ActPage 48DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Overall SummaryModel Parties involvedGST obligation TCS obligation WHT obligation under Section 194-OInventory (E.g.: Ushop)3 Parties Seller Buyer App* Buyer AppMarket place (E.g.: GoFrugal)4 Parties Seller Seller App** Both Parties. Practically, NPs can elect to designate Seller AppAggregator (E.g.: Uber, Swiggy)4 Parties Aggregator NA Both Parties. Practically, NPs can elect to designate Seller App*On the assumption that Buyer App undertakes the collection** On the assumption that Buyer App or Seller App collects the paymentPage 49DISCLAIMER: This document is only for information. It may not be construed as legal or tax advice. The reader is advised to consult a tax expert for specific advice.
Ernst & Young LLPEY| Building a better working worldEY exists to build a better working world, helping to create long-term value for clients, people and society and build trust in the capital markets.Enabled by data and technology, diverse EY teams in over 150 countries provide trust through assurance and help clients grow, transform and operate.Working across assurance, consulting, law, strategy, tax and transactions, EY teams ask better questions to find new answers for the complex issues facing our world today.EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients. Information about how EY collects and uses personal data and a description of the rights individuals have under data protection legislation are available via ey.com/privacy. EYG member firms do not practice law where prohibited by local laws. For more information about our organization, please visit ey.com.Ernst & Young LLP is one of the Indian client serving member firms of EYGM Limited. For more information about our organization, please visit www.ey.com/en_in. Ernst & Young LLP is a Limited Liability Partnership, registered under the Limited Liability Partnership Act, 2008 in India, having its registered office at 22 Camac Street, 3rd Floor, Block C, Kolkata – 700016© 2022 Ernst & Young LLP. Published in India. All Rights Reserved.This publication contains information in summary form and is therefore intended for general guidance only. It is not intended to be a substitute for detailed research or the exercise of professional judgment. Neither EYGM Limited nor any other member of the global Ernst & Young organization can accept any responsibility for loss occasioned to any person acting or refraining from action as a result of any material in this publication. On any specific matter, reference should be made to the appropriate advisor.END

--- FILE: rsf_notification_settlement_process_from_1_april_2025.pdf ---

 
RSF 2.0 Update (Effective 1st April 2025) 
Notification No: 2025/03/28/01 
Date: 28-03-2025 
1.  Context 
ONDC introduced Reconciliation and Settlement Framework (RSF) 2.0 which will bring 
enhanced transparency, efficiency, and accountability of money movement on the network. 
These frameworks are designed to standardize operations, reduce disputes, and ensure 
timely settlements, ultimately fostering greater trust among Network Participants and 
consumers alike. 
The communicated implementation timeline for RSF 2.0 was March 31, 2025.  
In continuation to “ Mandatory Implementation of RSF 2.0 ” Notification vide No: 
2025/01/08/01 dated January 08, 2025, this notification is to apprise ONDC Network 
Participants (NPs) on settlement process for transactions on ONDC network w.e.f. April 01, 
2025. 
2. Notification 
In continuation to the above, the notification highlights the settlement process which will 
be in effect from April 01, 2025.  Please review the scenarios below and take necessary 
action to ensure seamless transactions on the ONDC Network (Note: This is co nsidering 
Buyer NP is the collector and Seller NP is the receiver): 
a) Scenario 1: Buyer NP Compliant with RSF 2.0 
Buyer NPs must send the /settle file to Settlement Agency (SA), and settlements will 
be processed to Seller NP accounts accordingly. 
b) Scenario 2: Buyer NP Not Compliant with RSF 2.0 
Immediate action required! The buyer NPs to complete the necessary steps for 
implementation of RSF 2.0 at the earliest to avoid settlement disruptions.  The 
settlement process will continue the same as before April 01, 2025. 
c) Scenario 3: Seller NP Compliant with RSF 2.0 
Seller NPs must send the /settle call to Settlement Agency (SA) for settlement 
processing. If a Buyer NP is not compliant with RSF 2.0, a specific error code as “70011” 
and error description as “Invalid collector app id” will be received by the Seller NPs.  In 
such cases, settlements will need to be handled offline with the respective Buyer NP. 
d) Scenario 4: Seller NP Not Compliant with RSF 2.0 
Immediate action required! The seller NPs to fill out the current operating bank account 
details in this form to enable settlements. Please note, the account addition with the 
Settlement Agency will take 2 business days. 
Notably, as provided in Clause 1.2.3 read in conjunction with Schedule 1D of Chapter 
1 of the ONDC Network Policy, entities operating in the financial services domain (e.g., 
credit, mutual funds, insurance) are exempted from the requirement to implement the  
RSF Framework. Furthermore, entities operating in B2B, B2B Exports domains are also 
exempted. 
To ensure a smooth transition and avoid any disruptions in settlement processing, we urge 
all NPs to comply with RSF 2.0 requirements at the earliest. You can refer to “ Mandatory 
Implementation of RSF 2.0” Notification, for details on steps to implement RSF 2.0. 
3. Queries and Concerns 
Key Points of Contacts:  Participants can reach out to ONDC and Settlement Agency (SA) 
support teams for assistance. 
Organisation Name Contact 
ONDC Tech PoC 1. Abhishek Singh 
2. Rishabhnand Singh  
1. abhishek.singh@ondc.org 
2. rishabhnand.singh@ondc.org  
ONDC Ops PoC 1. Santosh Adsul 
2. Amit Shrivastava  
1. santosh.adsul@ondc.org  
2. amit.shrivastava@ondc.org   
NBBL (Settlement 
Agency) Tech PoC 
1. Venkat Ratnamurthy 
2. Balaji J 
1. Venkatanarasimhan.r@npci.org.in  
2. balaji.j@npci.org.in  
NBBL (Settlement 
Agency) Ops PoC 
1. Rohan Vachharajani   1. rohan.vachharajani@npci.org.in 
2. dl_nbbl.nocs@npci.org.in  
 
 
 
 
 
 
 
 
 
 

--- FILE: Taxonomy | URL: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/files/taxonomy_ondc_network.pdf ---

 
Taxonomy of Entities and Roles in the ONDC Network 
Domain/Category Buyer App MSN (Marketplace Seller Node) ISN (Inventory Seller Node Seller Buyer 
Retail (includes 
electronics, grocery) 
Buyer App (consumer facing 
app) 
E-commerce Marketplace D2C, dark stores  Merchant Consumer 
Explanation An entity that provides an interface to consumer/buyer will be categorised as a Buyer App. An entity that has (a) a contractual relationship with 
retailers/offline stores (b) onboard them on their platform and (c) provides an interface to retailers/sellers of food products will be categorised as 
MSN. Individual seller (FMCG company, brand owners, manufacturers) that have a platform can participate in the ONDC Network as ISN.  
F&B Buyer app (consumer facing 
app) 
Restaurant aggregator Restaurant app / Cloud 
kitchens / Franchise  
Restaurants Consumer 
Explanation An entity that provides an interface to consumer/buyer will be categorised as a Buyer App. An entity that has (a) a contractual relationship with 
Restaurants (b) onboard them on their platform and (c) provides an interface to restaurants/sellers of food products will be categorised as MSN. 
Individual seller (restaurants, FMCG company, brand owners, manufacturers) that have a platform can participate in the ONDC Network as ISN.  
Mobility (radio taxi 
services) 
Consumer facing app Aggregator (does not own fleet) Fleet operators  Driver Rider 
Explanation An entity that provides an interface to consumer/buyer and allow them to search for rides will be categorised as a Buyer App. An entity that has 
(a) a contractual relationship with drivers (b) onboard them on their platform and (c) provides an interface to drivers will be categorised as MSN. 
Entities that own their own fleet (such as private tour operators) can participate on the ONDC Network as ISN,  
Mobility (railway, 
flights, metro tickets) 
Buyer App Online travel agents  Operators  Operators (IRCTC, 
Airlines, Metro 
Corporation, bus 
operators) 
Passenger 
Explanation An entity that provides an interface to consumer/buyer and allow them to search and book tickets will be categorised as a Buyer App. An entity 
that act as agents of the operators can join the ONDC Network as MSN. Operators such as IRCTC, Airlines, Bus operators can participate as ISN.   
Domain/Category Buyer App MSN (Marketplace Seller Node) ISN (Inventory Seller Node Seller Buyer 
Insurance Broker / Corporate Agent / 
Web aggregator/e-commerce 
marketplace 
- Insurers  Insurer Insured 
Explanation An entity that has the requisite permission under applicable law to act as insurance broker / corporate agent / web aggregator or an e-commerce 
marketplace for selling insurance products can become a Buyer App on the ONDC Network. An insurer can join the Network as an ISN.  
Digital Lending DL App/lending Service 
Provider 
- Lender  Lender Borrower 
Explanation A digital lending app or an LSP can become a Buyer App. A lender (banks, NBFC or any other entity authorised by RBI) can become an inventory 
seller node on the Network.  
Investment Mutual Fund Distributor A representative of the asset 
management company (SEBI 
regulated and AMC appointed 
OPAT, eg. RTA) or a regulatory 
authorized platform (BSE, NSE, MF 
Utilities) 
Asset Management Company 
(AMC)  
AMCs Investor 
Explanation A mutual fund distributor that is registered (such as registration with AMFI) under applicable law can participate as a Buyer App. Regulated 
intermediaries (RTAs, Stock Exchanges, MFU) categorised as MSN on the ONDC Network. AMCs, themselves, can onboard on the ONDC 
Network as ISN.  
Travel and tourism Consumer facing app Online T ravel aggregator 
(aggregators of hotels, bread and 
breakfast etc) 
Hotels, bed and breakfast 
providers 
Hotels, and bed and 
breakfast 
Customer 
Explanation An entity that provides an interface to consumer/buyer and allow them to search for hotels will be categorised as a Buyer App. An entity that has 
(a) a contractual relationship with hotels/bed and breakfast providers (b) onboard them on their platform and (c) provides an interface to  
Domain/Category Buyer App MSN (Marketplace Seller Node) ISN (Inventory Seller Node Seller Buyer 
hotels/bed and breakfast providers will be categorised as MSN. Hotels, and bed and breakfast service providers themselves can participate on 
the ONDC Network as ISN,  
Entertainment 
Services (movie 
tickets etc) 
Buyer App Aggregator of cinema 
halls/multiplexes/event companies 
Cinema 
halls/multiplexes/event 
companies  
Cinema 
halls/multiplexes/event 
companies 
Consumer 
Explanation An entity that provides an interface to consumer/buyer and allow them to search and book tickets will be categorised as a Buyer App. An entity 
that has (a) a contractual relationship with entertainment service providers (b) onboard them on their platform and (c) provides an interface to 
them will be categorised as MSN. Entertainment service providers themselves can participate on the ONDC Network as ISN,  
Urban services Buyer App Aggregator of urban service 
providers 
Urban service providers  Service providers Consumer 
Explanation An entity that provides an interface to consumer/buyer will be categorised as a Buyer App. An entity that has (a) a contractual relationship with 
urban service providers (b) onboard them on their platform and (c) provides an interface to them will be categorised as MSN. Urban service 
providers can themselves participate on the ONDC Network as ISN,  
 
 
Disclaimer: The information provided in this table is for general informational purposes only and is subject to change. The categorizations, roles, and descriptions outlined 
herein are indicative. The inclusion or exclusion of any category, entity, or role does not imply endorsement, certification, or validation by ONDC.  Entities participating in 
the ONDC Network must ensure compliance with all applicable laws, regulations, and ONDC Network Policy. ONDC does not guarantee the accuracy, completeness, or 
suitability of this table for any specific purpose and shall not be held liable for any decisions or actions taken based on the information provided. Stakeholders are encouraged 
to refer to the latest ONDC Network Policy. 
`;
