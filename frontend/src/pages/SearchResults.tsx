import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, ArrowRight, Package, Server, Briefcase, Microscope, Building } from 'lucide-react';
import SEO from '../components/SEO';
import { performSearch, type SearchItem } from '../data/searchData';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get('q') || '';
    setQuery(q);
    if (q.trim()) setResults(performSearch(q));
    else setResults([]);
  }, [location.search]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'product':  return <Package   className="w-5 h-5 text-[#05325d]" />;
      case 'service':  return <Server    className="w-5 h-5 text-[#05325d]" />;
      case 'industry': return <Building  className="w-5 h-5 text-[#05325d]" />;
      case 'research': return <Microscope className="w-5 h-5 text-[#05325d]" />;
      case 'career':   return <Briefcase className="w-5 h-5 text-[#05325d]" />;
      default:         return <Search    className="w-5 h-5 text-[#777]" />;
    }
  };

  return (
    <>
      <SEO
        title={`Search Results for "${query}"`}
        description={`Displaying search results for "${query}" across SIRPI Technologies products, services, and research.`}
      />

      <div className="bg-[#f5f0e8] min-h-screen">

        {/* ── HEADER ── */}
        <section className="bg-[#021124] pt-32 pb-16 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#6eb4f7] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Search Output</p>
            <h1 className="font-bold text-4xl sm:text-5xl text-white">
              Results for <span className="text-[#6eb4f7]">"{query}"</span>
            </h1>
            <p className="text-slate-400 text-sm mt-3">
              Found {results.length} match{results.length !== 1 && 'es'} across our platform.
            </p>
          </div>
        </section>

        {/* ── RESULTS ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#c8c0aa]">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="border-r border-b border-[#c8c0aa] [&:nth-child(3n)]:border-r-0 bg-white hover:bg-[#f5f0e8] transition-colors p-8 flex flex-col justify-between min-h-[220px] group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#05325d] border border-[#05325d]/30 px-3 py-0.5">
                        {item.category}
                      </span>
                      {getCategoryIcon(item.category)}
                    </div>
                    <h3 className="font-bold text-xl text-[#021124] mb-2 group-hover:text-[#05325d] transition-colors">{item.title}</h3>
                    <p className="text-[#555] text-sm leading-relaxed line-clamp-3">{item.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#c8c0aa]">
                    <Link
                      to={item.path}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#05325d] hover:gap-2.5 transition-all"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-24 text-center max-w-lg mx-auto">
              <div className="w-20 h-20 border border-[#c8c0aa] bg-white flex items-center justify-center mb-8">
                <Search className="w-10 h-10 text-[#c8c0aa]" />
              </div>
              <h2 className="font-bold text-2xl text-[#021124] mb-3">No results found</h2>
              <p className="text-[#555] text-sm leading-relaxed mb-8">
                We couldn't find any exact matches for "{query}". Try checking your spelling or using more general terms.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#05325d] hover:bg-[#03203f] text-white font-semibold text-sm transition-colors"
              >
                Browse All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </section>

      </div>
    </>
  );
};

export default SearchResults;
