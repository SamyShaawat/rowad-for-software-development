'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ClientsConstants, CompanyConstants } from '@constants';
import type { Client } from '@types';
import { cn } from '@lib/utils';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.02 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.15, ease: 'easeOut' } },
};

const ITEMS_PER_PAGE = 6;

export function ClientsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter clients based on search only
  const filteredClients = useMemo(() => {
    return ClientsConstants.filter((client) => {
      const matchesSearch = 
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesSearch;
    });
  }, [searchQuery]);

  // Paginate filtered clients
  const totalPages = Math.ceil(filteredClients.length / ITEMS_PER_PAGE);
  const paginatedClients = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredClients.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredClients, currentPage]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="relative section-padding bg-white dark:bg-[#0d0d1a] overflow-hidden min-h-screen transition-colors">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-orange-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative container-custom mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="section-badge mb-4">Our Network</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Trusted by Industry <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl leading-relaxed">
            We are proud to have partnered with these outstanding organizations, delivering tailored digital solutions that drive their success and future growth.
          </p>
        </motion.div>

        {/* Filter Controls (Search Only) */}
        <div className="max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-slate-500 group-focus-within:text-orange-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search clients by name, industry or description..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] rounded-2xl text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 focus:bg-white/[0.04] transition-all shadow-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Clients Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {paginatedClients.length > 0 ? (
              <motion.div
                key={`grid-\${currentPage}-\${searchQuery}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -10, transition: { duration: 0.1 } }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
              >
                {paginatedClients.map((client) => (
                  <motion.div
                    key={client.id}
                    variants={cardVariants}
                    whileHover={{ y: -6 }}
                    className="group relative flex flex-col p-6 sm:p-8 rounded-[2rem] glass-card border border-slate-200 dark:border-white/[0.06] hover:border-orange-500/30 transition-all duration-500 bg-gradient-to-br from-white to-slate-50 dark:from-[#0d0d1a] dark:to-white/[0.01]"
                  >
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-colors duration-500 pointer-events-none" />

                    {/* Logo container */}
                    <div className="relative flex items-center justify-center w-32 h-32 mx-auto mb-8 p-4 rounded-full bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/[0.05] group-hover:border-orange-500/20 transition-all bg-white shadow-md overflow-hidden">
                      <div className="relative w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 rounded-full overflow-hidden">
                        <Image priority
                          src={client.logo}
                          alt={client.name}
                          fill
                          className="object-contain drop-shadow-md rounded-full"
                          sizes="128px"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20">
                          {client.category}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                        {client.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                        {client.description}
                      </p>

                      {/* Optional link out */}
                      {client.website && (
                        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                          <a
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-orange-500 transition-colors duration-300"
                          >
                            Visit Website
                            <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-64 text-center"
              >
                <MagnifyingGlassIcon className="h-12 w-12 text-slate-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">No clients found</h3>
                <p className="text-slate-500">Try adjusting your search criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mt-16"
          >
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white disabled:opacity-30 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={cn(
                    "w-10 h-10 rounded-xl font-medium text-sm transition-all duration-300",
                    currentPage === i + 1
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                      : 'bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-orange-500'
                  )}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white disabled:opacity-30 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
