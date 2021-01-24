using System;
using System.Windows.Forms;
using System.IO;

namespace CollegeSearchWinForm
{
    public partial class CollegeCityForm : Form
    {
        // declaring this string here so it is scoped for whole class. Load and Save can access
        string filepath = @"C:\Users\benge\source\repos\CollegeSearch\CollegeSearchWinForm\bin\Debug\CollegeCity.txt";

        public CollegeCityForm()
        {
            InitializeComponent();
        }

        /// <summary>
        /// Runs on load of application. Open, reads, and closes the .txt file
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void CollegeCityForm_Load(object sender, EventArgs e)
        {
            // use streamreader to read
            StreamReader inputFile;
            try
            {
                // open file
                inputFile = File.OpenText(filepath);
                // read every item out of the file
                while (!inputFile.EndOfStream)
                {
                    // adds each item to the LstBox
                    LstBoxColleges.Items.Add(inputFile.ReadLine());
                }
                //close file
                inputFile.Close();
            }
            catch (Exception ex)
            {
                // would show on read error
                MessageBox.Show(ex.Message);
            }
        }

        /// <summary>
        /// Saves the user input to the .txt file when the Save button is clicked
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnSave_Click(object sender, EventArgs e)
        {
            // use streamwriter to write
            StreamWriter outputFile;

            try
            {
                // obtain user input and format for save
                string inputToSave = $"{TxtBoxCollege.Text}, {TxtBoxCity.Text}";
                // open
                outputFile = File.AppendText(filepath);
                // use
                outputFile.WriteLine(inputToSave);
                // close
                outputFile.Close();
                // clear results and reset cursor focus to first box
                TxtBoxCollege.Clear();
                TxtBoxCity.Clear();
                TxtBoxCollege.Focus();
                // update LstBox
                LstBoxColleges.Items.Add(inputToSave);
                // notify user of successful svae
                MessageBox.Show($"{inputToSave} was successfully saved");
            }
            catch (Exception ex)
            {
                // would show on write error
                MessageBox.Show(ex.Message);
            }
        }
    }
}
