from flask import Flask, jsonify, request
from flask_cors import CORS

from config import API_PORT, API_HOST
from domain.commands import lead_commands
from infra.database.unit_of_work import SqlAlchemyUnitOfWork
from services import messagebus, views

app = Flask(__name__)
CORS(app)

@app.route("/api/lead/decline", methods=["POST"])
def decline_lead():
    command = lead_commands.DeclineLeadCommand(request.json["id"])
    unit_of_work = SqlAlchemyUnitOfWork()
    messagebus.handle(command, unit_of_work)
    return '', 204


@app.route("/api/lead/accept", methods=["POST"])
def accept_lead():
    command = lead_commands.AcceptLeadCommand(request.json["id"])
    unit_of_work = SqlAlchemyUnitOfWork()
    messagebus.handle(command, unit_of_work)
    return '', 204


@app.route("/api/view/leads/invited", methods=["GET"])
def view_invited_leads():
    result = views.invited_leads()
    dict_list = list(map(lambda lead: lead.to_dict(), result))
    return jsonify(dict_list), 200

@app.route("/api/view/leads/accepted", methods=["GET"])
def view_accepted_leads():
    result = views.accepted_leads()
    dict_list = list(map(lambda lead: lead.to_dict(), result))
    return jsonify(dict_list), 200


if __name__ == '__main__':
    app.run(debug=True, port=API_PORT,host=API_HOST)
