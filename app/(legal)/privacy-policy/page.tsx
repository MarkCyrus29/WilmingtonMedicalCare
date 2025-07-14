export default function page() {
  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">
            Notice of Privacy Practices
          </h1>
          <p className="text-sm font-semibold">EFFECTIVE DATE: APRIL 1, 2017</p>
        </div>

        <div className="bg-gray-50 p-4 border-l-4 border-gray-400">
          <p className="text-sm font-medium">
            THIS NOTICE DESCRIBES HOW PERSONAL INFORMATION ABOUT YOU MAY BE USED
            AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. TERMS
            DEFINED IN THE HEALTH INSURANCE PORTABILITY AND ACCOUNTABILITY ACT
            OF 1966 (HIPAA) WILL HAVE THE SAME MEANING IN THIS NOTICE. PLEASE
            REVIEW IT CAREFULLY
          </p>
        </div>

        <div className="space-y-4">
          <p>
            {`
            This Notice applies to all the people who provide healthcare
            services at Wilmington Mental Health in North Carolina. These
            providers will be referred as "we" in this Notice.
          `}
          </p>

          <div>
            <h2 className="text-lg font-bold mb-3">
              RESPONSIBILITIES OF WILMINGTON MENTAL HEALTH
            </h2>
            <p className="mb-3">
             {` Wilmington Mental Health ("We" or "Us" or "Our") is required by
              state and federal law to protect the privacy of your health
              information that may identify you. This health information
              includes mental health, developmental disability and/or substance
              abuse services that are provided to you, payment for those health
              care services, or other health care operations provided on your
              behalf.`}
            </p>
            <p className="mb-3">
              This agency is required by law to inform you of our legal duties
              and privacy practices with respect to your health information
              through this Notice of Privacy Practices. This Notice describes
              the ways we may share your past, present and future health
              information, ensuring that we use and/or disclose this information
              only as we have described in this Notice. We do, however, reserve
              the right to change our privacy practices and the terms of this
              Notice, and to make the new Notice provisions effective for all
              health information we maintain. Any changes to this Notice will be
              posted in our agency offices and on our agency web site at
              (*weblink*). Copies of any revised Notices will be available to
              you upon request.
            </p>
            <p>
             {` If at any time, you have questions or concerns about the
              information in this Notice or about our agency's privacy policies,
              procedures and practices, you may contact our agency Privacy
              Official at (910) 777-5575.`}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">
              OUR PLEDGE REGARDING HEALTH INFORMATION
            </h2>
            <p className="mb-3">
              We understand that health information about you and your health
              care is personal. We will collect personal information about you
              and receive such records from others. We will create a record of
              the care and services you receive from us and store it in a chart
              or electronic health record. This is your mental health record and
              is the property of Wilmington Mental Health, but the information
              in the mental health record belongs to you. We will use these
              records to provide you with quality care, to obtain payment for
              services provided to you as allowed by your health plan, and to
              enable us to comply with certain legal requirements. This notice
              applies to all the records of your care generated through our work
              with you, the patient.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">
              USE AND DISCLOSURE OF HEALTH INFORMATION WITHOUT YOUR
              AUTHORIZATION
            </h2>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">For Treatment:</h3>
              <p className="mb-2">
                Wilmington Mental Health may use your health information, as
                needed, in order to provide, coordinate or manage your health
                care and related services. This includes sharing your health
                information with other health care providers within this agency.
                For instance, your treatment team (e.g., doctor, nurses, social
                worker, counselor) may need to review your treatment and discuss
                plans for your discharge.
              </p>
              <p>
                We will disclose your health information outside of this agency
                for treatment purposes only with your consent or when otherwise
                allowed under state or federal law (e.g., for emergency
                services; GS 90-109.1). If you request treatment and
                rehabilitation for drug dependence, your request will be treated
                as confidential. We will not refer you to another person for
                treatment and rehabilitation without your consent.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">For Payment:</h3>
              <p>
               {` The treatment provided to you will be shared with our agency's
                billing department so a bill can be prepared for services
                rendered. We may also share your health information with agency
                staff who review services provided to you to make certain you
                have received appropriate care and treatment. We will not
                disclose your health information outside of this agency for
                billing purposes (i.e., bill your insurance company) without
                your consent except in certain situations when we need to
                determine if you are eligible for benefits, such as contacting
                your local Department of Social Services to determine if you are
                currently eligible for treatment.`}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">
                For Health Care Operations:
              </h3>
              <p className="mb-2">
               {` Wilmington Mental Health may use or disclose your health
                information in performing a variety of business activities that
                we call "health care operations". Some examples of how we may
                use or disclose your health information for health care
                operations are:`}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Review the care you receive here and evaluate the performance
                  of your treatment/habilitation team to ensure you have
                  received quality care.
                </li>
                <li>
                  Review and evaluate the skills, qualifications and performance
                  of health care providers who are taking care of you.
                </li>
                <li>
                  Provide training programs for agency staff, students, and
                  volunteers.
                </li>
                <li>
                  Cooperate with outside organizations that review and determine
                  the quality of care that you receive.
                </li>
                <li>
                  Allow our agency attorney to use your health information when
                  representing this agency in legal matters.
                </li>
                <li>
                  Provide information to professional organizations that
                  evaluate, certify or license health care providers, staff or
                  facilities.
                </li>
                <li>Resolve grievances within our agency.</li>
                <li>
                  Provide information to your internal client advocate who is
                  available to represent your interests upon your request.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">
              Other Circumstances For Which Authorization Is Not Required
            </h2>
            <p className="mb-3">
              Wilmington Mental Health may disclose your health information for
              those circumstances that have been determined to be so important
              that your authorization may not be required. Prior to disclosing
              your health information, we will evaluate each request to ensure
              that only necessary information will be disclosed. Those
              circumstances include disclosures that are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>
                  For appointment reminders and health related benefits or
                  services.
                </strong>{" "}
                We may use and disclose your PHI to contact you to remind you
                that you have an appointment with us. We may also use and
                disclose your PHI to tell you about treatment alternatives, or
                other health care services or benefits that we offer.
              </li>
              <li>
                <strong>For public health activities.</strong> If you have one
                of several specific communicable diseases (for example,
                tuberculosis, syphilis or HIV/AIDS), information about your
                disease will be treated as confidential, and will be disclosed
                without your written permission only in limited circumstances.
                We may not need to obtain your permission to report information
                about your communicable disease to State and local officials or
                to otherwise use or disclose information in order to protect
                against the spread of the disease.
              </li>
              <li>
                Within a program for activities related to the provision of
                substance abuse diagnosis, treatment, or referral for treatment.
              </li>
              <li>
                For our use in training or supervising mental health
                practitioners to help them improve their skills in group, joint,
                family, or individual counseling or therapy.
              </li>
              <li>
                Regarding abuse, neglect, or domestic violence; or child abuse
                or neglect for those in substance abuse treatment.
              </li>
              <li>
                For law enforcement purposes unless otherwise prohibited by
                state or federal law. If you request treatment and
                rehabilitation for drug dependence, we will not disclose your
                name to any police officer or other law-enforcement officer
                unless you authorize such disclosure; except that if you later
                commit a crime or threaten to commit a crime on the premises of
                this agency or against program personnel, law enforcement may be
                notified.
              </li>
              <li>
                To coroners or medical examiners when such individuals are
                performing duties authorized by law.
              </li>
              <li>
                For court proceedings such as court orders to appear in court.
              </li>
              <li>
                Related to death such as disclosure to a funeral director.
              </li>
              <li>
                To avert a serious threat to the health or safety of a person or
                the public.
              </li>
              <li>
                Related to specialized government activities such as national
                security.
              </li>
              <li>
                To correctional institutions or other law enforcement officials
                when you are in their custody.
              </li>
              <li>
                {`For Worker's Compensation in cases pending before the Industrial
                Commission.`}
              </li>
              <li>
                For research purposes, including studying and comparing the
                mental health of patients who received one form of therapy
                versus those who received another form of therapy for the same
                condition.
              </li>
              <li>
                For marketing purposes. We will not use or disclose your PHI for
                marketing purposes.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">Contacting You</h2>
            <p className="mb-2">
              Wilmington Mental Health may use your health information to
              contact you to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Remind you of upcoming appointments. We may send an appointment
                reminder via text, or on a folded postcard to your home to
                remind you of a scheduled appointment. We may also send a letter
                to your home concerning the need for follow up care of mental
                health conditions.
              </li>
              <li>
                Make you aware of alternative treatment, services, products or
                health care providers that may be of interest to you. If you are
                receiving treatment for a particular condition and your health
                care team learns of new or alternative treatments, we may
                contact you to inform you of such possibilities.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">
              Disclosure of Health Information That Allows You An Opportunity To
              Object
            </h2>
            <p className="mb-2">
              There are certain circumstances where we may disclose your health
              information and you have an opportunity to object. Such
              circumstances include:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>
                The professional responsible for your care may disclose your
                admission to or discharge from this agency to your next of kin
              </li>
              <li>
                Disclosure to public or private agencies providing disaster
                relief, such as the American Red Cross.
              </li>
              <li>
                Family, friends, or others that you indicate as being involved
                in your care or the payment for your health care. The
                opportunity to consent may be obtained retroactively in
                emergency situations.
              </li>
            </ul>
            <p>
              If you would like to object to our disclosure about your health
              information in either of the situations listed above, please
              contact our agency Privacy Official listed in this Notice for
              consideration of your objection.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">
              DISCLOSURE OF HEALTH INFORMATION THAT REQUIRES YOUR AUTHORIZATION
            </h2>
            <p className="mb-3">
              Wilmington Mental Health will not disclose your health information
              without your authorization except as allowed or required by state
              or federal law. For all other disclosures, we will ask you to sign
              a written authorization that allows us to share or request your
              health information. Before you sign an authorization, you will be
              fully informed of the exact information you are authorizing to be
              disclosed/requested and to/from whom the information will be
              disclosed/requested.
            </p>
            <p className="mb-3">
              You may request that your authorization be cancelled by informing
              our agency Privacy Official that you do not want any additional
              health information about you exchanged with a particular
              person/agency. You will be asked to sign and date the
              Authorization Revocation section of your original authorization;
              however, verbal authorization is acceptable. Your authorization
              will then be considered invalid at that point in time; however,
              any actions that were taken on the authorization prior to the time
              you cancelled your authorization are legal and binding.
            </p>
            <p className="mb-3">
              If you are a minor who has consented to treatment for services
              regarding the prevention, diagnosis and treatment of certain
              illnesses including: venereal disease and other diseases that must
              be reported to the State; pregnancy; abuse of controlled
              substances or alcohol; or emotional disturbance, you have the
              right to authorize disclosure of your health information. If you
              are a minor whose parent or guardian has consented to your
              treatment for substance abuse, both you and your parent or
              guardian must authorize disclosure of your health information.
              Disclosure of health information to external client advocates will
              require authorization by you and your personal representative if
              one has been designated.
            </p>
            <p>
              No mobile information will be shared with third parties/affiliates
              for marketing/promotional purposes. All the above categories
              exclude text messaging originator opt-in data and consent; this
              information will not be shared with any third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">
              YOUR RIGHTS REGARDING YOUR PERSONAL HEALTH INFORMATION
            </h2>
            <p className="mb-3">
              You have the following rights regarding your personal health
              information as created and maintained by this agency:
            </p>

            <div className="space-y-3">
              <div>
                <h3>
                  To Get a Paper or Electronic Copy of this Notice.
                </h3>
                <p>
                 {` At your first treatment encounter with this agency, you will
                  be given a copy of this Notice and asked to sign an
                  acknowledgement that you have received it. In the event of
                  emergency services, you will be provided the Notice as soon as
                  possible after emergency services have been provided. In
                  addition, copies of this Notice have been posted in several
                  public areas throughout this agency, as well as on the
                  Wilmington Mental Health's Internet web site at www.wmhwc.com.
                  You have the right to request a paper copy of this Notice at
                  any time from our agency Admissions Officer or our agency
                  Privacy Official.`}
                </p>
              </div>

              <div>
                <h3>Disclosures of Your PHI.</h3>
                <p>
                  You have the right to ask us not to use or disclose certain
                  PHI for treatment, payment, or health care operations
                  purposes. We are not required to agree to your request and
                  deny if we believe it would affect your health care.
                </p>
              </div>

              <div>
                <h3>
                  The Right to Request Restrictions for Out-of-Pocket Expenses
                  Paid for In Full.
                </h3>
                <p>
                  You have the right to request restrictions on disclosures of
                  your PHI to health plans for payment or health care operations
                  purposes if the PHI pertains solely to a health care item or a
                  health care service that you have paid for out-of-pocket in
                  full.
                </p>
              </div>

              <div>
                <h3>
                  The Right to Choose How I Send PHI to You.
                </h3>
                <p>
                  You have the right to request to be contacted at a different
                  location or by a different method. For example, you may
                  request all written information from this agency be sent to
                  your work address rather than your home address. We will agree
                  with your request as long as it is reasonable to do so;
                  however, your request must be made in writing and forwarded to
                  our agency Privacy Official.
                </p>
              </div>

              <div>
                <h3>
                  The Right to See and Get Copies of Your PHI.
                </h3>
                <p>
                 {` Other than "psychotherapy notes," you have the right to get an
                  electronic or paper copy of your medical record and other
                  information that we have about you. We will provide you with a
                  copy of your record, or a summary of it, if you agree to
                  receive a summary, within 30 days of receiving your written
                  request. Your request may be denied by a professional
                  designated by our agency director under certain circumstances.
                  If your request is approved, you may be charged a fee to cover
                  the costs of the copy.`}
                </p>
              </div>

              <div>
                <h3>
                  The Right to Get a List of the Disclosures We Have Made.
                </h3>
                <p>
                  You have the right to request a list of instances in which we
                  have disclosed your PHI for purposes other than treatment,
                  payment, or health care operations, or for which you provided
                  us with an Authorization. We will respond to your request for
                  an accounting of disclosures within 60 days of receiving your
                  request. The list we will give you will include disclosures
                  made in the last six years unless you request a shorter time.
                  We will provide the list to you at no charge, but if you make
                  more than one request in the same year, we will charge you a
                  reasonable cost-based fee for each additional request.
                </p>
              </div>

              <div>
                <h3>
                  The Right to Correct or Update Your PHI.
                </h3>
                <p>
                  If you believe that we have information that is either
                  inaccurate or incomplete, you may submit a request in writing
                  to our agency Privacy Official and explain your reasons for
                  the amendment. We will add your amendment but will not destroy
                  the original record. We will make reasonable efforts to inform
                  others of the changes, including persons you name who have
                  received your PHI and who need the changes. We may deny your
                  request, but we will explain to you in writing, within 60 days
                  of receiving your request, the reasons for the denial and
                  describe your rights to give us a written statement
                  disagreeing with the denial.
                </p>
              </div>

              <div>
                <h3>
                  To Request Restrictions on Uses and Disclosures of Your PHI.
                </h3>
                <p>
                  You have the right to request that we limit our use and
                  disclosure of your health information for treatment, payment,
                  and health care operations. We will make every attempt to
                  honor your request but are not required to agree to such
                  request. You may cancel the restrictions at any time, and we
                  will ask that your request be in writing. In addition, this
                  agency may cancel a restriction at any time, as long as we
                  notify you of the cancellation.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">
              VIOLATIONS/COMPLAINT ABOUT OUR PRACTICES
            </h2>
            <p className="mb-3">
              If you believe that your privacy rights have been violated or if
              you are dissatisfied with our privacy policies or procedures, you
              may file a complaint either with us or with the federal
              government. We will not take any action against you or change our
              treatment of you in any way if you file a complaint. Suspected
              violations of Federal Drug and Alcohol Law may be reported to the
              United States Attorney in the district where the violation occurs.
              To file a written complaint with Wilmington Mental Health, PLLC,
              you may bring your complaint to your provider, his/her supervisor,
              the Privacy Officer or you may mail it to the following address:
            </p>

            <div className="bg-gray-50 p-4 mb-4">
              <p>WILMINGTON MENTAL HEALTH, PLLC</p>
              <p>3825 Market St. Ste 4, Wilmington, NC 28403</p>
              <p>Telephone: (910) 777-5273</p>
              <p>Fax: (910) 777-5273</p>
              <p>Email: info@wmhwc.com</p>
            </div>

            <p className="mb-3">
              The North Carolina Department of Health and Human Services has
              designated CARE-LINK to receive and document complaints and
              concerns regarding your privacy:
            </p>

            <div className="bg-gray-50 p-4 mb-4">
              <p>CARE-LINK</p>
              <p>2012 Mail Service Center, Raleigh, NC 27699-2012</p>
              <p>
                Telephone: (English and Spanish): (800) 622-7030 / (919)
                733-4261
              </p>
            </div>

            <p className="mb-3">
              You may also send a written complaint to the United States
              Secretary of the Department of Health and Human Services. Contact
              information is as follows:
            </p>

            <div className="bg-gray-50 p-4 mb-4">
              <p>
                U.S. Department of Health and Human Services
              </p>
              <p>Office for Civil Rights</p>
              <p>61 Forsyth Street, S.W., Suite 3B70, Atlanta, GA 30303-8909</p>
              <p>Telephone: (404) 562-7886 / (404) 331-2867 (TDD)</p>
              <p>Fax: (404) 562-7881</p>
            </div>

            <div className="text-sm text-gray-600 mb-3">
              <p>* 42 U.S.C. 290dd-3 and 42 U.S.C. 290ee-3</p>
              <p>* 42 U.S.C. 1320d-1329d-8 and 42 U.S.C. 1320d-2(note)</p>
              <p>
                * 45 CFR Parts 160 and 164. NC General Statutes – Chapter 122C,
                Article 3.
              </p>
            </div>

            <p>
              If you file a complaint, we will not take any action against you
              or change the quality of health care services we provide to you in
              any way. Thank you for allowing us the opportunity to serve you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
