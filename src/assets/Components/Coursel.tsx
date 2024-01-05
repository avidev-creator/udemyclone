import { Card } from "flowbite-react";
import { FaQuoteLeft } from "react-icons/fa6";

function Coursel() {
  return (
    <>
      <div className="flex w-full max-w-5xl justify-evenly">
        <Card className="max-w-sm">
          <FaQuoteLeft />
          <p className="font-medium text-gray-700 dark:text-gray-400">
            I am proud to say that after a few months of taking this course...I
            passed my exam and am now an AWS Certified Cloud Practitioner! This
            content was exactly what the CCP exam covered.
          </p>
        </Card>
        <Card className="max-w-sm">
          <FaQuoteLeft />
          <p className="font-medium text-gray-700 dark:text-gray-400">
            I am proud to say that after a few months of taking this course...I
            passed my exam and am now an AWS Certified Cloud Practitioner! This
            content was exactly what the CCP exam covered.
          </p>
        </Card>
        <Card className="max-w-sm">
          <FaQuoteLeft />
          <p className="font-medium text-gray-700 dark:text-gray-400">
            I am proud to say that after a few months of taking this course...I
            passed my exam and am now an AWS Certified Cloud Practitioner! This
            content was exactly what the CCP exam covered.
          </p>
        </Card>
        <Card className="max-w-sm">
          <FaQuoteLeft />
          <p className="font-medium text-gray-700 dark:text-gray-400">
            I am proud to say that after a few months of taking this course...I
            passed my exam and am now an AWS Certified Cloud Practitioner! This
            content was exactly what the CCP exam covered.
          </p>
        </Card>
      </div>
    </>
  );
}

export default Coursel;
