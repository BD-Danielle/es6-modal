/**
 * Modern Modal 2.0.0
 * 特色：全域事件委派、CSS 類別驅動、現代邊界防滾動
 */
class Modal {
  static version = "2.0.0";

  /**
   * 一鍵啟動全域事件委派 (Zero Config)
   * 頁面只需呼叫一次 Modal.init()，即可自動接管所有 data-modal 標籤
   */
  static init() {
    // 1. 全域點擊事件委派 (開啟/關閉)
    document.addEventListener('click', (e) => {
      // 處理「開啟/觸發按鈕」 (利用 closest 防範點擊到按鈕內部的 icon/span)
      const triggerBtn = e.target.closest('[data-modal-target]');
      if (triggerBtn) {
        e.preventDefault();
        const targetId = triggerBtn.dataset.modalTarget;
        Modal.toggle(targetId);
        return;
      }

      // 處理「關閉按鈕」或「點擊遮罩背景」
      const closeBtn = e.target.closest('[data-modal-close]');
      const isOverlay = e.target.classList.contains('modal-overlay');

      if (closeBtn || isOverlay) {
        const modalElement = e.target.closest('.modal-overlay');
        if (modalElement) {
          Modal.hide(modalElement);
        }
      }
    });

    // 2. 全域防背景滾動防護 (取代昂貴的 Body 高度計算)
    document.addEventListener('touchmove', (e) => {
      const activeModal = document.querySelector('.modal-overlay.active');
      // 如果 Modal 正在開啟，且觸控點不是在可滾動內容區域內，強制攔截滾動
      if (activeModal && !e.target.closest('.modal-body')) {
        e.preventDefault();
      }
    }, { passive: false });

    document.addEventListener('wheel', (e) => {
      const activeModal = document.querySelector('.modal-overlay.active');
      // 如果 Modal 正在開啟，且觸控點不是在可滾動內容區域內，強制攔截滾動
      if (activeModal && !e.target.closest('.modal-body')) {
        e.preventDefault();
      }
    }, { passive: false });

    // 3. 🌟 新增：全域 Esc 鍵盤無障礙事件監聽 (a11y)
    document.addEventListener('keydown', (e) => {
      // 檢查是否按下 Escape 鍵
      if (e.key === 'Escape' || e.key === 'Esc') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
          Modal.hide(activeModal);
        }
      }
    });
  }

  // 顯示 Modal
  static show(target) {
    const modal = typeof target === 'string' ? document.querySelector(target) : target;
    if (modal) {
      modal.classList.add('active');
    }
  }

  // 隱藏 Modal
  static hide(target) {
    const modal = typeof target === 'string' ? document.querySelector(target) : target;
    if (modal) {
      modal.classList.remove('active');
    }
  }

  // 切換 Modal 狀態
  static toggle(target) {
    const modal = typeof target === 'string' ? document.querySelector(target) : target;
    if (modal) {
      modal.classList.toggle('active');
    }
  }
}

// 掛載並自動初始化
window.Modal = Modal;