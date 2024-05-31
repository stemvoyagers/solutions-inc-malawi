import CTAIsms from "../components/policies/CTAIsms";
import IsmsBody from "../components/policies/IsmsBody";
import { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { Spinner } from "react-bootstrap";

const Isms = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <div className="loading-state flex justify-center items-center min-h-screen">
      <Spinner animation="border" role="status">
        <AiOutlineLoading className="animate-spin" />
      </Spinner>
    </div>
  ) : (
    <div>
      <CTAIsms />
      <IsmsBody />
    </div>
  );
};

export default Isms;
