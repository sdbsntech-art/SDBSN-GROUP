import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  supabase, 
  isSupabaseConfigured, 
  getFallbackSubmissions, 
  updateFallbackSubmissionStatus, 
  deleteFallbackSubmission 
} from '../../lib/supabase';
import { formatDate } from '../../lib/utils';
import type { ContactSubmission, RequestStatus } from '../../types';
import { 
  Inbox, 
  Clock, 
  CheckCircle, 
  Search, 
  Filter, 
  LogOut, 
  Trash2, 
  X, 
  ShieldAlert, 
  RefreshCw,
  Mail,
  Phone,
  AlertCircle
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const navigate = useNavigate();

  const loadSubmissions = async () => {
    setLoading(true);
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('contact_requests')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          setSubmissions(data);
        } else {
          // Fall back to local storage
          setSubmissions(getFallbackSubmissions());
        }
      } catch {
        setSubmissions(getFallbackSubmissions());
      }
    } else {
      setSubmissions(getFallbackSubmissions());
    }
    setLoading(false);
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  const handleLogout = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem('sdbsnx_admin_token');
    navigate('/admin/login');
  };

  const handleStatusChange = async (id: string, newStatus: RequestStatus) => {
    if (isSupabaseConfigured && supabase) {
      await supabase
        .from('contact_requests')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id);
    } else {
      updateFallbackSubmissionStatus(id, newStatus);
    }

    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
    );

    if (selectedSubmission && selectedSubmission.id === id) {
      setSelectedSubmission({ ...selectedSubmission, status: newStatus });
    }
  };

  const handleDelete = async (id: string) => {
    if (isSupabaseConfigured && supabase) {
      await supabase.from('contact_requests').delete().eq('id', id);
    } else {
      deleteFallbackSubmission(id);
    }

    setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
    setDeleteConfirmId(null);
    if (selectedSubmission && selectedSubmission.id === id) {
      setSelectedSubmission(null);
    }
  };

  // Metrics computation
  const totalSubmissions = submissions.length;
  const newSubmissionsCount = submissions.filter((s) => s.status === 'New').length;
  const inProgressCount = submissions.filter((s) => s.status === 'In Progress' || s.status === 'In Review').length;
  const completedCount = submissions.filter((s) => s.status === 'Completed').length;

  // Filtered submissions
  const filteredSubmissions = submissions.filter((sub) => {
    const matchesStatus = statusFilter === 'ALL' || sub.status === statusFilter;
    const matchesCategory = categoryFilter === 'ALL' || sub.service_category === categoryFilter;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      sub.full_name?.toLowerCase().includes(query) ||
      sub.email?.toLowerCase().includes(query) ||
      sub.reference_number?.toLowerCase().includes(query) ||
      sub.organization?.toLowerCase().includes(query) ||
      sub.subject?.toLowerCase().includes(query);

    return matchesStatus && matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status?: RequestStatus) => {
    switch (status) {
      case 'New':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-blue/20 text-brand-blue border border-brand-blue/30">Nouveau</span>;
      case 'In Review':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">En Examen</span>;
      case 'In Progress':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">En Cours</span>;
      case 'Completed':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Traité</span>;
      case 'Archived':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-500/20 text-slate-400 border border-slate-500/30">Archivé</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-500/20 text-slate-300">Inconnu</span>;
    }
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Top Bar with Admin Navigation & Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-brand-blue font-semibold block">
            SDBSNX INTERNAL SECURE CONSOLE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Gestion des Requêtes Clients
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#0A0F1D] hover:bg-white/10 border border-white/10 transition-colors"
          >
            Site Public
          </Link>
          <button
            onClick={loadSubmissions}
            className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white border border-white/10 hover:bg-white/5 transition-colors"
            title="Rafraîchir les données"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-red-300 hover:text-white bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 transition-colors flex items-center space-x-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium uppercase font-mono">Total Demandes</span>
            <Inbox className="w-4 h-4 text-brand-blue" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white font-mono">{totalSubmissions}</p>
          <span className="text-[11px] text-slate-400">Toutes catégories confondues</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#0A0F1D] border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-brand-blue">
            <span className="text-xs font-medium uppercase font-mono">Non Traitées</span>
            <Clock className="w-4 h-4 text-brand-blue" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-brand-blue font-mono">{newSubmissionsCount}</p>
          <span className="text-[11px] text-slate-400">Nouvelles requêtes à qualifier</span>
        </div>

        <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-purple-400">
            <span className="text-xs font-medium uppercase font-mono">En Instruction</span>
            <AlertCircle className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white font-mono">{inProgressCount}</p>
          <span className="text-[11px] text-slate-400">En cours d&apos;analyse ou de cadrage</span>
        </div>

        <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-emerald-400">
            <span className="text-xs font-medium uppercase font-mono">Clôturées</span>
            <CheckCircle className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white font-mono">{completedCount}</p>
          <span className="text-[11px] text-slate-400">Traitées avec réponse client</span>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher nom, e-mail, référence..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-brand-blue"
          />
        </div>

        {/* Filter dropdowns */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <Filter className="w-3.5 h-3.5 text-brand-blue" />
            <span>Statut :</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-[#0A0F1D] border border-white/10 text-white text-xs focus:outline-none"
            >
              <option value="ALL">Tous les statuts</option>
              <option value="New">New (Nouveau)</option>
              <option value="In Review">In Review</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Archived">Archived</option>
            </select>
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <span>Pôle :</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-[#0A0F1D] border border-white/10 text-white text-xs focus:outline-none"
            >
              <option value="ALL">Tous les pôles</option>
              <option value="web_development">Web Development</option>
              <option value="mobile_development">Mobile App</option>
              <option value="legaltech">LegalTech</option>
              <option value="cybersecurity">Cybersécurité</option>
              <option value="security_audit">Audit Sécurité</option>
              <option value="digital_consulting">Conseil</option>
              <option value="partnership">Partenariat</option>
              <option value="other">Autre</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-white/5 text-slate-300 uppercase tracking-wider font-mono text-[11px] border-b border-white/10">
              <tr>
                <th className="p-4">Référence</th>
                <th className="p-4">Client / Organisation</th>
                <th className="p-4">Pôle & Objet</th>
                <th className="p-4">Date</th>
                <th className="p-4">Statut</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-400">
                    Chargement des dossiers sécurisés...
                  </td>
                </tr>
              ) : filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-400">
                    Aucune demande ne correspond aux critères de recherche.
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub) => (
                  <tr key={sub.id || sub.reference_number} className="hover:bg-white/[0.02] transition-colors">
                    
                    {/* Reference */}
                    <td className="p-4 font-mono font-bold text-brand-blue">
                      {sub.reference_number || 'SDB-TEMP'}
                    </td>

                    {/* Client */}
                    <td className="p-4 space-y-0.5">
                      <p className="font-semibold text-white">{sub.full_name}</p>
                      <p className="text-[11px] text-slate-400">{sub.email}</p>
                      {sub.organization && (
                        <span className="text-[10px] text-brand-blue block">
                          {sub.organization}
                        </span>
                      )}
                    </td>

                    {/* Service & Subject */}
                    <td className="p-4 space-y-0.5 max-w-xs">
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400 inline-block mb-1">
                        {sub.service_category}
                      </span>
                      <p className="font-medium text-slate-200 line-clamp-1">{sub.subject}</p>
                    </td>

                    {/* Date */}
                    <td className="p-4 text-slate-400 text-[11px]">
                      {sub.created_at ? formatDate(sub.created_at) : 'N/A'}
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      {getStatusBadge(sub.status)}
                    </td>

                    {/* Actions */}
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedSubmission(sub)}
                        className="px-2.5 py-1.5 rounded-lg bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue border border-brand-blue/30 transition-colors text-[11px] font-semibold"
                      >
                        Consulter
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(sub.id || null)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        title="Supprimer ce dossier"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="max-w-2xl w-full bg-[#0A0F1D] border border-brand-blue/40 rounded-3xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-brand-blue uppercase font-bold">
                  Dossier Réf. {selectedSubmission.reference_number}
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {selectedSubmission.subject}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Status Selector */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-semibold text-slate-300">Modifier le Statut du dossier :</span>
              <div className="flex flex-wrap gap-2">
                {(['New', 'In Review', 'In Progress', 'Completed', 'Archived'] as RequestStatus[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => selectedSubmission.id && handleStatusChange(selectedSubmission.id, st)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all border ${
                      selectedSubmission.status === st
                        ? 'bg-brand-blue text-white border-brand-blue'
                        : 'bg-white/5 text-slate-400 hover:text-white border-white/10'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Coordinates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-slate-500 uppercase font-mono block text-[10px]">Client</span>
                <p className="font-semibold text-white text-sm">{selectedSubmission.full_name}</p>
                <p className="text-slate-300 flex items-center">
                  <Mail className="w-3 h-3 mr-1 text-brand-blue" />
                  {selectedSubmission.email}
                </p>
                {selectedSubmission.phone && (
                  <p className="text-slate-300 flex items-center">
                    <Phone className="w-3 h-3 mr-1 text-brand-blue" />
                    {selectedSubmission.phone}
                  </p>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-slate-500 uppercase font-mono block text-[10px]">Organisation & Cadrage</span>
                <p className="font-semibold text-white">
                  {selectedSubmission.organization || 'Non spécifiée'}
                </p>
                <p className="text-slate-300">
                  <strong>Pôle :</strong> {selectedSubmission.service_category}
                </p>
                <p className="text-slate-300">
                  <strong>Budget :</strong> {selectedSubmission.budget || 'Non précisé'}
                </p>
                <p className="text-slate-300">
                  <strong>Délai :</strong> {selectedSubmission.timeline || 'Non précisé'}
                </p>
              </div>
            </div>

            {/* Message Description */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                Description du besoin soumis :
              </h4>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed">
                {selectedSubmission.description}
              </div>
            </div>

            {/* Timestamp & Consent */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/10">
              <span>Date : {selectedSubmission.created_at ? formatDate(selectedSubmission.created_at) : 'N/A'}</span>
              <span>Consentement RGPD/CDP : Accordé (Vérifié)</span>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedSubmission(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white glass-panel"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="max-w-sm w-full bg-[#0A0F1D] border border-red-500/30 rounded-2xl p-6 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Confirmer la suppression</h4>
            <p className="text-xs text-slate-300">
              Cette action est irréversible et supprimera définitivement le dossier de la base de données.
            </p>
            <div className="flex items-center justify-center space-x-3 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white glass-panel"
              >
                Annuler
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-red-600 hover:bg-red-700 shadow-lg"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
