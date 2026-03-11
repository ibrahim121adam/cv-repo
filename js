const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function(e){
    e.preventDefault();
    const originalContent = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<span class="spinner"></span> <span class="btn-text">Downloading...</span>';
    downloadBtn.classList.add("loading");

    setTimeout(function(){
        window.location.href = "Ibrahim_Ahmed_Medical_Data_Analyst_CV.pdf";
        downloadBtn.innerHTML = originalContent;
        downloadBtn.classList.remove("loading");
    },1200);
});
