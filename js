const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function(e){
    // منع التحميل الفوري لإظهار تأثير "جاري التحميل"
    e.preventDefault();
    
    const originalContent = downloadBtn.innerHTML;
    
    // تغيير شكل الزر لإظهار الـ Spinner
    downloadBtn.innerHTML = '<span class="spinner"></span> <span class="btn-text">Downloading...</span>';
    downloadBtn.style.pointerEvents = "none";
    downloadBtn.style.opacity = "0.8";

    setTimeout(function(){
        // بدء التحميل الفعلي
        window.location.href = "Ibrahim_Ahmed_Medical_Data_Analyst_CV.pdf";
        
        // إعادة الزر لشكلة الأصلي بعد التحميل
        downloadBtn.innerHTML = originalContent;
        downloadBtn.style.pointerEvents = "auto";
        downloadBtn.style.opacity = "1";
    }, 1200);
});
