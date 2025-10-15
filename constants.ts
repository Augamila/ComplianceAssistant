export const KNOWLEDGE_BASE = {
    "bcbs 239": `
    **BCBS 239: Principles for Effective Risk Data Aggregation and Risk Reporting**

    BCBS 239 is a standard issued by the Basel Committee on Banking Supervision to strengthen banks' risk management capabilities. It sets out 14 principles to improve their ability to aggregate risk data and produce high-quality risk reports, especially for Global Systemically Important Banks (G-SIBs). The principles are divided into four main groups:

    **I. Overarching Governance and Infrastructure**

    *   **Principle 1: Governance:** A bank’s risk data aggregation capabilities and risk reporting practices should be subject to strong governance frameworks with clear board and senior management accountability. The framework must include policies defining the roles and responsibilities for data quality.
    *   **Principle 2: Data Architecture and IT Infrastructure:** A bank should design, build, and maintain a data architecture and IT infrastructure which fully supports its risk data aggregation capabilities and risk reporting practices not only in normal times but also during times of stress or crisis, while still meeting the other Principles. It must be robust, reliable, and integrated.

    **II. Risk Data Aggregation Capabilities**

    *   **Principle 3: Accuracy and Integrity:** A bank should be able to generate accurate and reliable risk data to meet the accuracy requirements for risk reporting. Data should be aggregated on a largely automated basis to minimise errors. Data should be reconciled with bank’s sources, including accounting data.
    *   **Principle 4: Completeness:** A bank should be able to capture and aggregate all material risk data across the banking group. Data should be available by business line, legal entity, asset type, industry, region and other groupings that permit identifying and reporting risk exposures.
    *   **Principle 5: Timeliness:** A bank should be able to generate aggregated and up-to-date risk data in a timely manner while also meeting the principles on accuracy and integrity, completeness and adaptability. The frequency of aggregation must be increased during times of stress.
    *   **Principle 6: Adaptability:** A bank should be able to generate ad-hoc, tailored risk data aggregation and reports to support any business need, risk management, or supervisory query. This includes on-demand reporting in response to unexpected events.

    **III. Risk Reporting Practices**

    *   **Principle 7: Accuracy:** Risk management reports should accurately and precisely convey aggregated risk data and reflect risk in an exact manner. Reports should be reconciled and validated.
    *   **Principle 8: Comprehensiveness:** Risk management reports should cover all material risk areas within the organisation. The content should be complete and provide context, including assumptions and explanations.
    *   **Principle 9: Clarity and Usefulness:** Risk management reports should be clear and concise. They must be understandable to the recipients and contain information that is relevant to their decision-making. Reports should present risk information in a way that is easy to interpret.
    *   **Principle 10: Frequency:** The board and senior management should set the frequency of risk management report production. The frequency should reflect the needs of the recipients, the nature of the risk being reported, and the speed at which the risk can change.
    *   **Principle 11: Distribution:** Risk management reports should be distributed to the relevant parties while ensuring confidentiality is maintained.

    **IV. Supervisory Review**

    *   **Principle 12: Supervisory Review:** Supervisors should periodically review and evaluate a bank’s compliance with the other eleven Principles.
    *   **Principle 13: Remedial Actions and Supervisory Measures:** Supervisors should have and use the appropriate tools and resources to require effective and timely remedial action by a bank to address deficiencies.
    *   **Principle 14: Home/Host Cooperation:** Supervisors should cooperate with relevant supervisors in other jurisdictions regarding the supervision and review of the Principles.
    `,
    "sox": `
    The Sarbanes-Oxley Act (SOX) of 2002 is a US federal law enacted to protect investors from fraudulent financial reporting.
    Key sections include:
    - **SOX 302:** Requires that the principal officers (CEO and CFO) certify the accuracy of financial statements and the effectiveness of disclosure controls and procedures.
    - **SOX 404:** Requires management to establish and maintain adequate internal controls over financial reporting (ICFR). It also requires an external auditor to attest to management's assessment of ICFR. This is often the most costly aspect of SOX compliance.
    SOX compliance involves documenting processes, testing controls, and remediating any identified deficiencies.
    `,
    "control testing": `
    Control testing is an audit procedure to evaluate the effectiveness of a company's internal controls in preventing or detecting material misstatements. Controls can be **preventive** (designed to stop an error from occurring) or **detective** (designed to find an error after it has occurred).
    Key aspects of effectiveness are:
    1.  **Design Effectiveness:** Determines if a control, as designed, can effectively prevent or detect misstatements. This is often evaluated through inquiry, observation, and inspection of documentation.
    2.  **Operating Effectiveness:** Determines if the control is operating as designed and is performed by a person with the necessary authority and competence. This is tested by examining a sample of transactions.
    Common testing methods include:
    - **Inquiry:** Asking questions of relevant personnel.
    - **Observation:** Watching the control being performed.
    - **Inspection:** Examining documents for evidence of the control being performed (e.g., checking for a manager's signature).
    - **Re-performance:** Independently executing the control procedure to verify it works as expected. This provides the highest level of assurance.
    `,
    "reporting testing": `
    **Methodology for Testing Reports (Regulatory & Internal)**

    Testing reports is a critical compliance function to ensure data is accurate, complete, timely, and meets regulatory standards (e.g., BCBS 239, SOX). Here is a step-by-step methodology:

    **Phase 1: Planning & Scoping**
    1.  **Identify Key Reports & Regulations:** Determine which reports are in scope (e.g., Call Report, FR Y-9C, internal risk dashboards) and map them to the specific rules they must follow (e.g., BCBS 239 Principles 7-11).
    2.  **Understand Data Lineage:** Trace the flow of critical data elements from their source systems (e.g., general ledger, loan system) to their final place in the report. This is essential for identifying key points of potential failure.
    3.  **Risk Assessment:** Identify high-risk elements in the report, such as those that are manually calculated, derived from multiple systems, or have a history of errors.
    4.  **Develop a Test Plan:** Document the specific data elements you will test (the sample), the testing procedures (e.g., tracing, reconciliation), and the criteria for what constitutes a pass or fail.

    **Phase 2: Execution (Fieldwork)**
    *   **Step 1: Test for Accuracy:**
        *   **Procedure:** Select a sample of key data elements (KDEs) from the final report. Trace each KDE back through the data lineage to its authoritative source system.
        *   **Example:** For a credit risk report, take the "Total Loan Exposure" value. Re-calculate this value by querying the loan origination system for all active loans in the same period and summing their outstanding balances. The two numbers must match.
        *   **Action:** Document any discrepancies, no matter how small.

    *   **Step 2: Test for Completeness:**
        *   **Procedure:** Perform reconciliations to ensure the report includes all required data. This can be done from source-to-report or report-to-source.
        *   **Example:** Reconcile the total number of accounts listed on a regulatory filing to a system-generated control total from the core banking platform. Investigate any differences to ensure that filters or exclusions are appropriate and documented.
        *   **Action:** Verify that no material data has been improperly excluded.

    *   **Step 3: Test for Timeliness:**
        *   **Procedure:** Verify that the report was produced, reviewed, and distributed/filed within its required deadline.
        *   **Example:** For a quarterly regulatory filing, obtain evidence (e.g., system logs, submission confirmation emails) that the report was filed on or before the official due date. For an internal board report, check that it was distributed to directors per the agreed-upon schedule.
        *   **Action:** Confirm adherence to both regulatory and internal timelines.

    *   **Step 4: Test Governance & Controls:**
        *   **Procedure:** Evaluate the controls over the reporting process itself. This includes both automated and manual controls.
        *   **Example:** Interview the report owner to understand the review and approval process. Inspect evidence of this review (e.g., a manager's sign-off in an email, an approval workflow in a system). If manual adjustments are allowed, verify that they are properly documented, justified, and independently approved.
        *   **Action:** Ensure the process has adequate oversight to prevent and detect errors.

    **Phase 3: Reporting & Remediation**
    1.  **Document Findings:** For each exception found, clearly document the report name, data element, expected value, actual value, and the root cause of the error.
    2.  **Communicate Results:** Draft a report for management that summarizes the scope of testing, the findings, the associated risks, and recommendations for corrective action.
    3.  **Track Remediation:** Follow up with the report owners to ensure that action plans are created and executed to fix the identified issues.
    `,
    "compliance testing": `
    **End-to-End Guideline for Compliance Testing Execution**

    Compliance testing is a systematic and independent assurance activity designed to evaluate the adequacy and effectiveness of an organization's adherence to laws, regulations, and internal policies. A typical end-to-end testing lifecycle follows these distinct phases:

    **Phase 1: Annual Planning & Scoping**
    1.  **Establish the Compliance Universe:** Identify and document all applicable external laws and regulations (e.g., SOX, AML, consumer protection laws) and internal policies that the organization must adhere to.
    2.  **Conduct a Compliance Risk Assessment:** Evaluate each area of the compliance universe based on factors like regulatory scrutiny, potential for customer harm, financial impact, and past audit/testing results. This helps prioritize testing efforts on the highest-risk areas.
    3.  **Develop the Annual Test Plan:** Based on the risk assessment, create a schedule of compliance tests for the upcoming year. The plan should outline the scope, objectives, and timing for each review.
    4.  **Obtain Management Approval:** Present the annual plan to senior management and the audit committee for review and approval.

    **Phase 2: Engagement Planning (For Each Test)**
    1.  **Define Objectives and Scope:** For each specific test, create a formal scope document detailing the regulations, processes, and business units to be reviewed, as well as what is explicitly out of scope.
    2.  **Hold Kick-off Meeting:** Meet with the key stakeholders from the business area under review to discuss the test's purpose, scope, timing, and what will be required from them.
    3.  **Gather Preliminary Information:** Collect and review relevant documentation, such as process maps, procedural documents, organizational charts, and previous audit reports.

    **Phase 3: Fieldwork (Execution)**
    1.  **Develop Detailed Test Procedures (Audit Program):** Create a step-by-step program that outlines the specific tests to be performed to achieve the engagement's objectives. This includes defining populations and sampling methodologies.
    2.  **Execute Tests:** Perform the planned procedures. Common methods include:
        *   **Inquiry:** Interviewing personnel to understand processes.
        *   **Observation:** Watching a process or control being performed.
        *   **Inspection:** Examining records and documents for evidence of control operation.
        *   **Re-performance:** Independently executing a control to validate its effectiveness.
    3.  **Document Work Papers:** Meticulously document all testing performed, the evidence gathered, and the results of each test. Work papers must be clear enough for an independent reviewer to understand the work and reach the same conclusion.

    **Phase 4: Issue Identification and Vetting**
    1.  **Analyze Results:** Compare test results against the defined criteria (the regulation or policy) to identify any gaps or exceptions.
    2.  **Determine Root Cause:** For each exception, perform a root cause analysis to understand *why* the failure occurred (e.g., lack of training, system error, inadequate procedure).
    3.  **Vet Findings:** Discuss the identified issues with the process owners to ensure factual accuracy and to get their perspective. This is a critical step to ensure buy-in for remediation.

    **Phase 5: Reporting**
    1.  **Draft the Audit Report:** Consolidate the findings into a formal report. A well-structured finding includes the "5 C's":
        *   **Condition:** What is the problem?
        *   **Criteria:** What should be? (The rule, policy, or standard).
        *   **Cause:** Why did it happen?
        *   **Consequence (Effect):** What is the risk or impact?
        *   **Corrective Action (Recommendation):** What should be done to fix it?
    2.  **Obtain Management Responses:** Share the draft report with management to get their formal response to each finding, including an action plan and a target date for remediation.
    3.  **Issue the Final Report:** Distribute the final report, including management's responses, to senior leadership and other relevant stakeholders.

    **Phase 6: Remediation and Follow-up (Issue Tracking)**
    1.  **Track Action Plans:** Log all identified issues and management's corresponding action plans into a tracking system.
    2.  **Monitor Progress:** Periodically follow up with the owners of the action plans to monitor their progress against the agreed-upon deadlines.
    3.  **Validate Remediation:** Once management reports that an issue has been fixed, perform validation testing to confirm that the corrective action was implemented and is effective in addressing the root cause.
    4.  **Report on Open Issues:** Provide regular status updates on open and overdue issues to senior management and the audit/risk committee.
    `,
    "validation": `
    In the context of financial services, validation most often refers to **Model Validation**, a critical component of Model Risk Management (MRM). It's the set of processes to verify that models are performing as expected and are fit for their intended purpose, as outlined in regulatory guidance like the Fed's SR 11-7.
    The core elements of an effective validation are:
    1.  **Conceptual Soundness Evaluation:** Assesses the quality of the model design. It involves reviewing the underlying theory, mathematical logic, data inputs, assumptions, and limitations to ensure they are appropriate and robust.
    2.  **Ongoing Monitoring:** Continuously tracks model performance over time to detect any degradation. This includes monitoring data inputs, model outputs, and defined performance metrics.
    3.  **Outcomes Analysis (Backtesting):** Involves comparing model predictions with actual outcomes to evaluate its accuracy and effectiveness. For example, comparing a credit risk model's predicted default rates with actual default rates.
    Validation must be performed by an independent team to ensure objectivity and credibility.
    `,
    "sampling": `
    Audit sampling is the application of an audit procedure to less than 100% of the items within a population to evaluate some characteristic of that population.
    There are two primary approaches:
    1.  **Statistical Sampling:** Uses probability theory to select and evaluate a sample. This allows the tester to quantify sampling risk and make a statistical conclusion about the entire population. Methods include **simple random sampling** and **systematic sampling**.
    2.  **Non-Statistical (Judgmental) Sampling:** Uses professional judgment to select the sample items. While it can be efficient, it does not allow for the statistical measurement of sampling risk. Conclusions are based on the tester's experience and knowledge. Methods include **haphazard sampling** (selecting items without a conscious bias) and **block sampling** (selecting a sequence of items).
    **Key factors influencing sample size for control testing include:**
    - **Control Frequency:** A daily control requires a larger sample than a monthly control to gain the same level of assurance.
    - **Confidence Level:** The higher the desired level of assurance (e.g., 95%), the larger the sample size required.
    - **Tolerable Deviation Rate:** The maximum rate of error the tester is willing to accept in the population. A lower tolerable rate requires a larger sample.
    `,
    "aml": `
    Anti-Money Laundering (AML) refers to laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income. Key pillars of an effective AML program include:
    1.  **Customer Due Diligence (CDD) / Know Your Customer (KYC):** Verifying customer identity and understanding their normal transaction patterns. Enhanced Due Diligence (EDD) is required for higher-risk customers.
    2.  **Transaction Monitoring:** Using automated systems to detect unusual or suspicious activity that does not align with a customer's known profile. This involves setting appropriate rules and thresholds.
    3.  **Suspicious Activity Reporting (SAR):** Investigating and reporting suspicious transactions to financial intelligence units, like FinCEN in the United States, by filing a SAR.
    4.  **AML Officer and Governance:** Appointing a designated AML compliance officer and ensuring strong oversight from senior management and the board.
    `,
    "audit": `
    Audit methodologies provide a systematic framework for conducting an audit engagement. They ensure audits are performed consistently, thoroughly, and in compliance with professional standards (e.g., IIA for internal audit, PCAOB for public company audits).
    A typical methodology includes these phases:
    1.  **Planning:** Involves understanding the business, performing a risk assessment to identify key risks, determining the audit scope, and defining objectives.
    2.  **Fieldwork (Execution):** This is where control testing and substantive testing occur. Auditors gather evidence through inquiry, observation, inspection, and re-performance to evaluate the effectiveness of controls and the accuracy of financial information.
    3.  **Reporting:** The audit team communicates the results. This includes drafting an audit report that details the scope, objectives, findings (issues or deficiencies), and recommendations for improvement.
    Frameworks like **COSO** (for internal control) and **COBIT** (for IT governance and management) are often integrated into audit methodologies.
    `,
    "occ": `
    The Office of the Comptroller of the Currency (OCC) is the primary regulator for national banks and federal savings associations in the United States. These institutions are required to file numerous reports. Key reports include:
    - **Consolidated Reports of Condition and Income (Call Report):** Filed quarterly, this report provides a detailed picture of a bank's financial condition, including its balance sheet, income statement, and supporting schedules. It is a primary source of data for bank supervisors.
    - **Suspicious Activity Report (SAR):** Filed with FinCEN to report known or suspected violations of law or suspicious activity observed by financial institutions. This is a critical component of AML compliance.
    - **Community Reinvestment Act (CRA) Data:** Banks are required to report data about their lending, investment, and service activities in the communities they serve to ensure they are meeting their obligations under the CRA.
    `,
    "federal reserve": `
    The Federal Reserve System is the central bank of the United States and a key regulator, primarily for bank holding companies (BHCs) and state-chartered banks that are members of the Federal Reserve System.
    Major reports filed with the Federal Reserve include:
    - **FR Y-9C (Consolidated Financial Statements for Bank Holding Companies):** This is the parent company equivalent of the bank-level Call Report. It provides consolidated financial data for the BHC.
    - **Stress Testing Reports (FR Y-14):** Required for large BHCs, these reports collect detailed data on assets, liabilities, and income that are used in the Fed's supervisory stress tests (DFAST and CCAR). These tests assess whether the firms have enough capital to absorb losses during stressful economic conditions.
    - **FR Y-6 (Annual Report of Bank Holding Companies):** Collects information on the BHC's organization, financial condition, and changes in its investments.
    `,
    "erm": `
    **Enterprise Risk Management (ERM)**

    ERM is a holistic, top-down approach that organizations use to identify, assess, and manage the full spectrum of risks they face. Instead of managing risks in silos (e.g., credit risk, operational risk, compliance risk separately), ERM provides a comprehensive framework to see how risks interrelate and impact the organization's overall strategic objectives.

    **Key Components of an ERM Framework:**
    1.  **Risk Identification:** Proactively identifying potential events and risks that could affect the organization's ability to achieve its goals.
    2.  **Risk Assessment:** Analyzing the identified risks in terms of their likelihood of occurring and their potential impact (financial, reputational, etc.).
    3.  **Risk Response:** Developing strategies to manage the risks. Common responses include:
        *   **Avoidance:** Exiting the activities that give rise to the risk.
        *   **Mitigation:** Taking action to reduce the likelihood or impact of the risk (e.g., implementing internal controls).
        *   **Transfer:** Shifting the risk to another party (e.g., through insurance).
        *   **Acceptance:** Accepting the risk, typically because the cost of addressing it outweighs the potential impact.
    4.  **Risk Monitoring:** Continuously monitoring the identified risks, the effectiveness of the risk responses, and the emergence of new risks.
    `,
    "coso": `
    **The COSO Framework for Internal Control**

    The COSO framework, developed by the Committee of Sponsoring Organizations of the Treadway Commission, is the most widely used internal control framework in the world. It is the standard that most US public companies use to comply with the internal control requirements of SOX. The framework is built on five integrated components:

    1.  **Control Environment:** This is the foundation for all other components. It refers to the "tone at the top"—the ethical values, integrity, and oversight established by the board of directors and senior management. A strong control environment is critical for the effectiveness of the entire internal control system.
    2.  **Risk Assessment:** This involves the process of identifying and analyzing risks that threaten the achievement of the organization's objectives. Management must consider potential for fraud and how changes (e.g., in the economy, technology, or regulations) could impact the business.
    3.  **Control Activities:** These are the actions, established through policies and procedures, that help ensure management's directives to mitigate risks are carried out. Examples include reconciliations, approvals, segregation of duties, and IT controls.
    4.  **Information & Communication:** This component emphasizes the need for relevant, quality information to support the functioning of internal control. Communication is the continuous process of providing, sharing, and obtaining necessary information, both internally and with external parties.
    5.  **Monitoring Activities:** These are ongoing evaluations, separate evaluations, or some combination of the two used to ascertain whether each of the five components of internal control is present and functioning. Deficiencies are identified and communicated in a timely manner.
    `,
    "itgc": `
    **IT General Controls (ITGCs)**

    ITGCs are foundational controls that apply to the overall IT environment, systems, and data. They are critical because they provide the basis for relying on automated controls and the data produced by IT systems. If ITGCs are weak, any controls that depend on the IT systems (application controls) may also be ineffective. They are a major focus area for SOX audits.

    ITGCs are typically categorized into three main domains:

    1.  **Logical Access Controls:**
        *   **Purpose:** To ensure that only authorized individuals can access systems, data, and applications.
        *   **Key Controls:**
            *   **User Provisioning/De-provisioning:** Processes for granting new access based on job roles and revoking access in a timely manner when an employee leaves or changes roles.
            *   **Periodic Access Reviews:** Regular reviews by business managers to ensure their employees' access rights are still appropriate.
            *   **Privileged Access Management:** Tightly controlled access for system administrators and other users with elevated permissions.
            *   **Password Policies:** Enforcing strong password complexity, length, and rotation.

    2.  **Change Management:**
        *   **Purpose:** To ensure that changes to applications, infrastructure, and data are properly authorized, tested, and implemented without disrupting services.
        *   **Key Controls:**
            *   **Formal Request & Approval:** A documented process for requesting and approving changes.
            *   **Testing:** Evidence that changes are tested in a separate environment (e.g., UAT) before being moved to production.
            *   **Segregation of Duties:** The person developing a change should not be the one to deploy it to production.

    3.  **IT Operations:**
        *   **Purpose:** To ensure that IT systems are managed effectively and that data is processed reliably.
        *   **Key Controls:**
            *   **Job Monitoring:** Procedures to monitor critical automated batch jobs to ensure they run successfully.
            *   **Backup and Recovery:** Regular data backups and tested procedures for restoring data in case of a system failure or disaster.
            *   **Problem and Incident Management:** Processes for logging, tracking, and resolving IT issues.
    `
};