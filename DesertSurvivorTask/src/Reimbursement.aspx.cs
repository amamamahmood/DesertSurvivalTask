using System;
using System.Data.SqlClient;

public partial class ThankYou : System.Web.UI.Page
{
    public static string u_id;
    public static string con_string = @"Data Source=intuitivecomputing.database.windows.net,1433;Initial Catalog=test;Persist Security Info=True;User ID=amama;Password=Am@mamahm00d;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

    protected void Page_Load(object sender, EventArgs e)
    {

    }


    protected void Submit_Click(object sender, EventArgs e)
    {
        string val = TB1.Text.Replace("'", "''");
        string f_name = TB2.Text.Replace("'", "''");
        string l_name = TB3.Text.Replace("'", "''");
        u_id = (string)Session["UserID"];
        string sql = $"update radiology set email = '" + val + "' , first_name = '" + f_name + "', last_name = '" + l_name + "' where UID = '" + u_id + "'";

        

        using (SqlConnection con = new SqlConnection(con_string))
        {
            con.Open();
            SqlDataAdapter adapter = new SqlDataAdapter();
            using (SqlCommand cmd = new SqlCommand(sql, con))
            {

                adapter.InsertCommand = cmd;
                adapter.InsertCommand.ExecuteNonQuery();
            }
            con.Close(); // Optional
        }
        Response.Redirect("Finished.aspx");
    }
}