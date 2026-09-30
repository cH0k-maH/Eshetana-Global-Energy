"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { 
  FileText, 
  Send, 
  CheckCircle, 
  UploadCloud, 
  X, 
  Calendar, 
  Building, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase,
  ArrowRight,
  RotateCcw
} from "lucide-react";
import { contactData } from "../data/contact";

const ALL_SERVICES = [
  "Rope Access",
  "Asset Integrity",
  "NDT Inspection",
  "Oil & Gas",
  "Maritime",
  "Training & Certification",
  "EPC",
  "Lifting Inspection",
  "ROV Inspections",
  "Equipment Procurement & Supply",
  "Energy",
  "Consulting",
];

const INDUSTRIES = [
  "Oil & Gas (Upstream / Midstream / Downstream)",
  "Energy & Power Generation",
  "Maritime & Shipping Logistics",
  "Industrial Manufacturing & Petrochemicals",
  "Engineering & Construction (EPC)",
  "Infrastructure & Public Utilities",
  "Other",
];

const DURATIONS = [
  "Less than 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "12+ months (Long-term frame agreement)",
];

const ENVIRONMENTS = [
  "Offshore (Platform / FPSO / Deepwater)",
  "Onshore (Terminal / Wellsite / Flowstation)",
  "Marine & Harbor (Vessel / Quay / Jetty)",
  "Industrial Plant / Refinery",
  "Remote Exploration Site",
  "Other / Multi-environment",
];

const BUDGET_RANGES = [
  "Under ₦5 Million",
  "₦5M – ₦20 Million",
  "₦20M – ₦50 Million",
  "₦50M – ₦100 Million",
  "₦100 Million+",
  "To be discussed / Scope dependent",
];

