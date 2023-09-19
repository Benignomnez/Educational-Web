import React from "react";
import PropTypes from "prop-types";
import {  quotationMark} from '../assets/index'

function FeedbackCard({ name, role, feedbackText, imageSrc }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img className="h-20" src={imageSrc} alt={name} /> 
          <div>
            <h1>{name}</h1>
            <p>{role}</p>
          </div>
        </div>
        <img className="h-8" src={quotationMark} alt="quotation mark" />
      </div>

      <div className="py-8">
        <h3 className="text-lg">{feedbackText}</h3>
      </div>
    </div>
  );
}

FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  feedbackText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default FeedbackCard;

