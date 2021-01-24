
namespace JBStateCapSearchWinForm
{
    partial class StateCapitalForm
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
            this.TxtBoxState = new System.Windows.Forms.TextBox();
            this.TxtBoxCapital = new System.Windows.Forms.TextBox();
            this.LstBoxStateCaps = new System.Windows.Forms.ListBox();
            this.BtnSave = new System.Windows.Forms.Button();
            this.label3 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(81, 44);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(62, 25);
            this.label1.TabIndex = 0;
            this.label1.Text = "State\r\n";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(64, 104);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(79, 25);
            this.label2.TabIndex = 0;
            this.label2.Text = "Capital";
            // 
            // TxtBoxState
            // 
            this.TxtBoxState.Location = new System.Drawing.Point(150, 44);
            this.TxtBoxState.Name = "TxtBoxState";
            this.TxtBoxState.Size = new System.Drawing.Size(207, 31);
            this.TxtBoxState.TabIndex = 0;
            // 
            // TxtBoxCapital
            // 
            this.TxtBoxCapital.Location = new System.Drawing.Point(150, 104);
            this.TxtBoxCapital.Name = "TxtBoxCapital";
            this.TxtBoxCapital.Size = new System.Drawing.Size(207, 31);
            this.TxtBoxCapital.TabIndex = 1;
            // 
            // LstBoxStateCaps
            // 
            this.LstBoxStateCaps.FormattingEnabled = true;
            this.LstBoxStateCaps.ItemHeight = 25;
            this.LstBoxStateCaps.Location = new System.Drawing.Point(488, 44);
            this.LstBoxStateCaps.Name = "LstBoxStateCaps";
            this.LstBoxStateCaps.Size = new System.Drawing.Size(347, 279);
            this.LstBoxStateCaps.TabIndex = 2;
            this.LstBoxStateCaps.TabStop = false;
            // 
            // BtnSave
            // 
            this.BtnSave.Location = new System.Drawing.Point(150, 220);
            this.BtnSave.Name = "BtnSave";
            this.BtnSave.Size = new System.Drawing.Size(207, 59);
            this.BtnSave.TabIndex = 2;
            this.BtnSave.Text = "&Save";
            this.BtnSave.UseVisualStyleBackColor = true;
            this.BtnSave.Click += new System.EventHandler(this.BtnSave_Click);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(621, 16);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(94, 25);
            this.label3.TabIndex = 3;
            this.label3.Text = "Preview:";
            // 
            // StateCapitalForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(12F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(876, 372);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.BtnSave);
            this.Controls.Add(this.LstBoxStateCaps);
            this.Controls.Add(this.TxtBoxCapital);
            this.Controls.Add(this.TxtBoxState);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Margin = new System.Windows.Forms.Padding(6);
            this.Name = "StateCapitalForm";
            this.Text = "Jacob\'s State Capital Lookup";
            this.Load += new System.EventHandler(this.StateCapitalForm_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox TxtBoxState;
        private System.Windows.Forms.TextBox TxtBoxCapital;
        private System.Windows.Forms.ListBox LstBoxStateCaps;
        private System.Windows.Forms.Button BtnSave;
        private System.Windows.Forms.Label label3;
    }
}

