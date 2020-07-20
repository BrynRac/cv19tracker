import React from 'react';
import { useSelector } from 'react-redux';

export default function Modal() {
  const story = useSelector((state) => state.modal.modalContent);

  return (
    <div className="Modal">
      <h3>{story.title}</h3>
    </div>
  );
}
