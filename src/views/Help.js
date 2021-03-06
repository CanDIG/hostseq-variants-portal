import React from 'react';

// reactstrap components
import { Card, CardBody } from 'reactstrap';

/*
 * Help component
 */
function Help() {
  return (
    <>
      <div className="content">

        <div className="card-columns">

          <Card className="m-6">
            <CardBody>
              <h5 className="card-title">About Us</h5>
              <p className="card-text">
                This application hosts genomic variants data from
                {' '}
                <b>HostSeq</b>
                , a Canada-wide initiative
                that sequences genomes of 10,000 Canadians to help understand the genomic architecture of the host response to COVID-19.
              </p>
              Click
              {' '}
              <a target="_blank" rel="noopener noreferrer" href="http://www.cgen.ca/project-overview">here</a>
              {' '}
              to learn more about HostSeq, or
              {' '}
              <a target="_blank" rel="noopener noreferrer" href="http://www.cgen.ca/daco-main">here</a>
              {' '}
              to apply for Data Access.
            </CardBody>
          </Card>

          <Card className="m-6">
            <CardBody>
              <h5 className="card-title">Example Scenarios</h5>
              <b className="card-subtitle mb-2">
                I want to find out if a SNP exists at
                position 92311 on chromosome 5.
              </b>
              <p className="card-text">
                To check if a SNP exists at position 92311 on 5, first, select 5 from the chromosome
                dropdown, then put 92311 into both start and end. The server will return all variants that
                have a presence at this position. In most cases, it would be an SNP, sometimes it would be short indels.
              </p>

              <b className="card-subtitle mb-2">I want to get a list of variants from position 14,000 to 14,500 on Mitochondria genome.</b>
              <p className="card-text">
                To get a list of variants at this range, please select MT from the Chromosome dropdown, put 14000 as the start, and
                14500 as the end. The server will return a list of variants in this range.
              </p>
            </CardBody>
          </Card>

          <Card className="m-6">
            <CardBody>
              <h5 className="card-title">FAQ</h5>
              <b className="card-subtitle mb-2">What is the maximum range I could search for?</b>
              <p className="card-text">
                Currently, you are only allowed to search for up to 5,000 bps at a time.
              </p>
              <b className="card-subtitle mb-2">Is there a limit on my usage of the portal?</b>
              <p className="card-text">
                Yes. Your search quota is 500 at any 24-hour period. If you need access to more data,
                you should contact us at
                {' '}
                <a href="mailto:hostseq.support@cgen.ca">hostseq.support@cgen.ca</a>

              </p>
              <b className="card-subtitle mb-2">
                When I search with a range with start of 5000 and end of 5500, what variants will get returned?
              </b>
              <p className="card-text">
                The server will search for the range you provide, and any variants that have presence at any one nucleotide
                within your search range will get returned.
              </p>
              <b className="card-subtitle mb-2">
                Can I export the data?
              </b>
              <p className="card-text">
                Yes, you may click on the Download button, located at the top right corner of the table.
                The result will be exported as a tsv file.
              </p>
              <b className="card-subtitle mb-2">
                How is the internal frequency rounded?
              </b>
              <p className="card-text">
                We round up the internal frequency to the nearest 10%.
              </p>
              <b className="card-subtitle mb-2">
                Can I sort on the columns of the table?
              </b>
              <p className="card-text">
                You may sort on Position, IDs, Reference and Alternate Alleles. You cannot sort on
                Internal Frequency at this time.
              </p>
              <b className="card-subtitle mb-2">
                I have other questions that&apos;s not answered here.
              </b>
              <p className="card-text">
                Please reach out to us at
                {' '}
                <a href="mailto:hostseq.support@cgen.ca">hostseq.support@cgen.ca</a>
              </p>
            </CardBody>
          </Card>

          <Card className="m-6">
            <CardBody>
              <h5 className="card-title">Terminolgies</h5>
              <b className="card-subtitle mb-2">Internal Frequency</b>
              <p className="card-text">
                Internal frequencies indicate the prevalence of alternate allele(s) in our dataset, rounded up to the nearest 10 percent.
              </p>

              <b className="card-subtitle mb-2">Position</b>
              <p className="card-text">
                The 1-based position of the variant, aligned to genome reference GRCh38 (hg38).
              </p>
            </CardBody>
          </Card>

          <Card className="m-6">
            <CardBody>
              <h5 className="card-title">Technologies</h5>
              <p className="card-text">Note: At this time, APIs are not directly available to the users.</p>

              <b className="card-subtitle mb-2">CanDIG Variants API</b>
              <p className="card-text">
                This application is powered by the
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.distributedgenomics.ca/">CanDIG</a>
                {' '}
                APIs.
              </p>

              <b className="card-subtitle mb-2">GA4GH Beacon API</b>
              <p className="card-text">
                This application supports querying via the
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://beacon-project.io/">GA4GH Beacon</a>
                {' '}
                APIs.
              </p>
            </CardBody>
          </Card>
        </div>

      </div>
    </>
  );
}

export default Help;
