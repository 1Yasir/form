import React from 'react';
import Form from './Form';

function CreateJob() {
    const editJob = false;
  return (
    <Form  pageTitle = "Create Job" isEdit = {editJob} />

  )
}

export default CreateJob