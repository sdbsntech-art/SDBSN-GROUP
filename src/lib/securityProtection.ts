/**
 * Alkeb.lab Digital Platform — Client-side Security & Anti-Inspection Module
 * Disables context menu (right click), DevTools shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U),
 * image dragging, and warns unauthorized inspectors.
 */

let toastTimeout: ReturnType<typeof setTimeout> | null = null;

function showSecurityNotice(message = "Action restreinte : L'inspection et le clic droit sont désactivés pour des raisons de sécurité.") {
  const existingToast = document.getElementById('sdbsnx-security-toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.id = 'sdbsnx-security-toast';
  toast.style.position = 'fixed';
  toast.style.bottom = '24px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = '#0B1B3D';
  toast.style.color = '#FFFFFF';
  toast.style.padding = '12px 20px';
  toast.style.borderRadius = '12px';
  toast.style.border = '1px solid #10B981';
  toast.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.4)';
  toast.style.zIndex = '999999';
  toast.style.fontSize = '12px';
  toast.style.fontWeight = '600';
  toast.style.display = 'flex';
  toast.style.alignItems = 'center';
  toast.style.gap = '10px';
  toast.style.pointerEvents = 'none';
  toast.style.transition = 'all 0.3s ease';
  toast.style.fontFamily = 'system-ui, -apple-system, sans-serif';

  toast.innerHTML = `
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background-color:#10B981;"></span>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

export function initSecurityProtection(): () => void {
  // 1. Disable Right Click (Context Menu)
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    showSecurityNotice("Clic droit désactivé sur la plateforme Alkeb.lab.");
  };

  // 2. Disable DevTools Shortcuts (F12, Ctrl+Shift+I, etc.)
  const handleKeyDown = (e: KeyboardEvent) => {
    const isCtrlOrMeta = e.ctrlKey || e.metaKey;
    const isShift = e.shiftKey;
    const isAlt = e.altKey;

    // F12 key
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      showSecurityNotice("Touche F12 restreinte.");
      return false;
    }

    // Ctrl+Shift+I or Cmd+Option+I (Inspect)
    if ((isCtrlOrMeta && isShift && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) ||
        (e.metaKey && isAlt && (e.key === 'I' || e.key === 'i' || e.keyCode === 73))) {
      e.preventDefault();
      e.stopPropagation();
      showSecurityNotice("Outils d'inspection désactivés.");
      return false;
    }

    // Ctrl+Shift+J or Cmd+Option+J (Console)
    if ((isCtrlOrMeta && isShift && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) ||
        (e.metaKey && isAlt && (e.key === 'J' || e.key === 'j' || e.keyCode === 74))) {
      e.preventDefault();
      e.stopPropagation();
      showSecurityNotice("Console développeur restreinte.");
      return false;
    }

    // Ctrl+Shift+C (Inspect element)
    if (isCtrlOrMeta && isShift && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
      e.preventDefault();
      e.stopPropagation();
      showSecurityNotice("Inspecteur d'élément désactivé.");
      return false;
    }

    // Ctrl+U (View Page Source)
    if (isCtrlOrMeta && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
      e.preventDefault();
      e.stopPropagation();
      showSecurityNotice("Affichage du code source restreint.");
      return false;
    }

    // Ctrl+S (Save Web Page)
    if (isCtrlOrMeta && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) {
      e.preventDefault();
      e.stopPropagation();
      showSecurityNotice("Enregistrement de la page désactivé.");
      return false;
    }
  };

  // 3. Disable image drag-and-drop
  const handleDragStart = (e: DragEvent) => {
    if ((e.target as HTMLElement)?.tagName === 'IMG') {
      e.preventDefault();
    }
  };

  // Attach event listeners
  document.addEventListener('contextmenu', handleContextMenu);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('dragstart', handleDragStart);

  // Console Warning Banner
  try {
    console.clear();
    console.log(
      '%cAlkeb.lab SECURITY — ACCÈS PROTÉGÉ',
      'color: #10B981; font-size: 20px; font-weight: bold; background: #0B1B3D; padding: 6px 14px; border-radius: 6px;'
    );
    console.log(
      '%cLa plateforme Alkeb.lab applique une politique stricte de confidentialité et de protection des données.',
      'color: #64748B; font-size: 12px; margin-top: 4px;'
    );
  } catch {
    // Silent fail if console is suppressed
  }

  // Cleanup function
  return () => {
    document.removeEventListener('contextmenu', handleContextMenu);
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('dragstart', handleDragStart);
  };
}

