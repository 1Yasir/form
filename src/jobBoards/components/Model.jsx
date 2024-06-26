import React from 'react';
import { formatString } from "../utils/helper"
import {
    CButton,
    CModal,
    CModalBody,
    CModalTitle,
    CModalHeader,
    CModalFooter
} from "@coreui/react";

// Memoization to prevent unnecessary re-renders
const Model = React.memo(({ visible, previewList, getValues, setVisible }) => {
    return (
        <CModal
            visible={visible}
            onClose={() => setVisible(false)}
            aria-labelledby="LiveDemoExampleLabel"
        >
            <CModalHeader>
                <CModalTitle id="LiveDemoExampleLabel">Preview Job Post</CModalTitle>
            </CModalHeader>
            <CModalBody>
                {previewList && previewList.map((list, i) => (
                    <div key={i} className='d-flex justify-content-between position-relative' style={{ overflowX: "hidden" }}>
                        <p>
                            {list === "editorContent" ? (
                                <>
                                    <strong>{formatString(list)}:</strong>
                                    <span dangerouslySetInnerHTML={{ __html: getValues(list) }} />
                                </>
                            ) : (
                                <>
                                    <strong>{formatString(list)}:</strong>  {Array.isArray(getValues(list)) ? getValues(list).join(" - ") : getValues(list)}
                                </>
                            )}
                        </p>
                        <a href={`#${list}`} onClick={() => setVisible(false)} className='position-absolute' style={{ right: 0 }}>----</a>
                    </div>
                ))}
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                </CButton>
            </CModalFooter>
        </CModal>
    );
});

export default Model;