export default function QuoteForm() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    companyName: "",
    industry: "Oil & Gas (Upstream / Midstream / Downstream)",
    email: "",
    phone: "",
    country: "Nigeria",
    officeDestination: contactData.offices[0].city,
    projectLocation: "",
    startDate: "",
    duration: "1 – 3 months",
    workEnvironment: "Offshore (Platform / FPSO / Deepwater)",
    budgetRange: "To be discussed / Scope dependent",
    projectDescription: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setAttachedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setReferenceId(`ESH-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setReferenceId("");
    setActiveStep(1);
    setSelectedServices([]);
    setAttachedFiles([]);
    setFormData({
      fullName: "",
      jobTitle: "",
      companyName: "",
      industry: "Oil & Gas (Upstream / Midstream / Downstream)",
      email: "",
      phone: "",
      country: "Nigeria",
      officeDestination: contactData.offices[0].city,
      projectLocation: "",
      startDate: "",
      duration: "1 – 3 months",
      workEnvironment: "Offshore (Platform / FPSO / Deepwater)",
      budgetRange: "To be discussed / Scope dependent",
      projectDescription: "",
    });
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-[#F4F6F8] relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B2E59]/10 text-[#0B2E59] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Project Estimation & RFQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight font-heading mb-4">
            Request a Technical Quotation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Specify your project requirements, scope of work, and operational conditions. 
            Our engineering team will review your specifications and formulate a structured commercial proposal.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          
          {isSubmitted ? (
            /* Submission Success Screen */
            <div className="p-10 sm:p-16 text-center max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2E59] mb-3">
                Request Received Successfully
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Thank you for contacting <strong>Eshetana Global Energy Services Limited</strong>. 
                Your quotation request has been logged. Our commercial engineering desk will examine your requirements 
                and get back to you shortly.
              </p>
              <div className="p-4 rounded-lg bg-[#F4F6F8] text-xs text-slate-500 mb-8 text-left space-y-1">
                <div><strong>Submission Reference:</strong> {referenceId || "ESH-CONFIRMED"}</div>
                <div><strong>Designated Desk:</strong> {formData.officeDestination}</div>
                <div><strong>Corporate Email:</strong> {formData.email}</div>
              </div>
              <button
                onClick={resetForm}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0B2E59] hover:bg-[#123A68] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Submit Another Request</span>
              </button>
            </div>
          ) : (
            <div>
              {/* Step Navigation Progress */}
              <div className="grid grid-cols-3 border-b border-slate-200 bg-[#0B2E59]/5 text-center">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className={`py-4 px-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer border-b-2 flex items-center justify-center gap-2 ${
                    activeStep === 1
                      ? "border-[#F26A21] text-[#0B2E59] bg-white"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-[#0B2E59] text-white text-[10px] flex items-center justify-center">1</span>
                  <span className="hidden sm:inline">Contact Information</span>
                  <span className="sm:hidden">Contact</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className={`py-4 px-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer border-b-2 flex items-center justify-center gap-2 ${
                    activeStep === 2
                      ? "border-[#F26A21] text-[#0B2E59] bg-white"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-[#0B2E59] text-white text-[10px] flex items-center justify-center">2</span>
                  <span className="hidden sm:inline">Services Required</span>
                  <span className="sm:hidden">Services</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStep(3)}
                  className={`py-4 px-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer border-b-2 flex items-center justify-center gap-2 ${
                    activeStep === 3
                      ? "border-[#F26A21] text-[#0B2E59] bg-white"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-[#0B2E59] text-white text-[10px] flex items-center justify-center">3</span>
                  <span className="hidden sm:inline">Project Details & RFQ</span>
                  <span className="sm:hidden">Project Specs</span>
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-10">
                
                {/* STEP 1: CONTACT INFORMATION */}
                {activeStep === 1 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-100 pb-3">
                      <h3 className="text-lg font-bold text-[#0B2E59]">Step 1: Contact Information</h3>
                      <p className="text-xs text-slate-500">Please provide your corporate and contact details.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Full Name <span className="text-[#F26A21]">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="text"
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="e.g. Engr. Babatunde Okafor"
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Job Title <span className="text-[#F26A21]">*</span>
                        </label>
                        <div className="relative">
                          <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="text"
                            required
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            placeholder="e.g. Asset Integrity Lead / Procurement Manager"
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Company / Organization Name <span className="text-[#F26A21]">*</span>
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="text"
                            required
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="e.g. Atlantic Petroleum Ltd."
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Industry <span className="text-[#F26A21]">*</span>
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21] bg-white"
                        >
                          {INDUSTRIES.map((ind) => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Corporate Email Address <span className="text-[#F26A21]">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. b.okafor@company.com"
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+234 803 000 0000"
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Country <span className="text-[#F26A21]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="Nigeria"
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Designated Office / Operations Desk
                        </label>
                        <select
                          name="officeDestination"
                          value={formData.officeDestination}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21] bg-white"
                        >
                          {contactData.offices.map((off) => (
                            <option key={off.city} value={off.city}>
                              {off.city} ({off.type})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="px-6 py-3 rounded bg-[#0B2E59] hover:bg-[#123A68] text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>Next: Select Services</span>
                        <ArrowRight className="w-4 h-4 text-[#F26A21]" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: SERVICES REQUIRED */}
                {activeStep === 2 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-100 pb-3">
                      <h3 className="text-lg font-bold text-[#0B2E59]">Step 2: Services Required</h3>
                      <p className="text-xs text-slate-500">Select all technical services and solutions that apply to your scope.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {ALL_SERVICES.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <div
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`p-3.5 rounded-lg border text-xs font-medium cursor-pointer transition-all duration-200 flex items-center justify-between ${
                              isSelected
                                ? "bg-[#0B2E59] text-white border-[#0B2E59] shadow-sm"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400"
                            }`}
                          >
                            <span>{service}</span>
                            <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                              isSelected ? "bg-[#F26A21] text-white" : "border border-slate-300"
                            }`}>
                              {isSelected ? "✓" : ""}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {selectedServices.length === 0 && (
                      <p className="text-xs text-amber-600 italic">
                        Tip: Select at least one capability to help us route your request to the right department.
                      </p>
                    )}

                    <div className="flex justify-between pt-6 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="px-5 py-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStep(3)}
                        className="px-6 py-3 rounded bg-[#0B2E59] hover:bg-[#123A68] text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>Next: Project Specs & RFQ</span>
                        <ArrowRight className="w-4 h-4 text-[#F26A21]" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: PROJECT SPECS & FILE ATTACHMENTS */}
                {activeStep === 3 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-100 pb-3">
                      <h3 className="text-lg font-bold text-[#0B2E59]">Step 3: Project Details & Technical Specifications</h3>
                      <p className="text-xs text-slate-500">Provide field parameters, environment, and attach documentation.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Project Location / Field Name <span className="text-[#F26A21]">*</span>
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="text"
                            required
                            name="projectLocation"
                            value={formData.projectLocation}
                            onChange={handleInputChange}
                            placeholder="e.g. Escravos Offshore / Port Harcourt Terminal"
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Expected Start Date <span className="text-[#F26A21]">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="date"
                            required
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Estimated Project Duration
                        </label>
                        <select
                          name="duration"
                          value={formData.duration}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21] bg-white"
                        >
                          {DURATIONS.map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Work Environment
                        </label>
                        <select
                          name="workEnvironment"
                          value={formData.workEnvironment}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21] bg-white"
                        >
                          {ENVIRONMENTS.map((env) => (
                            <option key={env} value={env}>{env}</option>
                          ))}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Estimated Budget Range <span className="text-[#F26A21]">*</span>
                        </label>
                        <select
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21] bg-white"
                        >
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Project Description & Scope of Work
                        </label>
                        <textarea
                          rows={4}
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleInputChange}
                          placeholder="Please provide details about your project, scope of work, technical requirements, number of personnel or specialized tools needed, and any constraints..."
                          className="w-full p-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                        ></textarea>
                      </div>

                      {/* File Upload Zone */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Attach Project Documents (Optional)
                        </label>
                        <p className="text-[11px] text-slate-500 mb-2">
                          Upload Scope of Work (SOW), RFQ document, Bill of Quantities (BOQ), or technical drawings (PDF, DOCX, XLSX, JPG, PNG). Max 25MB.
                        </p>

                        <div className="border-2 border-dashed border-slate-300 hover:border-[#F26A21] rounded-xl p-6 text-center bg-slate-50 hover:bg-white transition-all cursor-pointer relative">
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                            onChange={handleFileUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <UploadCloud className="w-8 h-8 text-[#0B2E59] mx-auto mb-2" />
                          <p className="text-xs font-bold text-slate-700">
                            Click to upload or drag and drop files here
                          </p>
                          <span className="text-[10px] text-slate-400">Supported formats: PDF, Word, Excel, Images</span>
                        </div>

                        {/* Uploaded files list */}
                        {attachedFiles.length > 0 && (
                          <div className="mt-3 space-y-2">
                            {attachedFiles.map((file, i) => (
                              <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-100 text-xs text-slate-700">
                                <div className="flex items-center gap-2 truncate">
                                  <FileText className="w-3.5 h-3.5 text-[#F26A21]" />
                                  <span className="truncate">{file.name}</span>
                                  <span className="text-[10px] text-slate-400">({(file.size / 1024).toFixed(0)} KB)</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(i)}
                                  className="text-slate-400 hover:text-red-500 p-1"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between pt-6 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="px-5 py-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="px-8 py-3.5 rounded bg-[#F26A21] hover:bg-[#D85611] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Request</span>
                      </button>
                    </div>
                  </div>
                )}

              </form>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
