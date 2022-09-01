function BPRecord(x, y) {
    this.systolic = x;
    this.diastolic = y;
    this.generateReport = function () {
        let diagnosis;
        if (this.systolic > 140 || this.diastolic > 90) {
            diagnosis = "High";
        } else if (this.systolic < 90 || this.diastolic < 60){
            diagnosis = "low";
        } else {
            diagnosis = "Normal";
        }

        console.log("BP Value: " + this.systolic +" / "+ this.diastolic)
        console.log("Diagnosis: "+ diagnosis);
    }
}
let report1 = new BPRecord(145, 85);
report1.generateReport();