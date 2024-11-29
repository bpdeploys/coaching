import React, { useState } from 'react';
import Teams from '..';
import TeamCreationS1 from './sport';

const Create = () => {
  const [step, setStep] = useState(1);

  const next = () => {
    setStep(step + 1);
  };

  const prev = () => {
    if (step - 1 <= 0) {
      setStep(1);
    } else {
      setStep(step - 1);
    }
  };

  return (
    <>
      <div className="container-step">
        <form>
          {step == 1 && <Teams nextStep={next} />}
          {step == 2 && <TeamCreationS1 nextStep={next} />}
          {step == 3 && <TeamCreationS2 nextStep={next} />}
          {step == 4 && <TeamCreationS3 nextStep={next} />}
          {step == 5 && <TeamCreationS4 nextStep={next} />}
          {step == 6 && <TeamCreationS5 nextStep={next} />}
          {step == 7 && <TeamCreationS6 nextStep={next} />}
          {step == 8 && <TeamCreationS7 nextStep={next} />}
          {step == 9 && <TeamCreationS8 nextStep={next} />}
          {step == 10 && <TeamCreationS9 nextStep={next} />}
          {step == 11 && <TeamCreationS10 nextStep={next} />}
        </form>
      </div>
    </>
  );
};
export default Create;
