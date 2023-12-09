package com.example.etape1;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
public class connecter11 extends AppCompatActivity {

    private View textViewInscrire;
    private  EditText  editTextNom, editTextPassword;
    private Button buttonLogin;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.connecter1);

        // Initialiser les éléments de l'interface utilisateur
        editTextNom = findViewById(R.id.editTextNom);
        editTextPassword = findViewById(R.id.editTextPassword);
        buttonLogin = findViewById(R.id.buttonLogin);
        textViewInscrire = findViewById(R.id.inscrire);

        // Ajouter un écouteur de clic au bouton de connexion
        buttonLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Récupérer les valeurs entrées par l'utilisateur
                String numéro = editTextNom.getText().toString();
                String password = editTextPassword.getText().toString();

                // Ici, vous pouvez ajouter la logique pour traiter les données, par exemple, vérifier les informations d'identification, etc.

                // Afficher un message de connexion réussie
                String message = "Connexion réussie pour l'étudiant: " +editTextNom;
                Toast.makeText(connecter11.this, message, Toast.LENGTH_SHORT).show();
                Intent intent = new Intent(connecter11.this, message.class);
                startActivity(intent);
            }

        });

        // Ajouter un écouteur de clic au texte d'inscription
        textViewInscrire.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(connecter11.this,utilisateur1.class);
                startActivity(intent);
                // Ici, vous pouvez ajouter la logique pour rediriger l'utilisateur vers l'écran d'inscription
                Toast.makeText(connecter11.this, "Redirection vers l'écran d'inscription", Toast.LENGTH_SHORT).show();
            }
        });
    }
}