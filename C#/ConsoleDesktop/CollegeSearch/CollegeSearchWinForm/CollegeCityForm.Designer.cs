
namespace CollegeSearchWinForm
{
    partial class CollegeCityForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.TxtBoxCollege = new System.Windows.Forms.TextBox();
            this.TxtBoxCity = new System.Windows.Forms.TextBox();
            this.LstBoxColleges = new System.Windows.Forms.ListBox();
            this.label3 = new System.Windows.Forms.Label();
            this.BtnSave = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(48, 55);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(85, 25);
            this.label1.TabIndex = 0;
            this.label1.Text = "College";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(48, 123);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(49, 25);
            this.label2.TabIndex = 1;
            this.label2.Text = "City";
            // 
            // TxtBoxCollege
            // 
            this.TxtBoxCollege.Location = new System.Drawing.Point(149, 59);
            this.TxtBoxCollege.Name = "TxtBoxCollege";
            this.TxtBoxCollege.Size = new System.Drawing.Size(244, 31);
            this.TxtBoxCollege.TabIndex = 0;
            // 
            // TxtBoxCity
            // 
            this.TxtBoxCity.Location = new System.Drawing.Point(149, 123);
            this.TxtBoxCity.Name = "TxtBoxCity";
            this.TxtBoxCity.Size = new System.Drawing.Size(244, 31);
            this.TxtBoxCity.TabIndex = 1;
            // 
            // LstBoxColleges
            // 
            this.LstBoxColleges.FormattingEnabled = true;
            this.LstBoxColleges.ItemHeight = 25;
            this.LstBoxColleges.Location = new System.Drawing.Point(513, 59);
            this.LstBoxColleges.Name = "LstBoxColleges";
            this.LstBoxColleges.Size = new System.Drawing.Size(462, 329);
            this.LstBoxColleges.TabIndex = 3;
            this.LstBoxColleges.TabStop = false;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(694, 31);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(94, 25);
            this.label3.TabIndex = 4;
            this.label3.Text = "Preview:";
            // 
            // BtnSave
            // 
            this.BtnSave.Location = new System.Drawing.Point(149, 220);
            this.BtnSave.Name = "BtnSave";
            this.BtnSave.Size = new System.Drawing.Size(244, 57);
            this.BtnSave.TabIndex = 2;
            this.BtnSave.Text = "&Save";
            this.BtnSave.UseVisualStyleBackColor = true;
            this.BtnSave.Click += new System.EventHandler(this.BtnSave_Click);
            // 
            // CollegeCityForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(12F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1071, 438);
            this.Controls.Add(this.BtnSave);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.LstBoxColleges);
            this.Controls.Add(this.TxtBoxCity);
            this.Controls.Add(this.TxtBoxCollege);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Margin = new System.Windows.Forms.Padding(6);
            this.Name = "CollegeCityForm";
            this.Text = "Jacob Benge College City Search";
            this.Load += new System.EventHandler(this.CollegeCityForm_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox TxtBoxCollege;
        private System.Windows.Forms.TextBox TxtBoxCity;
        private System.Windows.Forms.ListBox LstBoxColleges;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button BtnSave;
    }
}

