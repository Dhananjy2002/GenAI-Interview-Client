import axios from "axios";
import { API_BASE_URL } from "../../../../utils/constants";

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});

/**
 * Generate a new interview report by uploading resume + descriptions.
 * @param {File} resume - PDF file
 * @param {string} jobDescription
 * @param {string} selfDescription
 * @param {string} reportId - Optional MongoDB ID to update existing report
 */
export async function generateReport({ resume, jobDescription, selfDescription, reportId }) {
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);
    if (selfDescription) {
        formData.append("selfDescription", selfDescription);
    }
    if (reportId) {
        formData.append("reportId", reportId);
    }

    const response = await api.post("/interview/generate-report", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
}

/**
 * Fetch all interview reports for the authenticated user.
 */
export async function getAllReports() {
    const response = await api.get("/interview/get-all-reports");
    return response.data;
}

/**
 * Fetch a single interview report by its MongoDB ID.
 * @param {string} id
 */
export async function getReportById(id) {
    const response = await api.get(`/interview/get-report/${id}`);
    return response.data;
}

/**
 * Trigger resume PDF generation and fetch the blob.
 * @param {string} interviewReportId 
 */
export async function getResumePDF(interviewReportId) {
    const response = await api.post(`/interview/get-resume/pdf/${interviewReportId}`, {}, {
        responseType: "blob",
    });
    return response.data;
}
