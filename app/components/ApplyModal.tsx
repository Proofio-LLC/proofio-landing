"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Check, ChevronRight, ChevronLeft, Loader2, FileText, Send } from "lucide-react";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface ApplyModalProps {
  jobTitle: string;
  jobId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ jobTitle, jobId, isOpen, onClose }: ApplyModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    whyProofio: "",
    portfolio: "",
    github: "",
  });
  
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 10 * 1024 * 1024) {
        alert("File is too large. Maximum size is 10MB.");
        return;
      }
      setFile(selectedFile);
    }
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      let resumeUrl = "";

      // 1. Upload file if exists
      if (file) {
        const fileRef = ref(storage, `applications/${jobId}/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(fileRef, file);
        resumeUrl = await getDownloadURL(snapshot.ref);
      }

      // 2. Save to Firestore
      await addDoc(collection(db, "applications"), {
        ...formData,
        jobId,
        jobTitle,
        resumeUrl,
        status: "new",
        createdAt: serverTimestamp(),
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-base-200 text-base-content/40 transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress Bar */}
        {!isSuccess && (
          <div className="absolute top-0 left-0 w-full h-1.5 bg-base-200">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              className="h-full bg-primary"
            />
          </div>
        )}

        <div className="p-8 md:p-12">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-4xl font-bold text-base-content mb-4">Application Sent!</h2>
                <p className="text-lg text-base-content/60 mb-10 max-w-md mx-auto">
                  Thank you for applying for the <strong>{jobTitle}</strong> position. We&apos;ll review your profile and get back to you soon.
                </p>
                <button
                  onClick={onClose}
                  className="btn btn-primary rounded-xl px-12 h-14 text-lg font-bold shadow-xl shadow-primary/20"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Content */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="mb-8">
                      <span className="text-primary font-bold uppercase tracking-widest text-xs">Step 1 of 4</span>
                      <h2 className="text-3xl font-bold text-base-content mt-2">Personal Information</h2>
                      <p className="text-base-content/50">Let&apos;s start with the basics.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="form-control">
                        <label className="label"><span className="label-text font-bold">Full Name</span></label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="input input-bordered w-full h-14 rounded-xl focus:border-primary focus:outline-none transition-all"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label"><span className="label-text font-bold">Email Address</span></label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="input input-bordered w-full h-14 rounded-xl focus:border-primary focus:outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="mb-8">
                      <span className="text-primary font-bold uppercase tracking-widest text-xs">Step 2 of 4</span>
                      <h2 className="text-3xl font-bold text-base-content mt-2">About Your Experience</h2>
                      <p className="text-base-content/50">Tell us about your background.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="form-control">
                        <label className="label"><span className="label-text font-bold">Years of relevant experience</span></label>
                        <input
                          type="text"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          placeholder="e.g. 5+ years"
                          className="input input-bordered w-full h-14 rounded-xl focus:border-primary focus:outline-none transition-all"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label"><span className="label-text font-bold">Why Proofio?</span></label>
                        <textarea
                          name="whyProofio"
                          value={formData.whyProofio}
                          onChange={handleInputChange}
                          placeholder="What excites you about working with us?"
                          className="textarea textarea-bordered w-full min-h-[120px] rounded-xl focus:border-primary focus:outline-none transition-all py-4"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="mb-8">
                      <span className="text-primary font-bold uppercase tracking-widest text-xs">Step 3 of 4</span>
                      <h2 className="text-3xl font-bold text-base-content mt-2">Links & Portfolio</h2>
                      <p className="text-base-content/50">Where can we see your work?</p>
                    </div>
                    <div className="space-y-4">
                      <div className="form-control">
                        <label className="label"><span className="label-text font-bold">Portfolio / Website Link</span></label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          placeholder="https://yourportfolio.com"
                          className="input input-bordered w-full h-14 rounded-xl focus:border-primary focus:outline-none transition-all"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label"><span className="label-text font-bold">GitHub / LinkedIn Link</span></label>
                        <input
                          type="url"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          placeholder="https://github.com/username"
                          className="input input-bordered w-full h-14 rounded-xl focus:border-primary focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <div className="mb-8">
                      <span className="text-primary font-bold uppercase tracking-widest text-xs">Step 4 of 4</span>
                      <h2 className="text-3xl font-bold text-base-content mt-2">Resume Upload</h2>
                      <p className="text-base-content/50">Upload your latest CV (PDF preferred).</p>
                    </div>
                    
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-[2rem] p-12 transition-all cursor-pointer ${
                        file ? "border-primary bg-primary/5" : "border-base-300 hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                      
                      {file ? (
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg">
                            <FileText className="w-8 h-8" />
                          </div>
                          <p className="text-lg font-bold text-base-content mb-1">{file.name}</p>
                          <p className="text-sm text-base-content/40">
                            {file.size < 1024 * 1024 
                              ? `${(file.size / 1024).toFixed(1)} KB` 
                              : `${(file.size / (1024 * 1024)).toFixed(2)} MB`
                            } • Click to change
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-base-200 rounded-2xl flex items-center justify-center text-base-content/30 mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                            <Upload className="w-8 h-8" />
                          </div>
                          <p className="text-lg font-bold text-base-content mb-1">Upload Resume</p>
                          <p className="text-sm text-base-content/40">PDF, DOC, DOCX up to 10MB</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Footer Navigation */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-base-100">
                  {step > 1 ? (
                    <button
                      onClick={prevStep}
                      className="btn btn-ghost rounded-xl px-6 gap-2"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < totalSteps ? (
                    <button
                      onClick={nextStep}
                      disabled={step === 1 && (!formData.name || !formData.email)}
                      className="btn btn-primary rounded-xl px-8 h-14 gap-2 shadow-lg shadow-primary/20 disabled:opacity-50"
                    >
                      Continue
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !file}
                      className="btn btn-primary rounded-xl px-10 h-14 gap-3 shadow-xl shadow-primary/30 disabled:opacity-50 min-w-[180px]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

