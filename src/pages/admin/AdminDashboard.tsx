import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  getLocalSubmissions, 
  updateLocalSubmissionStatus, 
  deleteLocalSubmission 
} from '../../lib/web3forms';
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
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  
  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  const navigate = useNavigate();

  const loadSubmissions = () => {
    setLoading(true);
    try {
      const data = getLocalSubmissions();
      setSubmissions(data);
    } catch {
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('sdbsnx_admin_token');
    navigate('/admin/login');
  };

  const handleStatusChange = (idOrRef: string, newStatus: RequestStatus) => {
    updateLocalSubmissionStatus(idOrRef, newStatus);
    setSubmissions((prev) =>
      prev.map((s) => (s.id === idOrRef || s.reference_number === idOrRef ? { ...s, status: newStatus } : s))
    );
    if (selectedSubmission && (selectedSubmission.id === idOrRef || selectedSubmission.reference_number === idOrRef)) {
      setSelectedSubmission({ ...selectedSubmission, status: newStatus });
    }
  };

  const handleDelete = (idOrRef: string) => {
    deleteLocalSubmission(idOrRef);
    setSubmissions((prev) => prev.filter((s) => s.id !== idOrRef && s.reference_number !== idOrRef));
    if (selectedSubmission && (selectedSubmission.id === idOrRef || selectedSubmission.reference_number === idOrRef)) {
      setSelectedSubmission(null);
    }
    setDeleteConfirmId(null);
  };

  // Metrics
  const totalSubmissions = submissions.length;
  const newSubmissionsCount = submissions.filter((s) => s.status === 'New').length;
  const inProgressCount = submissions.filter((s) => s.status === 'In Progress' || s.status === 'In Review').length;
  const completedCount = submissions.filter((s) => s.status === 'Completed').length;

  // Filtered dataset
  const filteredSubmissions = submissions.filter((item) => {
    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    const matchesCategory = categoryFilter === 'ALL' || item.service_category === categoryFilter;
    const matchesSearch = 
      item.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.reference_number && item.reference_number.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.organization && item.organization.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesStatus && matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status?: RequestStatus) => {
    switch (status) {
      case 'New':
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-white">Nouveau</span>;
      case 'In Review':
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-300">En Examen</span>;
      case 'In Progress':
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-300">En Cours</span>;
      case 'Completed':
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-300">Traité</span>;
      case 'Archived':
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-300">Archivé</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500">Inconnu</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1B3D] text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Top Bar with Admin Navigation & Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
            SDBSNX INTERNAL SECURE CONSOLE (WEB3FORMS SYNC)
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Gestion des Requêtes Clients
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white/80 hover:text-emerald-400 bg-white/5 hover:bg-white/10 border border-white/10 shadow-sm transition-colors"
          >
            Site Public
          </Link>
          <button
            onClick={loadSubmissions}
            className="p-2.5 rounded-xl bg-white/5 text-white/80 hover:text-emerald-400 border border-white/10 hover:bg-white/10 shadow-sm transition-colors"
            title="Rafraîchir les données"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-red-300 hover:text-red-100 bg-red-950/40 hover:bg-red-900/60 border border-red-800 transition-colors flex items-center space-x-1.5 shadow-sm"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-white/60">
            <span className="text-xs font-semibold uppercase font-mono">Total Demandes</span>
            <Inbox className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white font-mono">{totalSubmissions}</p>
          <span className="text-[11px] text-white/50">Transmises par Web3Forms</span>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-emerald-500/30 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-emerald-400">
            <span className="text-xs font-bold uppercase font-mono">Non Traitées</span>
            <Clock className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">{newSubmissionsCount}</p>
          <span className="text-[11px] text-white/50 font-medium">Nouvelles requêtes à qualifier</span>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-blue-400">
            <span className="text-xs font-semibold uppercase font-mono">En Instruction</span>
            <AlertCircle className="w-4 h-4 text-blue-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white font-mono">{inProgressCount}</p>
          <span className="text-[11px] text-white/50">En cours d&apos;analyse ou de cadrage</span>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-emerald-400">
            <span className="text-xs font-semibold uppercase font-mono">Clôturées</span>
            <CheckCircle className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white font-mono">{completedCount}</p>
          <span className="text-[11px] text-white/50">Traitées avec réponse client</span>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher nom, e-mail, référence..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* Filter dropdowns */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center space-x-2 text-xs text-white font-medium">
            <Filter className="w-3.5 h-3.5 text-emerald-400" />
            <span>Statut :</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none"
            >
              <option value="ALL">Tous les statuts</option>
              <option value="New">New (Nouveau)</option>
              <option value="In Review">In Review</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Archived">Archived</option>
            </select>
          </div>

          <div className="flex items-center space-x-2 text-xs text-white font-medium">
            <span>Pôle :</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none"
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
      <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-white/5 text-white/60 uppercase tracking-wider font-mono text-[11px] border-b border-white/10">
              <tr>
                <th className="p-4 font-bold">Référence</th>
                <th className="p-4 font-bold">Client / Organisation</th>
                <th className="p-4 font-bold">Pôle &amp; Objet</th>
                <th className="p-4 font-bold">Date</th>
                <th className="p-4 font-bold">Statut</th>
                <th className="p-4 text-right font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-white/50">
                    Chargement des dossiers sécurisés...
                  </td>
                </tr>
              ) : filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-white/50">
                    Aucune demande enregistrée pour le moment.
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub) => (
                  <tr key={sub.id || sub.reference_number} className="hover:bg-white/5 transition-colors">
                    
                    {/* Reference */}
                    <td className="p-4 font-mono font-bold text-emerald-400">
                      {sub.reference_number || 'SDB-TEMP'}
                    </td>

                    {/* Client */}
                    <td className="p-4 space-y-0.5">
                      <p className="font-bold text-white">{sub.full_name}</p>
                      <p className="text-[11px] text-white/50">{sub.email}</p>
                      {sub.organization && (
                        <span className="text-[10px] text-emerald-400 font-semibold block">
                          {sub.organization}
                        </span>
                      )}
                    </td>

                    {/* Service & Subject */}
                    <td className="p-4 space-y-0.5 max-w-xs">
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/5 text-emerald-400 inline-block mb-1 font-semibold border border-white/10">
                        {sub.service_category}
                      </span>
                      <p className="font-medium text-white line-clamp-1">{sub.subject}</p>
                    </td>

                    {/* Date */}
                    <td className="p-4 text-white/50 text-[11px]">
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
                        className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-emerald-400 border border-white/10 transition-colors text-[11px] font-bold"
                      >
                        Consulter
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(sub.id || sub.reference_number || null)}
                        className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-red-950/40 transition-colors"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="max-w-2xl w-full bg-[#0F2347] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold">
                  Dossier Réf. {selectedSubmission.reference_number}
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {selectedSubmission.subject}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Status Selector */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-semibold text-white">Modifier le Statut du dossier :</span>
              <div className="flex flex-wrap gap-2">
                {(['New', 'In Review', 'In Progress', 'Completed', 'Archived'] as RequestStatus[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => handleStatusChange(selectedSubmission.id || selectedSubmission.reference_number || '', st)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all border ${
                      selectedSubmission.status === st
                        ? 'bg-emerald-500 text-white font-bold border-emerald-500 shadow-sm'
                        : 'bg-white/5 text-white hover:text-emerald-400 border-white/10'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Coordinates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-white/50 uppercase font-mono block text-[10px] font-bold">Client</span>
                <p className="font-bold text-white text-sm">{selectedSubmission.full_name}</p>
                <p className="text-white/80 flex items-center">
                  <Mail className="w-3 h-3 mr-1 text-emerald-400" />
                  {selectedSubmission.email}
                </p>
                {selectedSubmission.phone && (
                  <p className="text-white/80 flex items-center">
                    <Phone className="w-3 h-3 mr-1 text-emerald-400" />
                    {selectedSubmission.phone}
                  </p>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-white/50 uppercase font-mono block text-[10px] font-bold">Organisation &amp; Cadrage</span>
                <p className="font-bold text-white">
                  {selectedSubmission.organization || 'Non spécifiée'}
                </p>
                <p className="text-white/80">
                  <strong>Pôle :</strong> {selectedSubmission.service_category}
                </p>
                <p className="text-white/80">
                  <strong>Budget :</strong> {selectedSubmission.budget || 'Non précisé'}
                </p>
                <p className="text-white/80">
                  <strong>Délai :</strong> {selectedSubmission.timeline || 'Non précisé'}
                </p>
              </div>
            </div>

            {/* Message Description */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-bold">
                Description du besoin soumis :
              </h4>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90 whitespace-pre-wrap leading-relaxed">
                {selectedSubmission.description}
              </div>
            </div>

            {/* Timestamp & Consent */}
            <div className="flex items-center justify-between text-[11px] text-white/40 pt-2 border-t border-white/10">
              <span>Date : {selectedSubmission.created_at ? formatDate(selectedSubmission.created_at) : 'N/A'}</span>
              <span>Transmission : Web3Forms API chiffrée</span>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedSubmission(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="max-w-sm w-full bg-[#0F2347] border border-red-800 rounded-2xl p-6 space-y-4 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-red-950/60 text-red-400 flex items-center justify-center mx-auto border border-red-800">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Confirmer la suppression</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Cette action supprimera ce dossier de votre liste locale.
            </p>
            <div className="flex items-center justify-center space-x-3 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-colors"
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
