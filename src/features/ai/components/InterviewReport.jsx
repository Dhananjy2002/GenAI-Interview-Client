import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { useInterview } from '../hooks/useInterview';
import { toast } from 'react-toastify';
import NavigationBar from './NavigationBar';
import SectionsNav from './SectionsNav';
import ContentHeader from './ContentHeader';
import QuestionsSection from './QuestionsSection';
import RoadmapSection from './RoadmapSection';
import MatchScore from './MatchScore';
import SkillGaps from './SkillGaps';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import DownloadResume from './DownloadResume';

const InterviewReport = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const { currentReport, loading, error, fetchReportById } = useInterview();
    const [activeSection, setActiveSection] = useState('technical');

    // Fetch report by ID if URL param exists
    useEffect(() => {
        if (id) {
            fetchReportById(id).catch(err => {
                console.error(err);
                toast.error(err.response?.data?.message || "Failed to load this report.");
            });
        }
    }, [id]);

    const report = state?.report || currentReport;

    if (loading) return <LoadingState />;
    if (error || !report) return <ErrorState error={error} />;

    const { technicalQuestions, behavioralQuestions, skillGaps, preparationPlan, matchScore, title } = report;

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row py-8 gap-6 px-4 sm:px-8">
                {/* Left Sidebar */}
                <SectionsNav activeSection={activeSection} setActiveSection={setActiveSection} />

                {/* Main Content */}
                <div className="grow w-full max-w-4xl">
                    <ContentHeader
                        activeSection={activeSection}
                        technicalQuestions={technicalQuestions}
                        behavioralQuestions={behavioralQuestions}
                        preparationPlan={preparationPlan}
                    />

                    {/* Technical / Behavioral Questions */}
                    {(activeSection === 'technical' || activeSection === 'behavioral') && (
                        <QuestionsSection
                            activeSection={activeSection}
                            technicalQuestions={technicalQuestions}
                            behavioralQuestions={behavioralQuestions}
                        />
                    )}

                    {/* Roadmap */}
                    {activeSection === 'roadmap' && <RoadmapSection preparationPlan={preparationPlan} />}
                </div>

                {/* Right Sidebar */}
                <div className="w-full lg:w-64 shrink-0 space-y-6 lg:sticky lg:top-24 self-start">
                    <MatchScore matchScore={matchScore} />
                    <DownloadResume reportId={id || report?._id} />
                    <SkillGaps skillGaps={skillGaps} />
                </div>
            </div>
        </div>
    );
};

export default InterviewReport;
