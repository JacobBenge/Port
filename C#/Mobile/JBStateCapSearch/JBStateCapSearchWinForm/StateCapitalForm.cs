using System;
using System.Windows.Forms;
using System.IO;

namespace JBStateCapSearchWinForm
{
    public partial class StateCapitalForm : Form
    {
        // put here so it's scoped for the whole class. load and save can access
        string filepath = @"C:\Users\benge\source\repos\JBStateCapSearch\JBStateCapSearchWinForm\bin\Debug\StateCapitals.txt";

        public StateCapitalForm()
        {
            InitializeComponent();
        }

        /// <summary>
        /// Runs on load of the application before the user sees anything
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void StateCapitalForm_Load(object sender, EventArgs e)
        {
            StreamReader inputFile;
            try
            {
                // inputFile = File.OpenText(@"C:\Users\benge\source\repos\JBStateCapSearch\JBStateCapSearchWinForm\bin\Debug\StateCapitals.txt");
                // the filepath above is the default lookup location so I can just use the cmd below
                // inputFile = File.OpenText("StateCapitals.txt");
                inputFile = File.OpenText(filepath);

                // reads every item out of the file
                while (!inputFile.EndOfStream)
                {
                    // adds the item to LstBoxStateCaps
                    LstBoxStateCaps.Items.Add(inputFile.ReadLine());
                }

                // closes the file
                inputFile.Close();
            }
            catch (Exception ex)
            {
                // would show on read error
                MessageBox.Show(ex.Message);
            }
        }

        /// <summary>
        /// Saves the user input to the .txt file
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnSave_Click(object sender, EventArgs e)
        {
            StreamWriter outputFile;

            try
            {
                // obtain user input and format for save
                string statecap = $"{TxtBoxState.Text}, {TxtBoxCapital.Text}";
                // open
                outputFile = File.AppendText(filepath);
                // use
                outputFile.WriteLine(statecap);
                // close
                outputFile.Close();
                // clear results and reset cursor focus to first box
                TxtBoxCapital.Clear();
                TxtBoxState.Clear();
                TxtBoxState.Focus();
                // update lst box
                LstBoxStateCaps.Items.Add(statecap);
                // notify user of successful save
                MessageBox.Show($"{statecap} was successfully saved");
            }
            catch (Exception ex)
            {
                // would show on write error
                MessageBox.Show(ex.Message);
            }
        }
    }
}
