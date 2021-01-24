using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace Discussion2
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private void BtnExampleButton_Clicked(object sender, EventArgs e)
        {
            DisplayAlert("Button Clicked", "Congrats you clicked the button", "Close");
        }
    }
}
