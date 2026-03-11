const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function(e){
    e.preventDefault();
    const originalContent = downloadBtn.innerHTML;

    // تغيير النص إلى تحميل
    downloadBtn.innerHTML = '<span class="spinner"></span> <span class="btn-text">Downloading...</span>';
    downloadBtn.classList.add("loading");

    // بدء تحميل الملف
    setTimeout(function(){
        window.location.href = "Ibrahim_Ahmed_Medical_Data_Analyst_CV.pdf";

        // إعادة الزر لحالته الأصلية
        downloadBtn.innerHTML = originalContent;
        downloadBtn.classList.remove("loading");
    },1200);
});
