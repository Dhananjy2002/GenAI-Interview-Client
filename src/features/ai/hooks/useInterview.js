import { useContext } from "react";
import { InterviewContext } from "../interview.context";
import { generateReport, getAllReports, getReportById, getResumePDF } from "../services/interview.api";

export const useInterview = () => {
    const context = useContext(InterviewContext);
    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider");
    }

    const { currentReport, setCurrentReport, loading, setLoading, error, setError } = context;

    const fetchReportById = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await getReportById(id);
            setCurrentReport(response.interviewReport || response);
            return response;
        } catch (err) {
            const errorMsg = err.response?.data?.message || "Failed to fetch report";
            setError(errorMsg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const fetchAllReports = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getAllReports();
            return response;
        } catch (err) {
            const errorMsg = err.response?.data?.message || "Failed to fetch reports";
            setError(errorMsg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const createReport = async ({ resume, jobDescription, selfDescription, reportId }) => {
        setLoading(true);
        setError(null);
        try {
            const response = await generateReport({ resume, jobDescription, selfDescription, reportId });
            setCurrentReport(response.interviewReport || response);
            return response;
        } catch (err) {
            const errorMsg = err.response?.data?.message || "Failed to generate report";
            setError(errorMsg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const downloadResume = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const blob = await getResumePDF(id);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `resume_report_${id}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            const errorMsg = "Failed to download resume PDF";
            setError(errorMsg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const clearCurrentReport = () => {
        setCurrentReport(null);
        setError(null);
    };

    return {
        currentReport,
        setCurrentReport,
        loading,
        error,
        fetchReportById,
        fetchAllReports,
        createReport,
        downloadResume,
        clearCurrentReport
    };
};
